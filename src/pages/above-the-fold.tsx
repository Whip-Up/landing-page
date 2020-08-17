import React, { FunctionComponent } from "react"
import { SobStory } from "../components/sob-story"

export const AboveTheFold: FunctionComponent<unknown> = props => (
  <section role="main" className="flex-col justify-center items-center">
    <h1 className="text-xl font-bold text-center md:w-1/2 md:mx-auto mb-40">
      Getting a meal right from your kitchen to the table
    </h1>
    <SobStory></SobStory>
    {props.children}
  </section>
)
