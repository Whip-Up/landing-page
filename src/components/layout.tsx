import React, { FunctionComponent } from "react"

import { Link } from "gatsby"

export const Layout: FunctionComponent<unknown> = props => (
  <div className="mx-auto w-8/12">
    <div className="grid grid-cols-2">
      <div className="col-start-2 col-end-auto">
        <Link to="/about/">About us</Link>
        <Link to="/about/">About us</Link>
      </div>
      <div className="col-span-2">{props.children}</div>
    </div>
  </div>
)
