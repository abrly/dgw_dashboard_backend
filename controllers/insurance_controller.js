
import  insuranceOps  from '../data/insurance_data.js';

export default class InsuranceController {

    static getUserPeformance(req,res){

      insuranceOps.getUserPerformance().then((data) => {
            res.json(data[0]);
          });
    }


    static getSubjectwiseTotalTrans(req,res){

      insuranceOps.getSubjectwiseTotalTrans().then((data) => {
            res.json(data[0]);
          });
    }

    static getTopSummary(req,res){

      insuranceOps.getTopSummary().then((data) => {
            res.json(data[0]);
          });
    }
  

  }