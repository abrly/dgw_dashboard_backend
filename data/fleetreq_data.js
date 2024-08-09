import  poolPromise  from './db/dbconn.js';


async  function  getTopSummary() {
  try {
    let  pool = await poolPromise;
    let  resp = await  pool.request()
    .execute('spGetFleetRequest_TopSummary');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}


async  function  getStatusSummary() {
  try {
    let  pool = await poolPromise;
    let  resp = await  pool.request()
    .execute('spGetFleetRequest_StatusSummary');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}


  const fleetRequestOps = {  
    getTopSummary:getTopSummary,
    getStatusSummary:getStatusSummary
  }

  export default fleetRequestOps;