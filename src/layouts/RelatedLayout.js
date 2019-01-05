import React from 'react';

function RelatedLayout(props) {
  return (
    <section style={Related}>
      <img src="/logo.svg" width={200} alt="codetube"/> 
      {props.children}
    </section>
  );
}

const Related = {
  width: 300,
  padding: 20
};

export default RelatedLayout;