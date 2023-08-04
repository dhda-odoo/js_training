/** @odoo-module **/
import {Navbar} from "./navbar/navbar";
import { Card } from "./card/card";
import { Component} from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Todolist } from "./tololist/tololist";

export class Playground extends Component {
    static template = "owl_playground.playground";
    static components={Counter,Todolist,Card,Navbar}

}
