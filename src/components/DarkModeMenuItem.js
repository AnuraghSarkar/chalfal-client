import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../reducers/themeReducer";

const DarkModeMenuItem = ({ closeMenu, navItem }) => {
    const { darkMode } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleDarkMode = () => {
        dispatch(toggleDarkMode(!darkMode));
        closeMenu();
    };

    if (navItem) {
        return (
            <IconButton color="primary" onClick={handleDarkMode}>
                {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
        );
    }
};
export default DarkModeMenuItem;
