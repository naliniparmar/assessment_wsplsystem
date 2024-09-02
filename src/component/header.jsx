import React, { useState } from 'react';
//import NavbarCP from './Navbar';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const openPage = (pageName) => {
    setActiveTab(pageName);
  };

  return (
    <div>
      {/* Tab buttons */}
      <button className="tablink" onClick={() => openPage('Home')}>Home</button>
      <button className="tablink" onClick={() => openPage('Assessment')} id="defaultOpen">Assessment Result</button>
      <button className="tablink" onClick={() => openPage('Centers')}>Centers</button>
      <button className="tablink" onClick={() => openPage('Candidates')}>Candidates</button>
      <button className="tablink" onClick={() => openPage('Modules')}>Modules</button>
      <button className="tablink" onClick={() => openPage('Franchise')}>Franchise</button>
      <button className="tablink" onClick={() => openPage('Contacts')}>Contact</button>
      <button className="tablink" onClick={() => openPage('Admin')}>Admin</button>

      {/* Tab content */}
      <div id="Home" className="tabcontent" style={{ display: activeTab === 'Home' ? 'block' : 'none' }}>
        <h3>Home</h3>
        <p>Welcome to our website!</p>
      </div>

      <div id="Assessment" className="tabcontent" style={{ display: activeTab === 'Assessment' ? 'block' : 'none' }}>
        <h3>Assessment Result</h3>
        <p>Check out the latest assessment results.</p>
      </div>

      <div id="Centers" className="tabcontent" style={{ display: activeTab === 'Centers' ? 'block' : 'none' }}>
        <h3>Centers</h3>
        <p>Find a center near you.</p>
      </div>

      <div id="Candidates" className="tabcontent" style={{ display: activeTab === 'Candidates' ? 'block' : 'none' }}>
        <h3>Candidates</h3>
        <p>Information for candidates.</p>
      </div>

      <div id="Modules" className="tabcontent" style={{ display: activeTab === 'Modules' ? 'block' : 'none' }}>
        <h3>Modules</h3>
        <p>Explore the available modules.</p>
      </div>

      <div id="Franchise" className="tabcontent" style={{ display: activeTab === 'Franchise' ? 'block' : 'none' }}>
        <h3>Franchise</h3>
        <p>Learn about franchise opportunities.</p>
      </div>

      <div id="Contacts" className="tabcontent" style={{ display: activeTab === 'Contacts' ? 'block' : 'none' }}>
        <h3>Contacts</h3>
        <p>Get in touch with us.</p>
      </div>

      <div id="Admin" className="tabcontent" style={{ display: activeTab === 'Admin' ? 'block' : 'none' }}>
        <h3>Admin</h3>
        <p>Admin area.</p>
      </div>
    </div>
  );
};

export default Header;
