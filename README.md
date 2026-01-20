# GymFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

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

## Project strcture as per industry standard - Amol Bodkhe

src/
│── app/
│   ├── core/
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── user.service.ts
│   │   │   └── membership.service.ts
│   │   └── guards/
│   │       └── auth.guard.ts
│   │
│   ├── models/
│   │   ├── user.model.ts
│   │   └── membership.model.ts
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   ├── login.component.ts
│   │   │   └── register.component.ts
│   │   │
│   │   ├── users/
│   │   │   ├── user-list.component.ts
│   │   │   └── user-add.component.ts
│   │   │
│   │   └── memberships/
│   │       ├── membership-list.component.ts
│   │       └── membership-add.component.ts
│   │
│   ├── app.routes.ts
│   └── app.component.ts


##Git Action
echo "# GYM_Frontend" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/amol-bodkhe/GYM_Frontend.git
git push -u origin main 

