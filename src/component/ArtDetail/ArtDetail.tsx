import React from "react";
import styles from "./ArtDetail.module.scss";

interface IArtDetailModel {
  imgUrl: string;
  title: string;
}

const ArtDetail = ({ imgUrl, title }: IArtDetailModel) => {
  return (
    <div className={styles.artDetail}>
      <div>
        <p>{title}</p>
        <img src={imgUrl} alt="piece of art" />
      </div>
    </div>
  );
};

export default ArtDetail;
