import React, { Component } from 'react';
import Navbars from './component/Navbar'
import Homes from './component/Home'

import {Route} from 'react-router-dom'

class Apps extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <Route path='/' exact component={Homes}/>
      </div>
    );
  }
}

export default Apps
