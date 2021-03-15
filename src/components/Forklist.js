import React from 'react'
import { Typography, Divider, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    avatar: {
        display: 'flex',
        justifyContent: 'center',
        '& > *': {
          margin: theme.spacing(1),
        },
      }
}));

function Forklist({ forks }) {
    const classes = useStyles();
    const forksList = forks && forks.map((item, index) => {
        return <a href={item.forks_url} key={index} target="_blank" className="fork-list_link">
            <Avatar alt={item.owner.login} src={item.owner.avatar_url} className="fork-list_avatar" />
        </a>
    });
    return (
        <>
            <Typography gutterBottom variant="body1" className="fork-list_header">Fork(s):</Typography>
            <Divider variant="middle" />
            <div className={`${classes.avatar} fork-list_fork-wrapper`}>
                { forksList }
            </div>
        </>
    )
}

export default Forklist;