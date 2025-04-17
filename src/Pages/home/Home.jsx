import { Box, IconButton, Paper, Typography } from "@mui/material";
import "./Home.css";
import * as React from "react";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
const Home = () => {
  const [mydata, setmydata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, [ ]);

  let totalprice = 0;

  return (
    <Box>
      {mydata.map((el) => {
        totalprice += el.price;
        return (
          <Paper
            key={el.id}
            sx={{
              m: "auto",
              display: "flex",
              justifyContent: "space-between",
              width: { xs: "250px", sm: "366px" },
              mt: "5px",
              pt: "27px",
              pb: "7px",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                ml: "16px",
                fontSize: "1.3em",
              }}
              variant="h6"
            >
              {el.title}
            </Typography>
            <Typography
              sx={{
                mr: "33px",
                fontWeight: 500,
                fontSize: "1.4em",
                opacity: "0.8",
              }}
              variant="h6"
            >
              {el.price} $
            </Typography>
            <IconButton
              onClick={(params) => {
                fetch(`http://localhost:3100/mydata/${el.id}`, {
                  method: "DELETE",
                }).then(() => {});

                const newArr = mydata.filter((myobject)=>{
                  return myobject.id !== el.id
                })

                setmydata(newArr);
                
              }}
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
              }}
            >
              <Close />
            </IconButton>
          </Paper>
        );
      })}

      <Typography
        sx={{
          display: "fkex",
          justifyContent: "center",
          alignItems: "center",
          margin: "25px auto",
          fontWeight: "800",
        }}
      >
        you spent {totalprice} $
      </Typography>
    </Box>
  );
};

export default Home;
