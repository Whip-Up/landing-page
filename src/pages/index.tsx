import React from "react"
import { Layout } from "../components/layout"
import { Header } from "../components/header"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Header headerText="Hello!"></Header>
      <p>This is whip up</p>
    </Layout>
  )
}
