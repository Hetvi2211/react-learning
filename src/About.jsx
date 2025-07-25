//class
import React from 'react'
class About extends React.Component{
    constructor(props){
        super(props);
        this.state={   
            name: 'Hetvi Rabari',
            learning: ['React', 'Vite', 'Routing', 'Components'],
        };
    }
    render(){
        return(
            <div>
                <h1>About</h1>
                  <p>Hello! My name is <b>{this.state.name}</b>.</p>
                  <p>I am currently learning the following technologies:</p>
                  <ul>
                 {this.state.learning.map((tech, index) => (
                 <li key={index}>{tech}</li>
                 ))}
                </ul>
                <p>This page is built using a <strong>React class component</strong>.</p>
            </div>
        );
    }
}
export default About;