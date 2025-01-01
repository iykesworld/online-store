import React from "react";
import "./Home.css";
import featuresCowgirlHat from "../assets/feature-cowgirlhatt.svg";
import featuresCap from "../assets/feature-capp.svg";
import featuresshoe from "../assets/feature-picss.svg";
import featuresmain from "../assets/featureimagemain.png";
import { Link } from "react-router-dom";


const Features = () => {
  
  return (
    <div className="features">
      <div className="features-main-image">
        <img src={featuresmain} alt="image" />
      </div>
      <div className="feature-grid">
        <Link
          to= "/shop"
          className="features-grid-content grid-one"
        >
          <img src={featuresCowgirlHat} alt="cowgirl hat" />
          <h4>Cowgirl Hat</h4>
        </Link>
        <Link
          to= "/shop"
          className="features-grid-content grid-two"
        >
          <img src={featuresCap} alt="cap" />
          <h4>Cap</h4>
        </Link>
        <div className="features-grid-content grid-three">
          <div className="shoe-grid-flex">
            <span>Modern Design</span>
            <h4>Lofty Nike Shoe</h4>
              <Link to="/shop" className="feature-link-button">
                Browse Collections
              </Link>
          </div>
          <div className="image-display">
          <img src={featuresshoe} alt="shoe" />
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Features;
