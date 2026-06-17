import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div className='text-pink'>Welcome to the world of Gta 6 and gsap</div>
    </main>
  )
}

export default App
