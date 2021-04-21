## Trello mock

Trello mock using CRA and Materia UI.
## Build With

* [React](https://reactjs.org/)
* [Create-react-app with Typescript template](https://create-react-app.dev/docs/adding-typescript/)
* [Typescript](https://www.typescriptlang.org/docs/handbook/react.html) 
* [Material-UI](https://material-ui.com/)
* [React-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) 
* [Docker](https://www.docker.com/)

### How to run with NPM in development

```
git clone trello-dashboard-mock
cd trello-dashboard-mock
```

```
npm install
npm run start
```

### How to run with Docker in production

#### Prerequisites 

Docker must be installed in order to run the below instructions. 
Learn more [Docker documentation](https://docs.docker.com/)

I have used multi-stage build in Docker, in order to optimize the size of the built image. 
As you will see in the Dockerfile, an initial node-based phase is utilized only for building the static assets, which are then copied over and served from a stripped-down nginx image. 
In order to run the project please run:

```
cd trello-dashboard-mock

docker-compose up production
```

*Disclaimer*  **When 'attaching to tomorrow-production' message shown in terminal then you can access the web app from http://localhost:8080**.


### Features implemented
* Add or remove new columns in board.
* Add or remove tasks withing the columns.
* Add estimation time in each task.
* Drag and drop any task from one column to another.
* Reorder cards by using drag and drop
* Sort by "Highest priority task" or "Lowest priority task".

### Testing build with

* [Jest for React](https://jestjs.io/)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### Testing
To run the test type:

```
npm install
npm test
```

To run test with coverage run:

```
npm test -- --coverage
```

