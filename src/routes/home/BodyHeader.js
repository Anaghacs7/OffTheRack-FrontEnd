import React from 'react';

const BodyHeader = () =>{
    return <header className="bg-hero py-5 mb-5" style={ { backgroundImage: `url(require("./images/HOMEPAGE.jpg"))` } }>
        <div className="row h-100 align-items-center" >
        <div className="col-lg-12">
            <h1 className="display-4 text-peach mt-5 mb-2">For me. For you.</h1>
            <p className="lead mb-5 text-peach-50">An online platform for your renting needs</p>
        </div>
        </div>    
</header>
} 

export default BodyHeader;