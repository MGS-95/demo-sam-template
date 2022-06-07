# sam 用 demo テンプレート


## Deploy the sample application


```bash
$ sam build
$ sam deploy --guided
```

Run functions locally and invoke them with the `sam local invoke` command.

```bash
my-application$ sam local invoke helloFromLambdaFunction --no-event
```
<hr>

## Unit tests

Tests are defined in the `__tests__` folder in this project. Use `npm` to install the [Jest test framework](https://jestjs.io/) and run unit tests.

```bash
my-application$ npm install
my-application$ npm run test
```

<hr>

## Cleanup

To delete the sample application that you created, use the AWS CLI. Assuming you used your project name for the stack name, you can run the following:

```bash
$ aws cloudformation delete-stack --stack-name demo-sam-template
```

<hr>

## Lint

Check the lint.
```bash
$ npm run lint
$ npm run lint:fix
```
<hr>

## Prettier

Formatting the code
```bash
$ npm run prettier
$ npm run prettier:write
```
