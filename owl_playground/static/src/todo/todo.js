/** @odoo-module **/

import { Component } from "@odoo/owl";

export class Todo extends Component{
    static template="owl_playground.Todo";

    onClick(ev){
        this.props.toggle(this.props.id);
    }

    onRemove(ev){
        this.props.remove(this.props.id)
    }
    }
    Todo.props={
        id:{type:Number},
        description:{type:String},
        done:{type:Boolean},
        toggle:{type:Function},
        remove:{type:Function}
    }   
