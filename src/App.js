import React, {Component} from "react";

import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component{
    state = {
        username: 'supermax'
    }

    usernameChangedHandler = (event) =>{
        this.setState({username: event.target.value})
    }
    //This is git learning
    render() {
        return (
        <div className="App">
            <h1>This is assignment 1</h1>
            <UserInput 
                changed={this.usernameChangedHandler}
                currentName={this.state.username}/>
            <UserOutput userName={this.state.username}/>
            <UserOutput userName={this.state.username}/>
            <UserOutput userName="Manu"/>
        </div>
        );
    };
};

export default App;