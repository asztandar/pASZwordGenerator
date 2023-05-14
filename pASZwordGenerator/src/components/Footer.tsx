import IFooterProps from "../interfaces/IFooter";

const Footer = ({ children, className }: IFooterProps) => {
  return (
    <footer className={className}>
        {children}
    </footer>
  )  
};

Footer.defaultProps = {
    className: ""
};
export default Footer;
