/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext} from 'react';
import IContext from '../interfaces/IContext';

const appCtxDefaultValue = {
    state: {
      settings: {
        length: 0,
        upperCase: true,
        lowerCase: true,
        digits: true,
        specialSigns: true,
      },
      darkmode: false
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setState: (state: IContext)=> {}
  };

const MyContext = createContext(appCtxDefaultValue);
  

export default MyContext;