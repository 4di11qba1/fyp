import React, {useEffect, useState, useRef} from 'react'
import CarouselGList from './CarouselGList'
import HoveredCard from '../HoveredCard/HoveredCard'
import { Card } from '@mui/material'

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

      const handleItemHover = (index) => {
        setItem(index);
      };

  return (
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '15px', minHeight: '300px', padding: '25px', borderRadius: '15px' }}>
        <CarouselGList w={'18rem'} h={'24rem'} itemData={itemData.slice(0, 4)} start={0} end={3} activeItem={itemData[item]} handleItemHover={handleItemHover} />
        <HoveredCard item={itemData[item % itemData.length]} h2={true} w={'38rem'} h={'24rem'} showDetail={true} />
        <CarouselGList w={'18rem'} h={'24rem'} itemData={itemData.slice(4, 8)} start={4} end={7} activeItem={itemData[item]} handleItemHover={handleItemHover} />
    </Card>
  )
}

export default MainCarousel