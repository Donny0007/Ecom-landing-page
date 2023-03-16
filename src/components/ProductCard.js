import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 800,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  price: {
    marginTop: theme.spacing(1),
    color: '#f44336',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function ProductCard(props) {
  const classes = useStyles();
  const { name, price, image } = props.product;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={name} style={{ width: 'auto',}}/>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.price} variant="body1" component="p">
            ${price}
          </Typography>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
