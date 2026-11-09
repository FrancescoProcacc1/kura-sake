import { useEffect } from 'react';

import { useMediaQuery } from '../hooks/useMediaQuery.js';
import { STORIA } from '../content/storia.js';
import DesktopStoria from './storia/DesktopStoria.jsx';
import MobileStoria from './storia/MobileStoria.jsx';
import TabletStoria from './storia/TabletStoria.jsx';

const MOBILE_QUERY = '(max-width: 767px)';
const TABLET_QUERY = '(min-width: 768px) and (max-width: 1279px)';

function StoriaDelSake() {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const isTablet = useMediaQuery(TABLET_QUERY);

  useEffect(() => {
    const meta = STORIA.desktop.meta;
    const previous = document.title;
    document.title = meta.title;

    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');

    if (description) {
      description.setAttribute('content', meta.description);
    }

    return () => {
      document.title = previous;

      if (description && previousDescription !== null) {
        description.setAttribute('content', previousDescription);
      }
    };
  }, []);

  if (isMobile) return <MobileStoria />;
  if (isTablet) return <TabletStoria />;

  return <DesktopStoria />;
}

export default StoriaDelSake;
