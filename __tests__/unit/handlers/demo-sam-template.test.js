const lambda = require('../../../src/handlers/demo-sam-template.js');

describe('API Request test', function () {
  it('APIが正常に呼び出された場合', async () => {
    const result = await lambda.demoSamTemplateHandler();
    expect(result.status).toEqual(200);
  });
});
