import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Button,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import { useNavStyles } from "../styles/muiStyles";
import { useTheme } from "@material-ui/core/styles";
import RedditIcon from "@material-ui/icons/Reddit";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const theme = useTheme();

    const handleLogout = () => { };
    
    return (
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Toolbar>
          {!searchOpen && (
            <>
              <div className={classes.leftPortion}>
                <div className={classes.logoWrapper}>
                  <Button
                    className={classes.logo}
                    color="primary"
                    component={RouterLink}
                    to="/"
                    startIcon={<RedditIcon fontSize="large" />}
                    size="large"
                  >
                    chalfal
                  </Button>
                </div>
          )}
        </Toolbar>
      </AppBar>
    );
};

export default Navbar;