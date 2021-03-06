import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd'
import { CurrentUser } from '../util/auth'
import '../routes/index.css'

const SubMenu = Menu.SubMenu

class Navbar extends Component {
  render() {
    if (this.props.loading) {
      return null
    }

    const onClick = ({ key }) => {
      if (key === '5') {
        localStorage.removeItem('token')
        window.location.reload()
        this.props.history.push('/')
      }
    }

    return (
      <Menu className="navbar" mode="horizontal" onClick={onClick}>
        <Menu.Item className="navbar-title">
          <Link to="/">DEVBLOG</Link>
        </Menu.Item>
        {this.props.currentUser ? (
          <SubMenu
            className="navbar-submenu"
            title={
              <span>
                <Icon type="user" />
                {this.props.currentUser.username}
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to="/new-article">Write new article</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={`/@${this.props.currentUser.username}`}>Profile</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/settings">Settings</Link>
            </Menu.Item>
            <Menu.Item key="5">Sign Out</Menu.Item>
          </SubMenu>
        ) : (
          <Menu.Item>
            <Button>
              <Link to="/login">Login!</Link>
            </Button>
            <Button>
              <Link to="/register">Sign up!</Link>
            </Button>
          </Menu.Item>
        )}
      </Menu>
    )
  }
}

export default CurrentUser(Navbar)
