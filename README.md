# Test Task - Dahboard Application

This repository contains the implementation of a Dashboard application. The project is built using **React Mosaic** and demonstrates three widgets with information about companies, fetched from **Fake API**.


## Features

- **Homepage**: Displays three Company Info widgets using [React Mosaic](https://github.com/nomcopter/react-mosaic) in a layout as specified in the task.

- **Company Info Widget**: A component that fetches and displays data for a specific company.

- **Fake API**: Utilizes Json Server running on port 5000 with the `companies-lookup.json` file provided in the task.

- **Ticker Dropdown**: A dropdown menu in each panel that lists company tickers, allowing users to select which company's information to display. By default, companies are displayed based on the panel index.

- **Responsive Design**: Adapts dynamically to mobile screens by switching to a column view. The **usehooks-ts** library is used for handling responsive behavior.

- **Maximize Controller**: An additional toolbar control that maximizes the selected panel to full screen by modifying the mosaic layout.


## How to Run the Application

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
3. **Start the Json Server:**  

   ```bash
   json-server --watch companies-lookup.json --port 5000
   ```
3. **Run the project in a separate terminal:**  

   ```bash
   npm run dev
   ```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.


## Technologies used

- **React**: The core framework for building the application.
- **React Mosaic**: Used for creating and managing dynamic dashboard panels.
- **Tailwind CSS**: For responsive and modern UI styling.
- **TypeScript**: Type validation.