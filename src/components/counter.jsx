import React, { Component } from 'react';


class Counter extends React.Component {
    

    // constructor()
    // {
    //     super();
    //     this.handle_increment = this.handle_increment.bind(this);
    //     this.count_reset = this.count_reset.bind(this);
    // }
    state = {
        value: this.props.value
    };

    render() 
    { 
        console.log("props", this.props.id);
        return (
        <div>

            <h4>Counter# {this.props.id}</h4>

            <span className={this.color_class_badge()}>{this.format_counter()}</span>

            <button 
                onClick={this.handle_increment} 
                className="btn btn-secondary btn-sm">
                Increment
            </button>

            <button 
                onClick={this.count_reset} 
                className="btn btn-warning btn-sm">
                reset
            </button>

            <button 
                onClick={() => this.props.onDelete(this.props.id)} 
                className="btn btn-danger btn-sm">
                Deleet
            </button>
            
        </div>
        );
    }

    
    handle_increment = () =>{
        
        this.setState({value: this.state.value+1})

    };
    count_reset = () =>{
        this.setState({value: this.props.value})

    };

    format_counter()
    {
        if(this.state.value === 0)
        {
            return "Zero";
        }
        return this.state.value;
    }
    color_class_badge()
    {
        let badge_color = "badge m-2 badge-";
        if(this.state.value === 0)
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