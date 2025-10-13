// src/App.jsx
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Componenten/HomePage';
import DetailPage from './Componenten/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animal/:id" element={<DetailPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;