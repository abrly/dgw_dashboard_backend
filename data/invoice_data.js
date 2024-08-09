import  poolPromise  from './db/dbconn.js';

async  function  getUserPerformance() {
  try {
    let  pool = await poolPromise;
    let  resp = await  pool.request()
    .execute('spGetInvoice_UserPerformance');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}


async  function  getTypewiseTotalTrans() {
  try {
    let  pool = await poolPromise;
    let  resp = await  pool.request()
    .execute('spGetInvoice_For_InvoiceTypes');
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
    .execute('spGetInvoice_TopSummary');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}


  const invoiceOps = {  
    getUserPerformance:  getUserPerformance,
    getTypewiseTotalTrans: getTypewiseTotalTrans,
    getTopSummary:getTopSummary
  }

  export default invoiceOps;