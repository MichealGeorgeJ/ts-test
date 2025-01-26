
import { useEffect, useState } from "react"
import './MoonParallax.scss'


export default function MoonParalax() {

  const [imageStyles,setImageStyles]=useState(Array.from({length:9},()=>({})))
  const [imageStyles2,setImageStyles2]=useState(Array.from({length:9},()=>({})))
  const [letterStyle,setLetterStyle]=useState({})
  const [paragraphStyle,setParagraphStyle]=useState({})

  const getFractionValues=(index:number)=>{
    const topFraction= index===0 ? 0.10 : index===1 ? 0.7 : index===3 ? 0.5 : index===4 ? 0.05 : index===5 ? 0.5 : index===6 ? 0.5 : index===7 ? 0.15 : index===8 ? 0.15 : index===9 ? 0.5 : 0 

    const bottomFraction=index===0 ? 0.05 : index===1 ? 0 : index===3 ? 0 : index===4 ? 0 : index===5 ? 0 : index===6 ? 0 : index===7 ? 0.05 : index===8 ? 0.05 : index===9 ? 0.05 : 0
    const leftFraction=index===0 ? 0 : index===1 ? 0.5 : index===3 ? 0 : index===4 ? 0 : index===5 ? 0 : index===6 ? 0 : index===7 ? 0.15 : index===8 ? 0 : index===9 ? 0 : 0



    const rightFraction=index===0 ? 0.05 : index===1 ? 0 : index===3 ? 0.05 : index===4 ? 0.05 : index===5 ? 0.05 : index===6 ? 0.05 : index===7 ? 0.5 : index===8 ? 0.8 : index===9 ? 0.5 : 0


    return{
      topFraction,
      bottomFraction,
      leftFraction,
      rightFraction
    }
  }
  useEffect(()=>{

    window.addEventListener('scroll',()=>{
      const value=window.scrollY
      console.log(value)
      const newImageStyles=imageStyles.map((item,index)=>{
        const {topFraction,leftFraction,bottomFraction,rightFraction}=getFractionValues(index)


        return{
            ...item,
            top:`${value*topFraction}px`,
            left:`${-value*leftFraction}px`,
            bottom:`${value*bottomFraction}px`,
            right:`${value*rightFraction}px`

        }
      })
      const newImageStyles2=imageStyles.map((item,index)=>{
        const {topFraction,leftFraction,bottomFraction,rightFraction}=getFractionValues(index)


        return{
            ...item,
            top:`${value*topFraction/0.5}px`,
            left:`${-value*leftFraction/0.5}px`,
            bottom:`${value*bottomFraction/0.5}px`,
            right:`${value*rightFraction/0.5}px`

        }
      })
      setLetterStyle({
        transForm:`translateX(${value}px)`,
        left:`${value*2}px`,
        opacity:`${value*1}`

      })
      setParagraphStyle({
        // transForm:`translateY(${value*4}px)`,
        marginTop:`${-value*0.3}px`,
      })
      setImageStyles2(newImageStyles2)
      setImageStyles(newImageStyles)
    })

  },[])
  return (
<>
<section>
      {
        imageStyles.map((item,index)=>{
          return(
            <div key={index}  style={imageStyles[index]} className={`image-${index+1}`} >
                <img   src={`${imageStyles?.length-index}-01.png`} alt="" className="" style={item}/>
            </div>
          )
        })
      }



<h1 style={letterStyle} id="text" >Moon Light</h1>

    </section>

    <div  className="">
<h2 style={paragraphStyle} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sapiente nulla ipsa nihil tempore inventore accusamus quo enim voluptatem eum dicta quasi placeat quis sequi porro similique illo, ut at rerum corporis debitis officia? Laboriosam recusandae quae quasi necessitatibus soluta consectetur, maiores harum? Consectetur, atque optio porro quis laborum sequi nobis soluta reiciendis veritatis quo possimus eum, sed provident? Vitae tenetur magnam minus, perferendis magni, quas doloribus recusandae, laborum corporis inventore assumenda eum minima unde ipsum? Porro consectetur saepe tenetur officiis voluptas corporis libero ipsa fugiat, eos perferendis numquam? Eaque voluptates asperiores nesciunt laudantium, praesentium sapiente doloremque odit esse culpa architecto pariatur enim eum similique voluptatem, quasi mollitia commodi tempora. Dolor veritatis, temporibus libero optio, fugit quos placeat, laboriosam eum repudiandae quas consectetur sed? Alias voluptatem iure perferendis, fuga ipsam ex exercitationem repudiandae possimus sint dolor consectetur, hic ab? Adipisci, magnam perferendis. Quod maxime assumenda rem culpa quaerat eum aperiam saepe accusamus est aut deleniti sequi quo tempora ad, nobis rerum blanditiis cumque voluptates eius at iure perferendis animi veniam dolorem? Aperiam reprehenderit est dolorum a corrupti rem iste, doloremque veritatis commodi assumenda in facere animi ullam eaque ipsa vel cupiditate! Enim libero laborum animi repellat harum facere, ad qui quos fugiat, itaque provident unde consequuntur minima eos nostrum deserunt perferendis officiis, nesciunt doloribus! Necessitatibus cupiditate, repellendus, beatae veniam at non temporibus expedita autem, mollitia amet nihil sed nostrum eveniet.!</h2>
    </div>
    <section style={{top:'100px'}} >
      {
        imageStyles.map((item,index)=>{
          return(
            <div key={index}  style={imageStyles2[index]} className={`image-${index+1}`} >
                <img   src={`${imageStyles?.length-index}-01.png`} alt="" className="" style={item}/>
            </div>
          )
        })
      }



<h1 style={letterStyle} id="text" >Moon Light</h1>

    </section>

</>
  )
}