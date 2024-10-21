import React from "react";
import "./App.css";
import { CiStar } from "react-icons/ci";

const App = () => {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <img
            src="https://static.nike.com/a/images/t_default/327c465f-3aeb-46fd-9c81-f4b8f5f9df92/WMNS+AIR+FORCE+1+%2707+NN.png"
            alt=""
          />
          <h1>Nike X OFF-White</h1>
          <p>The 10:Air Jordan 1 off-white-Chicago</p>
          <h2>$999</h2>
          <div className="button">
            <button>Buy now</button>
            <div className="icon">
              <CiStar />
            </div>
          </div>
        </div>
        <div className="card1">
          <img
            src="https://static.nike.com/a/images/t_default/48002446-22e2-44fc-abcc-e8de39d6d87d/AIR+FORCE+1+LOW+RETRO+QS.png"
            alt=""
          />
          <h1>Nike X OFF-White</h1>
          <p>
            The 10:Air Jordan 1 Retro High "OFF-White - UNC" <br /> sneakers{" "}
          </p>
          <h2>$1599</h2>
          <div className="button">
            <button>Buy now</button>
            <div className="icon">
              <CiStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
