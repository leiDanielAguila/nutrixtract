import LandingPage from "./pages/LandingPage";
import ThankyouPage from "./pages/ThankyouPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <>
      <MantineProvider>
        <Routes>
          <Route path="/" element={<LandingPage /> }/>
          <Route path="/thankyou" element={<ThankyouPage/>}/>
        </Routes>
      </MantineProvider>
    </>
  );
}

export default App;
