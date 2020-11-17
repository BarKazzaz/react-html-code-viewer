/* eslint-disable prettier/prettier */
import React from 'react'
import jsxToString from 'jsx-to-string'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { agate } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const style = {
  delimiter: {
    borderTop: "0.1px solid #bababa",
    height: "0.1rem",
    marginTop: "0.1rem",
  },
  htmlViewer: {
    border: "0.1px solid #bababa",
    borderRadius: "0.5rem",
    padding: "1rem",
    display: "grid",
    gridTemplateRows: "auto",
    gap: "1rem",
  },
  content: {
    borderRadius: "0.5rem",
    padding: "0.5rem",
  },
  togglerContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    flex: 1,
  },
  copyLabel: {
    border: "none",
    outline: "none",
    margin: "0.2rem",
    padding: "0.2rem 0.5rem",
    cursor: "pointer",
    borderRadius: "0.25rem",
  },
  copyLabelHover: {
    border: "none",
    outline: "none",
    margin: "0.2rem",
    padding: "0.2rem 0.5rem",
    cursor: "pointer",
    borderRadius: "0.25rem",
    color: "#007bff",
  },
  copyLabelActive: {
    border: "none",
    outline: "none",
    margin: "0.2rem",
    padding: "0.2rem 0.5rem",
    cursor: "pointer",
    borderRadius: "0.25rem",
    backgroundColor: "#007bff",
    color: '#fff'
  },
  toggler: {
    borderRadius: " 0.25rem",
    display: "grid",
    gridTemplateColumns: "minmax(5rem, auto) minmax(5rem, auto) minmax(3rem, auto)",
    border: "0.1px solid #bababa",
    textAlign: "center",
  },
  label: {
    borderRadius: "0.25rem",
    cursor: "pointer",
    display: "inline-block",
    margin: "0.2rem",
    padding: "0.2rem 0.5rem",
    textAlign: "center",
  },
  labelHover: {
    borderRadius: "0.25rem",
    cursor: "pointer",
    display: "inline-block",
    margin: "0.2rem",
    padding: "0.2rem 0.5rem",
    textAlign: "center",
    color: "#000",
    backgroundColor: "#efefef",
  },
  labelActive: {
    borderRadius: "0.25rem",
    cursor: "pointer",
    display: "inline-block",
    margin: "0.2rem",
    padding: "0.2rem 0.5rem",
    textAlign: "center",
    background: "#007bff",
    color: "white",
  },
  togglerInput: {
    display: "none",
  },
  togglerVertical: {
    flexFlow: "column wrap",
  }
}

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
      content: props.children,
      htmlLabelStyle: style.labelActive,
      rawLabelStyle: style.label,
      copyLabelStyle: style.copyLabel,
    }

    this.displayHtml = this.displayHtml.bind(this)
    this.displayRaw = this.displayRaw.bind(this)
    this.handleChecked = this.handleChecked.bind(this)
    this.copyToClipBoard = this.copyToClipBoard.bind(this)
  }

  displayRaw() {
    this.setState({ content: this.raw })
  }

  displayHtml() {
    this.setState({ content: this.rendered })
  }

  handleChecked(e) {
    this.display(e.currentTarget.value)
  }

  copyToClipBoard(e) {
    e.persist()
    navigator.clipboard.writeText(this.str).then(() => {
      this.setLabelStyle('copyLabelStyle', 'copyLabelActive')
      setTimeout(() => {
        this.setLabelStyle('copyLabelStyle', 'copyLabel')
      }, 150)
    })
  }

  setLabelStyle(labelName, styleName, force) {
    if (force) {
      this.state[labelName] = style[styleName];
      this.setState(this.state);
    }
    else {
      if (this.state[labelName] !== style.labelActive) {
        this.state[labelName] = style[styleName];
        this.setState(this.state);
      }
    }
  }

  render() {
    return (
      <div style={style.htmlViewer} className='.htmlViewer'>
        <div style={style.togglerContainer} className='.togglerContainer'>
          <div style={style.toggler} className='.toggler'>

            <div id="htmlLabel" style={this.state.htmlLabelStyle}
              onClick={
                () => {
                  this.setLabelStyle('htmlLabelStyle', 'labelActive')
                  this.setLabelStyle('rawLabelStyle', 'label', true);
                  this.displayHtml();
                }
              }
              onMouseEnter={
                () => this.setLabelStyle('htmlLabelStyle', 'labelHover')
              }
              onMouseLeave={
                () => this.setLabelStyle('htmlLabelStyle', 'label')
              }
            >html</div>

            <div id="rawLabel" style={this.state.rawLabelStyle}
              onClick={
                () => {
                  this.setLabelStyle('rawLabelStyle', 'labelActive')
                  this.setLabelStyle('htmlLabelStyle', 'label', true)

                  this.displayRaw();
                }
              }
              onMouseEnter={
                () => this.setLabelStyle('rawLabelStyle', 'labelHover')
              }
              onMouseLeave={
                () => {
                  this.setLabelStyle('rawLabelStyle', 'label')
                }
              }
            >code</div>
            <div style={this.state.copyLabelStyle}

              onClick={this.copyToClipBoard}

              onMouseEnter={
                () => this.setLabelStyle('copyLabelStyle', 'copyLabelHover')
              }
              onMouseLeave={
                () => this.setLabelStyle('copyLabelStyle', 'copyLabel')
              }>copy</div>
          </div>
        </div>
        <div className='.delimiter' style={style.delimiter} />

        <div className='.content' style={style.content}>{this.state.content}</div>
      </div >
    )
  }
}

export default HtmlCodeViewer