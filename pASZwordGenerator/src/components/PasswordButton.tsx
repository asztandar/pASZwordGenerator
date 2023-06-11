import * as React from 'react';
import { SettingsContext } from './../utils/Context';
import Button from '@mui/material/Button';
import GeneratePassword from '../utils/GeneratePassword';

const PasswordButton = (props: any) => {

  const { settings, updateSettings } = React.useContext(SettingsContext);

React.useEffect(()=>{
    props.setPassword(settings.password)
},[settings])

  return(
    <Button onClick={()=>{updateSettings({ password: GeneratePassword(settings) })}} id="boxInputButton" variant="contained">
                  Generuj
    </Button>
  )

}

export default PasswordButton;