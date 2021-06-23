import React from 'react';
import User from './User';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    updateCurUser = (userID) =>{
        this.props.updateCurUser(userID)
    }

    render() {
        this.props.users.map(person => console.log(person))
        return (
            <div className="usersContainer">
                {this.props.users.map(user => {
                    return (
                            <Link to="/catalog"><User name={user.name}id={user.id} img={user.img} updateCurUser={this.updateCurUser}/></Link>
                           )
                })}
            </div>
        );
    }
}


export default Home;
