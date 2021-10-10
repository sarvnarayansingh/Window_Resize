
import './App.css';
import ClassComptWindowResize from './components/ClassWindow'
import useWindowSize from './components/FunCtionWIndowResize'

function App() {
  const windowSize = useWindowSize();
  console.log("====hook",windowSize)

  return (
    <div className="App">
      <ClassComptWindowResize />
    </div>
  );
}

export default App;
