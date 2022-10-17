# [How to automate code format on commit](https://dev.to/koich1/how-to-automate-format-your-code-on-commit-acn)


Keeping coding conventions is strikingly important for team development; however, being careful is not enough as the team size increases. Automation will solve this problem by fixing different coding styles.

# How this automation work
This method uses the npm script to check and fix codes automatically. The best timing is on each git commit.

# Tools
Here are the main tools:
- ESLint
- Husky

ESLint is a code check tool based on custom configurable rules and Husky enables execution of the code fixing command on commit timing.

# How to set up
Let's get started from scratch! The process is divided into 3 parts:

1. Set up the project
2. Write npm script
3. Set pre-commit hook

## Pre-conditions
First of all, an important thing is the project structure. It requires setting a git repository and the repository should be for one project and includes only either client or server side. In other words, the monorepo structure is not covered in this article.

## 1. Set up the project

### Make a folder and a file
make one file called index.js.
```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
But actually, naming and the file content is ok whatever you want.

## Set up git and npm packages
If your project is not initialized by git and npm, please set it by using these commands.

```
git init
npm init -y
```

In this article, the test code uses express.js, so please install express

```
npm install express
```

And you need to have ESLint library. There is a convenient command to set up the ESLint configuration

```
npm init @eslint/config
```
You can select the lint rules by choosing several options.

For now, your project structure looks like this:
```
/.git
/node_modules
/.eslintrc.js
/index.js
/package.json
/package-lock.json
```

Now, you will see some errors in the index.js based on the lint rule.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k99zhszq5rwgy8h7renb.png)



If you do not see any error, please set the content below in .eslintrc.js
```js
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: "standard",
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    quotes: [2, "double", "avoid-escape"]
  }
}
```

## 2. Write npm script

Add 2 scripts in package.json.

package.json
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint index.js",
    "lint:fix": "eslint --fix index.js"
  },
```

The lint script just checks and shows errors. Let's try it.

```
npm run lint
```
THe output looks like that.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5i0zi98ji69gslipkxu4.png)

The next command, 'link:fix' will fix the errors.

```
npm run lint:fix
```
Now, you can see the errors disappeared!
But, please **return** the code to check the next process.

## 3. Set the pre-commit hook

The next setting is to make a hook on commit.
Run this command:

```
npx husky-init && npm install
```

You can see that the /.husky folder has been generated!

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uc0uxmpac1azzimdzih4.png)

Open the /.husky/pre-commit, and change the content as below:
```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint:fix
# This command should be the same command that you executed the previous process

# Optional
#exit 1
```

Optional:
If you want to just try the hook and do not want to commit anything, add ``exit 1`` to the last line.

To register the hook, please add & commit ./husky/pre-commit.

```
git add .husky/pre-commit && git commit -m "Add pre-commit"
```

Now, time to test the automation. Please execute the command:
```
git add index.js && git commit -m "test commit"
```

When you check index.js, you can see the errors were removed again.

##Conclusion
Developers will be released to be always careful on coding conventions by this automation. Even if they forget some rules, ESLint helps to keep the rules once the developer commits.



Reference:
https://expressjs.com/en/starter/hello-world.html
https://www.npmjs.com/package/eslint
https://typicode.github.io/husky/