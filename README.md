# webpack-phaser-ts

This is a template Phaser project with the following things configured:

- Webpack 4 (`npm run build`)
- Wepback dev server (`npm start`)
- Typescript
- Eslint (`npm run lint`/`npm run lintfix`)
- Prettier (`npm run format`)
- Game assets (stored in `src/assets`).
- VSCode automatically running Eslint/Prettier
- VSCode debugging (A launch task is provided in `.vscode/launch.json`)
- Typescript strict mode.

## Using this project

First git clone this repository. Next, modify `package.json` to make it specific to your project. Finally, place all of your code in the `src` folder, using any preferred organization. The only thing file that needs to exist is `src/game.ts` which is the entry point of the application (although this can be changed in `webpack.config.js`).

To run the dev server, use `npm start`.

Various other scripts are available in `package.json`.

VSCode debugging support is also present, as mentioned above.

To build for production (TODO: separate production config), run `npm run build`. Note that currently, production builds have _not_ been set up.
