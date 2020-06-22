import React, { FunctionComponent } from "react"

export const ComingSoon: FunctionComponent<unknown> = () => (
  <div>
    <h3>Coming soon!</h3>
    <div>
      <div>
        Join us to be part of this amazing journey, where we build this app for
        you together.
      </div>
      <div>By providing your email, we will only contact you to...</div>
      <ul>
        <li>Take part in surveys on features you would love</li>
        <li>Inform you on progress we're making</li>
        <li>How the Whip Up the app and company is shaping</li>
        <li>Lastly, when the app is ready!</li>
      </ul>
    </div>
    <div>
      <label htmlFor="join-in">Keep me in the loop</label>
      <input type="email" name="joinInEmail" id="join-in" />
    </div>
  </div>
)
