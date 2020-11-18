/* eslint-disable prettier/prettier */
import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { agate } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { v4 } from 'uuid'

import style from './styles.module.css'

class HtmlCodeViewer extends React.Component {
  constructor(props) {
    super(props)

    this.highlighterId = v4()
    this.onChange = (this.props.onChange) ? this.props.onChange : () => { }
    this.htmlIsActive = (this.props.active === "html") ? style.active : null
    this.rawIsActive = (this.props.active === "raw") ? style.active : null
    this.style = (this.props.highlighter) ? this.props.highlighter : agate

    if (this.htmlIsActive === null && this.rawIsActive === null) {
      this.htmlIsActive = style.active
    }

    this.id = (props.id) ? props.id : v4()

    if (props.title) {
      this.title = <div className={style.title}>{this.props.title}</div>
    }

    this.str = reactElementToJSXString(props.children).replace(/{' '}/g, "")

    if (props.language === 'html') {
      this.str = this.str.replace(/className/g, 'class')
    }

    this.rendered = props.children

    this.raw = <SyntaxHighlighter
      id={this.highlighterId}
      wrapLines
      showLineNumbers
      wrapLongLines
      language='htmlbars'
      style={this.style}
    >
      {this.str}
    </SyntaxHighlighter>

    this.state = {
      content: (props.active === "raw") ? this.raw : this.rendered,
      htmlLabelStyle: style.labelActive,
      rawLabelStyle: style.label,
      copyLabelStyle: style.copyLabel,
    }

    this.active = props.active
    this.displayHtml = this.displayHtml.bind(this)
    this.displayRaw = this.displayRaw.bind(this)
    this.handleChecked = this.handleChecked.bind(this)
    this.copyToClipBoard = this.copyToClipBoard.bind(this)
  }

  displayRaw() {
    this.setState({ content: this.raw })
    this.active = "raw"
  }

  displayHtml() {
    this.setState({ content: this.rendered })
    this.active = "html"
  }

  handleChecked(e) {
    this.display(e.currentTarget.value)
  }

  copyToClipBoard(e) {
    e.persist()
    const target = e.currentTarget

    target.innerText = "copied"

    navigator.clipboard.writeText(this.str).then(() => {
      setTimeout(() => {
        target.innerText = "copy"
      }, 500)
    })
  }



  render() {
    return (
      <div className={[style.htmlViewer, style.overflowHidden].join(' ')} id={this.id}>
        <div className={style.togglerContainer} id={this.id + "-togglerContainer"}>
          {this.title}

          <div className={style.toggler} id={this.id + "-toggler"}>
            <input type="radio" name={"contentRadio-" + this.id} id={"htmlRadio-" + this.id} onChange={() => this.onChange('html')} defaultChecked={this.htmlIsActive === style.active} />

            <label htmlFor={"htmlRadio-" + this.id} className={style.label + " " + this.htmlIsActive}
              onClick={this.displayHtml}
            >
              html</label>
            <input type="radio" name={"contentRadio-" + this.id} id={"rawRadio-" + this.id} onChange={() => this.onChange('raw')} defaultChecked={this.rawIsActive === style.active} />

            <label htmlFor={"rawRadio-" + this.id} className={style.label + " " + this.rawIsActive}
              onClick={this.displayRaw}
            >
              code</label>

            <div className={[style.label, style.copyLabel].join(' ')}
              onClick={this.copyToClipBoard}
            >copy</div>
          </div>
        </div>

        <div className={style.content} id={this.id + "-content"}>{this.state.content}</div>
      </div>
    )
  }
}

export default HtmlCodeViewer