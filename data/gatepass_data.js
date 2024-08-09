
import  poolPromise  from './db/dbconn.js';

async  function  getUserPerformance() {
  try {
    let  pool = await poolPromise;
    let  resp = await  pool.request()
    .execute('spGetGatePass_UserPerformance');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  getTopSummary() {
  try {
    let  pool = await poolPromise;
    let  resp = await  pool.request()
    .execute('spGetGatePass_TopSummary');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}


  const gatepassOps = {  
    getUserPerformance:  getUserPerformance, 
    getTopSummary:getTopSummary
  }

  export default gatepassOps;