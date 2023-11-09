import React from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Home from '../Pages/Home'
import Laptop from '../Pages/Laptop'
import Mobile from '../Pages/Mobile/Mobile'
import Iphone from '../Pages/Mobile/Iphone';
import Android from '../Pages/Mobile/Android'
import Tabs from '../Pages/Tablets/Tabs'
import SamsungPads from '../Pages/Tablets/SamsungPads';
import Ipads from '../Pages/Tablets/Ipads';
import HomeKitchen from '../Pages/Home&Kitchen/HomeKitchen'
import Navbar from '../navcompo/Navbar';
import Navupper from '../navcompo/Navupper';
import Beauty from '../Pages/Beauty/Beauty';
import Redmi from '../Pages/Mobile/Redmi';
import Furniture from '../Pages/Home&Kitchen/Furniture';
import HomeDecor from '../Pages/Home&Kitchen/HomeDecor';
import KitchenDinning from '../Pages/Home&Kitchen/Kitchen&Dinning';
import Makeup from '../Pages/Beauty/Makeup';
import Jwellery from '../Pages/Beauty/Jwellery';
import Handbags from '../Pages/Beauty/Handbags';
import Perfumes from '../Pages/Beauty/Perfumes';
import DetailPage from '../Genericompo/DynamicRoute/DetailPage'
const RouteFile = () => {
  return (
    <div>
       <BrowserRouter>
       <Navupper/>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>}/>
    <Route path="/mobile" element={ <Mobile />}/>
    <Route path="/mobile/iphone" element={<Iphone/>} />
    <Route path="/mobile/android" element={<Android/>} />    
     <Route path="/mobile/redmi" element={<Redmi/>}/>
    <Route path="/laptop"  element={<Laptop/>} />
     <Route path="/tablet"   element={<Tabs/>}/>
     <Route path="/tablet/ipads"   element={<Ipads/>}/>
     <Route path="/tablet/sampads"   element={<SamsungPads/>}/>
     <Route path="/homekitchen"  element={<HomeKitchen/>} />
     <Route path="/homekitchen/furniture"  element={<Furniture/>} />
     <Route path="/homekitchen/homedecor"  element={<HomeDecor/>} />
     <Route path="/homekitchen/kitchenDinning"  element={<KitchenDinning/>} />
     <Route path="/beauty"  element={<Beauty/>} />
     <Route path="/beauty/makeup"  element={<Makeup/>} />
     <Route path="/beauty/jwellery"  element={<Jwellery/>} />
     <Route path="/beauty/handbag"  element={<Handbags/>} />
     <Route path="/beauty/perfumes"  element={<Perfumes/>} />
     {/* <Route path="/products/:id/:name" element={<DetailPage/>}/> */}
     <Route path="/detailpage/:id" element={<DetailPage/>}/>


   </Routes>
 </BrowserRouter>
    </div>
  )
}

export default RouteFile
