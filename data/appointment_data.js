import config from '../dbconfig.js';
import sql from 'mssql';


async  function  getServiceAgentSummary() {
  try {
    let  pool = await  sql.connect(config);
    let  resp = await  pool.request()
    .execute('spGetAppointments_For_ServiceAgents');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

/*
async  function  getSubjectwiseTotalTrans() {
  try {
    let  pool = await  sql.connect(config);
    let  resp = await  pool.request()
    .execute('spGetInsurance_Subjectwise_Totaltrans');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}*/


async  function  getTopSummary() {
  try {
    let  pool = await  sql.connect(config);
    let  resp = await  pool.request()
    .execute('spGetAppointments_TopSummary');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}


  const appointmentOps = {  
    getServiceAgentSummary:  getServiceAgentSummary,
  /*    getSubjectwiseTotalTrans: getSubjectwiseTotalTrans, */
    getTopSummary:getTopSummary
  }

  export default appointmentOps;