import { useState, useEffect } from "react";
import { getGifts } from "../components/helpers/getGifs";

export const useFetchGifs = (catg) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifts(catg).then((imgs) => {
      
        setState({
          data: imgs,
          loading: false,
        });
     
    });
  }, [catg]);

  return state; //{}
};
