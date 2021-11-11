import { useCallback, useEffect, useState } from 'react';
import Config from './config';

export const useRosConnection = () => {
  const [connected, setConnected] = useState(false);
  const [ros] = useState(new window.ROSLIB.Ros());

  const initConnection = useCallback(() => {
    const establishConnection = async () => {
      try {
        console.log('Connecting...');
        await ros.connect(
          `ws://${Config.ROS2_WEB_BRIDGE_SERVER_IP}:${Config.ROS2_WEB_BRIDGE_SERVER_PORT}`
        );
      } catch (error) {
        console.log('Connection problem:');
        console.log(error);
      }
    };

    ros.on('connection', () => {
      console.log('Connection established');
      setConnected(true);
    });

    ros.on('close', () => {
      console.log('Connection closed');
      setConnected(false);

      setTimeout(() => {
        establishConnection();
      }, Config.RECONNECTION_TIMEOUT);
    });

    establishConnection();
  }, [ros]);

  useEffect(() => {
    initConnection();
    return () => {
      console.log('Connection closed');
    };
  }, [initConnection]);

  return [ros, connected];
};

export const useCmdVelTopic = (ros, topic) => {
  return new window.ROSLIB.Topic({
    ros: ros,
    name: topic !== '' ? topic : Config.CMD_VEL_TOPIC,
    messageType: 'geometry_msgs/msg/Twist',
  });
};
