import React from 'react';
import Nav from '../../Components/NavBar/nav';
import Footer from '../../Components/Footer/footer';
import Inventory from '../../Components/Inventory/Inventory';
import AdoptPets from '../../Components/AdoptPets/adoption';
import LoginNav from '../../Components/NavBar/LoginNavbar';
const AdminPage=()=>{
    return(
        <div>
            <LoginNav/>
            <Inventory/>
            <AdoptPets/>
            <Footer/>
        </div>
    );
};
export default AdminPage;