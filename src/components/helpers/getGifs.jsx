export const getGifts = async ( catg) => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(catg)  }&limit=10&api_key=vHaGhgZcQWW1YOy2aShV0SrFVdaENxeo`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    return gifs;
  };