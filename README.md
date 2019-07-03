# Student Absentee Dashboard

A principal and guidance counselor facing dashboard that assists in identifying students who are chronically absent for targeted interventions by guidance counselors.

## Installation / Set Up

This dashboard is a fully functioning React app. It is required to have node and npm installed. To check the app out:
1. Fork and clone this repo onto your computer, navigate into directory

2. Run:

```sh
npm install
```
This will get and install all the required dependencies for React.

3. Next, start up a server for the app to run on:

```sh
npm start
```

This will host the app and open a browser window to display it.

## Features
- Displays a list of students who are chronically absent and relevant information to take appropriate action
- Allows the user to adjust the threshold for what it means to be chronically absent
- Can search students by First or Last Name
- Can filter students by grade

## Technologies

- React
  - React DOM
  - React Router DOM
  - Semantic UI
  - React Hooks

- Libraries
  - Lodash

- Stylings
  - Semantic UI

### React Component Hierarchy

- App
  - Filter
  - StudentList
    - Student
