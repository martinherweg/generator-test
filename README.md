# mh-boilerplate

# External Libraries
- Include Media ([include-media.com](http://include-media.com/)) - Easy Media Queries
- Modularscale Scss ([modularscale.com](http://www.modularscale.com/), [https://github.com/modularscale/modularscale-sass](https://github.com/modularscale/modularscale-sass)) - generate a Modular Scale
- family.scss ([https://github.com/LukyVj/family.scss](https://github.com/LukyVj/family.scss)) - handy mixins managing nth-child
- lazysizes.js ([https://github.com/aFarkas/lazysizes](https://github.com/aFarkas/lazysizes)) - Lazyload Images
- fluid type mixin ([http://www.sassmeister.com/gist/7f22e44ace49b5124eec](http://www.sassmeister.com/gist/7f22e44ace49b5124eec))
- 
# Commands

Initialize Project
```gulp init```

Default task with BrowserSync
```
gulp
```

If you pull this project and the project owner hasn't done any JS work you will miss the JS Folders, to create them use:

```
gulp createDirs
```

This will create `src/js/json`, `src/js/my-scripts` and `src/js/single`

Move all your JSON Files into `src/js/json`

Move JS Files you write and want to get merged into `src/js/my-scripts` 
 
Move Single JS Files you *don't* want to be merged into a single file into `src/js/single` and define them in the config.json unter files.jsCopyScripts

Librarys you want to merge together in a plugins.min.js must be defined in the config.json unter files.jsCombinePlugins

# Browserify

### Shim jQuery
If you want to use jQuery in your HTML Files or have plugins who need jquery available you have to add this to your package.json
If you want other functions available use the same pattern

```
  "browser": {
    "jquery": "./node_modules/jquery/dist/jquery.js"
  },
  "browserify": {
    "transform": [
      "browserify-shim"
    ]
  },
  "browserify-shim": {
    "jquery": "$"
  }
```

# Craft

## Installation
If you choose to install Craft via the boilerplate you need https://github.com/rsanchez/craft-cli#composer-installation installed.



## Hearty Config
If you use the Hearty Config you can get more Information about here https://github.com/mmikkel/HeartyConfig-Craft/

It keeps stuff out of of the Craft Folder and you can split the configuration for multiple Environments in different Files clearer View on all the Files

# Build Tasks
There are several build tasks which will clean your assets at first and then call all necessary tasks to recreate them.

### Create Favicons from Single Picture under `src/favicons`
```
gulp favicons
```

### Complete Rebuild will clean Views, CSS, JS and Images
```
gulp build
```

### Publish, minifies css, js and images in the dist folder, you can use it before you zip your files
```
gulp publish
```

### Deploy, clears everything in the dist folder, then builds from scratch and after all minifies css, js and images, can be used for the Task Pipeline in your deployment tool
```
gulp deploy
```

# Production
We have a production task which will clean all assets at first, then recreate everything and finish with minifiyng CSS and JS