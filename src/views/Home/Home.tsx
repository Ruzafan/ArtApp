import ArtList from "component/ArtList/ArtList";
import React, { useState } from "react";
import styles from "./Home.module.scss";
const Home = () => {
  // let [artTitle, setArtTitle] = useState<string>("");
  //let [imageUrl, setImageUrl] = useState<string>("");

  return (
    <>
      <ArtList />
    </>
  );
};

export default Home;
