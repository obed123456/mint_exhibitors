import React from 'react'; 

const Social = (props) => {
    return (
        <div>
            <div><span><i className={`fab fa-${props.facebook}-square `}></i></span></div>
            <div><span><i className="fab fa-twitter-square"></i></span></div>
            <div><span><i className="fab fa-linkedin"></i></span></div>
            <div><span><i className="fab fa-instagram"></i></span></div>
            <div><span><i className="fas fa-link"></i></span></div>
        </div>
    )
}

export default Social; 