const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const fetch = require('node-fetch');
const prettier = require("prettier");

const hooks = [
  {
    hook: 'bootstrap',
    name: 'copyAssetsToPublic',
    description:
      'Copies ./assets/ to the "distDir" defined in the elder.config.js. This function helps support the live reload process.',
    run: ({ settings }) => {
      // note that this function doesn't manipulate any props or return anything.
      // It is just executed on the 'bootstrap' hook which runs once when Elder.js is starting.

      // copy assets folder to public destination
      glob.sync(path.resolve(settings.rootDir, './assets/**/*')).forEach((file) => {
        const parsed = path.parse(file);
        // Only write the file/folder structure if it has an extension
        if (parsed.ext && parsed.ext.length > 0) {
          const relativeToAssetsFolder = path.relative(path.join(settings.rootDir, './assets'), file);
          const outputPath = path.resolve(settings.distDir, relativeToAssetsFolder);
          fs.ensureDirSync(path.parse(outputPath).dir);
          fs.outputFileSync(outputPath, fs.readFileSync(file));
        }
      });
    },
  },
  {
    hook: 'bootstrap', // hook type
    name: 'fetchCompanyData',
    description: 'Fetch company data into data object to be available in all hooks and routes',
    run: async ({ settings, data }) => {
      const companyData = await fetch('https://opendata.arcgis.com/datasets/a4d813c396934fc09d0b801a0c491852_0.geojson')
        .then((res) => res.json());
      const companies = Object.values(companyData.features).map((entry) => entry.properties);
      return {
        data:  { ...data, companies }
      }
    }
  },
  {
    hook: 'html',
    name: 'prettify HTML',
    description: 'prettify HTML output',
    run: ({ htmlString }) => {
      return { htmlString: prettier.format(htmlString, {parser: 'html'})};
    }
  }
];

module.exports = hooks;
