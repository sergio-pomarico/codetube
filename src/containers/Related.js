import React,{ Component } from 'react';

import RelatedLayout from '../layouts/RelatedLayout';
import RelatedItems from '../components/related';

class Related extends Component {
  render() {
    return (
      <RelatedLayout>
        <RelatedItems related={this.props.related}/>
      </RelatedLayout>
    )
  } 
}

export default Related;