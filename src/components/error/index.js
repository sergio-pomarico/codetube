import React from 'react';

function Error(props) {
  return (
    <div style={ErrorStyles.container}>
      <h1 style={ErrorStyles.title}>Ha ocurrido un error <span role="img" aria-label="sad">☹️</span></h1>
    </div>
  )
}

const ErrorStyles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  title: {
    color: '#fff',
    textAlign: 'center'
  }
}

export default Error;