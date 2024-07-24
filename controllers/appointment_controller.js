
import  appointmentOps  from '../data/appointment_data.js';

export default class AppointmentController {

    static getServiceAgentSummary(req,res){

      appointmentOps.getServiceAgentSummary().then((data) => {
            res.json(data[0]);
          });
    }

/*
    static getSubjectwiseTotalTrans(req,res){

      insuranceOps.getSubjectwiseTotalTrans().then((data) => {
            res.json(data[0]);
          });
    } */

    static getTopSummary(req,res){

      appointmentOps.getTopSummary().then((data) => {
            res.json(data[0]);
          });
    }
  

  }