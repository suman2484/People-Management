# People Management App

This is a Single Page Application (SPA) built with Angular 7/8 that manages a list of people. The application allows users to view, edit, and delete person records through a user-friendly interface.

## Features

- **List All People**: View a comprehensive list of all people in the system.
- **Edit Person**: Modify the details of an existing person.
- **Delete Person**: Remove a person from the list after confirmation.

## Project Structure

The project is organized as follows:

```
people-management-app
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── person-list          # Component for listing people
│   │   │   ├── person-edit          # Component for editing a person
│   │   │   └── person-delete        # Component for deleting a person
│   │   ├── services
│   │   │   └── person.service.ts    # Service for handling API requests
│   │   ├── models
│   │   │   └── person.model.ts      # Model defining the structure of a person
│   │   ├── app-routing.module.ts     # Routing configuration
│   │   ├── app.component.html        # Main application template
│   │   ├── app.component.ts          # Root component logic
│   │   ├── app.component.scss        # Styles for the root component
│   │   └── app.module.ts             # Main application module
├── angular.json                      # Angular project configuration
├── package.json                      # Project dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
└── README.md                         # Project documentation
```

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd people-management-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`.

## API Endpoints

The application interacts with the following REST API endpoints:

- `GET /api/people`: Retrieve a list of all people.
- `GET /api/people/:id`: Retrieve details of a specific person by ID.
- `POST /api/people`: Create a new person.
- `PUT /api/people/:id`: Update an existing person by ID.
- `DELETE /api/people/:id`: Delete a person by ID.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.