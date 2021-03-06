import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Chart from "../../pages/Chart"

const useStyles = makeStyles({
  root: {
    fullWidth: true,
  },
  media: {
    height: 140,
  },
});

export default function Stats(props) {
  const classes = useStyles();
if(props.mystats){
  return (
    <Card className={classes.root}>

      <CardActions>
       <p>{props.currentuser}'s Statistics For This Tournament </p>

      </CardActions>
      <CardActionArea>
        <h4>Rank: 1st </h4>
        {/* <h5>Kills: {props.mystats.kills}</h5> */}
        <h5>Gulag Kills: {props.mystats.gulagkills}</h5>
        <h5>Gulag Deaths: {props.mystats.gulagdeaths}</h5>
        <h5>Overall Damage: {props.mystats.damage}</h5>
      </CardActionArea>
    </Card>
  );
}
return (
  <Card className={classes.root}>

    <CardActions>
     <p>{props.currentuser}'s Statistics For This Tournament </p>

    </CardActions>
    <CardActionArea>
      <h4>Rank: -- </h4>
      <h5>Kills: --</h5>
      <h5>Gulag Kills: --</h5>
      <h5>Gulag Deaths: --</h5>
      <h5>Overall Damage: --</h5>
    </CardActionArea>
  </Card>
);
  
}