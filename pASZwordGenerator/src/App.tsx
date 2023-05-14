import './App.css';
import Header from './components/Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Main from './components/Main';

function App() {

  return (
    <div className='pageWrapper'>
      <Header className="">
        <Box id="logoBox">
          <Typography>Miejsce na logo</Typography>
        </Box>
      </Header>
      <Main>
        <Box id="logoBox">
          <Typography>Miejsce na kontent</Typography>
        </Box>
      </Main>

    </div>
  )
}

export default App
