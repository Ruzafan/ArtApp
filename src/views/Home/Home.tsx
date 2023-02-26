import React, { useState } from "react";
import { artService } from "services/http";
import styles from "./Home.module.scss";
import ArtDetail from "../../component/ArtDetail/ArtDetail";
const Home = () => {
  // let [artTitle, setArtTitle] = useState<string>("");
  //let [imageUrl, setImageUrl] = useState<string>("");
  let [artList, setArtList] = useState<Array<any>>();
  /*artService
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
    });*/
  function loadImages() {
    artService
      .get("artworks")
      .then((res) => {
        console.log(res.data.data);
        let list: Array<any> = [];
        res.data.data.map((info: any) => {
          let imgUrl: string = `https://www.artic.edu/iiif/2/${info.image_id}/full/250,250/0/default.jpg`;
          let title: string = info.artist_display;
          let artDetail = ArtDetail({ imgUrl, title });
          console.log(artDetail);
          list.push(artDetail);
        });
        setArtList(list);
      })
      .catch(console.error)
      .finally(() => {
        //setLoading(false)
      });
  }

  return (
    <>
      <div className={styles.Home}>Home</div>
      <button onClick={loadImages}>Load images</button>
      <div className={styles.artList}>{artList}</div>
    </>
  );
};
//"artworks?page=2&limit=100"
//<ArtDetail imgUrl={imageUrl} title={artTitle} />

export default Home;
