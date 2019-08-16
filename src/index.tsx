import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css';


export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
class Index {
    static say():void{
        console.log('我是真的ts');
    }
}

class Shape {
    area: number;
    color: string;
    constructor ( name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "pink";
    };

    shoutout() {
        return "I'm " + this.color + " with an area of " + this.area + " cm squared.";
    }
}

    const square = new Shape("square", 30, 30);
    console.log( square.shoutout() );
    console.log( 'Area of Shape: ' + square.area );
    console.log( 'Color of Shape: ' + square.color );

    function index (){
        return (
        <div>
            123
        </div>
    )
}
ReactDOM.render(<Hello compiler={'typescript'} framework={'123'} />,document.getElementById('root'))
Index.say();