import Header from "../Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer";

const Layout = () => {
    return (
        <div className="layout-container">
            <Header/>
            <main className="layout-content">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;