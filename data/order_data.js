import config from '../dbconfig.js';
import sql from 'mssql';

async  function  getOrders() {
    try {
      let  pool = await  sql.connect(config);
      let  products = await  pool.request().query("SELECT * from Orders");
      return  products.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }


  async  function  getOrder(productId) {
    try {
      let  pool = await  sql.connect(config);
      let  product = await  pool.request()
      .input('input_parameter', sql.Int, productId)
      .query("SELECT * from Orders where Id = @input_parameter");
      return  product.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }



  async  function  addOrder(order) {
    try {
      let  pool = await  sql.connect(config);
      let  insertProduct = await  pool.request()
      .input('Id', sql.Int, order.Id)
      .input('Title', sql.NVarChar, order.Title)
      .input('Quantity', sql.Int, order.Quantity)
      .input('Message', sql.NVarChar, order.Message)
      .input('City', sql.NVarChar, order.City)
      .execute('InsertOrders');
      return  insertProduct.recordsets;
    }
    catch (err) {
      console.log(err);
    }
  }

 
  const orderOps = {  
    getOrders:  getOrders,
    getOrder:  getOrder,
    addOrder:  addOrder 
  }

  export default orderOps;