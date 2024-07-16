
import  orderOps  from '../data/order_data.js';

export default class OrderController {


    static getOrders(req,res){

      orderOps.getOrders().then((data) => {
            res.json(data[0]);
          });
    }

   /* static register(req, res) {

        res.send("OK");

    } */
    

  }