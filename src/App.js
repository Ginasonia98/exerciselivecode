import './App.css';
import ResponsiveHeader from './Header';
import { FakeDataProvider, Pagination } from './Pagination'; // Menyertakan FakeDataProvider dan Pagination dari file Pagination.js
import RegistrationForm from './Registrasion';

function App() {
  return (
    <div className="App">
      <ResponsiveHeader/>
      <RegistrationForm/>
      <FakeDataProvider>
        <Pagination/>
      </FakeDataProvider>
    </div>
  );
}

export default App;

