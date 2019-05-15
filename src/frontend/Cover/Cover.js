import React from "react";
import { Link } from "react-router-dom";

export default class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { id, title } = this.props;
    return (
      <div className="container">
        <div class="item">
          <Link to={`/${id}`}>
            <img
              src={require(`../../frontend/common/images/covers/${id}.jpg`)}
              alt={title}
            />
            <div className="overlayText">
              <h1>{title}</h1>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
