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
