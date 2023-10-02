# Weather App Readme

Welcome to the Weather App project! This single-page React application allows you to retrieve weather information based on ZIP codes. The app utilizes data from the OpenWeatherMap API to provide real-time weather data, hourly forecasts, and daily forecasts for the specified location.

## Features

### 1. Dynamic Backgrounds

- The app dynamically changes its background image based on the weather description at the specified location. Different backgrounds are displayed for various weather conditions, enhancing the user experience.

### 2. Responsive Design

- Designed with mobile devices in mind, the Weather App offers a responsive user interface that adapts seamlessly to various screen dimensions. Whether you're using a smartphone, tablet, or desktop computer, you can access weather data with ease.

### 3. ZIP Code Validation

- The app performs ZIP code validation to ensure the accuracy of the entered data. If an invalid ZIP code or unsupported characters are provided, it displays an error message, guiding users to enter valid information.

### 4. 3D Hover Effects

- Enjoy a visually appealing user experience with 3D hover effects on specific elements. Elements scale and transition smoothly, providing an engaging interface.

### 5. Collapsible Forecast Sections

- The app features collapsible forecast sections that allow you to expand and collapse weather forecasts with a horizontal scroll bar. A user-friendly button provides a smooth expand/collapse effect, making it easy to access detailed forecasts.

### 6. Docker Support

- A Dockerfile is included in the project, enabling you to containerize the app effortlessly. If you prefer to run the Weather App in a Docker container, instructions are provided to assist you.

### 7. Easy Deployment with Docker

- Easy Deployment with Docker: Provided are Docker commands to build and run the app in a Docker container, making it easy to deploy and run the Weather App.

## Getting Started

Follow these steps to get started with the Weather App:

1. Clone the repository to your local machine:

   git clone https://github.com/yourusername/coding-challenge.git

2. Install the required dependencies:

   cd coding-challenge
   npm install

3. Obtain an API key from OpenWeatherMap by signing up at [OpenWeatherMap API](https://openweathermap.org/api). Replace `YOUR_API_KEY` in `App.jsx` and `Zipcode.jsx` with your actual API key.

4. Build and run the app:

   npm start

5. Open your web browser and access the app at [http://localhost:3000](http://localhost:3000).

### Docker Deployment

If you prefer to use Docker for deployment, follow these steps:

1. Build a Docker image for the Weather App.

   docker build -t coding-challenge .

2. Run a Docker container from the built image.

   docker run -d -p 3000:80 coding-challenge

3. To see a list of running containers, use the following command.

   docker ps

4. To stop and remove the Docker container, use the following commands.

   docker stop {container-name}

   docker rm {container-name}

## Usage

- Enter a valid ZIP code in the input container and press Enter or click the search icon.
- The app will fetch weather data based on the ZIP code, displaying current weather information, hourly forecasts, and daily forecasts.
- Observe the background changing to match the weather conditions.

## Technologies Used

- React
- Axios
- CSS
- OpenWeatherMap APIs

## Acknowledgments

- Weather data provided by OpenWeatherMap.
- Background images sourced from web.

## Author

- SAI TEJA POLAMPALLY
