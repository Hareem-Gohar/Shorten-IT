import Url from '../Models/urlModel.js';
import { nanoid } from 'nanoid';
import validateUrl from '../Utils/validateUrl.js';

const createShortUrl = async (req, res) => {
  const { originalUrl, expiryDate } = req.body;
  const shortUrl = nanoid(6);


  const expiryDateObject = expiryDate ? new Date(expiryDate) : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); 

  const newUrl = new Url({
    originalUrl,
    shortUrl,
    clicks: 0, 
    expiryDate: expiryDateObject,  
  });

  try {
    await newUrl.save();
    res.status(201).json({ shortUrl, clicks: newUrl.clicks });
  } catch (error) {
    console.error('Error creating short URL:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};





// Controller for handling the redirection
const getOriginalUrl = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({ shortUrl });
    if (!url) {
      return res.status(404).json({ error: 'URL not found' });
    }
    // Check if the URL has expired
    const currentDate = new Date();
    const expiryDate = new Date(url.expiryDate);

    if (expiryDate < currentDate) {
      return res.status(410).json({ error: "URL expired." });
    }
    // Increment the click count
    url.clicks += 1;
    await url.save();  // Save the updated click count

   

    // Return the updated click count and redirect to the original URL
    res.status(200).json({ originalUrl: url.originalUrl, clicks: url.clicks });

  } catch (error) {
    console.error('Error retrieving URL:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};





export { createShortUrl, getOriginalUrl };
