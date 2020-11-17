import React from 'react'
import jsxToString from 'jsx-to-string'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { agate } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import styles from './styles.module.css'

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
    this.copyToClipBoard = this.copyToClipBoard.bind(this)
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
      const target = document.getElementById('copyLabel')
      target.style.backgroundColor = 'rgb(31, 189, 0)'
      target.style.color = '#fff'

      setTimeout(() => {
        target.style = null;
      }, 500)

    })
  }

  render() {
    return (
      <div className={styles.htmlViewer + ' ' + this.props.className}>
        <div className={styles.togglerContainer}>
          <div className={styles.toggler}>
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
              className={styles.copyLabel}
              onClick={this.copyToClipBoard}
              id='copyLabel'
            >
              copy
          </div>
          </div>
        </div >
        <div className={styles.delimiter} />

        <div className={styles.content}>{this.state.content}</div>
      </div >
    )
  }
}

export default HtmlCodeViewer