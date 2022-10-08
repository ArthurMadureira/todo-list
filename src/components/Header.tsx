import styles from './Header.module.css'

import rocketImg from '../assets/rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <img src={rocketImg} alt="Logo" />
        to<span>do</span>
      </h1>
    </header>
  )
}