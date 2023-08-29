// @flow
import * as React from 'react';
import { createRoot } from 'react-dom/client';

const ele = document.getElementById('root');

if (ele) {
  const root = createRoot(ele);

  root.render(
    <React.StrictMode>
      <div>hello world</div>
    </React.StrictMode>,
  );
}
