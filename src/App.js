import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { UserProvider } from './context/UserContext';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';
import CoursePage from './pages/CoursePage';
import AboutPage from './pages/AboutPage';
import TarifsPage from './pages/TarifsPage';
import CoursesPage from './pages/CoursesPage';
import LanguagesPage from './pages/LanguagesPage';
import AdminPage from './pages/AdminPage';
import './App.css';

function App() {
  return (
    <UserProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
            <Route path="/course/anglais-debutant" element={<CoursePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tarifs" element={<TarifsPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/languages" element={<LanguagesPage />} />
            <Route path="/admin" element={<AdminPage />} />
          {/* Ajoutez d'autres routes ici au besoin */}
        </Routes>
      </Layout>
    </Router>
    </UserProvider>
  );
}

export default App;
