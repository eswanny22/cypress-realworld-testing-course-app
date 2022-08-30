import { defineConfig } from "cypress";

const del = require('del')

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('after:spec', (spec, results) => {
        if (results && results.stats.failures === 0 && results.video) {
          // `del()` returns a promise, so it's important to return it to ensure
          // deleting the video is finished before moving on
          return del(results.video)
        }
      })
    },
  },
  projectId: "jwt3sm",
});
