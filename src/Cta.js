import React from "react";
import "./Cta.css";
import { Grid } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";

function Cta() {
  return (
    <div className="cta">
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <div className="cta__text">
            Hier können Sie Kontakt mit mir aufnehmen
            <br />
            <ArrowDownwardIcon fontSize="large" />
            <ArrowDownwardIcon fontSize="large" />
            <ArrowDownwardIcon fontSize="large" />
            <div>
              <IconButton
                href="mailto:tobias@wupperfeld.org"
                className="footer__icon"
              >
                <EmailIcon />
              </IconButton>
              <a
                href="https://www.xing.com/profile/Tobias_Wupperfeld/cv"
                className="footer__icon--xing"
              >
                <i class="fab fa-xing"></i>
              </a>
              <IconButton
                href="https://www.linkedin.com/in/tobias-wupperfeld/"
                className="footer__icon"
              >
                <LinkedInIcon />
              </IconButton>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            className="cta__img"
            src="../images/entrepreneurs.svg"
            alt="entrepreneur"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Cta;
