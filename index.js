require('dotenv').config();
const express = require('express');
const { Client } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

app.get('/live', async (req, res) => {
	    const client = new Client({ connectionString: DATABASE_URL });
	    try {
		            await client.connect();
		            res.send('Well done');
		        } catch (error) {
				        res.send('Maintenance');
				    } finally {
					            await client.end();
					        }
});

app.listen(PORT, "0.0.0.0", () => {
	    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});

const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

app.use(helmet()); // يحمي الهيدر من الهجمات

// تحديد عدد الطلبات المسموح بها لكل IP خلال 15 دقيقة
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 دقيقة
//         max: 100 // يسمح بـ 100 طلب فقط لكل IP
//         });
//
//         app.use(limiter);
//
