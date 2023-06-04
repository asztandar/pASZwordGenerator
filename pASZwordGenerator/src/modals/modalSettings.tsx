import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IModalSettings from '../interfaces/IModalSettings';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';

const ModalSettings = ({open, close}: IModalSettings) => {

  return (
      <Dialog open={open} onClose={()=>close(false)} PaperProps={{className:'modalSettingsDialog'}}>
        <DialogTitle className='modalSettingsDialogTitle'>Ustawienia</DialogTitle>
        <DialogContent className='modalSettingsDialogContent'>
            <FormControlLabel control={<Checkbox />} label="Wielkie litery" />
            <FormControlLabel control={<Checkbox />} label="Małe litery" />
            <FormControlLabel control={<Checkbox />} label="Cyfry" />
            <FormControlLabel control={<Checkbox />} label="Znaki specjalne" />
            <Box>
                <Slider defaultValue={8} min={4} max={32}  aria-label="Default" valueLabelDisplay="auto" />
                <TextField label="Długość" value={null}/>
            </Box>
            

        </DialogContent>
        <DialogActions>
          <Button onClick={()=>close(false)}>Zastosuj</Button>
        </DialogActions>
      </Dialog>
  );
}

export default ModalSettings;