import React from "react";
import Cdeal from "./Cdeal";

const Content = ({ deals }) => {

  return (
    <>
      <div className="c_content container">
        {deals.map((deal) => (
          <Cdeal key={deal.id} deal={deal} />
        ))}
       
      </div>
    </>
  );
};

export default Content;
