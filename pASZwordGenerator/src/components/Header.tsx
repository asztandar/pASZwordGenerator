import IHeaderProps from "../interfaces/IHeader";

const Header = ({ children, className }: IHeaderProps) => {
  return (
    <header className={className}>
        {children}
    </header>
  )  
};

export default Header;
