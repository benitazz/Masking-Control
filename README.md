# MaskingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.
The purpose of this project is to demonstrate the custom masking control in Angular 2, this is just a prototype.

This extend on https://www.npmjs.com/package/text-mask-addons and https://www.npmjs.com/package/angular2-text-mask by creating a custom control to do display the masking and getting the un-masked value on the binding. For example the control might display the masking value  for thousand seperator like this '6 900' but the actual value that you retrieve from the control will be a number without spacing '6900'. 

# Properties of the Control
  isreadOnly - this is a boolean property to tell control if it is disabled or enabled, Default is enabled.
  
  maskType - this is the custom to tell the control the control which maksing to use. The Enum can be extended according to your needs.
  
             Current Enum:
                    export enum MaskType {
                              Integer,
                              Decimal,
                              Phone,
                              Date,
                              BirthDay
                          }               

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
