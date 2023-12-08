import { Typography, IconButton } from "@mui/material";
import './TopPicks.css';
import GCard from "./GCard/GCard";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function TopPicks({ heading, itemData, darkMode, lightTheme, darkTheme }) {
  return (
      <div style={{marginTop: '10px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography component="div" variant="h6" fontWeight={'bold'}>
              {heading}
          </Typography>
          <IconButton>
            <ArrowForwardIcon />
          </IconButton>
        </div>
        <div className="top-picks">
            {itemData.map((item) => (
                
                <>
                  {/* <img
                    className="top-picks-image"
                    key={item.title}
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                  />

                  <h4>{item.title}</h4>
                  <Button variant="contained">{item.price}</Button> */}

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