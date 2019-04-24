import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      current: 'home'
    };
  }

  menuItemClick = () => {
    console.log('MENU');
    // this.setState({
    //   current: "",
    //   show: false
    // });
  };

  render() {
    return (
      <header className="header">
        <nav className="breakpoint-width-container flex">
          <ul className="menu flex">
            <li>
              <div className="logo-sc flex-center">
                <i className="fab fa-soundcloud" />
              </div>
            </li>
            <li className="menu-item">
              <Link to={'/'} onClick={this.menuItemClick} className="flex-center">
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link to={'/stream'} onClick={this.menuItemClick} className="flex-center">
                Stream
              </Link>
            </li>
            <li className="menu-item">
              <Link to={'/library'} onClick={this.menuItemClick} className="flex-center">
                Library
              </Link>
            </li>
            <li className="menu-input flex-center">
              <input type="text" placeholder="Search" />
              <i className="fas fa-search" />
            </li>
            <li className="menu-upgrade">
              <Link to={'#'} onClick={this.menuItemClick} className="flex-center">
                Upgrade
              </Link>
            </li>
            <li className="menu-upload flex-center">
              <Link to={'#'} onClick={this.menuItemClick} className="flex-center">
                Upload
              </Link>
            </li>
            <li className="menu-profile flex-center">
              <i className="fas fa-user" />
            </li>
            <li className="menu-notifications flex-center">
              <i className="fas fa-bell" />
            </li>
            <li className="menu-messages flex-center">
              <i className="fas fa-envelope" />
            </li>
            <li className="menu-overflow flex-center">
              <i className="fas fa-ellipsis-h" />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
