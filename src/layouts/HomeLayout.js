import React from 'react';

function HomeLayout(props) {
  return (
    <section style={Home}>
      {props.children}
    </section>
  );
}

const Home = {
  display: 'flex',
  margin: '0 auto',
  minHeight: '100vh'
}

export default HomeLayout;