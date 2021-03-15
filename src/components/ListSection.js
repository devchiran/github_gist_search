import React from 'react'
import { Observer } from "mobx-react-lite";
import { CircularProgress, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from "../store/storeContext";
import ListItem from "./ListItem";

const useStyles = makeStyles((theme) => ({
    grid: {
        marginTop: '75px'
    },
    loader: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    }
}));
function ListSection() {
    const classes = useStyles();
    const store = useStore();
    return <Observer>{
        () => (
            <Container>
                <Grid container spacing={3} className={classes.grid}>
                    {
                        store.gist.isLoading ?
                            <div className={classes.loader}><CircularProgress /></div> :
                            store.gist.list.map((item, i) => {
                                return <ListItem data={item} key={item.id} />
                            })
                    }
                </Grid>
            </Container>
        )
    }
    </Observer>
}
export default ListSection;
