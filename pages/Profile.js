import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { createRef, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useToasts } from "react-toast-notifications";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Router from "next/router";
const theme = createTheme();

export default function SignInSide() {
  const { addToast } = useToasts();
  const [profile, setProfile] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // console.log("#################", firstName);
  const id = localStorage.getItem("id");
  useEffect(() => {
    fetch("https://tutor-platform.herokuapp.com/api/user_Detail/" + id)
      .then((data1) => {
        return data1.json();
      })
      .then((data) => {
        setProfile(data);
      });
  }, []);
  //   console.log("%%%%%%%%%%%%%%%", profile);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const updateData = (e) => {
    e.preventDefault();
    const roleId = "user";
    const data = {
      roleId,
      firstName,
      lastName,
      email,
      phone,
    };
    // console.log("#$$$$$$$$$$$$", data);
    fetch(`https://tutor-platform.herokuapp.com/api/user_update/` + id, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        addToast("Detail Updated Successfully", { appearance: "success" });
        Router.push("/");
        // console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="data:image/jpeg;base64,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"
            ></Avatar>
            <Typography component="h1" variant="h5">
              My Profile
            </Typography>

            <br />
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="firstName"
                    name="firstName"
                    placeholder={profile.firstName}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    placeholder={profile.lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    name="email"
                    value={email}
                    placeholder={profile.email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    autoComplete="email"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="phone"
                    name="phone"
                    value={phone}
                    placeholder={profile.phone}
                    onChange={(e) => setPhone(e.target.value)}
                    fullWidth
                    autoComplete="phone"
                    variant="standard"
                  />
                </Grid>
              </Grid>
              <Button
                style={{ textAlign: "center", marginTop: "40px" }}
                variant="contained"
                onClick={updateData}
              >
                Update
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
