import React from "react"

import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div className="mx-auto w-8/12">
      <div className="grid grid-cols-2">
        <div className="col-start-2 col-end-auto">
          <Link to="/about/">About us</Link>
          <Link to="/about/">About us</Link>
        </div>
        <div className="col-span-2">{children}</div>
      </div>
    </div>
  )
}
