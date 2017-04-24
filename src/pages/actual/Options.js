import React, {Component} from 'react';


class Options extends Component {
  render() {
    return (
      <div>

        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab"
                                                        data-toggle="tab">Home</a>
          </li>
          <li role="presentation"><a href="#profile" aria-controls="profile" role="tab"
                                     data-toggle="tab">Profile</a></li>
          <li role="presentation"><a href="#messages" aria-controls="messages" role="tab"
                                     data-toggle="tab">Messages</a></li>
          <li role="presentation"><a href="#settings" aria-controls="settings" role="tab"
                                     data-toggle="tab">Settings</a></li>
        </ul>

        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="home">Home</div>
          <div role="tabpanel" className="tab-pane" id="profile">Profile</div>
          <div role="tabpanel" className="tab-pane" id="messages">...</div>
          <div role="tabpanel" className="tab-pane" id="settings">...</div>
        </div>

      </div>
    );
  }
}

export default Options;
