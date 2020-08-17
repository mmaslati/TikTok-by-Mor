import React, { useState } from "react";
import ViewPager from "@react-native-community/viewpager";
import Feed_Item from "./Feed_Item";

/*
	==============================================
  Feed:
    This component is a vertical ViewPager that
    holds the Video Items. Each Video Item is
    a full screen page.
    * Currently has 3 demo Video Items, with the 
    option of adding an infinite amount of new
    ones.
	==============================================
*/

const Feed: React.FC<{ isFeed: boolean }> = ({ isFeed }) => {
  const [selectedPage, setSelectedPage] = useState(0);

  const demo1 = {
    userName: "MyKilla28",
    videoURL:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  };

  const demo2 = {
    userName: "Gina_G",
    videoURL:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  };

  const demo3 = {
    userName: "LittleFire_STARTER",
    videoURL:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  };

  return (
    <ViewPager
      onPageSelected={(event) => {
        setSelectedPage(event.nativeEvent.position);
      }}
      style={{ flex: 1, backgroundColor: "#FFFF" }}
      orientation="vertical"
      scrollEnabled={true}
    >
      <Feed_Item play={selectedPage === 0} item={demo1} />
      <Feed_Item play={selectedPage === 1} item={demo2} />
      <Feed_Item play={selectedPage === 2} item={demo3} />
    </ViewPager>
  );
};

export default Feed;
