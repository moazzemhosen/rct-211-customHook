
import './App.css';
import { useTimeout } from './Hook/useTimeout';
import { useFetch } from './Hook/useFetch';

function App() {
  const ready = useTimeout(5000)
  
  let data= useFetch()
  console.log(data);
  return (
    <div className="App">
      <h1>{ready ? "Ready" : " Not-Ready"}</h1>
      
        {data.map((e) => {
          return <div key={e.id}>{e.login}</div>;
        })}
      
    </div>
  );
}

export default App;
