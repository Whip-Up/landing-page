import React, { FunctionComponent } from "react"
import { ComingSoon } from "../components/coming-soon"

export const AboveTheFold: FunctionComponent<unknown> = () => (
  <section role="main">
    <div className="m-auto flex-col justify-center">
      <h1>Getting a meal from your kitchen to the table</h1>
      <h2>The quickest way to find a recipe with the ingredients you own</h2>
    </div>
    <ComingSoon></ComingSoon>
  </section>
)
