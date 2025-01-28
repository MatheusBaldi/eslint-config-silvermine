/* global describe, it */
import { expect } from 'chai';
import { ESLint } from 'eslint';
import config from '../eslint.config.js';

// Create an instance of ESLint with the configuration passed to the function
function createESLintInstance() {
   return new ESLint({
      overrideConfig: config,
   });
}

async function lintText(text) {
   const eslint = createESLintInstance();

   return eslint.lintText(text);
}

// Export integration
// module.exports = { lintFiles };

describe('@silvermine/eslint-config', () => {

   it('should raise an error when semi-colon is missing', async () => {
      const testCode = `
         const name = "eslint"
      `;

      const results = await lintText(testCode, { rules: { 'semi': true } });

      expect(results).to.be.equal({});
   });

});
