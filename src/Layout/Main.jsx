import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Main = () => {
    return (
        <div>
          <Outlet></Outlet>  
          <Header></Header>
          <Footer/>
        </div>
    );
};

export default Main;