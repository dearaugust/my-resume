import React from 'react';
import { Link } from "react-router";
class leftNavBar extends React.Component {
    render(){
      return(
        <section className="sidebar">
          <img src="https://avatars3.githubusercontent.com/u/27814052?v=3&u=7b944d224472ba805c9be8ce3bbf916852d9d951&s=400" alt="person img" className="person" />
          <h1>李永超的个人{this.props.title}</h1>
          <Link to="/" activeClassName="leftNav-active" onlyActiveOnIndex={true}>
            <i className="iconfont icon-zhuye" ></i>简介
          </Link>
          <Link to="/product" activeClassName="leftNav-active">
            <i className="iconfont icon-zuopinanli"></i>作品
          </Link>
        </section>
      )
    }
}

export default leftNavBar;
