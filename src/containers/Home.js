import React, { Component } from 'react';
import { connect } from 'react-redux';

import Categories from '../components/categories';
import HomeLayout from '../layouts/HomeLayout';
import Related from './Related';
import ModalContainer from '../containers/Modal';
import Modal from '../components/modal';
import ErrorContainer from '../containers/Error'
import Player from './Player';

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
    const { categories, related, search } = this.props
    return (
      <ErrorContainer>
        <HomeLayout>
          <Related related={related}/>
          <Categories categories={categories} handleOpenModal={this.handleOpenModal} search={search}/>
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

const mapStateToProps = (state, props) => {
  const { data, search } = state
  const categories = state.data.categories.map((categoryId) => {
    return data.entities.categories[categoryId]
  })
  return {
    categories: categories,
    related: data.entities.related[1],
    search
  }
}

export default connect(mapStateToProps)(Home);
