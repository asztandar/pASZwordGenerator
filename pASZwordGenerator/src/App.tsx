import './App.css';
import Header from './components/Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <div className='pageWrapper'>
      <Header className="">
        <Box id="logoBox">
          <Typography>Miejsce na logo</Typography>
        </Box>
      </Header>

    </div>
  )
}

export default App
