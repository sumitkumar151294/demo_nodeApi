const express = require('express');
const router = express.Router();
const axios = require('axios');

const index_uid = 'securities'
const url = `https://meilisearch.devops.vestr.in/indexes/${index_uid}/documents`;
const apikey = 'd090b33edd1c59658b2584fdfd9a230fedb43ace78b179f010047d03aa8059d4';

router.get('/fetch-financial-data', async (req, res) => {
    try {
        const response = await axios.get('https://financialmodelingprep.com/api/v3/symbol/NASDAQ?apikey=G2uQdV8eU5J8y4gWn70lyXAdmT6AO3jk');

        const financialData = response.data.map(item => ({
            // symbol: item.symbol,
            // name: item.name,
            // price: item.price,
            // changesPercentage: item.changesPercentage,
            // change: item.change,
            // dayLow: item.dayLow,
            // dayHigh: item.dayHigh,
            // yearHigh: item.yearHigh,
            // yearLow: item.yearLow,
            // marketCap: item.marketCap,
            // priceAvg50: item.priceAvg50,
            // priceAvg200: item.priceAvg200,
            // exchange: item.exchange,
            // volume: item.volume,
            // avgVolume: item.avgVolume,
            // open: item.open,
            // previousClose: item.previousClose,
            // eps: item.eps,
            // pe: item.pe,
            // earningsAnnouncement: item.earningsAnnouncement,
            // sharesOutstanding: item.sharesOutstanding,
            // timestamp: item.timestamp
            name: item.name,
            symbol: item.symbol,
            id: item.id,
            price: item.price,
            exchange: item.exchange,
            exchangeShortName: item.exchangeShortName,
            type: item.type,
            currency: item.currency,
            region: item.region,
            marketCap: item.marketCap,
            country: item.country
        }));

        await axios.post(url, financialData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apikey}`
            }
        });

        res.status(200).json({ message: 'Financial data added successfully' });
    } catch (error) {
        console.error('Error fetching or storing financial data:', error.message);
        res.status(500).json({ error: 'Error fetching or storing financial data' });
    }
});

module.exports = router;
