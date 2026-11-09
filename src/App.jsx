import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import StoriaDelSake from './pages/StoriaDelSake.jsx';

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storia-del-sake" element={<StoriaDelSake />} />
      </Routes>
    </>
  );
}

export default App;
