import Link from "next/link"
import styles from "../styles/home.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Projects">Projects</Link>
      <Link href="/Contacts">Contact</Link>
    </nav>
  )
}
// src/components/Navbar.js