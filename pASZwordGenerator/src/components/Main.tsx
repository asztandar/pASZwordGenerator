import IMainProps from "../interfaces/IMain";

const Main = ({ children, className }: IMainProps) => {
  return (
    <main className={className}>
        {children}
    </main>
  )  
};

Main.defaultProps = {
    className: ""
};
export default Main;
