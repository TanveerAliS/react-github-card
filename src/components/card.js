import React, {Component} from 'react';

export default class Card extends Component {
  render() {
    let data = this.props.data

    if (data.notFound === 'Not Found') {
      return <h3 className="card-notfound">User not found. Try again!</h3>
    } else {
      return (
        <div className="card">
          <a href={data.url} target="_blank">
            <img className="card-avatar" src={data.avatar} />
          </a>
          <h2 className="card-username">
            <a className="card-link" href={data.url} target="_blank">{data.username}</a></h2>
          <dl>
            <dt>Real name</dt>
            <dd>{data.realName}</dd>

            <dt>Location</dt>
            <dd>{data.location}</dd>

            <dt>Number of public repos</dt>
            <dd>{data.repos}</dd>

            <dt>Number of followers</dt>
            <dd>{data.followers}</dd>
          </dl>
        </div>
      )
    }
  }
}