import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'HaryPhamDev',
        address: 'Hoi Dan IT',
        age: 26
    };

    handleClick(event) {
        
        // merge State => react class
        this.setState({
            name: 'Eric',
            age: Math.floor((Math.random() * 100) + 1)
        })

        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }

    handleOnMouseOver(event){
        // console.log(event.pageX);
    }
    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
            </div>
        );
    }
}

export default  MyComponent;