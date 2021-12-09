import React, { Component } from 'react';


class Counter extends React.Component {
    state = {
        count: 0
    };

    constructor()
    {
        super();
        this.handle_increment = this.handle_increment.bind(this);
        this.count_reset = this.count_reset.bind(this);
    }

    render() 
    { 
        return (
        <div>

            <span className={this.color_class_badge()}>{this.format_counter()}</span>

            <button onClick={this.handle_increment} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={this.count_reset} className="btn btn-danger btn-sm">reset</button>
            
        </div>
        );
    }

    
    handle_increment(){
        
        this.setState({count: this.state.count+1})

    };
    count_reset(){
        this.setState({count: 0})

    };

    format_counter()
    {
        if(this.state.count === 0)
        {
            return "Zero";
        }
        return this.state.count;
    }
    color_class_badge()
    {
        let badge_color = "badge m-2 badge-";
        if(this.state.count === 0)
        {
            badge_color += "warning";
        }
        else
        {
            badge_color += "primary"
        }
        return badge_color;
    }
}
 
export default Counter;