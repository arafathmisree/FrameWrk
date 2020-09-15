import React from 'react'
import { Breadcrumb } from '../../atoms/Breadcrumb'

function Main(props) {
    const { children, crumbs } = props
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">
          <Breadcrumb crumbs={crumbs}/>
          {children}
          </div>
    </main>
  )
}

export default Main