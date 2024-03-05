import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { About, Contact, Intro, Navbar, Projects, Skills} from './components'
import { createTheme, ThemeProvider } from "@mui/material";


function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Playfair Display'].join(','),
      }

  })
  return (
    
    <main className="App">
       <CssBaseline />
       <ThemeProvider theme={theme}>
          <Navbar />
       </ThemeProvider>
       <Intro />
       <Skills />
       <About />
       <Contact />
       <Projects />
       <Skills />

  

    </main>
  );
}

export default App;
