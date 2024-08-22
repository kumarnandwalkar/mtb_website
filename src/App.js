// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
// import AppointmentForm from './components/AppointmentForm';
import FirstImage from './components/FirstImage';

function App() {
  return (
   <>
    <Navbar/>
    <div className="container mt-5"> {/* Bootstrap container for padding */}
        {/* <img
          src={FirstImage}
          className="img-fluid"
          alt="Descriptive Alt Text"
        /> */}
      <FirstImage/>
      </div>
   </>
  );
}

export default App;
