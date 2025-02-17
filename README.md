# Database Application

This project is a Node.js application that connects to two different databases: MySQL and PostgreSQL. It performs a FULL JOIN operation between tables from the Sakila database (MySQL) and the Northwind database (PostgreSQL) and displays the combined data.

## Project Structure

```
database-app
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── config
│   │   └── database.ts         # Database connection configuration
│   ├── controllers
│   │   └── dataController.ts    # Controller for handling data requests
│   ├── models
│   │   ├── mysqlModel.ts       # Model for MySQL interactions
│   │   └── postgresModel.ts    # Model for PostgreSQL interactions
│   ├── routes
│   │   └── index.ts            # Route configuration
│   └── services
│       └── dataService.ts      # Service for data processing
├── package.json                 # NPM package configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

## Getting Started

### Prerequisites

- Node.js
- MySQL Server
- PostgreSQL Server

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd database-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Configuration

- Update the database connection settings in `src/config/database.ts` with your MySQL and PostgreSQL credentials.

### Running the Application

To start the application, run the following command:

```
npm start
```

### Usage

The application exposes an API that allows you to retrieve data from both databases. You can access the FULL JOIN results through the defined routes.

## License

This project is licensed under the MIT License.