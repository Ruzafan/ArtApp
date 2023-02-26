import React from "react";
import styles from "./ArtDetail.module.scss";

interface IArtDetailModel {
  imgUrl: string;
  title: string;
}

const ArtDetail = ({ imgUrl, title }: IArtDetailModel) => {
  return (
    <div className={styles.artDetail}>
      <div className={styles.container}>
        <img src={imgUrl} alt="piece of art" className={styles.image} />
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default ArtDetail;

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
