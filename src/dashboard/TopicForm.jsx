import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { TextInput } from './TextInput';

const TopicFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
`;

const TopicLabel = styled.div`
  font-size: 1rem;
  margin-right: 24px;
  color: var(--primary-color-light);
  padding-top: 2px;
  margin-bottom: 4px;
  letter-spacing: 0.2px;
`;

const TopicFormElement = styled(Form)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const TopicFieldContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const TopicForm = ({ setTopic }) => {
  const [defaultTopic, setDefaultTopic] = useState(
    localStorage.getItem('topic') || ''
  );

  return (
    <div>
      <Formik
        initialValues={{ topic: defaultTopic }}
        validationSchema={Yup.object({
          topic: Yup.string(),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            setTopic(values.topic);
            localStorage.setItem('topic', values.topic);
            setDefaultTopic(values.topic);
            resetForm({
              values: {
                topic: values.topic,
              },
            });
          } catch (error) {
            console.log(error.message);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, handleSubmit, isValid }) => (
          <TopicFormContainer>
            <TopicLabel>Topic:</TopicLabel>
            <TopicFormElement
              autoComplete="none"
              onKeyPress={(e) => {
                if (e.key === 'Enter' && e.shiftKey) {
                  return;
                }
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  isValid && handleSubmit();
                }
              }}
            >
              <TopicFieldContainer>
                <TextInput
                  autoComplete="off"
                  bigFont
                  name="topic"
                  type="text"
                  placeholder="Topic"
                />
              </TopicFieldContainer>
            </TopicFormElement>
          </TopicFormContainer>
        )}
      </Formik>
    </div>
  );
};

export default TopicForm;
