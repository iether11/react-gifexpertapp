import React  from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({ catg }) => {
  
  const {  data:images, loading } = useFetchGifs(catg);
  
 
  return (
    <>
      <h3>{catg}</h3>
      { loading && <p>Loading...</p>}
     {  <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div> }
    </>
  );
};

export default GifGrid;
