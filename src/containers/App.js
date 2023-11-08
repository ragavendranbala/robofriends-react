// import React, {Component} from "react";
import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "./ErrorBoundry";
import "./App.css"

// class App extends Component {
function App() {


    const [robots, setRobots] = useState([]);
    const [searchFieldValue, setSearchFieldValue] = useState('');



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setRobots(users)
            });
    }, []);
    
    const OnValueChanged = (event) => {
        setSearchFieldValue(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchFieldValue.toLowerCase());
    });

    if (robots.length === 0) {
        return (
            <div className='tc'>
                <h1>Loading Robots</h1>
            </div>
        )
    } else {
        return (
            <div className='tc'>
                <h1 className='f1'>Robo Friends</h1>
                <SearchBox OnValueChangedCallback={OnValueChanged}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robotsList={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>

            </div>
        );
    }

}

export default App;