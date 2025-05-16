import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scripts for animations */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // Scroll reveal animation
          document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('active');
                }
              });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.reveal').forEach(element => {
              observer.observe(element);
            });
          });
        `
      }} />
    </div>
  );
};

export default Layout;
