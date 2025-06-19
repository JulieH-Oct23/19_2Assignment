import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ConstructionPage from '../pages/ConstructionPage';
import HomePage from '../pages/HomePage';
import PlanetsPage from '../pages/PlanetsPage';
import SpacecraftPage from '../pages/SpacecraftPage';
import SpacecraftsPage from '../pages/SpacecraftsPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/spacecrafts" element={<SpacecraftsPage />} />
      <Route path="/spacecrafts/new" element={<ConstructionPage />} />
      <Route path="/spacecraft/:id" element={<SpacecraftPage />} />
      <Route path="/planets" element={<PlanetsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

export default AppRoutes;