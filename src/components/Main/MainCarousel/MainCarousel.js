import React, {useEffect, useState} from 'react'
import CarouselGList from './CarouselGList'
import HoveredCard from '../HoveredCard/HoveredCard'

function MainCarousel({windowWidth, itemData}) {
    const [item, setItem] = useState(0)
    
    useEffect(() => {
        const intervalId = setInterval(() => {
          // Increment item and loop back to 1 if it exceeds the length of itemData
          setItem((prevItem) => (prevItem + 1) % itemData.length);
        }, 3000);
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, [itemData.length]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '15px', minHeight: '300px', padding: '25px', borderRadius: '15px' }}>
        <CarouselGList h={'24rem'} itemData={itemData.slice(0, 4)} activeItem={itemData[item]} />
        <HoveredCard item={itemData[item % itemData.length]} h2={true} w={'38rem'} h={'24rem'} showDetail={true} />
        <CarouselGList h={'24rem'} itemData={itemData.slice(4, 8)} activeItem={itemData[item]} />
    </div>
  )
}

export default MainCarousel