import GameAbout from './GameAbout'
import GameHead from './GameHead'
import GamePrice from './GamePrice'
import Popular from '../Popular'
import GameRequirements from './GameRequirements'
import React from 'react'
import { Divider, Typography } from '@mui/material'

function Game({windowWidth}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', padding: '15px'}}>
        <GameHead windowWidth={windowWidth} />
        <div style={{display: 'flex', gap: '15px'}}>
            <GameAbout windowWidth={windowWidth} />
            <GamePrice windowWidth={windowWidth} />
        </div>
        <GameRequirements windowWidth={windowWidth} />
        <Divider flexItem />
        <Typography component="div" variant="h4" textAlign={'center'}>
            More Like This
        </Typography>
        <Divider flexItem />
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center', justifyContent: 'center'}}>
            {itemData.map((item, index) => {
                return <Popular key={index} item={item} />
            })}
        </div>
    </div>
  )
}

export default Game

const itemData = [
    {
      img: '/img/games/honkai.png',
      title: 'Honkai Impact Star Rail',
      desc: 'Honkai: Star Rail is a role-playing gacha video game developed by miHoYo, published by miHoYo in mainland China and worldwide by Cognosphere, d/b/a HoYoverse.',
      price: '$44.99',
      genre: 'Open World RPG',
      rating: '4.1'
    },
    {
      img: '/img/games/batman.png',
      title: 'Batman Arkham Knight',
      desc: 'Batman: Arkham Knight is a 2015 action-adventure game developed by Rocksteady Studios and published by Warner Bros. Interactive Entertainment.',
      price: '$65.99',
      genre: 'Open World RPG',
      rating: '4.9'
    },
    {
      img: '/img/games/codmw3.png',
      title: 'Call of Duty Modern Warfare 3',
      desc: 'A sequel to 2022 Modern Warfare II, serving as the third entry in the rebooted Modern Warfare sub-series and the twentieth installment in the overall Call of Duty series.',
      price: '$69.99',
      genre: 'First Person Shooter',
      rating: '4.5'
    }
];