import banner from '../../imagens/banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <header className='banner'>
            <img src={banner} alt="Banner principal da Página da Organo"/>
        </header>        
    );
}  

export default Banner;