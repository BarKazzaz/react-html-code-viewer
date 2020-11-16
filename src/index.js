import React from 'react'
import jsxToString from 'jsx-to-string'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { agate } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

class HtmlCodeViewer extends React.Component {
  constructor(props) {
    super(props)

    this.str = jsxToString(props.children)

    if (props.language === 'html') {
      this.str = this.str.replace(/className/g, 'class')
    }

    this.rendered = props.children

    this.raw = <SyntaxHighlighter
      wrapLines
      showLineNumbers
      wrapLongLines
      language='htmlbars'
      style={agate}
    >
      {this.str}
    </SyntaxHighlighter>

    this.state = {
      content: props.children
    }

    this.display = this.display.bind(this)
    this.handleChecked = this.handleChecked.bind(this)
  }

  display(what) {
    what === 'rendered'
      ? this.setState({ content: this.rendered })
      : this.setState({ content: this.raw })
  }

  handleChecked(e) {
    this.display(e.currentTarget.value)
  }

  copyToClipBoard(e) {
    e.persist()
    navigator.clipboard.writeText(this.str).then(() => {
      const target = e.target.parentNode.lastChild
      target.classList.add('visible')

      setTimeout(() => {
        target.classList.remove('visible')
      }, 1000)
    })
  }

  render() {
    return (
      <div className={'html-viewer ' + this.props.className}>
        <div className='html-viewer-toggler-container'>
          <div className='html-viewer-toggler'>
            <input
              type='radio'
              name={this.props.id + 'codeToggle'}
              id={this.props.id + '-rendered'}
              onChange={this.handleChecked}
              value='rendered'
              defaultChecked
            />
            <label htmlFor={this.props.id + '-rendered'}>html</label>
            <input
              type='radio'
              name={this.props.id + 'codeToggle'}
              id={this.props.id + '-raw'}
              onChange={this.handleChecked}
              value='raw'
            />

            <label htmlFor={this.props.id + '-raw'}>code</label>
            <div
              className='html-viewer-copy-button'
              onClick={this.copyToClipBoard}
            >
              copy
          </div>
            <div className='html-viewer-copy-alert'>✓</div>
          </div>
        </div>
        <div className='delimiter' />

        <div className='html-viewer-display'>{this.state.content}</div>
      </div>
    )
  }
}

export default HtmlCodeViewer