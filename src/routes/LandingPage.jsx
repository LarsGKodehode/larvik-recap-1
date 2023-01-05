// Libraries
import {
  Link,
  Outlet
} from 'react-router-dom'

// CSS
import styles from './layout.module.css'

function LandingPage() {
  return (
    <>
      <h1>Landing Page</h1>
      <nav className={styles.navMenu}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default LandingPage