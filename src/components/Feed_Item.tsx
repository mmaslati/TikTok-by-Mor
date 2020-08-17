import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

import FileHandler from "../modules/fileHandler";

import {
  Container,
  Details,
  Actions,
  User,
  BoxAction,
} from "./Feed_Item_style_sheet";

import { Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

/*
	==============================================
  Feed_Item:
    This component is a Feed Item. Creating it
    from the Feed component. It also handles 
    the Favorite Videos (by url).
	==============================================
*/

const Feed_Item: React.FC<{ play: boolean; item: any }> = ({ play, item }) => {
  const [isFavorite, setisFavorite] = useState(false);

  function TuggleLikedVideo(url: string) {
    setisFavorite(!isFavorite);
    FileHandler.ToggleFavoriteVideo(url);
  }

  function setFavoriteColor(isIt: boolean) {
    if (isIt) {
      return "#ff0000";
    } else {
      return "#ffffff";
    }
  }

  useEffect(() => {
    FileHandler.isVideoFavorite(item.videoURL, (isSavedVideo) => {
      setisFavorite(isSavedVideo);
    });
  }, []);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <LinearGradient
        colors={["rgba(0,0,0,.3)", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "70%",
        }}
      />
      <Container>
        <Video
          source={{
            uri: item.videoURL,
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={play}
          isLooping
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Container>
      <Details>
        <User>{item.userName}</User>
      </Details>
      <Actions>
        <BoxAction onPress={() => TuggleLikedVideo(item.videoURL)}>
          <AntDesign
            style={{ alignSelf: "center" }}
            name="heart"
            size={35}
            color={setFavoriteColor(isFavorite)}
          />
        </BoxAction>
      </Actions>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,.4)"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "50%",
        }}
      />
    </View>
  );
};

export default Feed_Item;
