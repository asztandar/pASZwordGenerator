/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { TextField } from '@mui/material';
import * as React from 'react';
import { SettingsContext } from './../utils/Context';


const ModalSettings = ({open, close}: IModalSettings) => {

  const { settings, updateSettings } = React.useContext(SettingsContext);

  React.useEffect(()=>{
    console.log("settin2g: ", settings);
  },[settings])

  return (
      <Dialog open={open} onClose={()=>close(false)} PaperProps={{className:'modalSettingsDialog'}}>
        <DialogTitle className='modalSettingsDialogTitle'>Ustawienia</DialogTitle>
        <DialogContent className='modalSettingsDialogContent'>
            <FormControlLabel control={<Checkbox onChange={()=>{updateSettings({ upperCase: !settings.upperCase });}}  checked={settings.upperCase}/>} label="Wielkie litery" />
            <FormControlLabel control={<Checkbox onChange={()=>{updateSettings({ lowerCase: !settings.lowerCase });}} checked={settings.lowerCase}/>} label="Małe litery" />
            <FormControlLabel control={<Checkbox onChange={()=>{updateSettings({ digit: !settings.digit });}} checked={settings.digit}/>} label="Cyfry" />
            {/* <FormControlLabel control={<Checkbox onChange={()=>{updateSettings({ special: !settings.special });}} checked={settings.special}/>} label="Znaki specjalne" /> */}
            <Box>
                <Slider defaultValue={8} min={4} max={32} value={settings.length} onChange={(e:any)=>{updateSettings({length: e.target.value});}} aria-label="Default" valueLabelDisplay="auto" />
                <TextField label="Długość" value={settings.length} sx={{width: 'clamp(70px, 80px, 100px)'}}/>
            </Box>
            

        </DialogContent>
        <DialogActions>
          <Button onClick={()=>close(false)}>Zastosuj</Button>
        </DialogActions>
      </Dialog>
  );
}

export default ModalSettings;