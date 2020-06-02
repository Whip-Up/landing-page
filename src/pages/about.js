import React from "react"
import { Link } from "gatsby"

import Container from "../components/container/container"

export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
      <Link to="/" class="bg-gray-100 border-black">
        Home
      </Link>
    </Container>
  )
}
