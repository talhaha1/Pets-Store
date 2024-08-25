import React from 'react';
import Nav from '../../Components/NavBar/nav';
import Footer from '../../Components/Footer/footer';
import Landing from '../../Components/Landing/Landing';
import InfoPet from '../../Components/petInfo/petInfo';

const LandingPage =()=>{

    return (
        <div>
            <Nav />
            <Landing />
            <InfoPet/>
            <Footer />
        </div>
    );
};
export default LandingPage;
