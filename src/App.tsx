

import './App.css'
import Benefits from './components/Benefits/Benefits'
import EmailForm from './components/EmailForm/Email'
import Features from './components/Features/Features'
import Feedback from './components/Feedback/Feedback'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Promo from './components/Promo/Promo'
import Trending from './components/Trending/Trending'



function App() {


  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Trending />
      <Promo />
      <Feedback />
      <EmailForm />
    </>
  )
}

export default App
