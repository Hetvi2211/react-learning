import React from 'react';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1 };
        console.log("constructor Called")
    }
    incrementData() {
        if (this.state.counter > 3) {
            this.setState({ msg: "Sorry Value is > 3" })
        } else {
            this.setState({ counter: this.state.counter + 1, msg: '' })
        }
    }
    decrementData() {
        if (this.state.counter < 1) {
            this.setState({ msg: "Sorry Value is < 1" })
        } else {
            this.setState({ counter: this.state.counter - 1, msg: '' })
        }
    }

    componentDidMount() {
        console.log("Component Did Mount Called")
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdated Called")
    }
    render() {
        console.log("Render Called")

        var a = 10
        return (
            <>
                <h1>Counter App</h1>
                A Value is {a}
                Counter Value is {this.state.counter} <br />
                <input type='button' value="+" onClick={this.incrementData.bind(this)} />
                <input type='button' value="-" onClick={this.decrementData.bind(this)} />
                <br />
                <p style={{ color: 'red' }}> {this.state.msg}</p>

                <hr />
                <input type='button' value="+"
                    onClick={() => this.setState({ counter: this.state.counter + 1 })} />

                <input type='button' value="-"
                    onClick={() => this.setState({ counter: this.state.counter - 1 })} />

            </>
        );
    }
}
export default Counter;