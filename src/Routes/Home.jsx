import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { handleRouteClick, turnScreenOn } from '../utils/screenTransitions';
import '../CSS/index.css';
import '../CSS/ScreenEffects.css';
import Item from '../components/Item';
import { grid, grid_mobile } from './Router.jsx'

function Home() {
  const navigate = useNavigate();

  // Appliquer l'animation d'allumage au chargement du composant
  useEffect(() => {
    // Petit délai pour s'assurer que le DOM est prêt
    const timeout = setTimeout(turnScreenOn, 2);
    return () => clearTimeout(timeout);
  }, []);

  function DesktopHome() {
    return (
        <div>
            <div className="bckg w-full h-screen flex flex-col justify-center items-center lg:bg-[url('/home-background-2.gif')] bg-[#E6E2E2] bg-cover  bg-no-repeat">
                <div className=" relative w-[55vw] h-[55vh] bg-[#E6E2E2] rounded-lg border-b-2 border-l-2 border-r-2 border-black">
                    <div className="flex justify-center items-center relative w-full h-10 bg-[#D4CDCD] rounded-[3px] border-2 border-[#919191]">
                        <img src="/awge-halftone-logo.png" alt="" className="h-[65%] w-[11%] relative left-[-40%]" />
                    </div>
                    <div className="grid grid-cols-4 grid-rows-2 gap-8 justify-center items-center p-6">
                        {grid.map(item => (
                            <div key={item.id} className='flex flex-col justify-center items-center' onClick={() => handleRouteClick(navigate, item.route)}>
                                <Item item={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="home-copyright-container">
                    <h2 className="home-copyright">© 2024 AWGE</h2>
                    <h2 className="home-copyright">Terms and Conditions</h2>
                    <h2 className="home-copyright">Privacy Policy</h2>
                </div>
            </div>
            <img src="/media-background.gif" alt="" className="absolute w-[19%] h-[24%] top-[17vh] left-[60vw] rounded-2% box-shadow-[0px_0px_10px_2px_rgba(0,0,0,0.5)] z-[15] object-cover" />
            <div className="absolute w-[10vw] top-[17vh] right-[23vw] z-[16] cursor-pointer " onClick={() => handleRouteClick(navigate, '/media')}>
                <img src="/buttons/vhs-camera-button.gif" alt="" />
                <p className="absolute text-sm top-[5vh] right-0 z-[17] text-white text-opacity-70 text-shadow">MEDIA</p>
            </div>
        </div>
    )
  }

  function MobileHome() {
    return (
      <div className="bckg">
            <div className="flex justify-center items-center relative w-full h-[10vh] bg-[#D4CDCD] border-2 border-[#919191] shadow-lg shadow-black/20 z-50">
                <img src="/awge-halftone-logo.png" alt="" className="h-8 relative" />
            </div>
            <div className="relative w-[100vw] h-[90vh] bg-[#E6E2E2] border-b-2 border-l-2 border-r-2 border-black flex flex-col justify-evenly items-center">
                <div className="relative w-[50vw] z-[16] cursor-pointer bg-[#CDCDCD] rounded-[5%] flex flex-rox justify-evenly shadow-lg shadow-black/30" onClick={() => handleRouteClick(navigate, '/media')}>
                    <img src="/media-background.gif" alt="" className="relative w-[95%] h-[80%] top-[5%] rounded-[5%] z-[15] object-cover" />
                    <p className="absolute text-sm top-[10vh] z-[17] text-white text-opacity-70 text-shadow">MEDIA</p>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-8 justify-center items-center p-6">
                    {grid_mobile.map(item => (
                        <div key={item.id} className='flex flex-col justify-center items-center' onClick={() => handleRouteClick(navigate, item.route)}>
                            <Item item={item} />
                        </div>
                    ))}
                </div>
                <div className="home-copyright-container-mobile">
                    <h2 className="home-copyright">© 2024 AWGE</h2>
                    <h2 className="home-copyright">Terms and Conditions</h2>
                    <h2 className="home-copyright">Privacy Policy</h2>
                </div>
            </div>
      </div>
    )
  }

  return (
    <div>
      {/* Affichage Mobile uniquement (<1024px) */}
      <div className="block lg:hidden overflow-y-hidden">
        <MobileHome />
      </div>
    
      {/* Affichage Desktop uniquement (≥1024px) */}
      <div className="hidden lg:block">
        <DesktopHome />
      </div>
    </div>

  );
}

export default Home;
