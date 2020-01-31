import React, { ReactElement, ReactNode } from 'react'
import Header from './Header'

const App = ({ children }: { children?: ReactNode }): ReactElement => (
  <main>
    <Header />
    {children}
  </main>
)

export default App
