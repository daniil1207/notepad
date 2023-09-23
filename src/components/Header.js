import React from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Clock} from "./Clock";
import {useEffect, useState} from "react";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
export default function Header(props) {
    const [searchValue, setSearchValue] = useState('')
    const handleChange = (e) => {
        setSearchValue(e.currentTarget.value)
    }
    useEffect(() => {
        props.getResultsNotes(searchValue)
    }, [searchValue]);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{display: {xs: 'none', sm: 'block'}}}
                >
                    Notepad
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        name="search"
                        inputProps={{'aria-label': 'search'}}
                        value={searchValue}
                        onChange={handleChange}
                    />
                </Search>
                <Box sx={{flexGrow: 1}}/>
                <Clock/>
            </Toolbar>
        </AppBar>
    );
}
