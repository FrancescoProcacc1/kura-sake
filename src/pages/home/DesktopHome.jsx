import './DesktopHome.css';

import Giappone from '../../components/Giappone.jsx';
import Hero from '../../components/Hero.jsx';
import Progetto from '../../components/Progetto.jsx';
import Production from '../../components/Production.jsx';
import Questionario from '../../components/Questionario.jsx';
import Scopri from '../../components/Scopri.jsx';
import SiteLayout from '../../components/SiteLayout.jsx';

function DesktopHome() {
  return (
    <SiteLayout>
      <Hero />
      <Scopri />
      <Production />
      <Giappone />
      <Questionario />
      <Progetto />
    </SiteLayout>
  );
}

export default DesktopHome;
