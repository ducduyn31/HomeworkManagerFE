import React, { Component } from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/monokai';

class Editor extends Component {
  render() {
    return (
      <div style={{ width: '100vw' }}>
        <AceEditor mode="java" theme="monokai" enableBasicAutocompletion />
      </div>
    );
  }
}

export default Editor;
