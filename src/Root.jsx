import React from 'react';


function decorated(target) {
  const original = target.prototype.render;

  target.prototype.render = () => {
    return (
      <>
        {original()}
        <div>blah</div>
      </>
    )
  }
}

@decorated
export class Root extends React.Component {
  render() {
    return (
      <div>hello world</div>
    );
  }
}
