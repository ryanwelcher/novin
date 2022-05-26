How the novin.hu is build on?

The page built with:

1. Gutenberg custom blocks -> plugins/nobin-blocks
2. Custom child theme build upon generatepress theme ->themes/novin
3. Custom post types plugin: Custom Post Type UI
4. Custom fields: Advanced Custom Fields

Novin theme folder structre:

1. src folder containts the external packages and frontend interactive javascripts that will be built with webpack into the dist folder. Create the dist folder with webpack as the followings: go to gulp-dev folder then run "npx webpack". The src folder only contains javascript that is to be converted into ES5 synthax, if you want external package without conversion put the inc folder the files.
2. sass folder contains the whole site style that will be built into style.css Create the style.css as the followings: go to gulp-dev folder then run "gulp"
3. template-parts folder contains the individual elements/parts that I use in the throughout the project
4. templates folder contains the page templates for the individual pages
5. in the main root the files are the copies of the parent theme with slight modifications
6. the inc folder contains javascript and css files that are part of an external library that DOES not need ES5 conversion and the php customizer for theme settings, and wordpress ajax functionalities - use functions.php to include these into the final theme.
7. themes.json contains the block editor settings

Novin-blocks plugin:

1. The includes folder contains the separate custom blocks. I use the npm package: https://www.npmjs.com/package/@wordpress/create-block I modified the structure of the basic implementation so I can build more blocks. If you modify then run the following commands "npm start" for development, "npm run build" for development. If you want to add more blocks:

- create a new folder in includes/block-editor/blocks/
- add a new line in src/index.js
- novin-blocks.php add a new element to the array block

2. The custom block functionality(javascript) is in the frontend.js file in the themes/novin/src/components/gutenberg.js

3. And the style (stylesheet) is in the style.css in the block folder in the plugins/novin-blocks/includes/block-editor/blocks/block-\*\*\*/style.scss
