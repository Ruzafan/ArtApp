import React from "react";
import styles from "./ArtDetail.module.scss";
import { useNavigate } from "react-router-dom";
import ArtInfo from "models/ArtInfo";


const ArtDetail = ({ id, imgUrl, title }: ArtInfo) => {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/detail?id=" + id);
  return (
    <div className={styles.artDetail} onClick={handleOnClick}>
      <div className={styles.container}>
        <img src={imgUrl} alt="piece of art" className={styles.image} />
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default ArtDetail;