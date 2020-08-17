import React, { FunctionComponent } from "react"

export const Subscription: FunctionComponent<unknown> = () => (
  <article>
    <h1>Join us build Whip Up together</h1>
    <section>
      <h2>What you get from the mailing list</h2>
      <ul>
        <li>Have a say on the app’s design direction</li>
        <li>Get notified when the app releases</li>
        <li>Suggest what features matter the most to you</li>
        <li>
          <b>Don’t</b> get spam by anything else
        </li>
      </ul>
    </section>

    <form>
      <input type="email" />
      <button type="submit">subscribe</button>
    </form>
  </article>
)
