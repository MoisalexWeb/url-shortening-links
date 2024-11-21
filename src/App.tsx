import './App.scss'
import { Nav } from './components/Nav/Nav.tsx'
import { Hero } from './components/Hero/Hero.tsx'
import { Stadistics } from './components/sections/Stadistics/Stadistics.tsx'
import { Boost } from './components/sections/Boost/Boost.tsx'
import { Footer } from './components/Footer/Footer.tsx'
import { Shortening } from './components/sections/Shortening/Shortening.tsx'

function App() {
	return (
		<>
			<Nav />

			<main>
				<Hero />
				<Shortening />
				<Stadistics />
				<Boost />
			</main>

			<Footer />
		</>
	)
}

export default App
