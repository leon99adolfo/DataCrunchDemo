# Steps

In this section I list step by step the approach that I would take to develop an application from the submitted mock-up.

1. Install all the necessary tools for the creation and development of the project (NodeJs, NPM, @angular/cli, VsCode and others)
2. Create the project with the follow command of @angular/cli --> "ng new DemoDC"
3. Add Angular material to the project with the follow command of @angular/cli --> "ng add @angular/material"
4. Add [tailwindcss](https://tailwindcss.com/) for colors, flexbox, styles, helper classes
5. Create the main layout that helps us with the navigation of the page (Overview, Estimators, Marketing, Financial)
6. Create the modules and components for each element in the navigation panel (Overview, Estimators, Marketing, Financial)
7. Organize the routing for the created modules (new route for each module)
8. Create a general service to do the http queries (ApiService.ts)
9. Create a "overview" service to call the requests related to the "overview" module. (overview.service.ts)
10. Go to the overview component and create the components for each sections of the page (lead trends, ytd revenue, profitability and revenue & profit per estimator)
11. Install chart tool (ng-apexcharts)
12. Create the charts with the tool installed
13. Get the chart data with the "overview" service created above.

# Picture

![image](https://user-images.githubusercontent.com/5498970/167340240-2803e585-3cdc-44cf-9476-c3398d52ced8.png)


# Demo Data Crunch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
