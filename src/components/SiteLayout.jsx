import { useLocation } from 'react-router-dom';

import SiteFooter from './SiteFooter.jsx';
import SiteHeader from './SiteHeader.jsx';

function SiteLayout({ children }) {
  const { pathname } = useLocation();

  return (
    <>
      <SiteHeader />
      <main className="main" data-route={pathname}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

export default SiteLayout;
