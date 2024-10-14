const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // Replace with the external image URL you want to proxy
  const imageUrl = 'https://example.com/external-image.jpg';

  try {
    // Fetch the external image
    const response = await fetch(imageUrl);
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: `Failed to fetch image: ${response.statusText}`,
      };
    }

    // Read the image data into a binary buffer
    const imageBuffer = await response.buffer();

    // Return the image with correct headers
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/jpeg', // Set the correct content type for the image
        'Access-Control-Allow-Origin': '*', // Allow all domains (CORS)
      },
      body: imageBuffer.toString('base64'), // Encode image as base64
      isBase64Encoded: true, // Tell Netlify the response is base64-encoded
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error fetching image: ${error.message}`,
    };
  }
};
