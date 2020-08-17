import React from "react"
import { Layout } from "../layouts/layout"
import { Header } from "../layouts/header"
import { AboveTheFold } from "./above-the-fold"
import { Subscription } from "../components/subscription"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Header nowActive="none"></Header>
      <AboveTheFold>
        <Subscription></Subscription>
      </AboveTheFold>
    </Layout>
  )
}
