import LandingPage from './pages/LandingPage';

import './App.css'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <>
     <MantineProvider>
      <LandingPage />
     </MantineProvider>
    </>
  )
}

export default App
