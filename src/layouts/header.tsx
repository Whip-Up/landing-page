import React, { FunctionComponent } from "react"

export interface HeaderProps {
  nowActive: "contact" | "about" | "none"
}

export const Header: FunctionComponent<HeaderProps> = props => (
  <header className="p-4 flex justify-between items-center">
    <div>Whip Up</div>
    <ul className="flex justify-evenly item-center">
      <li className={"pr-2" + (props.nowActive === "about" ? "active" : "")}>
        About
      </li>
      <li className={"pr-2" + (props.nowActive === "contact" ? "active" : "")}>
        Contact
      </li>
      <li>Subscribe</li>
    </ul>
  </header>
)
