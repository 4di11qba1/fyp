import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { IconButton, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function GList({ heading, itemData }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', maxHeight: '320px', flexGrow: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 1, padding: '10px' }}>
        <Typography component="div" variant="h6" fontWeight={'bold'} sx={{marginLeft: '20px'}}>
              {heading}
        </Typography>
        <IconButton>
            <ArrowForwardIcon />
        </IconButton>
      </div>
      <List sx={{ width: '100%', overflowY: 'auto', flex: 1 }}>
        {itemData.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={item.title} src={item.img} />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={item.price}
              />
            </ListItem>
            {index < itemData.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}
