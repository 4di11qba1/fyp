import React, { useState } from 'react';
import './LandingCards.css';

function LandingCards({ itemData, windowWidth }) {
  const [checkedIndex, setCheckedIndex] = useState(windowWidth > 700 ? 2 : 0);

  const handleInputChange = (index) => {
    setCheckedIndex(index === checkedIndex ? null : index);
  };

  return (
    <div>
      <div className="lc-wrapper">
        <div className="lc-container">
          {itemData.slice(0, 5).map((item, index) => (
            <React.Fragment key={index}>
              <input
                className="lc-input"
                type="radio"
                name="slide"
                id={`c${index + 1}`}
                checked={index === checkedIndex}
                onChange={() => handleInputChange(index)}
              />
              <label
                className="lc-label lc-card"
                htmlFor={`c${index + 1}`}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: 'center'
                }}
              >
                <div className="lc-row">
                  <div className="lc-icon">{item.title.slice(0, 1)}</div>
                  <div className="lc-description">
                    <h4>{item.title}</h4>
                    <p>{item.genre}</p>
                  </div>
                </div>
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingCards;
