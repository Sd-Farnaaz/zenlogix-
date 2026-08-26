import React, { useEffect, useState } from 'react';
import { projects } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Process } from './pages/Process';
import { Contact } from './pages/Contact';
import { CaseStudy } from './pages/CaseStudy';
import './App.css';

function useNavigation() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const go = (nextPath) => {
    window.history.pushState({}, '', nextPath);
    setCurrentPath(nextPath);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return [currentPath, go];
}

export default function App() {
  const [currentPath, go] = useNavigation();

  useEffect(() => {
    document.title = 'Zenlogix Solutions — Digital Technology & Business Solutions';
  }, []);

  // Route matching logic
  const renderPage = () => {
    if (currentPath === '/work') {
      return <Work go={go} />;
    }
    if (currentPath === '/process') {
      return <Process go={go} />;
    }
    if (currentPath === '/contact') {
      return <Contact go={go} />;
    }

    if (currentPath.startsWith('/work/')) {
      const slug = currentPath.replace('/work/', '');
      const project = projects.find((p) => p.id === slug || p.id.startsWith(slug));
      return <CaseStudy project={project} go={go} />;
    }

    return <Home go={go} />;
  };

  return (
    <div className="app-root">
      <CustomCursor />
      <Navbar currentPath={currentPath} go={go} />
      {renderPage()}
    </div>
  );
}
