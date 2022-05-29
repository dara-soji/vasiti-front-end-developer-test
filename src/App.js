import './App.scss';
import { Experience, Navbar } from './components';
import { Customer, CustomerExperience, Footer, Header, Vendor, VendorExperience } from './container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Customer />
      <CustomerExperience />
      <Vendor />
      <VendorExperience />
      <Footer />
    </div>
  );
}

export default App;
