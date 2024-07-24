import config from '../dbconfig.js';
import sql from 'mssql';


async  function  getUserPerformance() {
  try {
    let  pool = await  sql.connect(config);
    let  resp = await  pool.request()
    .execute('spGetReception_UserPerformance');
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
    .execute('spGetReception_Subjectwise_Totaltrans');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}


async  function  getTopSummary() {
  try {
    let  pool = await  sql.connect(config);
    let  resp = await  pool.request()
    .execute('spGetReception_TopSummary');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}



  const receptionOps = {  
    getUserPerformance:  getUserPerformance,
    getSubjectwiseTotalTrans: getSubjectwiseTotalTrans,
    getTopSummary:getTopSummary
  }

  export default receptionOps;