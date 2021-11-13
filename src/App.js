import React from 'react';

import Logo from './componentes/logo/logo';
import Titulo from './componentes/titulo/titulo';
import Navmenus from './componentes/menu/menu';
import Footer1 from './componentes/footer/footer';
import Perfil1 from './componentes/perfil/perfil';



function App() {
  return (
    <div>
      <Logo/>
      <Titulo/>
      <Navmenus/>
      <div className="p-2">
        <h2>Información Personal</h2>
        <img src="/img/fotoPersonal.jpg" alt="fotoPersonal" />
      </div>
      <Perfil1/>
      <Footer1/>
    </div>
  );
}

export default App;
