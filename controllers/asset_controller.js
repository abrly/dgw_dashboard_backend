
import  assetOps  from '../data/asset_data.js';

export default class AssetController {

    static getStatuswiseTotalTrans(req,res){

      assetOps.getStatuswiseTotalTrans().then((data) => {
            res.json(data[0]);
          });
    }


    static getTypewiseTotalTrans(req,res){

      assetOps.getTypewiseTotalTrans().then((data) => {
            res.json(data[0]);
          });
    }

  
  

  }