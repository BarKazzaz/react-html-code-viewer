# react-html-code-viewer

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-html-code-viewer.svg)](https://www.npmjs.com/package/react-html-code-viewer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

react-html-code-viewer is a react component that can display raw to rendered html code and copy it to the clipboard

## Install

```bash
npm install --save react-html-code-viewer
```

## Usage

```jsx
import React, { Component } from 'react'

import HtmlCodeViewer from 'react-html-code-viewer'

//import style in you project if using nextjs
import 'react-html-code-viewer/dist/index.css'

class Example extends Component {
  render() {
    return <HtmlCodeViewer title={"Example title"} id={"some_id"} onChange={(active)=>{} active={"raw"}}>
    -- your html code here --
    </HtmlCodeViewer>
  }
}
```

The optionnal `active` prop will decide wich code will be initialy displayed

If no value is given, "html" will be the default value

The optionnal `title` prop will be displayed at the left of the labels

The optionnal `id` prop is added as a suffix so that radios in the component don't have the same name and id. 

If no `id` is given, a `v4.uuid` will be used but a conflict will occur between the server and the client in nextjs development

In a map, a good practice is to use the iteration index as the `id` prop

When a label is clicked, the associated radio triggers `onChange` and passes the string "html" or "raw" as argument

## Example

[here](https://vivienld.github.io/react-html-code-viewer/)

## License

MIT © [vivienld](https://github.com/vivienld)
