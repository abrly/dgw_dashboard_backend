
import  receptionOps  from '../data/reception_data.js';

export default class ReceptionController {

    static getUserPeformance(req,res){

      receptionOps.getUserPerformance().then((data) => {
            res.json(data[0]);
          });
    }


    static getSubjectwiseTotalTrans(req,res){

      receptionOps.getSubjectwiseTotalTrans().then((data) => {
            res.json(data[0]);
          });
    }

    static getTopSummary(req,res){

      receptionOps.getTopSummary().then((data) => {
            res.json(data[0]);
          });
    }
  

  }