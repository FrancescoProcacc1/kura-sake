import { useMediaQuery } from '../hooks/useMediaQuery.js';
import { useSeo } from '../seo/useSeo.js';
import DesktopStoria from './storia/DesktopStoria.jsx';
import MobileStoria from './storia/MobileStoria.jsx';
import TabletStoria from './storia/TabletStoria.jsx';

const MOBILE_QUERY = '(max-width: 767px)';
const TABLET_QUERY = '(min-width: 768px) and (max-width: 1279px)';

function StoriaDelSake() {
  useSeo('/storia-del-sake');
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const isTablet = useMediaQuery(TABLET_QUERY);

  if (isMobile) return <MobileStoria />;
  if (isTablet) return <TabletStoria />;

  return <DesktopStoria />;
}

export default StoriaDelSake;
