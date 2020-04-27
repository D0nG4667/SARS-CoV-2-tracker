import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@material-ui/core';
import CountUp from 'react-countup';
import cn from 'classnames';

import styles from './Cards.module.css'
import coronaGif from '../../images/image.gif';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Working from home...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center" className={styles.card}>
        <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.gif)}>
          <CardMedia
            component="img"
            alt="Work from Home, Stay Safe #COVID-19"
            image={coronaGif}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.confirmed)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2" component="p">No of confirmed cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.active)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Active</Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value - (recovered.value + deaths.value)} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2" component="p">No of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2" component="p">No of recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2" component="p">No of deaths with COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
