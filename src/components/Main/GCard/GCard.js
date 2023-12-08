// import React from 'react';
// import './GCard.css';
// import { Button } from '@mui/material';

// function GCard({ darkTheme, lightTheme, darkMode, item }) {
//     const style = {
//         '--title': `"${item.title}"`,
//         '--bgInner': darkMode ? darkTheme.palette.background.default : lightTheme.palette.background.default
//     };
//   return (
//     <div className="gc-container" style={style}>
//         <div className="gc-card" style={style}>
//             <div className="gc-imgBx">
//                 <img src={item.img} alt={item.title} />
//             </div>

//             <div className="gc-contentBx">

//                 <h2>{item.title}</h2>

//                 <div className="gc-size">
//                     <h3>{item.genre}</h3>
//                 </div>

//                 {/* <div className="gc-color">

//                     <h3>Color :</h3>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </div> */}
//                 <div className='gc-btn'>
//                   <Button variant='contained'>{item.price}</Button>
//                 </div>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default GCard

import React from 'react';
import './GCard.css';
import { lightTheme, darkTheme } from '../../Theme.js';

function GCard({item, darkMode}) {
    const style = {
        '--bgCardGame': darkMode ? darkTheme.palette.background.paper : lightTheme.palette.background.paper,
        '--txtCardGame': darkMode ? darkTheme.palette.primary.text : lightTheme.palette.primary.text 
    }
  return (
    <div className="container page-wrapper" style={style}>
        <div className="page-inner">
            <div className="row">
                <div className="el-wrapper">
                    <div className="box-up">
                    <img className="gc-img" src={item.img} alt={item.title} />
                    <div className="gc-img-info">
                        <div className="info-inner">
                        <span className="p-name">{item.title}</span>
                        <span className="p-company">{item.genre}</span>
                        </div>
                        <div className="a-size">{item.desc}</div>
                    </div>
                    </div>

                    <div className="box-down">
                    <div className="h-bg">
                        <div className="h-bg-inner"></div>
                    </div>

                    <a className="gc-cart" href="www.google.com">
                        <span className="gc-price">{item.price}</span>
                        <span className="gc-add-to-cart">
                        <span className="gc-txt">See More</span>
                        </span>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GCard