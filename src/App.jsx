import About from './About'
import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventDemo from './EventDemo';
import Counter from './Counter';
import Sumdemo from './Sumdemo';

function App(){
  return(<>
    <h1>Hello React</h1>
    <br/><br/><br/>
    <Router>
      <Link to='/home'>Home</Link>|
      <Link to='/about'>About</Link>|
      <Link to='/contact'>Contact</Link>|
      <Link to='/eventdemo'>EventDemo</Link>|
      <Link to='/counter'>Counter</Link>|
      <Link to='/sumdemo'>Sum</Link>|

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/eventdemo' element={<EventDemo />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/sumdemo' element={<Sumdemo />} />
        <Route path='/cake/ahmedabad' element={<h1>Ahmedabad Cake</h1>}/>
        <Route path='/cake/surat' element={<h1>Surat Cake</h1>}/>
        <Route path='*' element={<h1>404 File Not Found</h1>}/>
      </Routes>
    </Router>
    {/* <h1>Hello Rract</h1> */}
    {/* <Home/>
    <About/>
     <Header/> 
    <Contact/> */}
  </>);
}
export default App;