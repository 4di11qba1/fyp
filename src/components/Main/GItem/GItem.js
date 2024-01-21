import { Typography } from '@mui/material'
import React from 'react'
import GameRating from '../../Game/GameRating'
import './GItem.css'
import { useNavigate } from 'react-router-dom'

function GItem({item}) {
    const nav = useNavigate()
  return (
    <div className="gItem" onClick={() => nav('/store/game')}>
        <img alt="title-image" src={item.img} style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px'}} />
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Typography component="div" variant="h6">
                {item.title}
            </Typography>
            <Typography component="div" variant="p">
                {item.genre}
            </Typography>
            <GameRating ratingValue={'4.8'} precision={0.1} readOnly />
        </div>
    </div>
  )
}

export default GItem