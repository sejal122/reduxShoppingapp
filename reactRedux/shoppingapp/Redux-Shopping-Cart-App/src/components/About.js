import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./About.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function About() {
  return (
    <div>
      <div className="aboutCard">
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Item>
                <h2>Developed BY:</h2>
                <h1> SEJAL GUJAR</h1>
                <i>contact: gujarsejal12@gmail.com</i>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <p>
                  <h3>Description:</h3>
                  This is an dummy products shopping site developed for
                  educational purposes. The focus here is implementing redux and
                  redux thunk and not much on the UI The functionalities include
                  : <br /> 1.Display of wide range of products with prices and
                  description. <br />
                  2.Adding item to the cart <br />
                  3.Incrementing / decrementing quantity of product from the
                  cart <br />
                  4.Deleting item from the cart <br />
                  5.Viewing the total price of the cart
                </p>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ textAlign: "left" }}>
                <h4>Tech stack implemented in this project:</h4>
                <br />
                <ol>
                  <li>ReactJS / React Routing</li>
                  <li>
                    <b>Redux toolkit</b> for smooth state management
                  </li>
                  <li>
                    Redux thunk for <b>API calls</b>
                  </li>
                  <li>
                    <b>MaterialUI</b> for attractive UI
                  </li>
                </ol>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <h2>View more projects by me</h2>
                <button className="aboutBtn"> BitBucket profile </button>
                <button className="aboutBtn"> Behance profile</button>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default About;
