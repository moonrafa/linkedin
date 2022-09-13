import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p> {subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        'LinkedIn Announces New Certification Course Partnerships',
        'Top News • 32.105 readers'
      )}
      {newsArticle(
        'The Composable Enterprise is Swift and Agile',
        'há 2h • 500 readers '
      )}
      {newsArticle(
        'The top 10 companies hiring for hybrid jobs right now, according to new research',
        'há 1d • 1.758 readers '
      )}
      {newsArticle(
        'Two virtual job fairs scheduled for Big Island residents Sept ',
        'há 14h • 1200 readers '
      )}
      {newsArticle(
        'AWS, Microsoft, Google Cloud, Meta all oppose data localisation for Australia',
        'há 13min • 101 readers '
      )}
      {newsArticle(
        'Bringing AWS-Style DPU Offload To The VMware Base',
        'now • 2 readers '
      )}
    </div>
  )
}

export default Widgets
