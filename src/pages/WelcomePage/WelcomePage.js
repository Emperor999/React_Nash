import React from 'react';
import Welcome from '../../component/Welcome/Welcome';

const WelcomePage = () => {
    return (
        <div className="welcome-page">
           <Welcome 
    name ="Hoang dd"
    age ={34}
    color = "red"
    married ={true}
    />
    <Welcome 
    name ="H Son"
    age ={35}
    color = "yellow"
    married ={false}
    />
    <Welcome 
    name ="Never"
    age ={24}
    color = "green"
    married ={true}
    /> 
        </div>
    );
};

export default WelcomePage;