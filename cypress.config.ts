// import { defineConfig } from "cypress";
// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
//   projectId: "jwt3sm"
// });


import { defineConfig } from 'cypress'

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        /* ... */
      })
    }
  },
  projectId: "jwt3sm"
})