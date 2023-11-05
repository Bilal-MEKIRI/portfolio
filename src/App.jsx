import './global.scss';

import { Route, Routes } from 'react-router-dom';
import Template from './components/Template/Template';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
