import Control from "./components/Control"
import Steper from "./components/Steper"
import db from "./db.json"
import { useState } from "react"
import { store } from "./store/store"
import { Provider } from 'react-redux'

function App() {

  const [active, setActive] = useState(0)

  const next = (n = 1) => {
    setActive(active + n)
  }

  const prev = (n = 1) => {
    setActive(active - n)
  }


  return (
    <Provider store={store}>
      <main className="h-screen w-screen bg-magnolia flex items-center justify-center">
        <div className="md:p-3 md:w-fit md:h-fit w-full h-full bg-white flex md:flex-row flex-col rounded-lg">
          <Control info={db} active={active}/>
          <Steper info={db} next={(n) => next(n)} prev={prev} isNext={active < db.length - 1} isPrev={active > 0} isConfirm={active === db.length - 1} active={active}/>
        </div>
      </main>
    </Provider>
  )
}

export default App
