
import  invoiceOps  from '../data/invoice_data.js';

export default class InvoiceController {

    static getUserPeformance(req,res){

      invoiceOps.getUserPerformance().then((data) => {
            res.json(data[0]);
          });
    }


    static getTypewiseTotalTrans(req,res){

      invoiceOps.getTypewiseTotalTrans().then((data) => {
            res.json(data[0]);
          });
    }

    static getTopSummary(req,res){

      invoiceOps.getTopSummary().then((data) => {
            res.json(data[0]);
          });
    }
  

  }