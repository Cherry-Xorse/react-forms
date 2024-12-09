import { useState } from "react";
// import { Form } from "./CardList";
// import { ChefClaude } from "./chefClaude";

import padData from "./pads";
import Pad from "./Pad";

function App({ darkmode }) {
  const [pads, setPads] = useState(padData);

  const styles = {
    backgroundColor: darkmode =  true? "black" : "rose white",
  };
  const buttonElements = pads.map((pad) => (
      <Pad key={pad.id} color={pad.color}/>
      
     
      
    
  ));

  return (
    <>
      {/* <CardList/> */}
      {/* <Form /> */}
      {/* <ChefClaude /> */}
      <div style={styles } className="border-s-orange-50 flex  gap-4 p-10 ">
        {buttonElements}
      </div>
    </>
  );
}

export default App;
