import { useState, useMemo } from 'react';
import { useAuth } from '../../context/AuthContext';
import Login from './Login';
import Tabs from './Tabs';
import ProductInfo from './ProductInfo';
import Calculator from './Calculator';
import { FaUser } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('product-insights');
  const [activeTab, setActiveTab] = useState('info-section');
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const handleClose = () => {
    const sidebar = document.getElementById('amazon-seller-sidebar-root');
    if (sidebar) {
      sidebar.style.display = 'none';
    }
  };

  // Memoize both sections
  const productInsightsContent = useMemo(() => (
    <div style={{ display: activeSection === 'product-insights' ? 'block' : 'none' }}>
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      <ProductInfo />
      <Calculator />
    </div>
  ), [activeTab]);

  const sellerInsightsContent = useMemo(() => (
    <div 
      id="seller-insights" 
      style={{ 
        height: '500px', 
        background: 'pink', 
        marginTop: '10px',
        display: activeSection === 'seller-insights' ? 'block' : 'none'
      }} 
    />
  ), [activeSection]);

  return (
    <div className="sidebar-content">
      <header className="header">
        <div className="dd">
          <button id="close-button" onClick={handleClose}>✕</button>
          <div className="header-icons" style={{ color: 'white'}}>
            {currentUser ? (
              <div className="user-menu">
                <FaUser size={20} />
                <div className="dropdown-content">
                  <p style={{ color: 'black' }}>Name: {currentUser?.displayName}</p> 
                  <p style={{ color: 'black' }}>Email: {currentUser?.email}</p>
                  <button 
                    style={{ 
                      backgroundColor: '#0E4DA4', 
                      color: 'white', 
                      border: 'none', 
                      cursor: 'pointer', 
                      padding: '5px 10px', 
                      borderRadius: '5px' 
                    }} 
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </header>

      {currentUser ? (
        <>
          <div className="nav-buttons">
            <button 
              className={`nav-btn ${activeSection === 'product-insights' ? 'active' : ''}`}
              onClick={() => setActiveSection('product-insights')}
            >
              Product Insights
            </button>
            <button 
              className={`nav-btn ${activeSection === 'seller-insights' ? 'active' : ''}`}
              onClick={() => setActiveSection('seller-insights')}
            >
              Seller Insights
            </button>
          </div>

          {/* Both sections are always mounted, just hidden/shown */}
          {productInsightsContent}
          {sellerInsightsContent}
        </>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
};

export default Sidebar;