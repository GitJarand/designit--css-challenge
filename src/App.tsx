import Cards from './Cards';
import Heading from './Heading';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <Heading heading="Scalable solutions for all spaces" size="large"/>
      <Cards />
    </div>
  );
}
