import React,{useState} from 'react'
import Products from './Components/Products';
import './Components/Products.css';

const App = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "797777ac";
  const YOUR_APP_KEY ="fcaee01f5a828ff13ed6b091be16a153";
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
    .then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )

  }

  return (
    <div>
      <center>
      <h4 className='shiva'>Food Recipe App</h4>
      <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> <br/>
          <input type="submit" value="Search" className='button1'/>
        </form>
        {data.length >= 1 ? <Products data={[data[2]]}/> : null}
      </center>
    </div>
  )
  };


export default App