import * as React from "react";
import IHeaderProps from "../interfaces/IHeader";
import MyContext from "../utils/Context";

const Header = ({ children, className }: IHeaderProps) => {
  const context = React.useContext(MyContext);

  console.log("contextt:",context)
  return (
    <header className={className}>
        {children}
    </header>
  )  
};
Header.defaultProps = {
    className: ""
};
export default Header;
