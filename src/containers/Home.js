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
    modalVisible: false,
    media: undefined
  }

  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
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
          <Related related={data.related}/>
          <Categories categories={data.categories} handleOpenModal={this.handleOpenModal}/>
          {
            this.state.modalVisible && 
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <Player autoplay src={this.state.media.src} title={this.state.media.title}/>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </ErrorContainer>
    );
  }
}

export default Home;
