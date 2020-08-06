import React from 'react';
import logo from './logo.svg';
import './App.css';
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';



class App extends React.Component {

    constructor() {
        super();
        this.state = {
            team:"team",
            drop:"select project"
        }
        this.changeBackgroundColor.bind(this)
    }

    changeBackgroundColor = (team) => {
        this.setState({team:team, drop:team})
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <h1>welcome to project class &nbsp; </h1>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {this.state.drop}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => this.changeBackgroundColor("team1")}>team 1</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.changeBackgroundColor("team2")}>team 2</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.changeBackgroundColor("team3")}>team 3</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.changeBackgroundColor("team4")}>team 4</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.changeBackgroundColor("team5")}>team 5</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.changeBackgroundColor("team6")}>team 6</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </header>
                <body className="body">
                <div className={this.state.team}>
                    <h2>test</h2>
                </div>

                </body>
            </div>
        );
    }
}

export default App;
