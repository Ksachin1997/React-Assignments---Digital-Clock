import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

    constructor(props){

        super(props);

        this.state = {
            time: new Date()
        }

    }

    update(){
        this.setState({time: new Date()})
    }

    componentDidMount(){
        setInterval(() => this.update(),1000);
    }

    render() {

        return(
            <div className="Clock">

                <h3 id="time">

                    {this.state.time.toLocaleTimeString()}

                </h3>
               
            </div>
        )
    }
}


export default App;
