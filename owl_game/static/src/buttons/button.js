/** @odoo-module **/
import { Component , useState} from "@odoo/owl";

export class Buttons extends Component{
    static template="owl_game.button";
    stateuser=useState({value:0});
    statebot=useState({value:0});
    stateresult=useState({value:""})
    Rock(){
        const li=["Rock","Paper","Scissor"];
        let bot=li[Math.floor(Math.random() * 3)];
        console.log(bot)
        if (bot === "Paper"){
            this.statebot.value++
            this.stateresult.value="You Lost"
        }
        else if (bot === "Rock"){
            this.stateresult.value="Draw"
        }
        else {
            this.stateuser.value++
            this.stateresult.value="You Won"
        }
        
    }
    Paper(){
        const li=["Rock","Paper","Scissor"];
        let bot=li[Math.floor(Math.random() * 3)];
        console.log(bot);
        if (bot === "Paper"){
            this.stateresult.value="Draw"
        }
        else if (bot === "Rock"){
            this.stateuser.value++
            this.stateresult.value="You Won"
        }
        else {
            this.statebot.value++
            this.stateresult.value="You Lost"
        }
    }
    Scissor(){
        const li=["Rock","Paper","Scissor"];
        let bot=li[Math.floor(Math.random() * 3)];
        console.log(bot)
        if (bot === "Paper"){
            this.stateuser.value++
            this.stateresult.value="You Won"
        }
        else if (bot === "Rock"){
            this.statebot.value++
            this.stateresult.value="You Lost"
        }
        else {
            this.stateresult.value="Draw"
        }
    }


}

// Buttons.props={
//     id:{type:Number},
//     user:{type:Number},
//     bot:{type:Number},
//     result:{type:String}
// }


