import React from 'react'

import HtmlCodeViewer from 'rhcv'

import 'rhcv/dist/index.css'

import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const App = () => {
  return (
    <div>
      <HtmlCodeViewer highlighter={darcula} title="Example title" id="unique-id" active="raw" onChange={(active) => { console.log(active) }}>
        <div>This is an example of how react-html-code-viewer works.</div>
      </HtmlCodeViewer>
    </div>
  )
}

export default App
