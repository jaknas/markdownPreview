import React from "react";
import marked from "marked";
import { css } from "react-emotion";

marked.setOptions({
  breaks: true,
  sanitize: false
});

const Preview = props => {
  return (
    <div
      dangerouslySetInnerHTML={props.output}
      className={css`${props.preview}`}
      id="preview"
    />
  );
};

export default Preview;
