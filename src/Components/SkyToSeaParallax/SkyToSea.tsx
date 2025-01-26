import { ReactElement, useEffect, useState } from "react";
import "./SkyToSea.scss";

export function SkyToSea(): ReactElement {
  const [parachuteY, setParachuteY] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [value,setValue]=useState(0)
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      const value = window.scrollY;
      setValue(value)
      console.log(value)
      const isEndOfScroll = window.innerHeight + window.scrollY+300 >= document.body.offsetHeight;
      animationFrameId = requestAnimationFrame(() => {
        setParachuteY( value * 1.2 );
        setIsEnd(isEndOfScroll)
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
<>
<div className="">
<div className="images">
  <h1  style={{
        transform: `translateX(${!isEnd? `${value}px` : `${ `${parachuteY ? `${-parachuteY-300}px` : '-280%' }`  }`}) translateY(${ `${ '-50%' }`  })`,
        transition: "all 0s linear",


          
        }}  >Fl</h1><div className="animate">
          <span 
        style={{
          transform: `translateX(${!isEnd? `${value}px` : `${ `${parachuteY ? `${-parachuteY+150-300}px` : '-200%' }`  }`}) translateY(${ `${ '-60%' }`  }) rotateZ(15deg)`,
          transition: "all 0s linear",
          color:'red'

  
            
          }}
        >y</span>
        </div>
          <h1  style={{
        transform: `translateX(${!isEnd? `${value}px` : `${ `${parachuteY ? `${parachuteY}px` : '-10%' }`  }`}) translateY(${ `${ '-50%' }`  })`,
        transition: "all 0s linear",


          
        }}  > High...</h1>
    <img src="/black.png" alt="" className="" />
    <img  style={{
        transform: `scale(${isEnd? `${Math.max(1, 4 - value / 300)}` : `${Math.max(1, 4 - value / 300)}`})`,
        transition: "all 0s linear",
        zIndex:7

          
        }}  src="/stars1-01.png" alt="" className="" />
    <img  style={{
        transform: `scale(${isEnd? `${Math.max(1, 4 - value / 300)}` : `${Math.max(1, 4 - value / 300)}`})`,
        transition: "all 0s linear",

        zIndex:8

          
        }}  src="/stars1-02.png" alt="" className="" />
    <img style={{
        transform: `scale(${isEnd? `${Math.min(3.5, 3 - value / 300)}` : `${Math.min(3.5, 3 - value / 300)}`})`,
        transition: "all 0s linear",

        zIndex:11
          
        }}
     src="/mountain-01.png" alt="" className="" />

</div>

<div className="container">
 <div   
 
        style={{
        transform: `translateY(${isEnd? `${value+300}px` : `${parachuteY || -600 }px`})`,
        transition: "all 0s linear",
        // top: `${parachuteY}px`,
        top:`${isEnd? `${value*1.2}px` : 'auto'}`,
        position: `${isEnd? 'sticky' : 'absolute'}`,

          
        }} 
        className="box">
      <img 

className={`animated-parachute  ${isEnd? 'animate': 'animate'}`}
src="/parachute_with_man-01.png"
alt="Parachute"
/>
        </div>
 </div>
    </div>

<div className="images-2">
<img style={{
        // transform: `scale(${isEnd? `${Math.max(1, 4 - value / 300)}` : `${Math.max(1, 4 - value / 300)}`})`,
        transition: "all 0s linear",
        zIndex:7

          
        }} src="/mountain-01.png" alt="" className="" />
</div>
</>
  );
}
