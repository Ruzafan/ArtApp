import React, { useState } from "react";
import styles from "./ArtList.module.scss";
import ArtDetail from "../ArtDetail/ArtDetail";
import { artService } from "services/http";

const ArtList = () => {
  let [artList, setArtList] = useState<Array<any>>();

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
    <div>
      <div className={styles.Home}>Home</div>
      <button onClick={loadImages}>Load images</button>
      <div className={styles.artList}>{artList}</div>
    </div>
  );
};

export default ArtList;
