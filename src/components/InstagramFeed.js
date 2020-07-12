import React, { Component, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'
import './InstagramFeed.css'


export default class InstagramFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mounted: false
    }
  }

  clearStorage() {
    const lastclear = localStorage.getItem('lastclear'),
      time_now = new Date().getTime()
    // .getTime() returns milliseconds so 1000 * 60 * 60 * 24 = 1 days
    if (time_now - lastclear > 1000 * 60 * 60 * 1) {
      localStorage.clear()
      localStorage.setItem('lastclear', time_now)
    }
  }

  componentDidMount() {
    //this.clearStorage()
    if (!this.state.mounted) {
      this.setState({
        mounted: true
      })
    }
  }

  render() {
    return (
      <>
        <div className="powr-social-feed" id="cc47997c_1594487714"></div>
        <Helmet>
          <script src="https://www.powr.io/powr.js?platform=react"></script>
        </Helmet>
      </>
    )
  }
}
