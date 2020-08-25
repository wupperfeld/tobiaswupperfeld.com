import React from "react";
import "./Home.css";
import { Button, Grid, Paper, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => (
  <div>
    <Container maxWidth="lg">
      <div className="intro">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <div className="intro__textbutton">
              <h1>Prozesse automatisieren mit modernen Webanwendungen</h1>
              <h2>
                <span role="img" aria-label="globe">
                  🌐
                </span>{" "}
                Überlegene Digitalisierung
                <br />
                <span role="img" aria-label="money">
                  💰
                </span>{" "}
                Kosteneinsparung
                <br />
                <span role="img" aria-label="trend">
                  📈
                </span>{" "}
                Umsatzsteigerung
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
    </Container>
    <div className="about">
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <div data-aos="flip-left">
              <img
                className="about__image"
                src="../images/tw-portrait.png"
                alt="Tobias Wupperfeld Portrait"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className="about__textbox">
              <div data-aos="fade-up">
                <p>
                  Hallo, mein Name ist Tobias Wupperfeld. Nach meinem Abschluss
                  an Deutschland's Elite-Universität RWTH Aachen und meiner
                  Tätigkeit im technischen Projektmanagement, habe ich
                  entschieden mich dem zu widmen, was mich am meisten
                  begeistert: Der Entwicklung moderner Softwarelösungen. Sie
                  profitieren von einem interdisziplinär aufgestellten
                  Entwickler und Ingenieur mit deutschem Qualitätsanspruch.
                </p>
                <div className="about__textbox--btn">
                  <Button variant="outlined">
                    <Link to="/about" className="about__textbox--link">
                      Mehr über mich
                    </Link>
                  </Button>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
    <Container maxWidth="lg">
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
              <div data-aos="fade-left" data-aos-duration="2000">
                <Paper>
                  <p className="process__box--text">
                    <h4>Anforderungsanalyse</h4>
                    <br />
                    Zu aller erst gilt es die genauen Anforderungen für die
                    Software zu identifizieren.
                  </p>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="process__box">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <div data-aos="fade-right" data-aos-duration="2000">
                <Paper>
                  <p className="process__box--text">
                    <h4>UI / UX Design Wireframing</h4>
                    <br />
                    Im Anschluss wird ermittelt wie der Nutzer die Anwendung
                    bedienen möchte und wie es ihm möglichst einfach gemacht
                    werden kann sich zurechtzufinden. Das Design bildet das
                    Gerüst für den folgenden Entwicklungsprozess.
                  </p>
                </Paper>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                className="process__box--img"
                src="../images/wireframe.svg"
                alt="wireframing"
              />
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
              <div data-aos="fade-left" data-aos-duration="2000">
                <Paper>
                  <p className="process__box--text">
                    <h4>Agile Entwicklung</h4>
                    <br />
                    In der Anforderungsanalyse wurden die einzelnen Funktionen
                    der Anwendung bereits identifiziert. In der agilen
                    Entwicklung werden die Funktionen in Iterationsschritten
                    implementiert, sodass Sie Ihre Anwendung bereits nach
                    Entwicklung der ersten Funktion testen können.
                  </p>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="process__box">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <div data-aos="fade-right" data-aos-duration="2000">
                <Paper>
                  <p className="process__box--text">
                    <h4>Testen und Optimieren</h4>
                    <br />
                    Nach Fertigstellung aller notwendigen Funktionen wird die
                    Anwendung ausgiebig nach aktuellen Testmethoden getestet und
                    gegebenenfalls optimiert oder erweitert.
                  </p>
                </Paper>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                className="process__box--img"
                src="../images/data_maintenance.svg"
                alt="testen und optimieren"
              />
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
              <div data-aos="fade-left" data-aos-duration="2000">
                <Paper>
                  <p className="process__box--text">
                    <h4>Inbetriebnahme</h4>
                    <br />
                    Ihre Anwendung ist nun einsatzbereit.
                  </p>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="techstack">
        <h3>Technologieschwerpunkt</h3>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <div data-aos="zoom-in-right" data-aos-duration="2500">
              <Paper>
                <div className="techstack__box">
                  <h4>
                    JAVASCRIPT{" "}
                    <span>
                      <i class="fab fa-js-square"></i>
                    </span>
                  </h4>
                  <p>
                    JavaScript ist eine Programmiersprache, die für das Web
                    entwickelt worden ist und dementsprechend für maximale
                    Kompatibilität sorgt.
                  </p>
                </div>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div data-aos="zoom-in" data-aos-duration="2500">
              <Paper>
                <div className="techstack__box">
                  <h4>
                    REACT{" "}
                    <span>
                      <i class="fab fa-react"></i>
                    </span>
                  </h4>
                  <p>
                    React ist eine von Facebook entwickelte Bibliothek, die die
                    Einsatzmöglichkeiten von JavaScript enorm erweitert und für
                    einen kompakteren Code sorgt. Das wiederrum führt zu
                    kürzeren Entwicklungszeiten, ansprechenderen
                    Benutzeroberflächen und höheren Geschwindigkeiten.
                  </p>
                </div>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div data-aos="zoom-in-left" data-aos-duration="2500">
              <Paper>
                <div className="techstack__box">
                  <h4>
                    GCP{" "}
                    <span>
                      <i class="fab fa-google"></i>
                    </span>
                  </h4>
                  <p>
                    Über die Google Cloud Plattform kann praktisch das gesamte
                    Backend eingerichtet und verwaltet werden. Dabei kommt man
                    in den Genuss einer hohen Datensicherheit, sehr hohen
                    Verfügbarkeit und Skalierbarkeit der App durch die
                    Cloudserver. Darüber hinaus kann die GCP relativ einfach in
                    das Projekt implementiert werden, was zu kürzeren
                    Entwicklungszeiten führt.
                  </p>
                </div>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="cta">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <p className="cta__text">
              Sind Sie daran interessiert, dass ich Ihr Unternehmen analysiere
              und eine Softwarelösung für Sie entwickle?
              <br />
              Gerne wirke ich auch in Ihrem Team mit.
            </p>
            <div className="cta__button">
              <Button
                variant="contained"
                color="secondary"
                href="mailto:tobias@wupperfeld.org"
              >
                Jetzt unverbindliche Beratung anfordern
              </Button>
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
    </Container>
  </div>
);

export default Home;
