import {React, useState, Fragment} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
const App = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const makeModalVisible =()=>{

    setIsModalVisible(true);

  } 

  const makeModalNotVisible=()=>{
    setIsModalVisible(false);

  }
  return (
    <Fragment>
      <Header onTapOfButton={makeModalVisible}/>
      {isModalVisible && <Cart onClose={makeModalNotVisible}/>}
      <main> <Meals /></main>
     
    </Fragment>
  );
};

export default App;
