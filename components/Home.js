import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Home() {
  const [isLogged, setisLogged] = React.useState(false);

  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("https://tutor-platform.herokuapp.com/api/get_course")
      .then((a) => {
        return a.json();
      })
      .then((data) => {
        setCourse(data);
      });
  }, []);

  useEffect(() => {
    checkStorage();
    return () => {};
  }, [isLogged]);
  function checkStorage() {
    if (localStorage.getItem("token")) {
      setisLogged(true);
    } else {
      setisLogged(false);
    }
  }
  const enrolled = () => {
    console.log("okkk click ");
  };
  const enrollFirst = () => {
    Router.push("Login");
  };

  return (
    <div className={styles.maxx}>
      <Image
        src="https://img.freepik.com/free-vector/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration_1284-29493.jpg?w=996&t=st=1648031937~exp=1648032537~hmac=0f74db622147e000e62f4ccd8961a9d6fdbd489df6f69bfbb7cf7290dfccad8e"
        width="1920"
        height="500"
      ></Image>
      <Box sx={{ flexGrow: 1 }}>
        <h1 style={{ textAlign: "center", background: "#81baed" }}>Courses</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {course.slice(0, 3).map((ea, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                {/* {console.log("*********************", ea)} */}
                <Image
                  src={`http://94.237.3.78/demo_beta/${ea.Image}`}
                  width="400px"
                  height="300px"
                ></Image>
                <Typography variant="h5" component="h2">
                  {ea.Title}
                </Typography>
                <Typography>{ea.Description}</Typography>
                <Typography variant="h6" component="h2">
                  Price&nbsp;${ea.cost}
                </Typography>
                {!isLogged ? (
                  <Button
                    style={{ background: "#bf1ef1", width: "400px" }}
                    variant="contained"
                    onClick={enrollFirst}
                  >
                    ENROLL
                  </Button>
                ) : (
                  <Button
                    style={{
                      background: "#bf1ef1",
                      width: "400px",
                      transitions: {
                        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
                      },
                    }}
                    variant="contained"
                    onClick={enrolled}
                  >
                    ENROLL
                  </Button>
                )}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <h1 style={{ textAlign: "center", background: "#81baed" }}>News</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(3)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                {" "}
                <Image
                  src="https://img.freepik.com/free-vector/breaking-news-with-silhouette-earth-map-studio-lights-editable-text_1284-59457.jpg?w=826&t=st=1648039481~exp=1648040081~hmac=f0966ce16ed9414da9c80e43e62314ac152c9c7e5a857fb26d0d003152655442"
                  width="400px"
                  height="300px"
                ></Image>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
