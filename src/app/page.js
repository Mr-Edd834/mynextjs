import Image from "next/image"
import Navbar from "../components/Navbar"
import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <Image src="/WhatsApp Image 2025-09-13 at 10.35.52_b8b48014.jpg" alt="Profile" width={150} height={150} />
        <h1>Hello, I'm MR. Edd 👋</h1>
        <p>Aspiring Developer | Problem Solver | Innovator</p>
      </div>
    </>
  )
}
// src/app/page.js  