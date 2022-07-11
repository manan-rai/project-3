import React from "react";
import DealsNav from "./DealsNav";
import "./BestDeals.css";
import { Route, Switch } from "react-router-dom";
import DealsContent from "./dealsContent/DealsContent";


const BestDeals = () => {
  return (
    <>
      <div className="bestdeals pb-5">
        <DealsNav />
        <DealsContent />
        <Switch>
          <Route  exact path="/bestdeals/"component={DealsContent} />
          <Route exact path="/tvandvideo" component={DealsContent} />
          <Route exact path="/cameras" component={DealsContent} />
          <Route exact path="/audio" component={DealsContent} />
          <Route exact path="/smartphones" component={DealsContent} />
          <Route exact path="/gps" component={DealsContent} />
          <Route exact path="/computer" component={DealsContent} />
          <Route exact path="/portableaudio" component={DealsContent} />
          <Route exact path="/accessories" component={DealsContent} />
        </Switch>
        
      </div>
    </>
  );
};

export default BestDeals;
