import { Typography } from "@mui/material";
import './TopPicks.css';
import Divider from '@mui/material/Divider';

function TopPicks({ heading, itemData }) {
  return (
      <div style={{marginTop: '10px'}}>
        <Typography component="div" variant="p" fontWeight={'bold'}>
            {heading}
        </Typography>
        <div className="top-picks">
            {itemData.map((item) => (
                
                <>
                  <img
                    className="top-picks-image"
                    key={item.title}
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                  />

                  <Divider orientation="vertical" />
                </>

            ))}
        </div>
      </div>
  )
}
export default TopPicks;