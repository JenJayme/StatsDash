import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Bot from "./playercard";
import performance from "../../utils/performanceSeeds.json";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));
var players = []
performance.matches.map((stats)=>{
    var play = 
    {
        kills:stats.playerStats.kills,
        deaths:stats.playerStats.deaths,
        damage:stats.playerStats.damage,
        rank:stats.playerStats.rank
    }
    players.push(play)
})

export default function SingleLineGridList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5}>
        {props.list.map((play)=>{
            return <Bot
            gamerTag = {play.gamerTag}
            deaths = {play.deaths}
            damage = {play.damage}
            overallScore = {play.score}
            kills = {play.kills}
            revives = {play.revives}
            />
        })}
      </GridList>
    </div>
  );
}