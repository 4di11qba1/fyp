import { Typography } from "@mui/material";
import './TopPicks.css';

const itemData = [
    {
      img: '/img/games/honkai.png',
      title: 'Honkai Impact Star Rail',
    },
    {
      img: '/img/games/batman.png',
      title: 'Batman Arkham Knight',
    },
    {
      img: '/img/games/codmw3.png',
      title: 'Call of Duty Modern Warfare 3',
    },
    {
      img: '/img/games/crew.png',
      title: 'The Crew Motorfest',
    },
    {
      img: '/img/games/cs2.png',
      title: 'Counter Strike 2',
    },
    {
      img: '/img/games/ffxv.png',
      title: 'Final Fantasy XV',
    },
    {
      img: '/img/games/ffxvi.png',
      title: 'Final Fantasy XVI',
    },
    {
      img: '/img/games/gta5.png',
      title: 'Grand Theft Auto V',
    },
  ];

function TopPicks({heading}) {
  return (
      <div style={{marginTop: '10px'}}>
        <Typography component="div" variant="h6" fontWeight={'bold'}>
            {heading}
        </Typography>
        <div className="top-picks">
            {itemData.map((item) => (
                
                <img
                    src={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                    style={{borderRadius: '15px'}}
                />

            ))}
        </div>
      </div>
  )
}
export default TopPicks;