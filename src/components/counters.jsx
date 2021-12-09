import React, { Component } from 'react';
import Counter from './counter';
class Counters extends React.Component {

    state = {
        counters: [
        {id: 1, value:0},
        {id: 2, value:1},
        {id: 3, value:2},
        {id: 4, value:3}
        ]
    };

    render() { 
        return (
            <div className="container mt-5">
                {this.state.counters.map(counter => (
                <Counter 
                key={counter.id} 
                value={counter.value} 
                selected={true} 
                id={counter.id}
                onDelete = {this.handleDelete}
                />
                ))}
            </div>
        );
    }

    handleDelete = counterId =>{
        console.log(counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});

    }
}
 
export default Counters;