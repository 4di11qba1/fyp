import { Typography, IconButton } from "@mui/material";
import './TopPicks.css';
import GCard from "../GCard/GCard";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function TopPicks({ heading, darkMode, lightTheme, darkTheme }) {
  return (
      <div style={{marginTop: '10px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography component="div" variant="h6" fontWeight={'bold'} sx={{marginLeft: '20px'}}>
              {heading}
          </Typography>
          <IconButton>
            <ArrowForwardIcon />
          </IconButton>
        </div>
        <div className="top-picks">
            {itemData.map((item) => (
                
                <>
                  <GCard 
                    key={item.title} 
                    item={item}
                    lightTheme={lightTheme} 
                    darkTheme={darkTheme} 
                    darkMode={darkMode} />
                </>

            ))}
        </div>
      </div>
  )
}
export default TopPicks;

const itemData = [
  {
    img: '/img/games/batman-vertical.jpg',
    title: 'Batman Arkham Knight',
    desc: 'Batman: Arkham Knight is a 2015 action-adventure game developed by Rocksteady Studios and published by Warner Bros. Interactive Entertainment.',
    price: '$69.99'
  },
  {
    img: '/img/games/gtav-vertical.jpg',
    title: 'Grand Theft Auto V',
    desc: 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series.',
    price: '$69.99'
  },
  {
    img: '/img/games/mirage-vertical.jpg',
    title: 'Assassins Creed Mirage',
    desc: 'Counter-Strike 2 is a 2023 multiplayer tactical first-person shooter game developed and published by Valve. It is the fifth main installment of the Counter-Strike series.',
    price: '$69.99'
  },
  {
    img: '/img/games/nfs-vertical.jpg',
    title: 'Need for Speed Heat',
    desc: 'The sequel to 2018 The Crew 2 and the third game in The Crew series, and was released on September 14, 2023.',
    price: '$69.99'
  },
  {
    img: '/img/games/cod-vertical.jpg',
    title: 'Call of Duty Modern Warfare 2',
    desc: 'A sequel to 2022 Modern Warfare II, serving as the third entry in the rebooted Modern Warfare sub-series and the twentieth installment in the overall Call of Duty series.',
    price: '$69.99'
  },
]