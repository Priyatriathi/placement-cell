import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Announcements from './components/Announcements';
import Resources from './components/Resources';
import Footer from './components/Footer';
import FeaturedCompanies from './components/FeaturedCompanies';
import StudentSuccess from './components/StudentSuccess';
import QuickLink from './components/QuickLink';
import Login from './components/Login';
import StudentSignup from './components/StudentSignup';
import CompanySignup from './components/CompanySignup';
import ProfilePage from './components/ProfilePage';
import JobBoard from './components/JobBoard';
import HomePageImage from './components/HomePageImage';
import './App';
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header and NavBar */}
      <Header />
      <NavBar />
      <HomePageImage />
      
      {/* Main Content */}
      <main className="flex-grow p-8 space-y-12">
        <div className="container mx-auto">
          <Announcements />
          <Resources />
          <JobBoard />
        </div>
        
        {/* Featured Section */}
        <section className="container mx-auto">
          <FeaturedCompanies />
          <StudentSuccess />
        </section>
      </main>

      {/* Quick Links Section */}
      <QuickLink />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;



