import './App.css';
import Header from './components/Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Main from './components/Main';
import Footer from './components/Footer';
import logoImg from './assets/logo.png';
import Image from './components/Image';
function App() {

  return (
    <div className='pageWrapper'>
      <Box className="containerBox">
        <Header>
          <Box id="logoBox">
            <Image imgSRC={logoImg} className="img"/>
            <Typography id='logoBoxTypography'>P<span className='spanBlack'>A</span><span className='spanRed'>SZ</span>WORD GENERATOR</Typography>
          </Box>
        </Header>
        <Main>
          <Box id="mainBox">
            <Typography>Miejsce na kontent</Typography>
          </Box>
        </Main>
        <Footer>
          <Box id="footerBox">
            <Typography>Miejsce na stopkę</Typography>
          </Box>
        </Footer>
      </Box>
    </div>
  )
}

export default App
