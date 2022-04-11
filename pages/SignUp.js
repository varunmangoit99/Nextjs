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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useToasts } from "react-toast-notifications";
import Router from "next/router";

const theme = createTheme();

export default function SignUp() {
  const { addToast } = useToasts();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    //varun.admin@gmail.com   123456
    const data1 = {
      roleId: "user",
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      phone: data.get("phone"),
      email: data.get("email"),
      password: data.get("password"),
    };

    fetch(`https://tutor-platform.herokuapp.com/api/createUser`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    })
      .then((response) => response.text())
      .then((data1) => {
        addToast("Form Saved Successfully", { appearance: "success" });
        // console.log("Success:", data1);
        Router.push("/Login");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="phone"
                  type="number"
                  id="phone"
                  autoComplete="new-phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap-grid.css";
// import { useToasts } from "react-toast-notifications";
// import styles from "../styles/Home.module.css";
// import Image from "next/image";
// import Head from "next/head";
// import { Link } from "@material-ui/core";

// function SignUp() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const { addToast } = useToasts();
//   const handleSubmit = (e) => {
//     //console.log("okkkkkkkk", name, email, phone, password);
//     e.preventDefault();
//     const roleId = "user";
//     const data = {
//       roleId,
//       firstName,
//       lastName,
//       email,
//       phone,
//       password,
//     };

//}
//   return (
//     <div className={styles.maxx}>
//       <Image src="/bg.jpg" width="1920" height="800"></Image>
//       <div className={styles.signup}>
//         <Head>
//           <title>SignUp</title>
//         </Head>
//         <img
//           style={{
//             width: "270px",
//             marginTop: "-38px",
//             borderRadius: " 75px",
//           }}
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2JrST58RwmiyvCPz80Xx965gA97fMKK7Xg&usqp=CAU"
//         ></img>
//         <form onSubmit={handleSubmit}>
//           <div
//             style={{ padding: "10px", marginLeft: "-9px" }}
//             className="form-group"
//           >
//             <label htmlFor="firstName">First Name</label>
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <input
//               type="text"
//               style={{
//                 marginLeft: "-20px",
//                 marginTop: "-1px",
//                 position: "absolute",
//               }}
//               className="form-control"
//               id="firstName"
//               required
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               aria-describedby="firstName"
//               placeholder="Enter your first name"
//             />
//           </div>
//           <div
//             style={{ padding: "10px", marginLeft: "-9px" }}
//             className="form-group"
//           >
//             <label htmlFor="lastName">Last Name</label>
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <input
//               type="text"
//               style={{
//                 marginLeft: "-18px",
//                 marginTop: "-1px",
//                 position: "absolute",
//               }}
//               className="form-control"
//               id="lastName"
//               required
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               aria-describedby="lastName"
//               placeholder="Enter your last name"
//             />
//           </div>
//           <div
//             style={{ padding: "10px", marginLeft: "-9px" }}
//             className="form-group"
//           >
//             <label htmlFor="email">Email</label>
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <input
//               type="email"
//               style={{
//                 marginLeft: "15px",
//                 marginTop: "-1px",
//                 position: "absolute",
//               }}
//               className="form-control"
//               id="email"
//               value={email}
//               required
//               onChange={(e) => setEmail(e.target.value)}
//               aria-describedby="emailHelp"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div
//             style={{ padding: "10px", marginLeft: "-9px" }}
//             className="form-group"
//           >
//             <label htmlFor="phone">Contact</label>&nbsp;&nbsp;
//             <input
//               type="number"
//               style={{
//                 marginLeft: "17px",
//                 marginTop: "-1px",
//                 position: "absolute",
//               }}
//               className="form-control"
//               id="phone"
//               value={phone}
//               required
//               onChange={(e) => setPhone(e.target.value)}
//               aria-describedby="phoneHelp"
//               placeholder="Enter phone number"
//             />
//           </div>
//           <div
//             style={{ padding: "10px", marginLeft: "-7px" }}
//             className="form-group"
//           >
//             <label htmlFor="password">Password</label>&nbsp;&nbsp;
//             <input
//               type="password"
//               className="form-control"
//               style={{
//                 marginLeft: "2px",
//                 marginTop: "-1px",
//                 position: "absolute",
//               }}
//               id="password"
//               value={password}
//               required
//               onChange={(e) => setPassword(e.target.value)}
//               aria-describedby="passwordHelp"
//               placeholder="Enter password"
//             />
//           </div>
//           <button
//             style={{
//               marginLeft: "26px",
//               marginTop: " 18px",
//               height: "34px",
//               borderRadius: "39px",
//               color: "green",
//               fontWeight: "700",
//               width: "214px",
//             }}
//             type="submit"
//             className="btn btn-primary"
//           >
//             SignUp
//           </button>
//         </form>
//         <p style={{ textAlign: "center", color: "black" }}>
//           Already a member ?{" "}
//           <Link href="/Login">
//             <b>Log In</b>
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
