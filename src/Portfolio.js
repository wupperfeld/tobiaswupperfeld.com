import React from "react";
import "./Portfolio.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Container from "@material-ui/core/Container";

const Portfolio = () => (
  <div className="portfolio">
    <h2>Projekte</h2>
    <h3>Hier ist eine Auswahl an Projekten, an denen ich gearbeitet habe.</h3>

    <Container maxWidth="lg">
      <div className="portfolio__category">
        <Chip
          color="secondary"
          icon={<ArrowDownwardIcon />}
          label="Eigenentwicklungen"
        />
      </div>
      <Grid
        container
        spacing={5}
        className="cards"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardActionArea href="###">
              <CardMedia
                className="card__media"
                component="img"
                alt="facebook lead automation software"
                image="../images/FLA-card-banner.jpg"
                title="Facebook Lead Automation Software"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Facebook Lead Automation Software
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Eine Google Chrome Erweiterung, die Informationen über
                  Facebooks Nutzer extrahiert. Die App erstellt Listen mit
                  Benutzerdaten, die automatisch von der Software gefiltert
                  werden. Zusätzlich kann das Tool vordefinierte Nachrichten,
                  Kontaktanfragen und Antworten an Benutzer senden.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="###">
                Zur FLA Software
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardActionArea href="###">
              <CardMedia
                className="card__media"
                component="img"
                alt="timetrackr Zeiterfassung App"
                image="../images/timetrackr-banner.jpg"
                title="Zeiterfassung App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Zeiterfassung App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  timetrackr ist eine Zeiterfassung App für Unternehmen.
                  Unternehmen können damit auf simple Weise Arbeitspakete
                  anlegen und die Arbeitszeiten ihrer Mitarbeiter nachverfolgen.
                  Ideal für kleine und mittelständige Firmen sowie Startups.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="###">
                Zur timetrackr App
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <div className="portfolio__category">
        <Chip
          color="secondary"
          icon={<ArrowDownwardIcon />}
          label="Demoprojekte"
        />
      </div>

      <div>
        <Grid
          container
          spacing={5}
          className="cards"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardActionArea href="https://fb-mern-clone.firebaseapp.com/">
                <CardMedia
                  className="card__media"
                  component="img"
                  alt="facebook klon"
                  image="../images/fb-mern.jpg"
                  title="Ein Facebook Klon"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Ein Facebook Klon
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Frontend: TypeScript, React.js, Redux
                    <br />
                    Backend: Node.js, Express.js, MongoDB
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://fb-mern-clone.firebaseapp.com/"
                >
                  Vorschau anzeigen
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/wupperfeld/fb-mern-clone"
                >
                  Code anzeigen
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardActionArea href="https://clone-c0821.web.app/">
                <CardMedia
                  className="card__media"
                  component="img"
                  alt="amazon clone"
                  image="../images/amazon-clone.jpg"
                  title="Ein Amazon Klon"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Ein Amazon Klon
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Frontend: React.js, React Context API
                    <br />
                    Backend: Google Cloud Platform
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://clone-c0821.web.app/"
                >
                  Vorschau anzeigen
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/wupperfeld/amazon-clone"
                >
                  Code anzeigen
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardActionArea href="https://messenger-clone-af7c8.web.app/">
                <CardMedia
                  className="card__media"
                  component="img"
                  alt="messenger app"
                  image="../images/messenger.png"
                  title="Eine Messenger App"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Eine Messenger App
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Frontend: React.js, Material-UI
                    <br />
                    Backend: Google Cloud Platform
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://messenger-clone-af7c8.web.app/"
                >
                  Vorschau anzeigen
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/wupperfeld/messenger-app"
                >
                  Code anzeigen
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardActionArea href="https://netflix-clone-f1fed.web.app/">
                <CardMedia
                  className="card__media"
                  component="img"
                  alt="netflix clone"
                  image="../images/netflix-clone.jpg"
                  title="Ein Netflix Klon"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Ein Netflix Klon
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Frontend: React.js, theMovieDB API
                    <br />
                    Backend: Google Cloud Platform
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://netflix-clone-f1fed.web.app/"
                >
                  Vorschau anzeigen
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/wupperfeld/netflix-clone"
                >
                  Code anzeigen
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  </div>
);

export default Portfolio;
