import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingIcons from './components/FloatingIcons';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Admissions Pages
import BTech from './pages/admissions/BTech';
import MBA from './pages/admissions/MBA';
import MCA from './pages/admissions/MCA';
import Degree from './pages/admissions/Degree';
import Undergraduate from './pages/admissions/Undergraduate';
import Postgraduate from './pages/admissions/Postgraduate';
import Diploma from './pages/admissions/Diploma';
import Medical from './pages/admissions/Medical';
import OtherState from './pages/admissions/OtherState';
import TelanganaState from './pages/admissions/TelanganaState';
import Agriculture from './pages/admissions/Agriculture';
import Abroad from './pages/Abroad';
import ApplicationAssistance from './pages/ApplicationAssistance';

import './App.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>
      <FloatingIcons />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admissions Dropdown Routes */}
        <Route path="/admissions" element={<Outlet />}>
          <Route path="btech" element={<BTech />} />
          <Route path="medical" element={<Medical />} />
          <Route path="mba" element={<MBA />} />
          <Route path="mca" element={<MCA />} />
          <Route path="diploma" element={<Diploma />} />
          <Route path="degree" element={<Degree />} />
          <Route path="agriculture" element={<Agriculture />} />
          <Route path="other-state" element={<OtherState />} />
          <Route path="telangana-state" element={<TelanganaState />} />
          <Route path="undergraduate" element={<Undergraduate />} />
          <Route path="postgraduate" element={<Postgraduate />} />
        </Route>

        <Route path="/application-assistance" element={<ApplicationAssistance />} />
        <Route path="/abroad" element={<Abroad />} />
      </Routes>
    </Layout>
  );
}

export default App;
