import * as React from "react";
import { useEffect, useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import styles from "../styles/Home.module.css";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Screenshot from "./Screenshot";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Details</h2>
          <p id="child-modal-description">Varun Patidar from Indore (M.P.)</p>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff5722",
    },
  },
});
const dispSecondsAsMins = (seconds) => {
  // 25:00
  //   console.log("seconds " + seconds);
  const hours = Math.floor(seconds / (60 * 60));

  let divisor_for_minutes = seconds % (60 * 60);
  const mins = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  const seconds_ = Math.ceil(divisor_for_seconds);
  return (
    (hours == 0
      ? "00"
      : hours == 1
      ? "01"
      : hours == 2
      ? "02"
      : hours == 3
      ? "03"
      : hours == 4
      ? "04"
      : hours == 5
      ? "05"
      : hours == 6
      ? "06"
      : hours == 7
      ? "07"
      : hours == 8
      ? "08"
      : hours == 9
      ? "09"
      : hours.toString()) +
    ":" +
    (mins == 0
      ? "00"
      : mins == 1
      ? "01"
      : mins == 2
      ? "02"
      : mins == 3
      ? "03"
      : mins == 4
      ? "04"
      : mins == 5
      ? "05"
      : mins == 6
      ? "06"
      : mins == 7
      ? "07"
      : mins == 8
      ? "08"
      : mins == 9
      ? "09"
      : mins.toString()) +
    ":" +
    (seconds_ == 0
      ? "00"
      : seconds_ == 1
      ? "01"
      : seconds_ == 2
      ? "02"
      : seconds_ == 3
      ? "03"
      : seconds_ == 4
      ? "04"
      : seconds_ == 5
      ? "05"
      : seconds_ == 6
      ? "06"
      : seconds_ == 7
      ? "07"
      : seconds_ == 8
      ? "08"
      : seconds_ == 9
      ? "09"
      : seconds_.toString()) +
    " Hrs"
  );
};

export default function Dashboard() {
  const [timer, setTimer] = useState(0); // 25 minutes
  const [start, setStart] = useState(false);
  const firstStart = useRef(true);
  const tick = useRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (firstStart.current) {
      // console.log("first render, don't run useEffect for timer");

      firstStart.current = !firstStart.current;
      return;
    }

    // console.log(start);
    if (start) {
      // let timeCheckedIn = new Date().toLocaleTimeString();
      let timeCheckedIn = new Date();
      console.log("Checkin###############", timeCheckedIn);
      tick.current = setInterval(() => {
        setTimer((timer) => timer + 1);
        // console.log("################3", timer);
      }, 1000);
      setTimer(0);
    } else {
      // console.log("clear interval");
      let timeCheckedIn = new Date();
      console.log("Checkout$$$$$$$$$$$", timeCheckedIn);
      clearInterval(tick.current);
    }

    return () => clearInterval(tick.current);
  }, [start]);

  const toggleStart = () => {
    if (!start) {
      console.log("Start^^^^^^^^^^^^^^^^^^^^");
    } else {
      console.log("stop******************^^^");
    }
    setStart(!start);
  };

  return (
    <div className="bgC">
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar
            style={{ background: "teal" }}
            position="static"
            color="primary"
          >
            <div>
              <DashboardIcon
                style={{ position: "absolute", top: "91px", left: "5px" }}
              />
              <h2 style={{ marginLeft: "30px", marginTop: "21.5px" }}>
                DashBoard
              </h2>
              <p className={styles.time}>{dispSecondsAsMins(timer)}</p>{" "}
              <Chip
                className={start ? styles.checkout : styles.checkin}
                icon={<AccessTimeIcon style={{ color: "white" }} />}
                label={start ? "Check-out" : "Check-in"}
                variant="outlined"
                onClick={toggleStart}
              >
                {!start ? "START" : "STOP"}
              </Chip>
            </div>
          </AppBar>
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 400 }}>
              <h2 id="parent-modal-title">Reading for your Knowledge</h2>
              <p id="parent-modal-description">
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
              </p>
              <ChildModal />
            </Box>
          </Modal>
          <Box>
            <Typography paragraph className={styles.para}>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </Typography>
          </Box>
        </ThemeProvider>
      </Stack>
    </div>
  );
}
