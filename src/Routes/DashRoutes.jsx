import { Route, Routes } from "react-router-dom"
import PrivateRoute from "../Components/PrivateRoutes"

import { AllVideos } from "./Pages/AllVideos"

export const DashRoutes=()=>{

    return<Routes>
        <Route path='/' element={
        <PrivateRoute>
            <AllVideos/>
            </PrivateRoute>
        
        } />
        {/* <Route path='/instavideos' element={<Instavideos/>} />
        <Route path='/dashboard/brandkits' element={<Heading><BrandKits/></Heading>} />
        <Route path='/dashboard/savedtemplates' element={<Heading>Saved templates</Heading>} /> */}
    </Routes>

}