import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Router from "next/router";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useToasts } from "react-toast-notifications";
const theme = createTheme();
import GoogleLogin from "react-google-login";
//image upload code here
export default function SignIn() {
  const { addToast } = useToasts();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const data1 = {
      // isLoginEnable: "false",
      email: data.get("email"),
      password: data.get("password"),
    };
    fetch(`https://tutor-platform.herokuapp.com/api/login`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    }).then((response) => {
      response.json().then((res) => {
        console.log("%%%%%%%%%%%%%%%", res);
        if (res.message === "user name not found") {
          addToast("Bad Credential...", { appearance: "error" });
        } else {
          localStorage.setItem("token", res.token);
          localStorage.setItem("firstName", res.firstName);
          localStorage.setItem("lastName", res.lastName);
          localStorage.setItem("id", res._id);
          localStorage.getItem("token", "firstName", "lastName", "id");
          addToast("Login Successfully", { appearance: "success" });
          window.location.replace("/");
          // Router.replace("/");
          // Router.reload();
          // Router.push("/");
        }
      });
    });
  };
  const responseGoogle = (response) => {
    console.log("response@@@@@@@@@@@@@@@", response.accessToken);
    console.log("resObject@@@@@@@@@@@@@@@", response.profileObj);
    // localStorage.setItem("tokenGoogle", response.accessToken);
    // localStorage.getItem("tokenGoogle") != null ? Router.push("/") : "";
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <GoogleLogin
              clientId="314341624519-eafcrhleqh16brdir23advc0ajsoa70g.apps.googleusercontent.com"
              buttonText="login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

// import React from "react";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap-grid.css";
// import styles from "../styles/Home.module.css";
// import { Box, Link } from "@material-ui/core";
// import Head from "next/head";
// import { useToasts } from "react-toast-notifications";

// function LoginPage() {
//   const { addToast } = useToasts();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleSubmitt = (e) => {
//     console.log("@@@@@@@@@@@@@@@@", email, password);
//     e.preventDefault();
//     const data = {
//       email,
//       password,
//     };

//   return (
//     <div>
//       <form onSubmit={handleSubmitt} className={styles.formcss}>
//         <p>Please login to your account</p>

//         <div className="form-outline mb-4">
//           <input
//             style={{ width: "293px", height: "36px" }}
//             required
//             type="text"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="form-control"
//             placeholder="Phone number or email address"
//           />
//         </div>

//         <div className="form-outline mb-4">
//           <input
//             style={{ width: "293px", height: "36px" }}
//             required
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="form-control"
//             placeholder="Password"
//           />
//         </div>

//         <div className="text-center pt-1 mb-5 pb-1">
//           <button
//             style={{
//               width: "293px",
//               height: "36px",
//               color: "#087a00",
//             }}
//             className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
//             type="submit"
//           >
//             <b>LOG IN</b>
//           </button>
//           <Link className="text-muted" href="#!">
//             Forgot password?
//           </Link>
//         </div>

//         <div className="d-flex align-items-center justify-content-center pb-4">
//           <p className="mb-0 me-2">Don't have an account?</p>
//           <Link href="/SignUp">
//             <button
//               style={{
//                 width: "82px",
//                 height: "40px",
//                 color: "#d8363a",
//               }}
//               type="button"
//               className={styles.adf}
//             >
//               Create new
//             </button>
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;

//---------------------------------------------------------------------------------------------
//import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react'
// import axios from 'axios'
// import '../Assest/Add.css';
// import Footer from './Footer';
// import { create_course } from '../Config/commonapi';
// import ImageUploader from "react-images-upload";

// class AddCourse extends Component {
//      constructor(props) {
//         super(props);
//         this.state={
//             image : [],
//         }

//       }

//     saveFile (e) {
//            //append the values with key, value pair
//         this.setState({image:e.target.files[0]})
//         console.log(e.target.files[0],"dddddd")
//     }
//     handleSubmit = e => {

//      e.preventDefault();
//     let formData = new FormData();    //formdata object
//         // formData.append('Image', this.state.image);
//         // formData.append('Title', this.Title);
//         // formData.append('Description', this.Description);
//         // formData.append('duration', this.duration);
//         // formData.append('cost', this.cost);
//         // formData.append('author', this.author);
//         // formData.append('cat_id', this.cat_id);
//         console.log(this.state.image,"ds")

//        const data = {
//         Title: this.Title,
//         Description: this.Description,
//         Image: this.state.image,
//         duration: this.duration,
//         cost: this.cost,
//         author: this.author,
//         cat_id: this.cat_id,

//       }

//        for(var key in data){
//            console.log(key,"Gggg",data[key])
//            formData.append(key,data[key])
//        }
//       axios.post('/create_course', formData).then(
//        res => {
//         console.log(res)
//         }
//       ).catch(
//         err => {
//           console.log(err.response.data.message,"ffff")
//         }
//       )
//     }

//     render() {
//       return (
//         <div>
//         <form className='m-5 text-center pt-5' onSubmit={this.handleSubmit}>
//          <div className='container mx-auto'>

//         <div className='form-group'>
//           <br></br>

//           <label>Title</label>
//           <input type="text" placeholder='Enter Title' className='form-control'
//             onChange={e => this.Title = e.target.value}  />

//         </div>
//         <div className='form-group'>
//           <br></br>

//           <label>Description</label>
//           <input type="text" placeholder='Enter Description' className='form-control'
//             onChange={e => this.Description = e.target.value}  />

//         </div>
//         <br></br>
//         <div className='form-group'>

//           <label>Image</label>
//           {/* <input type="file" placeholder='Enter Image ' className='form-control'
//             onChange={e => this.Image = e.target.files[0]} name="image"/> */}
//              <input type="file" onChange={(e) => this.saveFile(e)} name="image" />

//         </div>
//         <br></br>
//         <div className='form-group'>
//           <label>duration</label>
//           <input type="text" placeholder='Enter Email' className='form-control'
//             onChange={e => this.duration = e.target.value} />

//         </div>
//         <br></br>
//         <div className='form-group'>
//           <label>cost</label>
//           <input type="number" placeholder='Enter cost' className='form-control'
//             onChange={e => this.cost = e.target.value} />
//         </div>
//         <br></br>
//         <div className='form-group'>
//           <label>author</label>
//           <input type="text" placeholder='Enter author' className='form-control'
//             onChange={e => this.author = e.target.value}  />
//         </div>
//         <br />
//         <div className='form-group'>
//           <label>cat_id</label>
//           <input type="text" placeholder='Enter cat_id' className='form-control'
//             onChange={e => this.cat_id = e.target.value} />
//         </div>

//       <br></br>
//         <div className='pt-3'>
//           <button className="btn btn-primary btn-block">create course .!</button>

//         </div>
//       </div>
//     </form>
//         <Footer />
//          </div>
//       )
//     }
// }
// export default AddCourse;
