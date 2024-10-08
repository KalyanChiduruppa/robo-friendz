import React ,{ Component } from 'react';
import CardList from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import ErrorBoundry from '../Components/ErrorBoundry';
import Scroll from '../Components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
	    .then(users => this.setState({robots: users}));
	}
	onSearchChange = (event) =>{	
		this.setState({ searchfield: event.target.value})
	}
	render(){
		const{searchfield, robots} = this.state;
		const filteredRobots = robots.filter(robot=>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ? <h1 className=' tc '>Loading</h1> :
					(
						<div className='tc'>
						<h1>ROBO FRIENDS</h1>
						<SearchBox searchChange={this.onSearchChange}/>
						< Scroll>
							<ErrorBoundry>
								<CardList robots={filteredRobots}/>
							</ErrorBoundry>	
						</Scroll>
					</div>
					);
		}	
	}
export default App;