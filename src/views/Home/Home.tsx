import React, { useState } from "react";
import { artService } from "services/http";
import styles from "./Home.module.scss";
import ArtDetail from "../../component/ArtDetail/ArtDetail";
const Home = () => {
  let [artTitle, setArtTitle] = useState<string>("");
  let [imageUrl, setImageUrl] = useState<string>("");
  artService
    .get("artworks/129884")
    .then((res) => {
      console.log(res);
      console.log(res.data);
      setArtTitle(res.data.data.artist_display);
      setImageUrl(
        `https://www.artic.edu/iiif/2/${res.data.data.image_id}/full/250,/0/default.jpg`
      );
    })
    .catch(console.error)
    .finally(() => {
      //setLoading(false)
    });

  return (
    <>
      <div className={styles.Home}>Home</div>
      <div className={styles.artList}>
        <ArtDetail imgUrl={imageUrl} title={artTitle} />
      </div>
    </>
  );
};
//"artworks?page=2&limit=100"
export default Home;
