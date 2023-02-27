import React, { useState, useEffect } from "react";
import styles from "./ArtList.module.scss";
import ArtDetail from "../ArtDetail/ArtDetail";
import { artService } from "services/http";

const ArtList = () => {
  let [artList, setArtList] = useState<Array<any>>([]);
  let [page, setPage] = useState<number>(1);
  let limit = 10;
  useEffect(() => {
    loadImages();
  }, []);

  function loadImages() {
    artService
      .get(`artworks?page=${page}&limit=${limit}`)
      .then((res) => {
        console.log(res.data.data);
        let list: Array<any> = [];
        res.data.data.map((info: any) => {
          let imgUrl: string = `https://www.artic.edu/iiif/2/${info.image_id}/full/250,250/0/default.jpg`;
          let title: string = info.artist_display;
          let id: string = info.id;

          list.push(ArtDetail({ id, imgUrl, title }));
        });
        console.log(artList);
        setArtList([...artList, ...list]);
        page = page + 1;
        setPage(page);
      })
      .catch(console.error)
      .finally(() => {
        //setLoading(false)
      });
  }

  function loadMoreImages() {
    loadImages();
  }

  return (
    <div>
      <div className={styles.artList}>{artList}</div>
      <button onClick={loadMoreImages}>Load more images</button>
    </div>
  );
};

export default ArtList;
