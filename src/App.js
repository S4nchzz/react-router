import { BrowserRouter, Routes, Route } from 'react-router';
import HomeLayout from './components/home/HomeLayout.tsx'
import Layout from './components/Layout.tsx'
import CasosLayout from './components/cases/CasosLayout.tsx'
import ContactLayout from './components/contact/ContactLayout.tsx'
import Formulario from './components/home/Formulario.tsx';
import Profile from './components/home/Profile.tsx'
import Tips from './components/about/Tips.tsx';
import MyJob from './components/about/MyJob.tsx';
import Clientes from './components/cases/Clientes.tsx'
import Logros from './components/cases/Logros.tsx'
import Colaborar from './components/cases/Colaborar.tsx'
import Redes from './components/contact/Redes.tsx'
import DejaMensaje from './components/contact/DejaMensaje.tsx'
import Llamame from './components/contact/Llamame.tsx'
import Bio from './components/about/Bio.tsx'
import AboutLayout from './components/about/AboutLayout.tsx';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
            <Route path="home" element={<HomeLayout />}>
            <Route path="formulario" element={<Formulario />} />
            <Route path="perfil" element={<Profile />} />
          </Route>

          <Route path="about" element={<AboutLayout/>}>
            <Route path="bio" element={<Bio />} />
            <Route path="trabajo" element={<MyJob />} />
            <Route path="tips" element={<Tips />} />
          </Route>

          <Route path="exitCases" element={<CasosLayout />}>
            <Route path="clientes" element={<Clientes />} />
            <Route path="logros" element={<Logros />} />
            <Route path="colaborar" element={<Colaborar />} />
          </Route>

          <Route path="contact" element={<ContactLayout />}>
            <Route path="redes" element={<Redes />} />
            <Route path="dejaUnMensaje" element={<DejaMensaje />} />
            <Route path="llamame" element={<Llamame />} />
   	      </Route>
   	   </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
