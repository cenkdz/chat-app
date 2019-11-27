import React from 'react'

const Contact = (props) => {

    return(
        <div className="contactInfo">
            <img src={require('./cavatar.png')} alt="" height="50" width="50"></img>
            <span className="contactName">Steve</span>
            <span className="lastMessage">10:11</span>
            {/* <br/> */}
            {/* <img src={require('./cavatar.png')} alt="" height="50" width="50"></img>
            <span className="contactName">Sam</span>
            <span className="lastMessage">10:17</span>
            <br/>
            <img src={require('./cavatar.png')} alt="" height="50" width="50"></img>
            <span className="contactName">Adam</span>
            <span className="lastMessage">10:19</span>
            <br/>
            <img src={require('./cavatar.png')} alt="" height="50" width="50"></img>
            <span className="contactName">Michael</span>
            <span className="lastMessage">10:40</span> */}
        </div>
    );
}

export default Contact;