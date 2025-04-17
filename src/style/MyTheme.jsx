


const getDesignTokens = (myMode)=>({
    palette: {
            mode: myMode,
            ...(myMode === "light"
              ? {
                  primary: { main: "#1976d2" },
                  secondary: { main: "#90a4ae" },
                  background: { default: "#f5f5f5", paper: "#ffffff" },
                  text: { primary: "#000000", secondary: "#757575" },
                  shoma: { main: "#64748B" },
                }
              : {
                  primary: { main: "#00a0b2" },
                  secondary: { main: "#37474f" },
                  background: { default: "#121212", paper: "#1e1e1e" },
                  text: { primary: "#ffffff", secondary: "#b0bec5" },
                  shoma: { main: "#b0bec5" },
                }),
          },
});

export default getDesignTokens;