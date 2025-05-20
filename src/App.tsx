import './App.css'
import { Layout } from './Components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { Loader } from './Components/Loader/Loader'
import { Home } from './Components/Home/Home'



function App() {
  
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}></Route>
            </Route>  
          </Routes>
      </Suspense>
		</BrowserRouter>
  )
}

export default App
