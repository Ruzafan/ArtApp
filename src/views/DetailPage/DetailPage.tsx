import React, { useState, useEffect } from "react";
import styles from "./DetailPage.module.scss";
import { artService } from "services/http";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  let { id } = useParams<string>();
  let [imgUrl, setImageUrl] = useState<string>();
  let [title, setTitle] = useState<string>();
  useEffect(() => {
    loadImage();
  }, []);

  function loadImage() {
    artService
      .get(`artworks/${id}`)
      .then((res) => {
        console.log(res.data.data);
        let info = res.data.data;
        let imgUrl: string = `https://www.artic.edu/iiif/2/${info.image_id}/full/250,250/0/default.jpg`;
        let title: string = info.artist_display;
        id = id ?? "";
        setImageUrl(imgUrl);
        setTitle(title);
      })
      .catch(console.error)
      .finally(() => {
        //setLoading(false)
      });
  }
  return (
    <>
      <div className={styles.header}>Detail</div>
      <div className={styles.detailPage}>
        <div className={styles.container}>
          <img src={imgUrl} alt="piece of art" className={styles.image} />
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
