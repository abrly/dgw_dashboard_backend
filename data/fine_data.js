import  poolPromise  from './db/dbconn.js';

async function getTypewiseTotalTrans() {
  try {
    let  pool = await poolPromise;
    let  resp = await  pool.request()
    .execute('spGetFine_ViolationTypeSummary');
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
    .execute('spGetFines_TopSummary');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

  const fineOps = {  
    getTypewiseTotalTrans: getTypewiseTotalTrans,
    getTopSummary:getTopSummary
  }

  export default fineOps;