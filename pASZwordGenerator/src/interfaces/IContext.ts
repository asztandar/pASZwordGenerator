/* eslint-disable @typescript-eslint/no-explicit-any */

interface ISettings {
     length: number,
     upperCase: boolean,
     lowerCase: boolean,
     digit: boolean,
     special: boolean,
     darkmode: boolean
}
interface IContext {
     settings: ISettings,
     setSettings: React.Dispatch<React.SetStateAction<object | any>>
}

export default IContext;