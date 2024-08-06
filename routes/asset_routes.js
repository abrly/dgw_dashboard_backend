import { Router } from 'express';

import AssetController from '../controllers/asset_controller.js';

const asset_router = Router();

asset_router.get('/statuswisetotals',AssetController.getStatuswiseTotalTrans);

asset_router.get('/typewisetotals',AssetController.getTypewiseTotalTrans);

export default asset_router;