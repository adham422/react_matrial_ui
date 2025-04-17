import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import imgavatar from "../images/img2.jpeg";
const Profile = () => {
  const user = {
    name: "Adham Hashem",
    email: "adham@example.com",
    bio: "Front End Developer | React.js | Coffee Lover",
    avatar: imgavatar,
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: "100%",
          textAlign: "center",
          p: 3,
          boxShadow: 3,
          borderRadius: 3,
        }}
      >
        <Avatar
          src={user.avatar}
          alt={user.name}
          sx={{
            width: 100,
            height: 100,
            margin: "0 auto",
            boxShadow: 2,
          }}
        />
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            {user.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {user.email}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2">{user.bio}</Typography>
          <Button
            variant="contained"
            startIcon={<Edit />}
            sx={{ mt: 3, px: 3 }}
          >
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
