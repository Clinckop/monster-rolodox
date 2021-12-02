import React, {Component} from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';
class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchFeild:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then( data => this.setState({monsters : data}));
  }

  render(){
    const {monsters, searchFeild} = this.state;
    const filteredmonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchFeild.toLowerCase()));

    return(
      <div className="App">
        <input type="search" placeholder="search here..." 
        onChange={(e)=> this.setState({searchFeild: e.target.value})}/>
        <CardList monsters ={filteredmonsters} >
          
        </CardList>
      </div>
    )
  };
    
}

export default App;
