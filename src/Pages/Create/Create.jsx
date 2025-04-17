import React, { useState } from "react";
import "./Create.css";
import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.shoma.main,
    scale: "0.99",
  },
}));

const Create = () => {

  const [title,settitle] = useState("")
  const [price,setprice] = useState(0)
  const navigate = useNavigate();

  return (
    <Box noValidate autoComplete="off" sx={{ width:{xs:'250',sm:"360px"},m:'auto'}} component="form">
      <TextField
      onChange={(e)=>{
        settitle(e.target.value)
      }}
        fullWidth={true}
        label="Transaction title"
        variant="filled"
        id="filled-basic"
        sx={{ mt: "22px", display: "block" ,width:'auto' }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">&#128073;</InputAdornment>
            ),
          },
        }}
      />

      <TextField
      onChange={(e)=>{
        setprice(Number(e.target.value))
      }}
        label="Price"
        fullWidth={true}
        variant="filled"
        id="filled-basic"
        sx={{ mt: "22px", display: "block" ,width:'auto'}}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
      />

      <ColorButton onClick={(params)=>{
        fetch("http://localhost:3100/mydata",{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          
          body:JSON.stringify({title,price})
        })
        .then(()=>{navigate("/")})

      }
      } sx={{ mt: "22px" }} variant="contained">
        Submit <KeyboardArrowRightIcon />
      </ColorButton>
    </Box>
  );
};
export default Create;
