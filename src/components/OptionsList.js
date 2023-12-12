import * as React from 'react';
import Card from '@mui/material/Card';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Checkbox } from '@mui/material';

export default function OptionsList({ genreList }) {
  return (
    <Card sx={{ bgcolor: 'background.paper', borderRadius: '15px' }}>
      <nav aria-label="genre list">
        <ul className='footer-menu'>
          {genreList.map((genre, index) => (
            <li key={index}>
              <ListItemButton>
                <Checkbox />
                <ListItemText primary={genre} />
              </ListItemButton>
            </li>
          ))}
        </ul>
      </nav>
    </Card>
  );
}
