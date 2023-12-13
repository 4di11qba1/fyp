import React, { useEffect } from 'react';
import './Slider.css';

function Slider() {
    useEffect(() => {
        document.getElementById('next').onclick = function(){
            let lists = document.querySelectorAll('.slider-item');
            document.getElementById('slide').appendChild(lists[0]);
        }
        document.getElementById('prev').onclick = function(){
            let lists = document.querySelectorAll('.slider-item');
            document.getElementById('slide').prepend(lists[lists.length - 1]);
        }        
    }, [])
  return (
    <div className="parent">
        <div className="slider-container">
            <div id="slide">
                <div className="slider-item" style={{backgroundImage: 'url(/img/games/batman.png)'}}>
                    <div className="slider-content">
                        <div className="slider-name">LUNDEV</div>
                        <div className="slider-des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div className="slider-item" style={{backgroundImage: 'url(/img/games/gta5.png)'}}>
                    <div className="slider-content">
                        <div className="slider-name">LUNDEV</div>
                        <div className="slider-des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div className="slider-item" style={{backgroundImage: 'url(/img/games/nfs.png)'}}>
                    <div className="slider-content">
                        <div className="slider-name">LUNDEV</div>
                        <div className="slider-des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div className="slider-item" style={{backgroundImage: 'url(/img/games/cod.png)'}}>
                    <div className="slider-content">
                        <div className="slider-name">LUNDEV</div>
                        <div className="slider-des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div className="slider-item" style={{backgroundImage: 'url(/img/games/honkai.png)'}}>
                    <div className="slider-content">
                        <div className="slider-name">LUNDEV</div>
                        <div className="slider-des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div className="slider-item" style={{backgroundImage: 'url(/img/games/ffxv.png)'}}>
                    <div className="slider-content">
                        <div className="slider-name">LUNDEV</div>
                        <div className="slider-des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
            </div>
            <div class="slider-buttons">
                <button id="prev"><i class="fa-solid fa-angle-left"></i></button>
                <button id="next"><i class="fa-solid fa-angle-right"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Slider