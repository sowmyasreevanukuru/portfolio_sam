import Image from 'next/image'
import HomeImage from '../../public/Images/Home.png';  

export default function Home() {
  return (
    <Image
      src={HomeImage}
      alt='Hom page image'
      layout='fill'
    />    
  )
}
