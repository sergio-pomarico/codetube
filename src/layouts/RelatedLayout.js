import React from 'react';

function RelatedLayout(props) {
  return (
    <section style={Related.container}>
      <img src="/logo.svg" width={200} alt="codetube" style={Related.logo}/> 
      {props.children}
    </section>
  );
}

const Related = {
  container: {
    width: 300,
    padding: 20
  },
  logo: {
    display: 'inline-block',
    margin: '0 30px'
  }
};

export default RelatedLayout;