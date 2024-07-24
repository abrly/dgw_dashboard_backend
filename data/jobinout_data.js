import config from '../dbconfig.js';
import sql from 'mssql';

/*
async  function  getUserPerformance() {
  try {
    let  pool = await  sql.connect(config);
    let  resp = await  pool.request()
    .execute('spGetInsurance_UserPerformance');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}


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
    .execute('spGetJobInOut_TopSummary');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}


  const jobInOutOps = {  
  /*  getUserPerformance:  getUserPerformance,
    getSubjectwiseTotalTrans: getSubjectwiseTotalTrans, */
    getTopSummary:getTopSummary
  }

  export default jobInOutOps;