import React, { Component } from 'react';

import Categories from '../components/categories';
import HomeLayout from '../layouts/HomeLayout';
import RelatedLayout from '../layouts/RelatedLayout';
import ModalContainer from '../containers/Modal';
import Modal from '../components/modal';
import ErrorContainer from '../containers/Error'

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
          <RelatedLayout />
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
