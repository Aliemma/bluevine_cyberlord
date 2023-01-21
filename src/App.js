
import About from './Component/About';
import Customers from './Component/Customers';
import Footer from './Component/Footer';
import Hero from './Component/Hero';
import Layout from './Component/Layout';
import Layout2 from './Component/Layout2';
import Narbar from './Component/Narbar';
import Power from './Component/Power';

import Security from './Component/Security';
import Stages from './Component/Stages';

import Container from './Utils/Container'
function App() {
  return (
    <Container  className='container' >
        <Narbar/>
        <Hero/>
        <Layout/>
        <About/>
        <Security/>
        <Stages/>
        <Customers/>
        <Power/>
        <Layout2/>
        <Footer/>
        
        
    </Container>

  );
}

export default App;
