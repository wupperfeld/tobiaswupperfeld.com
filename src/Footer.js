import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import "./Footer.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const Footer = () => (
  <div className="footer">
    <Container maxWidth="lg">
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={12} md={4}>
          <div>
            <IconButton
              href="mailto:tobias@wupperfeld.org"
              className="footer__icon"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/tobias-wupperfeld/"
              className="footer__icon"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://github.com/wupperfeld"
              className="footer__icon"
            >
              <GitHubIcon />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="footer__copyright">
            <p>Copyright © 2020 by Tobias Wupperfeld</p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="footer__links">
            <a
              href="https://wupperfeld.org/impressum"
              className="footer__links--imprint"
            >
              Impressum
            </a>
            <a href="https://wupperfeld.org/datenschutz">Datenschutz</a>
          </div>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default Footer;
