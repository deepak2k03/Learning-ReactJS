import { Navigate, Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'
import Login from './Login'
import NavBar from './NavBar'
import PageNotFound from './PageNotFound'
import College from './College'
import Student from './Student'
import Department from './Department'
import Details from './Details'

function App() {

  return (
    <>
      {/* <NavBar /> */}
      <Routes>

        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path='department' element={<Department />} />
          <Route path='detail' element={<Details />} />

        </Route>

        {/* <Route path='/*' element={<PageNotFound />} /> */}
        <Route path='/*' element={<Navigate to="/" />} />




      </Routes>
    </>
  )
}

export default App