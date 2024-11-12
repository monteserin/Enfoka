import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Index from '../pages/Index';
import Layout from '../components/Layout';
import Eventos from '../pages/eventos';
import Estilo from '../pages/Estilo';
import Contacto from '../pages/Contacto';


const Router = () => (
    <BrowserRouter>
      <Layout>
        <Routes>   
            <Route path="/" element={<Index />} />
            <Route path="/Eventos" element={<Eventos />} />
            <Route path="/Estilo" element={<Estilo />} />
            <Route path="/Contacto" element={<Contacto />} />
            
            <Route path="*" element={<div>404</div> } />
        </Routes>
      </Layout>
    </BrowserRouter>

);

export default Router;