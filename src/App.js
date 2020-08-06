import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import App1 from './team1/movies-list/src/App';
import App2 from './team2/react/practical-react/src/App';
import App3 from './team3/React-Final-Project/reactfinalproject/src/App';
import App4 from './team4/ReactFinalProject/companyworkers/src/App';
import App5 from './team5/VGareus/src/App';
import App6 from './team6/booksLIb/src/components/app/app';
import firebase from "firebase/app";
import {remoteConfig,fb} from "./firebase"



class App extends React.Component {

    constructor() {
        super();

        this.state = {
            team:"team",
            drop:"select project",
            app: <p>hello</p>

        }
        this.changeBackgroundColor.bind(this)
    }

    changeBackgroundColor = (team,ap) => {
            this.setState({team: team, drop: team, app: ap})

    }

    render() {
        return (
            <div className="App">
                <header >
                    <h1>welcome to project class &nbsp; </h1>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {this.state.drop}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => this.changeBackgroundColor("team1",<App1></App1>)}>team 1</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.changeBackgroundColor("team2",<App2></App2>)}>team 2</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.changeBackgroundColor("team3",<App3></App3>)}>team 3</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.changeBackgroundColor("team4",<App4></App4>)}>team 4</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.changeBackgroundColor("team5",<App5></App5>)}>team 5</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.changeBackgroundColor("team6",<App6></App6>)}>team 6</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </header>
                <body className="body">
                <div className={this.state.team}>
                    {this.state.app}
                    <h2>test</h2>
                </div>

                </body>
            </div>
        );
    }
}



export default App;
