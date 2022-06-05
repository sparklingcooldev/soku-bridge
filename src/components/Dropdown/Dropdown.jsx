import React, { useState } from 'react';
import "./style.scss"
import { Box, Paper, Menu, MenuItem } from '@material-ui/core';
import { FaChevronDown } from 'react-icons/fa'

export default function Dropdown({ children, index }) {
    const networks = ["SOKU", "SOKU"];
    const imgs = ['logo.png', 'logo.png'];
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        console.log(event.currentTarget);
        setAnchorEl(event.currentTarget);
    };
    return (
        <>
            <Box className="dropdownmain" onClick={handleClick}>
                <Box sx={{ display: "flex" }} >
                    <img src={imgs[index]} />
                    <Box className = "dropdownname">{networks[index]}</Box>
                </Box>
                <Box className="dropdownarrowdown"><FaChevronDown /></Box>
            </Box >
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => { setAnchorEl(null) }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                PaperProps={{
                    style: {
                        width: "calc(32% - 50px)",
                    },
                }}
            >
                <MenuItem onClick={(event) => { setAnchorEl(null) }} sx={{ borderBottom: "1px solid lightgrey" }} data-my-value={0}>SOKU</MenuItem>
                
            </Menu>
        </>
    );
}


export { Dropdown };