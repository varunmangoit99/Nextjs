import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { alpha } from "@mui/material/styles";
import styles from "../styles/Home.module.css";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListSubheader from "@mui/material/ListSubheader";
import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
import DehazeIcon from "@mui/icons-material/Dehaze";

import {
  Avatar,
  Button,
  Chip,
  Container,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Select,
  TextField,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Message() {
  const [messageList, setMessageList] = useState([]);
  const [userId, setUserId] = useState([]);
  const [model, setModel] = useState(false);
  const [chat, setChat] = useState([]);
  const [conservationId, setConservationId] = useState([]);
  const [name1, setName1] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("id");
    setUserId(id);

    //   const id = "624c29ab53d85f197a551d67";
    fetch("http://94.237.3.78:4000/api/user_Detail")
      .then((data1) => {
        return data1.json();
      })
      .then((data) => {
        setMessageList(data);
      });
  }, []);
  const getMessage = (idd) => {
    // console.log("%%%%%%%%%%%%%%%%%%%", idd[0]._id);

    fetch(`http://94.237.3.78:4000/api/message/` + idd[0]._id)
      .then((data1) => {
        return data1.json();
      })
      .then((data) => {
        setChat(data);
      });
  };

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  function handleClick(details) {
    // console.log("@@@@@@@@@@@@", details);
    const senderId = userId;
    const receiverId = details._id;
    const data = {
      senderId,
      receiverId,
    };
    fetch(`http://94.237.3.78:4000/api/conversation`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((dataaa) => {
        // console.log(dataaa, "dattttttttttttttttttttttttt");
        setModel(true);
        setConservationId(JSON.parse(dataaa));
        setName1(details.firstName);
        getMessage(JSON.parse(dataaa));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  const submit = () => {
    console.log("Okk Submit");
  };
  // console.log("^^^^^^^^^^^^^^^^chat", chat);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2.5}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <DehazeIcon />
                  &nbsp; <p className={styles.menubar}> Menu Bar</p>
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent message" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={3}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
              <p className={styles.dropdown}>
                Show: &nbsp;
                <ArrowDropDownIcon
                  style={{ position: "absolute", top: "-2px" }}
                />
              </p>
            </Search>
            {/* &nbsp; */}
            {messageList
              .filter((m) => userId != m._id)
              .map((dataList) => (
                // console.log("$$$$$$$$$$$$$$$", dataList);
                <Item style={{ background: "gainsboro" }}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <Avatar src="/broken-image.jpg" />
                        &nbsp; &nbsp;
                        <ListItemText
                          primary={dataList.firstName}
                          onClick={() => handleClick(dataList)}
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Item>
              ))}
          </Grid>
          &nbsp; &nbsp;
          <Grid
            item
            xs={5}
            style={{
              background: "black",
              marginTop: "17px",
              borderRadius: "11px",
            }}
          >
            <Container maxWidth="sm">
              {model ? (
                <Paper className={styles.chatName}>
                  <div>
                    <Avatar src="/broken-image.jpg" />
                    <h3 className={styles.headName}>{name1}</h3>
                  </div>
                  <SearchIcon className={styles.searchh} />
                  <MoreVertIcon className={styles.threedot} />
                </Paper>
              ) : (
                ""
              )}

              {chat.map((item) => (
                <>
                  {model ? (
                    <span>
                      {userId == item.sender ? (
                        <p className={styles.chatReceiver}>{item.text}</p>
                      ) : (
                        <p className={styles.chat}>{item.text}</p>
                      )}
                    </span>
                  ) : (
                    <h1 className={styles.err121}>
                      Open a chat to start conservation
                    </h1>
                  )}
                </>
              ))}
            </Container>
            {model ? (
              <div
                style={{
                  padding: " 4px",
                  background: " white",
                  width: "fit-content ",
                  marginBottom: "7px",
                }}
              >
                <form>
                  <AddIcon className={styles.textF} />
                  <TextField
                    style={{ background: "white", width: "24.2em" }}
                    hiddenLabel
                    placeholder="Type a message here"
                    variant="filled"
                  />
                  <EmojiEmotionsIcon className={styles.textFf} />
                  {/* <Button onClick={submit}> */}
                  <SendIcon className={styles.textF2} onClick={submit} />
                  {/* </Button> */}
                </form>
              </div>
            ) : (
              <h1 className={styles.err121}>
                Open a chat to start conservation
              </h1>
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
