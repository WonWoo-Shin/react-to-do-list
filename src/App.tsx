import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme.ts";
import { GlobalStyle } from "./styles/GlobalStyle.tsx";
import Home from "./components/Home.tsx";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
