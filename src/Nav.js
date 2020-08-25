import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import "./Nav.css";
{
  /*import FormGroup from "@material-ui/core/FormGroup";*/
}
{
  /*import FormControlLabel from "@material-ui/core/FormControlLabel";*/
}
{
  /*import Switch from "@material-ui/core/Switch";*/
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function Nav(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  {
    /*const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });*/
  }

  {
    /*const handleLanguage = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };*/
  }

  {
    /*const handleDarkmode = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };*/
  }

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className="nav__toolbar">
            <Link to="/">
              <img
                className="nav__logo"
                src="../images/tw-logo-white.png"
                alt="Tobias Wupperfeld Logo"
              />
            </Link>
            <div className="nav__links">
              <Link to="/portfolio" className="nav__link">
                <Typography variant="h6">Portfolio</Typography>
              </Link>
              <Link to="/about" className="nav__link">
                <Typography variant="h6">Über Mich</Typography>
              </Link>
            </div>

            {/*<FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={state.checkedA}
                    onChange={handleLanguage}
                    name="checkedA"
                  />
                }
                label="English"
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={state.checkedB}
                    onChange={handleDarkmode}
                    name="checkedB"
                  />
                }
                label="Darkmode"
              />
            </FormGroup>*/}
            <div className="nav__menu">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {/*<MenuItem onClick={handleMenuClose}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.checkedA}
                      onChange={handleLanguage}
                      name="checkedA"
                    />
                  }
                  label="English"
                />
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.checkedB}
                      onChange={handleDarkmode}
                      name="checkedB"
                    />
                  }
                  label="Darkmode"
                />
              </MenuItem>*/}
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/portfolio" className="nav__link--menu">
                    Portfolio
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/about" className="nav__link--menu">
                    Über Mich
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
