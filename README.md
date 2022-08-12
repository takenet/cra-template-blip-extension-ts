# BLiP extension template TS

[![NPM Version][npm-badge]][npm-url]
[![Downloads][npm-downloads-badge]][npm-downloads-url]
[![License][license-badge]][license-url]

BLiP plugin it's a technology-agnostic way to plug unnoficial features to enhance the portal capabilities.

This project aims to give the initial skill needed to develop and build your own plugins.

## Other templates

We have other templates available that you may want to to check:

- [cra-template-blip-plugin][blip-extension-js] (JS template)

## Usage

```bash
npx create-react-app PROJECT_NAME --template blip-extension-ts
```

> Note: `npx` command installs most recent stable version of CRA from npm. `--template` parameter points to this template, note that `cra-template-` prefix is omitted.

Access the project folder.

```bash
cd PROJECT_NAME
```

Configure extension required properties. (**REQUIRED**)

```bash
npm run config PROJECT_NAME
```
> Configure `./charts` according your project. Replace `PLUGIN_NAME` with the correct plugin name.

Then, run the project.

```bash
npm start
```

Now just add the plugin to your chatbot and enjoy!

## More information

[Blip plugin template](https://github.com/takenet/cra-template-blip-extension-ts/tree/main/template)

[npm-badge]: https://img.shields.io/npm/v/cra-template-blip-extension-ts.svg
[npm-url]: https://www.npmjs.com/package/cra-template-blip-extension-ts
[npm-downloads-badge]: https://img.shields.io/npm/dt/cra-template-blip-extension-ts.svg
[npm-downloads-url]: https://www.npmjs.com/package/cra-template-blip-extension-ts
[license-badge]: https://img.shields.io/github/license/takenet/cra-template-blip-extension-ts.svg
[license-url]: https://opensource.org/licenses/MIT
[blip-extension-js]: https://github.com/takenet/cra-template-blip-plugin
