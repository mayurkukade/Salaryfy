import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing.page';
import GraduateFresher from './pages/graduate-fresher.page';


export default function FresherSkillPlacementModule() {
  return (
    <Routes>
      <Route path="" element={<LandingPage />} />
      <Route path="graduate-fresher" element={<GraduateFresher />} />
    </Routes>
  );
}
