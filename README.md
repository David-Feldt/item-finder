# Item Finder

A React Native app built with Expo that helps you find nearby items with product images and distance information.

## Features

- **Location-based search**: Finds items near your current location
- **Map integration**: Shows results on an interactive map
- **Product images**: Displays product photos from store websites
- **Distance calculation**: Shows how far each item is from you
- **Clean UI**: Simple, intuitive interface

## How it works

1. **Search**: Enter what you're looking for (e.g., "flashlight")
2. **Location**: App gets your current location
3. **Places API**: Searches nearby stores and businesses
4. **Web scraping**: Fetches product images from store websites
5. **Results**: Shows items with images, distance, and location on map

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Get API keys:
   - Google Places API key (for store locations)
   - Add to `app.json` under `extra.googlePlacesApiKey`

3. Run the app:
   ```bash
   npm start
   ```

## Tech Stack

- **React Native** with **Expo**
- **React Native Maps** for map integration
- **Expo Location** for GPS
- **Axios** for API calls
- **Cheerio** for web scraping (Node.js backend)

## Next Steps

To make this fully functional, you'll need to:

1. **Get Google Places API key** and add it to the app
2. **Implement real web scraping** for product images
3. **Add more store APIs** (Home Depot, Canadian Tire, etc.)
4. **Improve search accuracy** with better filtering
5. **Add offline support** for cached results

## API Integration

The app currently uses mock data. To integrate real APIs:

### Google Places API
```javascript
const searchNearbyPlaces = async (query, location) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?` +
    `location=${location.latitude},${location.longitude}&` +
    `radius=5000&keyword=${query}&key=YOUR_API_KEY`
  );
  return response.data.results;
};
```

### Web Scraping (Node.js backend)
```javascript
const cheerio = require('cheerio');

const scrapeProductImage = async (storeUrl, productName) => {
  // Implementation for scraping product images
  // from store websites
};
```

## File Structure

```
item-finder/
├── App.js              # Main app component
├── app.json            # Expo configuration
├── package.json        # Dependencies
├── assets/             # App icons and images
└── README.md          # This file
```

## Development

The app is ready to run on your phone using the Expo Go app. Just scan the QR code that appears when you run `npm start`.

Want to add more features? The code is structured to easily add:
- More store APIs
- Product price comparison
- User reviews
- Favorite items
- Purchase links