
// import './App.css';

// import Home from './Home/Home';
 
// function App() {
//   return (
//     <div className="App">
// <Home/>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Home from './Home/Home'; 
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Addcard from './Addcard/Addcard';
import Addtofile from './Addtofile/Addtofile'
import Subcardfunction from './Subcardfunction/Subcardfunction';
import Filecard from './Filecard/Filecard';
import Addfilecard from './Addfilecard/Addfilecard'
import Subnavbar from './Subnavbar/Subnavbar'
import Footer from './Footer/Footer';
import Topcourse from './Topcourse/Topcourse';
import Yourcourse from './Yourcourse/Yourcourse';
import Newfiles from './Newfiles/Newfiles';
import Dropdown from './Dropdown/Dropdown';
import Cards from './Cards/Cards';
import Loginform from './Loginform/Loginform';





const App = () => {
  return (
    <div>
        <Home />  
       <Subnavbar />
       <Navbar />
      <Header />
<Newfiles />
      <Addcard />
      <Addtofile />
      <Subcardfunction />
      <Yourcourse />
      <Filecard />
      <Addfilecard />
      <Dropdown /><br /><br /><br /><br /><br /><br /><br /><br />
      <Topcourse /> 
      <Cards />
      <Footer />
      <Loginform />
      
    </div>
  );
};

export default App;
