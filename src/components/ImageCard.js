import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  description: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
  buttons: {
    fontFamily: "Nunito",
    marginTop: "10px",
  }, 
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
      <Collapse in={checked} {...(checked ? { timeout:1000 }: {})}>
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={place.imageUrl}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    {place.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                    {place.desc}
                </Typography>
                <Button className={classes.buttons} variant="contained">
                    ¡Conoce más!
                </Button>
            </CardContent>
            
        </Card>
      </Collapse>
  );
}