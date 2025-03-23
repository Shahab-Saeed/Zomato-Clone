import { createRoot } from "react-dom/client";
import "./index.css";
import Header from './Components/Header/Header'
import Mainsection1 from "./Components/Mainsection1/Mainsection1";
import { assets } from "./assets/assets";
import Collections from "./Components/Collections/Collections";
import Mainsection2 from "./Components/Mainsection2/Mainsection2";
import Optionsection from "./Components/Optionsection/Optionsection";
import Footer from "./Components/Footer/Footer";
import Mainsection3 from "./Components/Mainsection3/Mainsection3";

createRoot(document.getElementById("root")).render(
  
  <>
   <Header/>
    <div className="mainsection11">
      <Mainsection1
        img={assets.p1}
        heading={"Order Online"}  
        paragraph={"Stay home and order to your doorstep"}
      />
      <Mainsection1
        img={assets.p2}
        heading={"Dining"}
        paragraph={"View the city's favourite dining venues"}
      />
      <Mainsection1
        img={assets.p3}
        heading={"Live Events"}
        paragraph={"Discover India’s best events & concerts"}
      />
    </div>
    <Collections/>  
      <Mainsection2/>
    <Mainsection3/>
      <Optionsection/>
      <Footer/>
  </>
);
