import React from "react"
import { Layout } from "../layouts/layout"
import { Header } from "../layouts/header"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Header headerText="Hello!"></Header>
      <p>This is whip up</p>
    </Layout>
  )
}
