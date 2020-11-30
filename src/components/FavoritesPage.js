import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 275,
    height: 350,
    minWidth: 200,
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <div>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Card className={classes.root}>
          <CardHeader title="Beer Name" subheader="Beer Style" />
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1521572008054-962cefc90ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Description:
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardHeader title="Beer Name" subheader="Beer Style" />
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1521572008054-962cefc90ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Description:
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardHeader title="Beer Name" subheader="Beer Style" />
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1521572008054-962cefc90ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Description:
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardHeader title="Beer Name" subheader="Beer Style" />
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1521572008054-962cefc90ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Description:
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
