import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Slide from './Component/Slide';
import Navbar from './Component/Navbar';
import Review from './Component/Review';

function App() {
  return (
    <div>
    <Navbar/>
    <Slide/>   
    <Review/>  
    </div>
  );
}

export default App;
