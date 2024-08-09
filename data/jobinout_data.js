
import  poolPromise  from './db/dbconn.js';

async  function  getTopSummary() {
  try {
    let  pool = await poolPromise;
    let  resp = await  pool.request()
    .execute('spGetJobInOut_TopSummary');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}


  const jobInOutOps = {  
    getTopSummary:getTopSummary
  }

  export default jobInOutOps;