import Header from "./header/Header";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Destination from "./Destination/Destination";
import Booking from "./Booking/Booking";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
     <div>
        <Header/>
        <Hero/>
        <Services/>
        <Destination/>
        <Booking/>
        <Subscribe/>
        <Footer/>
     </div>
    </div>
  );
}

export default App;
