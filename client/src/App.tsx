import { useMemo} from "react";
import {createTheme} from "@mui/material/styles";
import { themeSettings } from "./theme";
import { CssBaseline, ThemeProvider} from "@mui/material";



function app() {
  const theme = useMemo(() => createTheme(themeSettings, []))
  return (
    <div>
      <ThemeProvider> theme={theme}
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default app;