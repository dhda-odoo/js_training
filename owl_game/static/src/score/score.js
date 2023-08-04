/** @odoo-module **/

import { Component} from "@odoo/owl";
import { Buttons } from "../buttons/button";

export class Score extends Component {
    static template = "owl_game.score";
    static components={Buttons}
}