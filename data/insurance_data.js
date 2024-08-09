//import config from '../dbconfig.js';
//import sql from 'mssql';

import  poolPromise  from './db/dbconn.js';


async  function  getUserPerformance() {
  try {
    let  pool = await poolPromise;
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
    let  pool = await poolPromise;
    let  resp = await  pool.request()
    .execute('spGetInsurance_Subjectwise_Totaltrans');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}


async  function  getActiveInsuranceTotalTrans() {
  try {
    let  pool = await poolPromise;
    let  resp = await  pool.request()
    .execute('spGetInsurance_InsuranceActive_Totaltrans');
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
    .execute('spGetInsurance_TopSummary');
    return resp.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}


  const insuranceOps = {  
    getUserPerformance:  getUserPerformance,
    getSubjectwiseTotalTrans: getSubjectwiseTotalTrans,
    getTopSummary:getTopSummary,
    getActiveInsuranceTotalTrans:getActiveInsuranceTotalTrans
  }

  export default insuranceOps;