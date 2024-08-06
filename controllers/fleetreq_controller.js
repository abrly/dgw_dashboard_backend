
import  fleetRequestOps  from '../data/fleetreq_data.js';

export default class FleetRequestController {
 
    static getTopSummary(req,res){

      fleetRequestOps.getTopSummary().then((data) => {
            res.json(data[0]);
          });
    }

    static getStatusSummary(req,res){

      fleetRequestOps.getStatusSummary().then((data) => {
            res.json(data[0]);
          });
    }
  

  }