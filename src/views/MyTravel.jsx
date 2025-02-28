import { React, useEffect, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Profile from "./../assets/profile.png";
import { Link } from "react-router-dom";
function MyTravel() {
  const [travellerFullname, setTravellerFullname] = useState("");
  const [travellerEmail, setTravellerEmail] = useState("");
  const [travellerImage, setTravellerImage] = useState("");

  useEffect(() => {
    //take data from localstorage and show at AppBar
    //read data in memory
    
    const traveller = JSON.parse(localStorage.getItem("traveller"));
    //take data from variable and use with state

    setTravellerFullname(traveller.travellerFullname);
    setTravellerEmail(traveller.travellerEmail);
    setTravellerImage(traveller.travellerImage);
  }, []);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          {/* AppBar====================================== */}
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <FlightTakeoffIcon sx={{ color: "yellow" }} />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                บันทึกการเดินทาง
              </Typography>
              {/* Go to editprofile===============================*/}
              <Link to="/editprofile">
              <Button color="inherit">{travellerFullname}</Button>
              </Link>
              <Avatar
              src={
                travellerImage
                  ? `http://localhost:4000/images/traveller/${travellerImage}`
                  : Profile
              }
            />
              <Link
                to="/"
                style={{
                  color: "red",
                  textDecoration: "none",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
              >
                LOG OUT
              </Link>
            </Toolbar>
          </AppBar>
          {/* AppBar====================================================== */}
        </Box>
        <Box sx={{ width: "70%", boxShadow: 4, mx: "auto", p: 5, my: 4 }}>
          <Typography variant="h4" component="div" sx={{ textAlign: "center" }}>
            การเดินทางของฉัน
          </Typography>
          {/* Go to AddMyTravel============================================*/}
          <Link
            to="/addmytravel"
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "10px",
              fontWeight: "bold",
            }}
          >
            <Button fullWidth variant="contained" sx={{ py: 2 }}>
              เพิ่มการเดินทาง
            </Button>
          </Link>

        </Box>
      </Box>
    </>
  );
}

export default MyTravel;