import React from 'react';
import Footer from './Footer.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            responsiveNav: true
        }
    }
    setResponsiveNav(){
      this.setState({
          responsiveNav: !this.state.responsiveNav
      })
    }
    render() {
        return (
            <div>
                <header>
                    <img src="https://avatars3.githubusercontent.com/u/27814052?v=3&u=7b944d224472ba805c9be8ce3bbf916852d9d951&s=400" alt="person img" className="person"/>
                    <h1>李永超的个人{this.props.title}</h1>
                    <label className="responsive-nav" onClick={this.setResponsiveNav.bind(this)}>
                        <span style={{
                            transform: this.state.responsiveNav
                                ? "rotate(0)"
                                : "rotate(45deg)"
                        }}></span>
                        <span style={{
                            opacity: this.state.responsiveNav
                                ? "1"
                                : "0"
                        }}></span>
                        <span style={{
                            transform: this.state.responsiveNav
                                ? "rotate(0)"
                                : "rotate(-45deg)"
                        }}></span>
                    </label>
                </header>
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {this.state.responsiveNav?null:<Footer setResponsiveNav={this.setResponsiveNav.bind(this)}/>}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default Header;
