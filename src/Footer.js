import React from "react";
import "./Footer.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const Footer = () => (
  <div className="footer">
    <Container maxWidth="lg">
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={12} md={6}>
          <div className="footer__copyright">
            <p>Copyright © 2020 by Tobias Wupperfeld</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="footer__links">
            <a
              href="https://wupperfeld.org/impressum"
              rel="nofollow"
              className="footer__links--imprint"
            >
              Impressum
            </a>
            <a href="https://wupperfeld.org/datenschutz" rel="nofollow">
              Datenschutz
            </a>
          </div>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default Footer;
