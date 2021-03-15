import { React, useState } from 'react';
import { Container, AppBar, Toolbar, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Observer } from "mobx-react-lite";
import { useStore } from "../store/storeContext";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        padding: 0,
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        flexGrow: 1
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        display: 'flex',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: '50%',
        },
    },
    inputRoot: {
        color: 'inherit',
        flexGrow: 1
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 2)
    },
}));

export default function SearchAppBar() {
    const classes = useStyles();
    const [searchId, setSeachId] = useState("");
    const store = useStore();

    const getUserGist = () => {
        store.getGistlist(searchId)
        setSeachId('')
    }

    return <Observer>{() => (
        <div className={classes.root}>
            <AppBar>
                <Container>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.search}>
                            <InputBase
                                placeholder="Enter gist id to search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                className="header_search-input"
                                inputProps={{ 'aria-label': 'search input' }}
                                value={searchId}
                                onChange={(e) => setSeachId(e.target.value)}
                            />
                            <IconButton
                                className="header_search-btn"
                                color="inherit"
                                aria-label="search button"
                                onClick={getUserGist}
                            > <SearchIcon /></IconButton>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )}
    </Observer>
}