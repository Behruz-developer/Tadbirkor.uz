import React, { useEffect } from 'react'
import Upcoming from '../Components/Upcoming/Upcoming'
import Interview from '../Components/Interview/Interview'
import Quote from '../Components/Quote/Quote'

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Upcoming />
      <Interview showButton={true} title={'Истории наших героев'} />
      <Quote />
    </>
  )
}

export default Home