import * as FileSystem from "expo-file-system";

const favoritesFileName = "favoriteVideos4.txt";
var favoritesArray = {};

/*
	==============================================
  fileHandler:
    This module doesn't handle ALL future 
    FileSystem requirements, but currently just
    handles the Favorite Videos items.
    * In the future, this should be split to:
      - ALL FileSystem requirements.
      - Favorite-Videos functions.
	==============================================
*/

const ReadFromFile = async (callBack: Function) => {
  var path = FileSystem.documentDirectory + "/" + favoritesFileName;

  await FileSystem.readAsStringAsync(path)
    .then((result: string) => {
      console.log("File READ:" + result);
      favoritesArray = JSON.parse(result);
      callBack();
    })
    .catch(() => {
      console.log("File Does not exists!");

      callBack();
    });
};

const WriteToFile = () => {
  console.log("WORK!");

  var path = FileSystem.documentDirectory + "/" + favoritesFileName;

  console.log(favoritesArray.toString());

  FileSystem.writeAsStringAsync(path, JSON.stringify(favoritesArray))
    .then((success) => {
      console.log("FILE WRITTEN!");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const isVideoFavorite = async (
  favoriteVideoURL: string,
  callback: Function
) => {
  const isVideoInFile = () => {
    if (favoritesArray[favoriteVideoURL]) {
      callback(true);
    } else {
      callback(false);
    }
  };

  ReadFromFile(isVideoInFile);
};

const ToggleFavoriteVideo = async (favoriteVideoURL: string) => {
  const isVideoInFile = () => {
    if (favoritesArray[favoriteVideoURL]) {
      console.log("REMOVING:" + favoriteVideoURL);
      favoritesArray[favoriteVideoURL] = undefined;
    } else {
      console.log("ADDING:" + favoriteVideoURL);
      favoritesArray[favoriteVideoURL] = true;
    }
    WriteToFile();
  };

  console.log("favoritesArray1:" + favoritesArray);
  ReadFromFile(isVideoInFile);
};

export default {
  WriteToFile,
  ReadFromFile,
  ToggleFavoriteVideo,
  isVideoFavorite,
};
