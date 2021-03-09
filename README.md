# NGFlix
Playing around with 3rd party API's and decided that IMDB cannot be the only site online that gives you information around movies.

Also, I haven't worked with Bootstrap in very many years, think the last time I touched on Boostrap was version 2 so here's a project that uses bootstrap for styling.

# Build Status

# Technologies being used
* Angular 11
* Angular Bootstrap 4
* Fontawesome
* Github Actions

# Patterns
* Monorepository via @nrwl/nx
* Service factory
* Presenter

# Project Structure
The project is a standard nx-derived mono-repo layout

* apps
  * web
    * src
      * app
        * pages
          * movie
          * search
          * search-results
  * web-e2e
* libs
  * core
    * src
      * lib
  * model
    * src
      * lib
  * service
    * src
      * lib
  * ui
    * src
      * lib

# Angular layer
The Angular layer is a very basic Angular project with a very small footprint.

# Getting up and running
Inside the **ngflix** folder, execute the following CLI command:

```powershell
nx run web:serve
```

Which will launch Node's server listener on http://localhost:4200

