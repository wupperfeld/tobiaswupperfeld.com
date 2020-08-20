import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} container>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="JavaScript" {...a11yProps(0)} />
            <Tab label="React" {...a11yProps(1)} />
            <Tab label="GCP" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            JavaScript ist eine Programmiersprache, die für das Web entwickelt
            worden ist und dementsprechend für maximale Kompatibilität sorgt.
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            React ist eine von Facebook entwickelte Bibliothek, die die
            Einsatzmöglichkeiten von JavaScript enorm erweitert und für einen
            kompakteren Code sorgt. Das wiederrum führt zu kürzeren
            Entwicklungszeiten, ansprechenderen Benutzeroberflächen und höheren
            Geschwindigkeiten.
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Über die Google Cloud Plattform kann praktisch das gesamte Backend
            eingerichtet und verwaltet werden. Dabei kommt man in den Genuss
            einer hohen Datensicherheit, sehr hohen Verfügbarkeit und
            Skalierbarkeit der App durch die Cloudserver. Darüber hinaus kann
            die GCP relativ einfach in das Projekt implementiert werden, was zu
            kürzeren Entwicklungszeiten führt.
          </TabPanel>
        </SwipeableViews>
      </Grid>
    </div>
  );
}
