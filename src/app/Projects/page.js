import Navbar from "../../components/Navbar"
import Image from "next/image"

export default function Projects() {
  return (
    <>
      <Navbar />
      <h1>My Projects</h1>
      <div>
        <h2>GoGrub</h2>
        <Image src="/Food App Design.jpeg" alt="GoGrub" width={300} height={200} />
        <p>A food delivery platform built with Next.js and Node.js.</p>
      </div>
    </>
  )
}
// src/app/Projects/page.js 