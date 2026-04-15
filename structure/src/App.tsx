import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import MainPage from './pages/MainPage';
import CreateFairytaleLoginPage from './pages/CreateFairytaleLoginPage';
import MembershipMyPage from './pages/MembershipMyPage';

function App() {
  const siteName = "팅커펜";

  return (
    <Layout siteName={siteName}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create-fairytale-login" element={<CreateFairytaleLoginPage />} />
        <Route path="/membership-my-page" element={<MembershipMyPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
