import React, { useState } from "react";
import ViewPager from "@react-native-community/viewpager";
import Feed from "../../components/Feed";
import Record from "../../components/Record";

/*
	==============================================
  Home:
    The Homepage is comprised a Horizontal 
    ViewPager that holds the Feed and the Camera
    preview.
	==============================================
*/

const Home: React.FC = () => {
  const [isFeed, setIsFeed] = useState(true);

  return (
    <ViewPager
      onPageSelected={(event) => {
        setIsFeed(event.nativeEvent.position === 0);
      }}
      style={{ flex: 1, backgroundColor: "#000" }}
      orientation="horizontal"
      scrollEnabled={true}
    >
      <Feed isFeed={isFeed} />
      <Record isFeed={isFeed} />
    </ViewPager>
  );
};

export default Home;
