import './Background.css'
import video from './video1.mp4'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'
import image7 from './image7.jpg'


const Background = ({playStatus, heroCount}) => {
  
  if(playStatus){
    return(
      <video className="background" autoPlay loop muted> <source src={video} type='video/mp4'/></video>
    )
  }
  else if (heroCount === 0){
    return <img src={image1} className="background" alt=""/>
  }
  else if (heroCount === 1){
    return <img src={image2} className="background" alt=""/>
  }
  else if (heroCount === 2){
    return <img src={image3} className="background" alt=""/>
  }
  else if (heroCount === 3){
    return <img src={image4} className="background" alt=""/>
  }
  else if (heroCount === 4){
    return <img src={image5} className="background" alt=""/>
  }
  else if (heroCount === 5){
    return <img src={image6} className="background" alt=""/>
  }
  else if (heroCount === 6){
    return <img src={image7} className="background" alt=""/>
  }




}

export default Background