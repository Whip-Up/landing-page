import React from "react"
import { Layout } from "../layouts/layout"
import { Header } from "../layouts/header"
import { AboveTheFold } from "./above-the-fold"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Header nowActive="none"></Header>
      <AboveTheFold></AboveTheFold>
    </Layout>
  )
}
