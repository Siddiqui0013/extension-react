interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'info-section', label: 'Info' },
    { id: 'rank-price-section', label: 'Rank & Price' },
    { id: 'chart-section', label: 'Chart' },
    { id: 'calculator-section', label: 'Calculator' }
  ];

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="tab-navigation" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
      {tabs.map(tab => (
        <a key={tab.id}
          href={`#${tab.id}`}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleTabClick(tab.id);
          }}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  );
};

export default Tabs;