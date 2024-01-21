import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export default function CarouselGList({ itemData, activeItem, h, w, handleItemHover, start, end }) {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: w, overflow: 'hidden', maxHeight: h, flexGrow: 1 }}>
      <List sx={{ width: '100%', overflowY: 'auto', flex: 1 }}>
        {itemData.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem className='hoverableElement' alignItems="flex-start" sx={{ borderRadius: '15px', backgroundColor: item === activeItem ? 'var(--hoverColor)' : 'inherit' }} onMouseEnter={() => handleItemHover(index % (end - start + 1) + start)}>
              <ListItemAvatar>
                <img width={40} height={60} alt={item.title} src={item.img} style={{ objectFit: 'cover', borderRadius: '8px' }} />
              </ListItemAvatar>
              <ListItemText primary={item.title} secondary={item.genre} />
            </ListItem>
            {index < itemData.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}
