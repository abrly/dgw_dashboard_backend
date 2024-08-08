
import  fineOps  from '../data/fine_data.js';

export default class FineController {

   
    static getTypewiseTotalTrans(req,res){

      fineOps.getTypewiseTotalTrans().then((data) => {
            res.json(data[0]);
          });
    }

    static getTopSummary(req,res){

      fineOps.getTopSummary().then((data) => {
            res.json(data[0]);
          });
    }
  

  }