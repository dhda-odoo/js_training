/** @odoo-module **/

import { Component} from "@odoo/owl";
import { Buttons } from "./buttons/button";
import { Score } from "./score/score";
import { Result } from "./result/result";

export class Playground extends Component {
    static template = "owl_game.playground";
    static components = { Buttons, Score,Result}; 
}