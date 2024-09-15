import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Announcements from './components/Announcements';
import Resources from './components/Resources';
import Footer from './components/Footer';
import FeaturedCompanies from './components/FeaturedCompanies';
import StudentSuccess from './components/StudentSuccess';
import QuickLink from './components/QuickLink';
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header and NavBar */}
      <Header />
      <NavBar />

      {/* Main Content */}
      <main className="flex-grow p-8">
        <Announcements />
        <Resources />
      </main>
<FeaturedCompanies/>
<StudentSuccess/>
<QuickLink/>
      {/* Footer - Stick at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
