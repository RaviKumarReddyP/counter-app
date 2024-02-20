import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value:this.props.counter.value,
        imageurl: "https://picsum.photos/200",
        tags:['tag1','tag2','tag3']
    };
    renderTags() {
        if (this.state.tags.length === 0) return 'it is a empty list';
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    handleIncrement = () => {
        this.setState({value : this.state.value + 1})
    };
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    render() { 
        
           return (
            <div>
                <img src={this.state.imageurl}></img>
                <span className={this.getBadgeClasses()}>{this.formatCount() }</span>
                <button onClick={this.handleIncrement } className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id) }className="btn btn-danger btn-sm m-2">Delete</button>
                {this.renderTags()}
                
            </div>);
    }
    formatCount() {
        const { value } = this.state;
        return (value === 0) ? 'zero' : value;
    }
    

   
}
 
export default Counter;