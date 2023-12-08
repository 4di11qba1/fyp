import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

export default function Popular({ item }) {
  return (
    <Card
      sx={{
        padding: '20px',
        flexGrow: 1,
        flexBasis: 345,
        borderRadius: '15px',
        transition: 'transform 0.5s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardMedia
        component="img"
        alt={item.title}
        height="200"
        image={item.img}
        sx={{borderRadius: '15px'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{minHeight: '60px'}}>
          {item.desc}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
            <StarBorderOutlinedIcon />
            Popular
        </div>
        <Button variant='contained' size="medium">{item.price}</Button>
      </CardActions>
    </Card>
  );
}