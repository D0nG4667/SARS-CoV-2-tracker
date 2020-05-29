import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1.5),
        },
    },
}));

export default function Chips() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Chip
                avatar={<Avatar>G</Avatar>}
                label="Information and resources (Google)"
                clickable
                color="primary"
                component="a"
                href="https://www.google.com/covid19/"
                target="_blank"
            />
            <Chip
                avatar={<Avatar>H</Avatar>}
                label="Resource Center (Harvard)"
                clickable
                color="secondary"
                component="a"
                href="https://www.health.harvard.edu/diseases-and-conditions/coronavirus-resource-center"
                target="_blank"
            />
            <Chip
                avatar={<Avatar>T</Avatar>}
                label="Staying safe and informed (Twitter)"
                clickable
                color="primary"
                component="a"
                href="https://covid19.twitter.com"
                target="_blank"
            />
            <Chip
                avatar={<Avatar>I</Avatar>}
                label="Resource Directory (Instagram)"
                clickable
                color="secondary"
                component="a"
                href="https://business.instagram.com/blog/instagram-covid19-directory"
                target="_blank"
            />
            <Chip
                avatar={<Avatar>F</Avatar>}
                label="Information hub for media (Facebook)"
                clickable
                color="primary"
                component="a"
                href="https://web.facebook.com/facebookmedia/solutions/coronavirus-resources"
                target="_blank"
            />
            <Chip
                avatar={<Avatar>W</Avatar>}
                label="World Health Organization (WHO)"
                clickable
                color="secondary"
                component="a"
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                target="_blank"
            />
            <Chip
                avatar={<Avatar>C</Avatar>}
                label="Centers for Disease Control & Prevention (CDC)"
                clickable
                color="primary"
                component="a"
                href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                target="_blank"
            />
        </div>
    );
}
