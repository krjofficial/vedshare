import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import { Button } from "./components/ui/button"


function App() {
  

  return (
    <>
      <Navbar/>

      <div className="flex items-center justify-center h-screen">
        <Button>
          Hello
        </Button>
      </div>

      <Footer/>

    </>
  )
}

export default App
