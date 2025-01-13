import React from 'react';
import { createRoot } from 'react-dom/client';
import Sidebar from './sidebar/Sidebar';
import { AuthProvider } from '../context/AuthContext';

// primary: '#5ABDF5',
// secondary: '#187AA9',

const injectSidebar = () => {
  let container = document.getElementById('amazon-seller-sidebar-root');
  
  if (!container) {
    container = document.createElement('div');
    container.id = 'amazon-seller-sidebar-root';
    document.body.appendChild(container);
  
    const shadowRoot = container.attachShadow({ mode: 'open' });
    
    const reactContainer = document.createElement('div');
    reactContainer.id = 'react-root';
    shadowRoot.appendChild(reactContainer);
    
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = chrome.runtime.getURL('assets/sidebar.css');
    shadowRoot.appendChild(style);
    
    const root = createRoot(reactContainer);
    root.render(
      <React.StrictMode>
      <AuthProvider>
        <Sidebar />
      </AuthProvider>
    </React.StrictMode>
    );
  }
};

const closeBtn = document.getElementById('close-button')
closeBtn?.addEventListener('click', () => {
  const sidebar = document.getElementById('amazon-seller-sidebar-root');
  if (sidebar) {
    sidebar.style.display = 'none';
  }
})

const sliderIcon = document.createElement('div');
Object.assign(sliderIcon.style, {
  padding: '20px',
  cursor: 'pointer',
  backgroundColor: 'blue',
  color: 'white',
  fontSize: '20px',
  borderRadius: '50%',
  position: 'fixed',
  right: '0',
  top: '100px',
  zIndex: '9999',
  transition: 'transform 0.3s ease-in-out, right 0.3s ease-in-out'
});
sliderIcon.innerHTML = 'AST';

document.body.appendChild(sliderIcon);

sliderIcon.addEventListener('click', () => {
  const sidebar = document.getElementById('amazon-seller-sidebar-root');
  if (sidebar) {
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
  }
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'toggleSidebar') {
    const sidebar = document.getElementById('amazon-seller-sidebar-root');
    if (sidebar) {
        sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
        sliderIcon.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
    } else {
      injectSidebar();
    }
  }
});



if (window.location.pathname.includes('/dp/')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSidebar);
  } else {
    injectSidebar();
  }
}