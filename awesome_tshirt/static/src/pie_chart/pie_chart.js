/** @odoo-module **/



import {loadJS} from "@web/core/assets";
import {getColor} from "@web/views/graph/colors";


import {Component ,onWillStart,useRef,onMounted,onWillUnmount} from "@odoo/owl";


export class Piechart extends Component{
    setup(){
        this.canvasRef=useRef("canvas");
        this.labels=Object.values(this.props.data);
        this.color=this.labels.map((_,index) => {
            return getColor(index);
        });
    onWillStart(() => {
        return loadJS(["web/static/lib/Chart/Chart.js"]);
    });
    
    onMounted(() => {
        this.renderChart();
    });

    onWillUnmount(() => {
        if (this.chart){
            this.chart.destroy();
        }
    });

            
    }

    renderChart(){
        if (this.chart){
            this.chart.destroy();
        }
        this.chart=new Chart(this.canvasRef.el,{
            type:"pie",
            data:{
                labels:this.labels,
                datasets:[
                    {
                        label:this.props.label,
                        data:this.data,
                        backgroundColor:this.color,
                    },
                ],
            },
        });
    }
}

Piechart.template="awesome_tshirt.piechart";