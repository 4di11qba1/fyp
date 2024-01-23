import React from 'react'
import './FlipCard.css'
import { useNavigate } from 'react-router-dom'

function FlipCard({item}) {
    const nav = useNavigate();
  return (
    <div>
        <div className="flip-card-container" style={{'--hue': '220'}}>
        <div className="flip-card">

            <div className="card-front">
            <figure>
                <div className="img-bg"></div>
                <img src={item.img} alt={item.title} />
                <figcaption>{item.title}</figcaption>
            </figure>

            <ul>
                <li>{item.genre}</li>
                <li>{item.rating}</li>
            </ul>
            </div>

            <div className="card-back">
            <figure>
                <div claclassNamess="img-bg"></div>
                <img src={item.img} alt={item.title} />
            </figure>

            <button onClick={() => nav('/game')}>See More</button>

            <div className="design-container">
                <span className="design design--1"></span>
                <span className="design design--2"></span>
                <span className="design design--3"></span>
                <span className="design design--4"></span>
                <span className="design design--5"></span>
                <span className="design design--6"></span>
                <span className="design design--7"></span>
                <span className="design design--8"></span>
            </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default FlipCard