import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { View, Text, StatusBar } from "react-native";

/*
	==============================================
  Record:
    This component hold the Camera preview that 
    later will handle recording new videos.
	==============================================
*/

const Record: React.FC<{ isFeed: boolean }> = ({ isFeed }) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    async function permission(): Promise<void> {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
      StatusBar.setHidden(true);
    }
    permission();
  }, []);

  if (isFeed) {
    return <View />;
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return <Camera type={Camera.Constants.Type.back}></Camera>;
};

export default Record;
