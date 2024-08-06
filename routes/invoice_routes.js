import { Router } from 'express';

import InvoiceController from '../controllers/invoice_controller.js';

const invoice_router = Router();

invoice_router.get('/userperformance',InvoiceController.getUserPeformance);

invoice_router.get('/typewisetotals',InvoiceController.getTypewiseTotalTrans);

invoice_router.get('/summarytotals',InvoiceController.getTopSummary);

export default invoice_router;