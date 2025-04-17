import * as React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../MUI-components/Appbar";
import Drawer from "../MUI-components/Drawer";
import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useMemo } from "react";
import getDesignTokens from "../style/MyTheme";

const drawerWidth = 240;

export default function Root() {
  const [myMode, setMymode] = React.useState(
    localStorage.getItem("currentMode") || "light"
  );

  React.useEffect(() => {
    localStorage.setItem("currentMode", myMode);
  }, [myMode]);

  const theme = useMemo(() => createTheme(getDesignTokens(myMode)), [myMode]);
  const [noneORblock, setnoneORblock] = useState("none");
  const [draweType, setdraweType] = useState("permanent");

  const showDrawer = () => {
    setdraweType("temporary");
    setnoneORblock("block");
  };
  const hideDrawer = () => {
    setnoneORblock("none");
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar
          setMymode={setMymode}
          showDrawer={showDrawer}
          setnoneORblock={setnoneORblock}
          setdraweType={setdraweType}
        />
        <Drawer
          setMymode={setMymode}
          setnoneORblock={setnoneORblock}
          noneORblock={noneORblock}
          draweType={draweType}
          hideDrawer={hideDrawer}
        />
        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px ` },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
}
