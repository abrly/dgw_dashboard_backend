
import  jobInOutOps  from '../data/jobinout_data.js';

export default class JobInOutController {

  /*  static getUserPeformance(req,res){

      insuranceOps.getUserPerformance().then((data) => {
            res.json(data[0]);
          });
    }


    static getSubjectwiseTotalTrans(req,res){

      insuranceOps.getSubjectwiseTotalTrans().then((data) => {
            res.json(data[0]);
          });
    } */

    static getTopSummary(req,res){

      jobInOutOps.getTopSummary().then((data) => {
            res.json(data[0]);
          });
    }
  

  }