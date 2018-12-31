import React, { Component } from 'react';

import Categories from '../components/categories';
import HomeLayout from '../layouts/HomeLayout'

import data from '../api';

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Categories data={data}/>
      </HomeLayout>
    );
  }
}

export default Home;
