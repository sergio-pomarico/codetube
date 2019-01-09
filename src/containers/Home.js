import React, { Component } from 'react';

import Categories from '../components/categories';
import HomeLayout from '../layouts/HomeLayout';
import Related from './Related';
import ModalContainer from '../containers/Modal';
import Modal from '../components/modal';
import ErrorContainer from '../containers/Error'
import Player from './Player';

import data from '../api';

class Home extends Component {

  state = {
    modalVisible: false
  }

  handleOpenModal = (event) => {
    this.setState({
      modalVisible: true
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    })
  }

  render() {
    return (
      <ErrorContainer>
        <HomeLayout>
          <Player autoplay/>
          <Related related={data.related}/>
          <Categories categories={data.categories} handleOpenModal={this.handleOpenModal}/>
          {
            this.state.modalVisible && 
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <h1>Este es un portal</h1>  
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </ErrorContainer>
    );
  }
}

export default Home;
