/* eslint-disable prettier/prettier */
import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { agate } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faWindowMaximize } from '@fortawesome/free-regular-svg-icons'
import { faColumns, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

import { v4 } from 'uuid'

import style from './styles.module.css'

class HtmlCodeViewer extends React.Component {
  constructor(props) {
    super(props)

    this.labels = {
      html: "html",
      raw: "raw",
      copy: "copy",
      copied: "copied",
      column: <FontAwesomeIcon icon={faColumns} />,
      square: <FontAwesomeIcon icon={faWindowMaximize} />,
    }

    if (this.props.labels)
      for (const label in this.props.labels)
        this.labels[label] = this.props.labels[label]


    this.highlighterId = v4()

    this.onChange = (this.props.onChange) ? this.props.onChange : () => { }

    this.style = (this.props.highlighter) ? this.props.highlighter : agate

    this.id = (props.id) ? props.id : v4()

    this.str = reactElementToJSXString(props.children).replace(/{' '}/g, '')

    if (!this.props.active) this.props.active = this.labels.html

    if (props.language === 'html') {
      this.str = this.str.replace(/className/g, 'class')
    }

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

    this.html = props.children

    this.state = {
      content: null,
      label: this.props.active,
      copyLabel: this.labels.copy,
      split: this.props.split ? true : false,
      splitIcon: this.props.split ? this.labels.square : this.labels.column,
    }

    this.html = <div key={1} className={style.content}>{this.html}</div>
    this.raw = <div key={2} className={style.content}>{this.raw}</div>

    this.displayHtml = this.displayHtml.bind(this)
    this.displayRaw = this.displayRaw.bind(this)
    this.toggle = this.toggle.bind(this)
    this.copyToClipBoard = this.copyToClipBoard.bind(this)
  }

  toggle() {
    if (this.state.label === this.labels.raw) {
      this.displayRaw()
      this.setState({ label: this.labels.html })
    }

    else if (this.state.label === this.labels.html) {
      this.displayHtml()
      this.setState({ label: this.labels.raw })
    }

  }

  displayHtml() {
    this.onChange(this.state.label)
    this.setState({ content: this.state.split ? [this.html, this.raw] : this.html })
  }

  displayRaw() {
    this.onChange(this.state.label)
    this.setState({ content: this.state.split ? [this.raw, this.html] : this.raw })
  }

  componentDidMount() {
    this.toggle()
  }

  copyToClipBoard(e) {

    this.setState({ copying: true })

    navigator.clipboard.writeText(this.str).then(() => {
      setTimeout(() => {
        this.setState({ copying: false })
      }, 500)
    })
  }

  render() {
    return (
      <div className={[style.htmlViewer, style.overflowHidden].join(' ')} id={this.id}>

        <div className={style.togglerContainer} id={this.id + '-togglerContainer'}>

          {this.props.title ? <div className={style.title}>{this.props.title}</div> : null}

          <div className={style.toggler} id={this.id + '-toggler'}>

            <button id='split'
              onClick={() => {
                const newSplit = !this.state.split
                const icon = newSplit ? this.labels.square : this.labels.column;

                this.setState({ split: newSplit, splitIcon: icon }, () => {
                  (this.state.label === this.labels.html) ? this.displayRaw() : this.displayHtml()
                })
              }}
              className={(this.state.split) ? [style.label, style.active].join(' ') : style.label}>
              {this.state.splitIcon}
            </button>

            <button id='toggle'
              onClick={this.toggle}
              className={style.label}>
              <FontAwesomeIcon icon={faExchangeAlt} />
            </button>

            <button
              className={(this.state.copying) ? [style.label, style.copying].join(' ') : style.label}
              onClick={this.copyToClipBoard}>
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </div>

        </div>

        <div className={style.contentContainer}>
          {this.state.content}
        </div>
      </div>
    )
  }
}

export default HtmlCodeViewer