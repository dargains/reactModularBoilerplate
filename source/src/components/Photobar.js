import React, { Component } from "react";
import scraper from "insta-scraper";
import lang from "../lang";

class Photobar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      size: 15
    }
  }
  componentWillMount() {
    scraper.getMediaByTag(`visit${this.props.city.split(' ').join('')}`, [], (error,response) => {
      this.setState({photos:response.graphql.hashtag.edge_hashtag_to_media.edges});
    });
  }
  render() {
    return (
      <aside className="photobar">
        <h2 className="photobar__title">{lang[this.props.lang].Photobar.title} {this.props.city}</h2>
        <ul>
          {this.state.photos.slice(0, this.state.size).map(photo =>
            <li key={photo.node.id}>
              <img src={photo.node.display_url} alt={photo.node.edge_media_to_caption.edges[0].node.text}/>
            </li>
          )}
        </ul>
      </aside>
    )
  }
}

export default Photobar;
