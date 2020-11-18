import React, { useState } from 'react'

import HtmlCodeViewer from 'rhcv'

import 'rhcv/dist/index.css'

import * as styles from 'react-syntax-highlighter/dist/cjs/styles/hljs'

let options = []
let i = 0
let lastActive = "html"
for (let style in styles) {
  options.push(<option key={i} value={style}>{style}</option>)
  i++
}

function getCodeViewer(highlighter) {
  return <HtmlCodeViewer key={highlighter} highlighter={styles[highlighter]} active={lastActive} title="I am a title" id="unique-id" onChange={(active) => { lastActive = active; }}>
    <div>
      This is an example text <br />
      click on <strong>html</strong> to display rendered html<br />
      click on <strong>code</strong> to display raw code<br />
      click on <strong>copy</strong> to save code in the clipboard<br />
    </div>
  </HtmlCodeViewer>
}

const App = () => {

  const [viewer, setViewer] = useState(getCodeViewer('darcula'))

  return (
    <div className="example">
      <div className="container">
        <select className="select" onChange={(e) => { setViewer(getCodeViewer(e.currentTarget.value)) }}>
          <option>-- pick a highlighter style --</option>
          {options}
        </select>
      </div>
      <div>
        {viewer}
      </div>
    </div>
  )
}

export default App
