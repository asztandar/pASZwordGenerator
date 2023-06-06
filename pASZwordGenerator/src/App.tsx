/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Main from './components/Main';
import Footer from './components/Footer';
import logoImg from './assets/logo.png';
import Image from './components/Image';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import ModalSettings from './modals/modalSettings';
import { SettingsProvider } from './utils/Context';

function App() {

  const [openModalSettings, setOpenModalSettings] = useState<boolean>(false);

  const handleClickSettings = () => {
    setOpenModalSettings(true);
  };

  return (
    <SettingsProvider>
      <div className="pageWrapper">
        <Box className="containerBox">
          <Header>
            <Box id="logoBox">
              <Image imgSRC={logoImg} className="img" />
              <Typography id="logoBoxTypography">
                P<span className="spanBlue">A</span>
                <span className="spanRed">SZ</span>WORD GENERATOR
              </Typography>
            </Box>
          </Header>
          <Main>
            <Box id="mainBox">
              <Box className="boxInput">
                <TextField
                  sx={{ '& .MuiOutlinedInput-root': { height: '100%' } }}
                  id="boxInputTextField"
                  placeholder="wygenerowane hasło"
                />
                <Button id="boxInputButton" variant="contained">
                  Generuj
                </Button>
              </Box>
              <Box className="boxSettings">
                <TextField
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '100%',
                      visibility: 'hidden',
                    },
                  }}
                  id="boxSettingsTextField"
                />
                <Button
                  id="boxSettingsButton"
                  variant="contained"
                  onClick={() => handleClickSettings()}
                >
                  <SettingsIcon />
                </Button>
              </Box>
            </Box>
          </Main>
          <Footer>
            <Box id="footerBox">
              <Link href="http://aszapp.ct8.pl/" underline="hover">
                ASZAPP
              </Link>
            </Box>
          </Footer>
        </Box>
        <ModalSettings open={openModalSettings} close={setOpenModalSettings} />
      </div>
    </SettingsProvider>
  );
}

export default App;
