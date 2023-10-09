import { Routes, Route, BrowserRouter } from "react-router-dom"
import AboutPage from "../pages/AboutPage"
import { AddUpdatePage } from "../pages/AddUpdatePage"
import { HomePage } from "../pages/HomePage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/add-update" element={<AddUpdatePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </BrowserRouter>
        
    )

}