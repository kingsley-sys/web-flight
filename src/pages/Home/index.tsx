
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import Plan from '../../components/Plans';
import Banner from '../../components/Banner';
import Blog from '../../components/Blog';

const Home = () => {
  return(
    <>
    <Hero />
    <Features/>
   {/*  <About/> */}
    <Plan/>
    <Banner/> 
    <Blog/>

    </>
  );
}

export default Home