import SiderHeader from "./componets/SideBar";
import Slider from "./componets/Slider";
import News from "./componets/News";
import SchoolForm from "./componets/SchoolForm";
import Navbar from "./componets/Navbar";
import Activity from "./componets/Activities";

export default function App() {
  return (
    <>
      {/* <div className="row "> */}
      {/* <div className="col-2"> */}
      {/* <SiderNavbar /> */}
      {/* </div> */}
      {/* <div className="col-10"> */}
      <Navbar />
      <Slider />
      <News />
      <SchoolForm />
      <Activity />
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
