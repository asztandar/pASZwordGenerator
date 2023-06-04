interface IContext {
    settings: {
      length: number;
      upperCase: boolean;
      lowerCase: boolean;
      digits: boolean;
      specialSigns: boolean;
    };
    darkMode: boolean;
  }
  
  export default IContext;
  