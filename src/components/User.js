import React from 'react';

class User extends React.Component {

    updateCurUser = () =>{
        this.props.updateCurUser(this.props.id)
    }

    render() {
        return (
            <div className="userContainer">
                <img className="profilePic" src={this.props.img} onClick={this.updateCurUser}></img>
                <h3>{this.props.name}</h3>
            </div>
        );
    }
}


export default User;
