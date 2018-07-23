import React, { Component } from "react";
import { css } from "react-emotion";
import marked from "marked";
import Preview from "./Preview";

const base = css`
display: grid;
font-family: sans-serif;
text-align: center;
grid-template-columns: 1fr 1fr;

`;
marked.setOptions({
  breaks: true,
  sanitize: false
});

const preview = css`
background: #eee;
`;

export default class Editor extends Component {
  state = {
    input: ""
  };

  componentDidMount() {
    this.setState({
      input:
        "# Hey \n ## it's me \n [wow](https://google.com) \n `void()` \n ```javascript \n let i = 0 \n markdown = () => { \n return i \n } ``` \n 1. finish this markdown previewer \n 2. eat \n > Check my quotegenerator \n ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'kleyu for fcc') \n **IM BOLD**"
    });
  }

  handleInput = e => {
    this.setState({
      input: e.target.value
    });
  };

  renderHtml = () => {
    return { __html: marked(this.state.input) };
  };

  render() {
    return (
      <div className={css`${base}`}>
        <textarea
          value={this.state.input}
          onChange={this.handleInput}
          placeholder="Write your Markdown here"
          rows="40"
          id="editor"
        />
        <Preview output={this.renderHtml()} preview={preview} id="preview" />
      </div>
    );
  }
}
