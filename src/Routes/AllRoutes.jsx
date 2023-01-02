import { Route, Routes } from "react-router-dom"
import PrivateRoute from "../Components/PrivateRoutes"
import { BrandKits } from "./Pages/BrandKits"
import { Dashboard } from "./Pages/Dashboard"
import { Home } from "./Pages/Home"
import { Instavideos } from "./Pages/InstaVids"
import Login from "./Pages/Login"
import { Savedtemplates } from "./Pages/SavedTemp"
import SignUp from "./Pages/Signup"



export const AllRoutes=()=>{

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup'element={<SignUp/>} />

            <Route path='/dashboard' element={
            <PrivateRoute>

                <Dashboard/>
            </PrivateRoute>
            
            }/>
          <Route path='/dashboard/instavideos' element={<Instavideos/>} />
          <Route path='/dashboard/brandkits' element={<BrandKits/>} />
          <Route path='/dashboard/savedtemplates' element={<Savedtemplates/>} />
        </Routes>
    )
}