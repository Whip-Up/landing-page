import React, { FunctionComponent } from "react"

export interface HeaderProps {
  headerText: string
}

export const Header: FunctionComponent<HeaderProps> = props => (
  <h1>{props.headerText}</h1>
)
