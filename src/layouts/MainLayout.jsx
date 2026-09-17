import {Outlet} from "react-router";
import Navbar from '../component/navbar'
import Footer from '../component/footer'

function   MainLayout() {
    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <Navbar/>

                <div className="flex-grow-1">
                    <Outlet />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default MainLayout