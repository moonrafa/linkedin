import { Avatar } from '@material-ui/core'
import './Sidebar.css'

function Sidebar() {
  const recentItem = topic => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    )
  }
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80"
          alt="background"
        />
        <Avatar className="sidebar__avatar" />
        <h2> Rafaelly Rodrigues </h2>
        <h4> rrafasrodrigues@gmail.com </h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2.100</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">3.457</p>
        </div>
        <div className="sidebar__bottom">
          <p> Recent</p>
          {recentItem('reactjs')}
          {recentItem('softwareengeneering')}
          {recentItem('dev')}
          {recentItem('frontend')}
          {recentItem('backend')}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
