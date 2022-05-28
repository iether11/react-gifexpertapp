import React, {useState} from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = ({inputValue}) => {
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [Category, setCategory] = useState(["One Punch"]);
  
  return (
    <div>
        
      <h2>GiftExpertApp</h2>
      <hr />
      <AddCategory setCategory={ setCategory } />
      <ol>
        {Category.map((catg) => <GifGrid key={catg} catg = {catg}/>)}
      </ol>
      
    </div>
  );
};

export default GiftExpertApp;
