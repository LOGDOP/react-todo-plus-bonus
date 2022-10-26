import React, { Component } from "react";
import { Button } from 'reactstrap';

import "./post-status-filter.css";


export default class PostStatusFilter extends Component {
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }
    
    render() {
        const buttons = this.buttons.map(({name, label}) => {
        const active = this.props.filter === name;
        const clazz = active ? 'info' : 'secondary'
        const outline = clazz === 'secondary' ? true : false
            return (
                <Button 
                key={name} 
                outline={outline} 
                color={clazz}
                onClick={() => this.props.onFilterSelect(name)}>
                    {label}
                
                </Button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

