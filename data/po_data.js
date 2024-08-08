import  poolPromise  from '../dbconn.js';


async  function  getTopSummary() {
  try {
    let  pool = await poolPromise;
    let  resp = await  pool.request()
    .execute('spGetPO_TopSummary');
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
    .execute('spGetPO_StatusSummary');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}


  const poOps = {  
    getTopSummary:getTopSummary,
    getStatusSummary:getStatusSummary
  }

  export default poOps;