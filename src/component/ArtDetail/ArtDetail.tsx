import React from "react";
import styles from "./ArtDetail.module.scss";
import { useNavigate } from "react-router-dom";

interface IArtDetailModel {
  id: string;
  imgUrl: string;
  title: string;
}

const ArtDetail = ({ id, imgUrl, title }: IArtDetailModel) => {
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
