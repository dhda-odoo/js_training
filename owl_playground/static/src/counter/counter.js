
/** @odoo-module **/

import { Component ,useState} from "@odoo/owl";

export class Counter extends Component{
    static template="owl_playground.counter";
    state=useState({ value : 0});       

    increment(){// increment method 
    
    this.state.value++;
    }
    decrement(){// decrement method
    
    this.state.value--;
    }
}