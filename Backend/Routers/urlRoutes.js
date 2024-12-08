import express from 'express';
import { createShortUrl, getOriginalUrl } from '../Controllers/urlController.js';

const router = express.Router();

router.post('/shorten', createShortUrl);
router.get('/:shortUrl', getOriginalUrl);

export default router;
