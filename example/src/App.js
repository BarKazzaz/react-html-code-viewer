import React, { useState } from 'react'

import HtmlCodeViewer from 'rhcv'

import * as styles from 'react-syntax-highlighter/dist/cjs/styles/hljs'

let options = []
let i = 0
for (let style in styles) {
  options.push(<option key={i} value={style}>{style}</option>)
  i++
}

function getCodeViewer(highlighter) {
  return <HtmlCodeViewer
    id="htmlViewer"
    key={highlighter}
    highlighter={styles[highlighter]}
    active="raw"
    split

    title="This is an example of how it works"
    onChange={(active) => { }}>

    <div id="htmlExample">
      <div>
        This is an example text
    </div>
      <div>
        click on <strong>the frame</strong> to change the view
    </div>
      <div>
        click on <strong>the arrows</strong> to split the view
    </div>
      <div>
        click on <strong>the copy logo</strong> to save code in the clipboard
    </div>
      <div>
        you can resize me, i am responsive :)
      </div>
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
