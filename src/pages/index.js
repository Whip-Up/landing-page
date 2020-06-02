import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <Header headerText="Hello world!"></Header>
      <p>This is whip up</p>
      <Link to="/about/">About us</Link>
    </div>
  )
}
