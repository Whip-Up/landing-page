import React, { FunctionComponent } from "react"

export const SobStory: FunctionComponent<unknown> = () => (
  <article className="text-lg font-light w-paragraph mx-auto">
    <p className="text-justify mb-16">
      Ever bought a grocery bag full of produce to cook a dish and had little
      bits of leftover ingredients? Didn’t know what to do with them?
    </p>
    <p className="text-justify mb-16">
      I’ve been there. Tried googling for a recipe but just ended up buying
      additional ingredients that just got me more leftovers!
    </p>
    <p className="text-justify mb-16">
      We are on a mission to create an app for all of us to not waste food.{" "}
      <em className="font-bold not-italic">
        The quickest way to find a recipe with the ingredients you own
      </em>
      . And help minimize our food wastage.
    </p>
    <p className="text-justify">
      We would love to have you be part of this journey in building your newest
      recipe app.
    </p>
  </article>
)
