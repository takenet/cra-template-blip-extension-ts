# BLiP extension template React JS

[![Blip-plugin](https://imgur.com/B8dPNgk.png 'Blip-plugin')][blip]

BLiP extension it's a technology-agnostic way to plug unofficial features to enhance the portal capabilities.

## Index

-   [Introduction](#-Introduction)
-   [Getting Started](#-Getting-Started)
-   [Integration with the chatbot](#-Integration-with-the-chatbot)
-   [Tests](#-tests)
-   [Other Commands](#-Other-Commands)
-   [Committing your project changes](#-Committing-your-project-changes)
-   [Recommended VS Code extensions](#-Recommended-VS-Code-extensions)
-   [Good to know](#-Good-to-know)
-   [References](#-References)

## Introduction

This project aims to give you the initial skill needed to develop and build your own extensions.

To do that that, it comes with the necessary configuration to use [Blip's Design System][blip-ds] and make direct calls to the Portal through the commands available in [Blip Docs][blip-docs].

## Getting Started

Access the project directory.

```bash
cd my-app
```

Install dependencies.

```bash
npm install
```

Configure extension required properties. (**REQUIRED**)

```bash
npm run config my-app
```

> Note: This will replace PLUGIN_NAME with the correct project name in the Charts files and create the appsettings.development.json file.

Serve with hot reload at http://localhost:3000.

```bash
npm run start
```

Now just add the extension to your chatbot and enjoy.

## Integration with the chatbot

Inside your selected chatbot, go to settings(⚙️) > advanced settings and look for the following setting:

| Domain                    | Name    | Value         |
| ------------------------- | ------- | ------------- |
| postmaster@portal.blip.ai | Plugins | `<Any Value>` |

<br/>
If there's no such configuration, you just need to create it as following:

| Domain                    | Name    | Value                                                                    |
| ------------------------- | ------- | ------------------------------------------------------------------------ |
| postmaster@portal.blip.ai | Plugins | {"local": {"name": "Local Plugin 3000", "url": "http://localhost:3000"}} |

<br/>
Otherwise, if there's already a `Plugins` configuration you just need to modify the value to add your local plugin. You may have a `Plugins` value such as this:

```json
{
    "some-random-id": {
        "name": "Some Random Plugin",
        "url": "https://some-random-plugin-url.com"
    }
}
```

Then you just need to append your plugin like:

```json
{
    "some-random-id": {
        "name": "Some Random Plugin",
        "url": "https://some-random-plugin-url.com"
    },
    "local": {
        "name": "Local Plugin 3000",
        "url": "http://localhost:3000"
    }
}
```

After setting up the plugin configuration, both new or modified, you must refresh your page and the plugin will be listed at the `...` on blip's bot navbar.

![blip plugin location](https://i.imgur.com/6q2IFxm.png)

## Tests

Use the sufix `*.spec.ts` when writing unit test suites and `*.test.ts` when writing integration tests. Doing this, you'll be able to run then with separate scripts, such as:

-   `npm run test` -> for all tests, not suppressing logs
-   `npm run test:unit` -> for unit tests
-   `npm run test:integration` -> for integration tests
-   `npm run test:coverage` -> for all tests, with coverage report (available on **/coverage/Icov-report/index.html**)
-   `npm run test:all` -> for all tests, not suppressing logs and lint verification
-   `npm run test:clear` -> delete Jest cache directory and then exit without running tests

## Other Commands

Check lint inconsistences

```bash
npm run lint
```

Fix lint inconsistences

```bash
npm run lint:fix
```

To build the project

```bash
npm run build
```

## Committing your project changes

In order to have a standard in the project development, we adopted a convention for commit messages.

The [Conventional Commits][conventional-commits] specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of.

The commit message should be structured as follows:

```git
<type>[optional scope]: <description>
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. **fix**: a commit of the type `fix` patches a bug in your codebase
2. **feat**: a commit of the type `feat` introduces a new feature to the codebase
3. Others: commit types other than fix: and feat: are allowed, for example [@commitlint/config-conventional][commitlint-config-conventional] recommends `chore:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.

### Examples

```
feat: allow provided config object to extend other configs
```

```
feat(lang): added polish language
```

```
fix: minor typos in code
```

```
docs: correct spelling of CHANGELOG
```

## Recommended VS Code extensions

- [ESLint][vscode-eslint]
- [Prettier - Code formatter][vscode-prettier]
- [Tailwind CSS IntelliSense][vscode-tailwindcss]

### Settings (optional)

- [VS Code Settings][vscode-settings]
>To use the settings, type `Ctrl+,` shortcut to open VS Code settings, then select the option `Open Settings(JSON)` in the upper right corner on the settings page.


## Good to know

-   All the communication between your extension and portal should be made using the browser message API. We highly recommend you to use our official lib [IMP][iframe-message] which was been designed to that communication.
-   All available communication commands can be found in our [Extensions API documentation][blip-docs].
-   We recommend you to create extension with components and colors similar to our design system, we have an [website][blip-ds] to help with that.
-   We discourage solutions that could jeopardize your chatbot data. So, avoid saving access keys, identifiers and/or IDs in browser storage, sessions or in a database without data encryption.

## References

This project uses many tools like:

-   [ReactJS][react-js]
-   [TypeScript][typescript]
-   [Jest][jest]
-   [Testing Library][testing-library]
-   [Tailwindcss][tailwindcss]
-   [Headless UI][headless-ui]
-   [Eslint][eslint]
-   [Prettier][prettier]
-   [Blip DS][blip-ds]
-   [Iframe Message Proxy][iframe-message]
-   [Conventional Commits][conventional-commits]
-   [Husky][husky]

## License

This project is licensed under the MIT License.

<!-- blip -->
[blip]: https://blip.ai
[blip-ds]: https://design.take.net/240287753
[blip-docs]: https://docs.blip.ai/#extensions
[iframe-message]: https://github.com/takenet/iframe-message-proxy

<!-- libraries -->
[react-js]: https://reactjs.org
[vite]: https://vitejs.dev
[typescript]: https://www.typescriptlang.org
[jest]: https://jestjs.io
[testing-library]: https://testing-library.com
[tailwindcss]: https://tailwindcss.com
[headless-ui]: https://headlessui.dev/
[eslint]: https://eslint.org
[prettier]: https://prettier.io
[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0-beta.2/
[commitlint-config-conventional]: https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
[husky]: https://typicode.github.io/husky/#/

<!-- VS Code extensions -->
[vscode-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vscode-prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vscode-tailwindcss]: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
[vscode-settings]: https://gist.github.com/diego3g/b1b189063d21b96d6144ca896755be64