import '../app/globals.css'

import Home from '../components/Home'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

import styles from './index.module.css'

export default function Index() {
  return (
    <div className="text-center">
      <Home />
      {/* <Projects />
      <Footer /> */}
    </div>
  )
}