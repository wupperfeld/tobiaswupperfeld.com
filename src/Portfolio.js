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

const Portfolio = () => (
  <div>
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
            <CardActionArea href="https://fierce-taiga-54225.herokuapp.com/">
              <CardMedia
                className="card__media"
                component="img"
                alt="todo list"
                image="../images/todolist.png"
                title="A To-Do List"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  A To-Do List
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Frontend: Vanilla JS
                  <br />
                  Backend: Node.js, Express.js, MongoDB
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://fierce-taiga-54225.herokuapp.com/"
              >
                Vorschau anzeigen
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/wupperfeld/todolist"
              >
                Code anzeigen
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardActionArea href="https://limitless-forest-94024.herokuapp.com/">
              <CardMedia
                className="card__media"
                component="img"
                alt="secrets app"
                image="../images/secrets.png"
                title="The Secrets App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  The Secrets App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Frontend: Vanilla JS, Bootstrap
                  <br />
                  Backend: Node.js, Express.js, MongoDB
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://limitless-forest-94024.herokuapp.com/"
              >
                Vorschau anzeigen
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/wupperfeld/secretsapp"
              >
                Code anzeigen
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardActionArea href="https://wupperfeld.github.io/keeperapp/">
              <CardMedia
                className="card__media"
                component="img"
                alt="keeper app"
                image="../images/keeper.png"
                title="The Keeper App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  The Keeper App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Frontend: React.js, Material-UI
                  <br />
                  Backend: Node.js, Express.js
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://wupperfeld.github.io/keeperapp/"
              >
                Vorschau anzeigen
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/wupperfeld/keeperapp"
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
                title="A Netflix Clone"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  A Netflix Clone
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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

        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardActionArea href="https://messenger-clone-af7c8.web.app/">
              <CardMedia
                className="card__media"
                component="img"
                alt="messenger app"
                image="../images/messenger.png"
                title="A Messenger App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  A Messenger App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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
            <CardActionArea href="https://clone-c0821.web.app/">
              <CardMedia
                className="card__media"
                component="img"
                alt="amazon clone"
                image="../images/amazon-clone.jpg"
                title="An Amazon Clone"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  An Amazon Clone
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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
      </Grid>
    </div>
  </div>
);

export default Portfolio;
