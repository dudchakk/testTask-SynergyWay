# Test Task - Dahboard Application

This repository contains the implementation of a Dashboard application. The project is built using **React Mosaic** and demonstrates three widgets with information about companies, fetched from **Fake API**.


## Features

- **Homepage**: Displays three Company Info widgets using [React Mosaic](https://github.com/nomcopter/react-mosaic) in a layout as specified in the task.

- **Company Info Widget**: A component that fetches and displays data for a specific company.

- **Fake API**: Uses Json Server running on port 5000 with the `companies-lookup.json` file. The file is updated to include the `/companies` endpoint for fetching all companies.

- **Ticker Dropdown**: A dropdown menu in each panel that enables selecting a company by its ticker. The list of tickers is fetched from the `/companies` endpoint. The first three companies are shown by default.

- **Responsive Design**: Adapts dynamically to mobile screens by switching to a column view. The **usehooks-ts** library is used for handling responsive behavior.

- **Maximize Controller**: An additional toolbar control that maximizes the selected panel to full screen by modifying the mosaic layout.


## How to Run the Application (Locally)

1. **Clone this project to your local machine:**  

   ```bash
   git clone https://github.com/dudchakk/testTask-SynergyWay.git
   ```
2. **Install the required project dependencies:**  

   ```bash
   npm install
   ```
3. **Install Json Server globally:**  

   ```bash
   npm i -g json-server
   ```
4. **Start the Json Server:**  

   ```bash
   json-server --watch companies-lookup.json --port 5000
   ```
5. **Run the project in a separate terminal:**  

   ```bash
   npm run dev
   ```
6. Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.


## How to Run the Application (with Docker)

1. **Download and install Docker Desktop (if not already installed):**  
  Visit the [Docker Desktop website](https://www.docker.com/products/docker-desktop/) and follow the installation instructions.

2. **Launch Docker Desktop:**  
  Open the Docker Desktop application to ensure it is running.

3. **Start the project using Docker Compose:**  
  ```bash
  docker compose up --build
  ```
4. Open [http://localhost:80](http://localhost:80) to view the application.


## Technologies used

- **React**: The core framework for building the application.
- **React Mosaic**: Used for creating and managing dynamic dashboard panels.
- **Tailwind CSS**: For responsive and modern UI styling.
- **TypeScript**: Type validation.
- **Docker**: Enables containerization.