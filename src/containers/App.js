import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "./ErrorBoundry";
import "./App.css"

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchFieldValue: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({robots: users})
            });
    }

    OnValueChanged = (event) => {
        this.setState({searchFieldValue: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchFieldValue.toLowerCase());
        });

        if (this.state.robots.length === 0) {
            return (
                <div className='tc'>
                    <h1>Loading Robots</h1>
                </div>
            )
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox OnValueChangedCallback={this.OnValueChanged}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robotsList={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>

                </div>
            );
        }
    }
}

export default App;