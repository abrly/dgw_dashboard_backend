import  poolPromise  from '../dbconn.js';

async  function  getStatuswiseTotalTrans() {
  try {
    let  pool = await poolPromise;
    let  resp = await  pool.request()
    .execute('spGetAsset_Statuswise_Totaltrans');
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
    .execute('spGetAsset_Typewise_Totaltrans');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}


  const assetOps = {  
    getStatuswiseTotalTrans:  getStatuswiseTotalTrans,
    getTypewiseTotalTrans: getTypewiseTotalTrans   
  }

  export default assetOps;