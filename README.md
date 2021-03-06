# react-html-code-viewer

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-html-code-viewer.svg)](https://www.npmjs.com/package/react-html-code-viewer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

react-html-code-viewer is a react component that can display rendered or raw html code, switch between the two views and copy the code to the clipboard.

It relies on the amazing [react-element-to-jsx-string](https://www.npmjs.com/package/react-element-to-jsx-string) and [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter)

## Install

```bash
npm install --save react-html-code-viewer
```

## Usage

```jsx
import React from 'react'

import HtmlCodeViewer from 'react-html-code-viewer'

//import the component css in your project
import 'rhcv/dist/index.css'

import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const App = () => {
  return (
    <div>
      <HtmlCodeViewer highlighter={darcula} title="Example title" id="unique-id" active="raw" split onChange={(active) => { console.log(active) }}>
        <div>This is an example of how react-html-code-viewer works.</div>
      </HtmlCodeViewer>
    </div>
  )
}

export default App

```

The optionnal `active` prop will decide whether "html" or "raw" code will be initialy displayed

If no value is given, "html" will be the default value

The optionnal `title` prop will be displayed at the left of the labels

The optionnal `id` prop defines the viewer id and is added as a suffix so that radios in the component don't have the same name and id

If no `id` is given, a `v4.uuid` will be used but a conflict will occur between the server and the client in nextjs development

In a loop, a good practice would be to use the iteration index as the `id` prop

When a label is clicked, the associated radio triggers `onChange` and passes the string "html" or "raw" as argument

The optionnal `highlighter` prop defines the highlighting style of the code through the react-syntax-highlighter package.

`agate` is the default `highlighter` style

`split`defines if the component is mounted with the two views splited

[Component example here](https://vivienld.github.io/react-html-code-viewer/)

## License

MIT © [vivienld](https://github.com/vivienld)
