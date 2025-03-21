Overview

This project focuses on analyzing the landscape of vegan and vegetarian restaurants in New York City. By utilizing the Yelp API, we scraped detailed restaurant data — including ratings, reviews, and pricing — to uncover insights about restaurant density, customer preferences, and strategic opportunities in the market. The data was thoroughly cleaned and analyzed to ensure accuracy, resulting in visual reports designed to support data-driven decisions.

Objectives

Scrape: Collect structured data on NYC's vegan and vegetarian restaurants from Yelp.  
Clean: Handle missing data, remove duplicates, and ensure consistent formatting.  
Analyze: Identify key trends, restaurant density patterns, and customer behavior insights.  
Visualize: Present findings through charts and maps for easy interpretation.  

Data Collection

The data extraction phase leverages the Yelp Fusion API to gather:  
Restaurant Name  
Address & Neighborhood  
Cuisine Tags  
Average Rating  
Number of Reviews  
Price Range ($ to $$$$)  
Latitude & Longitude (for geo-visualization)  

Data Cleaning

The raw data required significant preprocessing to ensure reliability for analysis. Key steps included:  
Handling Missing Values: Filled or dropped incomplete entries.  
Standardizing Price Formats: Converted Yelp’s dollar signs into numerical price categories.  
Duplicate Removal: Merged duplicates based on name, location, and phone number.  

Analysis & Insights

1. Restaurant Density  
Heatmap: Shows the concentration of vegan and vegetarian restaurants across NYC boroughs.  
Neighborhood Breakdown: Identified hotspots like East Village and Williamsburg.  

2. Customer Behavior  
Average Ratings by Neighborhood: Found higher average ratings in Manhattan and Brooklyn.  
Review Volume: Correlated high review counts with tourist-heavy areas.  
Cuisine Preferences: Analyzed top tags like Vegan Burgers, Plant-Based Asian, and Health-Focused Cafes.  

3. Price Trends  
Price Distribution: Most restaurants fell in the $-$$ range, with a handful of upscale $$$ and $$$$ locations.  
Rating vs. Price: Analyzed whether higher prices correlate with better ratings (spoiler: not always!).  

4. Top-Rated Restaurants  
Spotlight on High Performers: Highlighted restaurants with 4.5+ stars and over 500 reviews.  
Hidden Gems: Identified lesser-known spots with outstanding reviews but low foot traffic.  

Legal Disclaimer

This project is intended for educational and analytical purposes only. Be mindful of Yelp’s API terms of service and ensure ethical data usage.
