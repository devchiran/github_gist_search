import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Chip, Grid, Paper, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Forklist from "./Forklist"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    avatar: {
        display: 'flex',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));


function ListItem({ data }) {
    const [forks, setForks] = useState([])
    useEffect(() => {
        axios
            .get(`https://api.github.com/gists/${data.id}/forks`)
            .then(response => {
                let latestForks = response.data.slice(Math.max(response.data.length - 3, 0))
                setForks(latestForks)
            })
            .catch(error => {
                console.error("Something went wrong")
            })
    }, [data.id])
    const classes = useStyles();
    const filesArray = Object.keys(data.files)
        .map(key => { return data.files[key] })
        .reduce(function (acc, cur) {
            if (acc.indexOf(cur.language) === -1) {
                acc.push(cur.language)
            }
            return acc
        }, []);
    const badges = filesArray.map((item, index) => {
        return <Chip className={classes.chip} label={item} key={index} color="primary" />
    });

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes.paper}>
                <Typography gutterBottom variant="body1">File(s):</Typography>
                <Divider variant="middle" />
                <div>{badges}</div>
                <br />
                {forks && forks.length > 0 && <Forklist forks={forks} />}
            </Paper>
        </Grid>
    )
}

export default ListItem;