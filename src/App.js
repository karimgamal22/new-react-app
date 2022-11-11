import React, { useState } from "react";
import { Container } from "react-bootstrap";

import Category from "./componet/Category";
import Header from "./componet/Header";
import Itemslist from "./componet/Itemslist";
import Navbars from "./componet/Navbars";



// data
import { items } from "./Data";

const App = () => {

  // get all category
  const allcategory = ['الكل',...new Set(items.map((i) => i.category))]







  const [itemsData, setItemsData] = useState(items);

  // fillter bu category
  const fillterbycategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }



  };
// filter  by  serach form by title
  const filterbyserach = (word) => {

    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);

    }
  }



  return (
    <div>
      <Container fluid>
        <Navbars  filterbyserach={filterbyserach}/>
        <Header />
        <Category fillterbycategory={fillterbycategory}  allcategory={allcategory}/>
        <Itemslist itemsData={itemsData} />
     
      </Container>
    </div>
  );
};

export default App;
