import { Router } from 'express';

const router = Router();

import reception_router from './reception_routes.js';
import insurance_router from './insurance_routes.js';
import gatepass_router from './gatepass_routes.js';
import jobinout_router from './jobinout_routes.js';
import appointment_router from './appointment_routes.js';
import invoice_router from './invoice_routes.js';
import asset_router from './asset_routes.js';
import fleetreq_router from './fleetreq_routes.js';
import po_router from './po_routes.js';
import fine_router from './fine_routes.js';

router.use('/reception', reception_router);

router.use('/insurance', insurance_router);

router.use('/gatepass', gatepass_router);

router.use('/jobinout', jobinout_router);

router.use('/appointment', appointment_router);

router.use('/invoice', invoice_router);

router.use('/asset', asset_router);

router.use('/invoice', invoice_router);

router.use('/fleetreq', fleetreq_router);

router.use('/po', po_router);

router.use('/fine', fine_router);

export default router;