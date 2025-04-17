import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Divider,
  FormControlLabel,
  Checkbox,
  useTheme,
} from "@mui/material";
import { Delete, Save } from "@mui/icons-material";

const Settings = () => {
  const theme = useTheme();

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const handleToggleNotifications = (event) => {
    setNotifications({
      ...notifications,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#f5f5f5",
        color: theme.palette.text.primary,
        p: 3,
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: "100%",
          p: 3,
          borderRadius: 3,
          boxShadow: 3,
          backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
            Settings
          </Typography>

          {/* Change Password */}
          <Typography variant="h6" fontWeight="bold">
            Change Password
          </Typography>
          <TextField
            type="password"
            label="New Password"
            fullWidth
            sx={{
              mt: 1,
              input: { color: theme.palette.text.primary },
              label: { color: theme.palette.text.secondary },
            }}
          />
          <TextField
            type="password"
            label="Confirm Password"
            fullWidth
            sx={{
              mt: 2,
              mb: 2,
              input: { color: theme.palette.text.primary },
              label: { color: theme.palette.text.secondary },
            }}
          />
          <Button variant="contained" startIcon={<Save />} fullWidth>
            Save Changes
          </Button>

          <Divider sx={{ my: 3, backgroundColor: theme.palette.divider }} />

          {/* Notification Preferences */}
          <Typography variant="h6" fontWeight="bold">
            Notifications
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={notifications.email}
                onChange={handleToggleNotifications}
                name="email"
                sx={{ color: theme.palette.primary.main }}
              />
            }
            label="Email Notifications"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={notifications.sms}
                onChange={handleToggleNotifications}
                name="sms"
                sx={{ color: theme.palette.primary.main }}
              />
            }
            label="SMS Notifications"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={notifications.push}
                onChange={handleToggleNotifications}
                name="push"
                sx={{ color: theme.palette.primary.main }}
              />
            }
            label="Push Notifications"
          />

          <Divider sx={{ my: 3, backgroundColor: theme.palette.divider }} />

          {/* Delete Account */}
          <Button variant="outlined" color="error" startIcon={<Delete />} fullWidth>
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Settings;
