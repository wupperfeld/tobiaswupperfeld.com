import React from "react";
import "./Home.css";
import { Button, Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import Tab from "./FullWidthTabs";

const Home = () => (
  <div>
    <div className="intro">
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <div className="intro__textbutton">
            <h1>Prozesse automatisieren mit modernen Webanwendungen</h1>
            <h2>
              Überlegene Digitalisierung, Kosteneinsparung und Umsatzsteigerung
            </h2>
            <Button
              variant="contained"
              color="secondary"
              href="mailto:tobias@wupperfeld.org"
            >
              Kontakt
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="intro__image">
            <img src="../images/data_process.svg" alt="data process" />
          </div>
        </Grid>
      </Grid>
    </div>

    <div className="about">
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <img
            className="about__image"
            src="../images/tw-portrait.png"
            alt="Tobias Wupperfeld Portrait"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="about__textbutton">
            <div>
              <p>
                Hallo, mein Name ist Tobias Wupperfeld. Nach meinem Abschluss an
                Deutschland's Elite-Universität RWTH Aachen und meiner Tätigkeit
                im technischen Projektmanagement, habe ich entschieden mich dem
                zu widmen, was mich am meisten begeistert: Der Entwicklung
                moderner Softwarelösungen. Sie profitieren von einem
                interdisziplinär aufgestellten Entwickler und Ingenieur mit
                deutschem Qualitätsanspruch.
              </p>
              <Button variant="outlined">
                <Link to="/about" className="about__textbutton--link">
                  Mehr über mich
                </Link>
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>

    <div className="process">
      <h3 className="process__title">Der Weg zu Ihrer Lösung</h3>

      <div className="process__box">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              className="process__box--img"
              src="../images/mind_map.svg"
              alt="mindmap"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <p className="process__box--text">
                <strong>Anforderungsanalyse</strong>
                <br />
                Zu aller erst gilt es die genauen Anforderungen für die Software
                zu identifizieren.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <div className="process__box">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              className="process__box--img"
              src="../images/wireframe.svg"
              alt="wireframing"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <p className="process__box--text">
                <strong>UI / UX Design Wireframing</strong>
                <br />
                Im Anschluss wird ermittelt wie der Nutzer die Anwendung
                bedienen möchte und wie es ihm möglichst einfach gemacht werden
                kann sich zurechtzufinden. Das Design bildet das Gerüst für den
                folgenden Entwicklungsprozess.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className="process__box">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              className="process__box--img"
              src="../images/coding_.svg"
              alt="coding"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <p className="process__box--text">
                <strong>Agile Entwicklung</strong>
                <br />
                In der Anforderungsanalyse wurden die einzelnen Funktionen der
                Anwendung bereits identifiziert. In der agilen Entwicklung
                werden die Funktionen in Iterationsschritten implementiert,
                sodass Sie Ihre Anwendung bereits nach Entwicklung der ersten
                Funktion testen können.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className="process__box">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              className="process__box--img"
              src="../images/data_maintenance.svg"
              alt="testen und optimieren"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <p className="process__box--text">
                <strong>Testen und Optimieren</strong>
                <br />
                Nach Fertigstellung aller notwendigen Funktionen wird die
                Anwendung ausgiebig nach aktuellen Testmethoden getestet und
                gegebenenfalls optimiert oder erweitert.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className="process__box">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              className="process__box--img"
              src="../images/startup.svg"
              alt="launch"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <p className="process__box--text">
                <strong>Inbetriebnahme</strong>
                <br />
                Ihre Anwendung ist nun einsatzbereit.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>

    <div className="techstack">
      <h3>Technologieschwerpunkt</h3>
      <Tab />
    </div>

    <div className="cta">
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <p className="cta__text">
            Sind Sie daran interessiert, dass ich Ihr Unternehmen analysiere und
            eine Softwarelösung für Sie entwickle?
            <br />
            Gerne wirke ich auch in Ihrem Team mit.
          </p>
          <Button
            variant="contained"
            color="secondary"
            href="mailto:tobias@wupperfeld.org"
          >
            Jetzt unverbindliche Beratung anfordern
          </Button>
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
  </div>
);

export default Home;
