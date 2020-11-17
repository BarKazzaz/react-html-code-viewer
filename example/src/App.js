import React from 'react'

import HtmlCodeViewer from 'rhcv'

import 'rhcv/dist/index.css'

const App = () => {
  return (
    <div>
      <HtmlCodeViewer title="Example title" id="unique-id" active="raw">
        <div>This is an example of how react-html-code-viewer works.</div>
      </HtmlCodeViewer>
    </div>
  )
}

export default App
