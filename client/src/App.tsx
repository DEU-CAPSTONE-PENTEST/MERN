import { useRoutes } from "react-router-dom";




import Navbar from "./scenes/navbar";
import routes from "./routes";
import { ThemeProvider } from "@emotion/react";
import { themeSettings } from "./theme";
import { Box, CssBaseline } from "@mui/material";
import Dashboard from "./scenes/dashboard";
import routes from "./routes";
function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <Navbar />
          {/* useRoutes ile routes dosyasındaki tanımlanan sayfaları görüntülemek için kullanılır */}
          {useRoutes(routes)}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
