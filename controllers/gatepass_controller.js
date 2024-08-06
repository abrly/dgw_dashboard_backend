
import  gatepassOps  from '../data/gatepass_data.js';

export default class GatepassController {

    static getUserPeformance(req,res){

      gatepassOps.getUserPerformance().then((data) => {
            res.json(data[0]);
          });
    }


  /*  static getSubjectwiseTotalTrans(req,res){

      insuranceOps.getSubjectwiseTotalTrans().then((data) => {
            res.json(data[0]);
          });
    } */



    static getTopSummary(req,res){

      gatepassOps.getTopSummary().then((data) => {
            res.json(data[0]);
          });
    }
  

  }