import './App.css';
import ResponsiveHeader from './Header';
import Pagination from './Pagination';
import RegistrationForm from './Registrasion';

function App() {
  return (
    <div className="App">
      <ResponsiveHeader/>
      <RegistrationForm/>
      <Pagination/>
    </div>
  );
}

export default App;
