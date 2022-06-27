import '../../Assets/Styles/home.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default function Home() 
{
    return(
        <section id="items">
            <AliceCarousel autoPlay autoPlayInterval={3000} arrows="false">
                <img src="https://ocdn.eu/pulscms-transforms/1/wASktkpTURBXy9iNDZiOWQzYjVkZjQwMzdmYTk4MWYwZDRjYjFjZDZlYy5qcGeRlQPNAUTMqs0T380LLg" id="img1" className="sliderimg" />
                <img src="http://vcfaz.tv/wp-content/uploads/2020/12/Soul.jpg"  id="img2" className="sliderimg" />
                <img src="https://sm.ign.com/ign_pl/screenshot/default/film-diuna-2020-dune_qwq7.jpg"  id="img3" className="sliderimg" />
            </ AliceCarousel>
        </ section>
    );
}