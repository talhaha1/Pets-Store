import React from 'react';
import Nav from '../../Components/NavBar/nav';
import Footer from '../../Components/Footer/footer';
import Inventory from '../../Components/Inventory/Inventory';
import AdoptPets from '../../Components/AdoptPets/adoption';
const AdminPage=()=>{
    return(
        <div>
            <Nav/>
            <Inventory/>
            <AdoptPets/>
            <Footer/>
        </div>
    );
};
export default AdminPage;