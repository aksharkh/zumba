import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Instructors from './pages/Instructors';
import Classes from './pages/Classes';
import Join from './pages/Join';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Layout>
  );
}

export default App;
