import { useState, useMemo, useRef } from 'react';
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

  const infoSectionRef = useRef(null);
  const rankPriceSectionRef = useRef(null);
  const chartSectionRef = useRef(null);
  const calculatorSectionRef = useRef(null);

  const handleTabChange = (tabId : string) => {
    setActiveTab(tabId);

    const refMap = {
      'info-section': infoSectionRef,
      'rank-price-section': rankPriceSectionRef,
      'chart-section': chartSectionRef,
      'calculator-section': calculatorSectionRef
    };

    const targetRef = refMap[tabId];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  const productInsightsContent = useMemo(() => (

    <div 
      className="product-insights-content"
      style={{ 
        display: activeSection === 'product-insights' ? 'block' : 'none',
        height: 'calc(100vh - 100px)',
      }}
    >
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />

      <div ref={infoSectionRef} id="info-section" className="section">
        <ProductInfo />
      </div>

      <div ref={rankPriceSectionRef} id="rank-price-section" className="section">
        <div className="table-header2">Rank & Price</div>
        <div className="rank-price-content" style={{ height: '200px', background: 'blue', marginTop: '10px'}}>
        </div>
      </div>

      <div ref={chartSectionRef} id="chart-section" className="section">
        <div className="table-header3">Chart</div>
        <div className="chart-content" style={{ height: '200px', background: 'green', marginTop: '10px'}}>
        </div>
      </div>

      <div ref={calculatorSectionRef} id="calculator-section" className="section">
        <Calculator />
      </div>
    </div>
  ), [activeTab, activeSection]);

  const sellerInsightsContent = useMemo(() => (
    <div 
      id="seller-insights" 
      style={{ 
        height: 'calc(100vh - 100px)',
        background: 'pink',
        marginTop: '10px',
        display: activeSection === 'seller-insights' ? 'block' : 'none',
        overflowY: 'auto'
      }} 
    >
      <h2>Seller Insights</h2>
      <p>Seller analytics and data will be displayed here.</p>
    </div>
  ), [activeSection]);


  return (
    <div className="sidebar-content">
      <header className="header">
        <div className="dd">
          <button id="close-button" onClick={handleClose}>✕</button>
          <div className="header-icons">
            {currentUser && (
              <div className="user-menu">
                <FaUser size={20} color="white" />
                <div className="dropdown-content">
                  <p>Name: {currentUser?.displayName}</p>
                  <p>Email: {currentUser?.email}</p>
                  <button 
                    style={{ backgroundColor: '#0E4DA4', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
                    className="logout-button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
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

          {productInsightsContent}
          {sellerInsightsContent}
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Sidebar;




  

//   return (
//     <div className="sidebar-content">
//       <header className="header">
//         <div className="dd">
//           <button id="close-button" onClick={handleClose}>✕</button>
//           <div className="header-icons" style={{ color: 'white'}}>
//             {currentUser ? (
//               <div className="user-menu">
//                 <FaUser size={20} />
//                 <div className="dropdown-content">
//                   <p style={{ color: 'black' }}>Name: {currentUser?.displayName}</p> 
//                   <p style={{ color: 'black' }}>Email: {currentUser?.email}</p>
//                   <button 
//                     style={{ 
//                       backgroundColor: '#0E4DA4', 
//                       color: 'white', 
//                       border: 'none', 
//                       cursor: 'pointer', 
//                       padding: '5px 10px', 
//                       borderRadius: '5px' 
//                     }} 
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//         </div>
//       </header>

//       {currentUser ? (
//         <>
//           <div className="nav-buttons">
//             <button 
//               className={`nav-btn ${activeSection === 'product-insights' ? 'active' : ''}`}
//               onClick={() => setActiveSection('product-insights')}
//             >
//               Product Insights
//             </button>
//             <button 
//               className={`nav-btn ${activeSection === 'seller-insights' ? 'active' : ''}`}
//               onClick={() => setActiveSection('seller-insights')}
//             >
//               Seller Insights
//             </button>
//           </div>

//           {productInsightsContent}
//           {sellerInsightsContent}
//         </>
//       ) : (
//         <div>
//           <Login />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;