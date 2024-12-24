import React from 'react';
import { createRoot } from 'react-dom/client';
import Sidebar from './sidebar/Sidebar';
import { AuthProvider } from '../context/AuthContext';

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

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'toggleSidebar') {
    const sidebar = document.getElementById('amazon-seller-sidebar-root');
    if (sidebar) {
      sidebar.style.display = 
        sidebar.style.display === 'none' ? 'block' : 'none';
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