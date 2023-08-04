/** @odoo-module **/

import { Component,useSubEnv } from "@odoo/owl";
import { registry } from "@web/core/registry";
import {Layout} from '@web/search/layout';
import { getDefaultConfig } from "@web/views/view";
import {useService} from "@web/core/utils/hooks";
import { Domain } from "@web/core/domain";


class AwesomeDashboard extends Component {
    setup(){
        
        useSubEnv({
            config: {
                ...getDefaultConfig(),
                ...this.env.config,
            },
        });
        this.display={controlPanel:{"top-right":false,"bottom-right":false}
        };
        this.action=useService("action");
    };

    Customers(){
        this.action.doAction("base.action_partner_form");
    }
    open_orders(title,domain){
        this.action.doAction({
            type:"ir.actions.act_window",
            name:title,
            res_model:"awesome_tshirt.order",
            domain:new Domain(domain).toList(),
            views:[[false,"list"],[false,"form"]],

        })
    }
    open7daysorders(){
        const domain= "[('create_date','>=', (context_today() - datetime.timedelta(days=7)).strftime('%Y-%m-%d'))]";
        this.open_orders(this.env._t("last seven days order",domain));
    }
    open7dayscancelled() 
    {
            const domain =
                "[('create_date','>=', (context_today() - datetime.timedelta(days=7)).strftime('%Y-%m-%d')), ('state','=', 'cancelled')]";
            this.open_orders("Last 7 days cancelled orders", domain);

    }
}


AwesomeDashboard.components = {Layout};
AwesomeDashboard.template = "awesome_tshirt.clientaction";

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);


