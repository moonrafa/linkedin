import React, { useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import Posts from './Posts'

function Feed() {
  const [posts, setPosts] = useState([])

  const sendPost = e => {
    e.preventDefault()
  }
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cBcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      {posts.map(post => (
        <Posts
          name={post.name}
          description={post.description}
          message={post.message}
        />
      ))}
      <Posts
        name="Rafaelly Rodrigues"
        description="Something"
        message="Testando aqui glr"
      />
    </div>
  )
}

export default Feed
