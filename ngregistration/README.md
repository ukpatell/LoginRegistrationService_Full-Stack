# Basic Instructions of Angular (Scroll Below for Project Instructions)

# Registration (Angular)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Instructions for Project

##Directory
    Recommended to keep project AND Angular in same project folder
      . cd [path of the folder] 
      . ng new [name of project]
      . Routing YES [if you have multiple pages and requires routing]
      . CSS [Enter]
    Install
      . Bootstrap [ npm install bootstrap ]
      . JQuery    [ npm install jquery    ]
    Generate Components
      . ng g c [name of component]   
      . ng g c login
      . ng g c registration

    
### Notes
- Clear Code from app.component.html except last line(routing)
- BootStrap "Form"
  - Copy component code and past in login.component.html
  - Add <form #loginform = 'ngForm'> to make it into Angular Form
  - Add import {NgForm} from "@angular/forms"; in LoginComponent.ts
  - Modify const routes: Routes = [
    {path:'',component:LoginComponent}
    ];  in app.routing.module.ts
  - 
    

