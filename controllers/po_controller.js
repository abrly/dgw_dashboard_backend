
import  poOps  from '../data/po_data.js';

export default class POController {
 
    static getTopSummary(req,res){

      poOps.getTopSummary().then((data) => {
            res.json(data[0]);
          });
    }

    static getStatusSummary(req,res){

      poOps.getStatusSummary().then((data) => {
            res.json(data[0]);
          });
    }
  

  }