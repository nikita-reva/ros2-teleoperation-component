import React, { useEffect, useState } from 'react';
import * as Three from 'three';
import styled from 'styled-components';

import Config from '../ros/config';

const RobotStateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 180px 50px;
  grid-template-rows: auto;
`;

const Caption = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.4px;
  grid-area: 'caption';
  grid-column: 1/2;
  margin-top: 8px;
  margin-bottom: 2px;
`;

const Property = styled.div`
  grid-column: 1/1;
  justify-self: start;
`;

const Value = styled.div`
  grid-column: 2/2;
  justify-self: end;
`;

const RobotState = ({ ros, connected }) => {
  const [robotPose, setRobotPose] = useState({
    x: 0,
    y: 0,
    orientation: 0,
  });
  const [robotVelocities, setRobotVelocities] = useState({
    linearVelocity: 0,
    angularVelocity: 0,
  });

  useEffect(() => {
    let poseSubscriber = null;
    let velocitySubscriber = null;

    const getOrientationFromQuaternion = (rosOrientationQuaternion) => {
      const q = new Three.Quaternion(
        rosOrientationQuaternion.x,
        rosOrientationQuaternion.y,
        rosOrientationQuaternion.z,
        rosOrientationQuaternion.w
      );
      const rpy = new Three.Euler().setFromQuaternion(q);

      return rpy['_z'] * (180 / Math.PI);
    };

    if (connected) {
      poseSubscriber = new window.ROSLIB.Topic({
        ros: ros,
        name: Config.POSE_TOPIC,
        messageType: 'geometry_msgs/msg/PoseWithCovarianceStamped',
      });
      velocitySubscriber = new window.ROSLIB.Topic({
        ros: ros,
        name: Config.ODOM_TOPIC,
        messageType: 'nav_msgs/msg/Odometry',
      });

      poseSubscriber.subscribe((message) =>
        setRobotPose({
          x: message.pose.pose.position.x,
          y: message.pose.pose.position.y,
          orientation: getOrientationFromQuaternion(
            message.pose.pose.orientation
          ),
        })
      );
      velocitySubscriber.subscribe((message) =>
        setRobotVelocities({
          linearVelocity: message.twist.twist.linear.x,
          angularVelocity: message.twist.twist.angular.z,
        })
      );

      return () => {
        poseSubscriber.unsubscribe();
        velocitySubscriber.unsubscribe();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected, ros]);

  return (
    <RobotStateContainer>
      <GridContainer>
        <Caption>Position</Caption>
        <Property>x:</Property>
        <Value>{robotPose.x.toFixed(2)}</Value>
        <Property>y:</Property>
        <Value>{robotPose.y.toFixed(2)}</Value>
        <Property>orientation:</Property>
        <Value>{robotPose.orientation.toFixed(2)}</Value>
      </GridContainer>
      <GridContainer>
        <Caption>Velocites</Caption>
        <Property>Linear Velocity:</Property>
        <Value>{robotVelocities.linearVelocity.toFixed(2)}</Value>
        <Property>Angular Velocity:</Property>
        <Value>{robotVelocities.angularVelocity.toFixed(2)}</Value>
      </GridContainer>
    </RobotStateContainer>
  );
};

export default RobotState;
