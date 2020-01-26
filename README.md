# Monorepo Template

A minimal monorepo template with:
* [Lerna](https://lerna.js.org/)
* [TypeScript](http://www.typescriptlang.org/)

## Install dependencies

1. `npm install`
1. `npm run bootstrap`

## To add a new service

Run the following command:

```sh
npm run generate service
```

## Generators

The `npm run generate` command uses `plop` ([https://plopjs.com/](https://plopjs.com/)).

It all starts with the `./generators/index.js` file.

### Add a new service template

1. Create a new directory in `./templates`.
1. Use `*.hbs` and Handlebar template syntax for files with dynamic content.
1. Add the new service to the `choices` option for the `serviceType` prompt in `./generators/service.js`.
   * NOTE: The `choices.*.value` property must match the directory name created above.

Look at other service templates in `./templates` for further guidance.