import { useMediaQuery } from '../hooks/useMediaQuery.js';

import DesktopHome from './home/DesktopHome.jsx';
import MobileHome from './home/MobileHome.jsx';
import TabletHome from './home/TabletHome.jsx';

/*
 * La landing esiste in tre varianti di layout, ognuna pensata per un
 * intervallo di larghezza. Lo switch avviene a runtime (matchMedia) così nel
 * DOM è presente una sola variante: i testi non vengono duplicati per
 * screen reader e crawler, e la scelta è già definita al primo render.
 */
const MOBILE_QUERY = '(max-width: 767px)';
const TABLET_QUERY = '(min-width: 768px) and (max-width: 1279px)';

function Home() {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const isTablet = useMediaQuery(TABLET_QUERY);

  if (isMobile) return <MobileHome />;
  if (isTablet) return <TabletHome />;
  return <DesktopHome />;
}

export default Home;
