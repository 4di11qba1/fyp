import React, { useState } from 'react';
import './LandingCards.css';

function LandingCards({ itemData }) {
  const [checkedIndex, setCheckedIndex] = useState(null);

  const handleInputChange = (index) => {
    setCheckedIndex(index === checkedIndex ? null : index);
  };

  return (
    <div>
      <div className="lc-wrapper" style={{ paddingLeft: checkedIndex !== null ? '150px' : '0' }}>
        <div className="lc-container">
          {itemData.map((item, index) => (
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
                style={{ backgroundImage: `url(${item.img})` }}
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