import React, { Component } from "react";
import { connect } from "react-redux";
import { database } from "../db/firebase";
import CommentBox from "../components/CommentBox"

class View extends Component {
  state = {
    comment: []
  };

  commentRef = database.ref(`comment/${this.props.pikka.name}`);

  componentDidMount() {
    this.commentRef.on("value", dataSnapshot => {
      const comment = [];
      dataSnapshot.forEach(childSnapshot => {
        comment.push({
          comment: childSnapshot.val().comment,
          user: childSnapshot.val().user,
          email: childSnapshot.val().email,
	        id: childSnapshot.key
        });
      });
      comment &&
        this.setState({comment});
    });
  }

  onCommentSubmit = event => {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    this.commentRef.push({ comment, user: "Anonymous", email: "Anonymous" });
	  event.target.elements.comment.value = ""
  };

  render() {
    return (
      <div className="container-pikka">
        <div
          className="title block-image w-100-ns w-50-m w-30-l pikka-caption shadow-3"
          style={{ backgroundImage: `url(${this.props.pikka.url})` }}
        >
          <h2 className="post-title">{this.props.pikka.caption}</h2>
        </div>
        <div className="comments block-comment w-100-ns w-40-m w-25-l shadow-3">
	        {this.state.comment.map(comment => {
	        	return <CommentBox key={comment.id} {...comment}/>
	        })}
	        <div className="center mw7 pt3 measure">
		        <form onSubmit={this.onCommentSubmit}>
			        <input
				        className="input-search"
				        type="text"
				        name="comment"
				        placeholder="Comment"
			        />`
		        </form>
	        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    pikka: state.pikka.find(pikka => pikka.name === props.match.params.id)
  };
};

export default connect(mapStateToProps)(View);
