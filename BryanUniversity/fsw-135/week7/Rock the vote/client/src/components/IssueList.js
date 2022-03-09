import React from 'react'
import Issues from './Issues'

export default function IssueList(props) {
  const { issues } = props
  
  return (
    <div className="issueList">
      {issues.map(issue => <Issues {...issue} key={issue._id} />)}
    </div>
  )
}