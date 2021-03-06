import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Week1 from "./components/week1/index";
import Week2 from "./components/week2/index";

const Home = () => (
  <nav>
    <h1>Welcome Traveller! </h1>
    <ul>
      <li>
        <Link to="/gh-design/week-1"> <h2> Week 1 </h2></Link>
        <Link to="/gh-design/week-2">Week 2</Link>
      </li>
    </ul>
  </nav>
);

function App() {
  return (
    <Routes>
      <Route path='/gh-design/week-1' element={<Week1 />} > </Route>
      <Route path='/gh-design/week-2' element={<Week2 />} > </Route>
      <Route path='/gh-design' element={<Home />} > </Route>
    </Routes>
  );
}

export default App;
