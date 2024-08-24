import React from 'react';
import Nav from '../../Components/NavBar/nav';
import Footer from '../../Components/Footer/footer';
import Inventory from '../../Components/Inventory/Inventory';

const AdminPage=()=>{
    return(
        <div>
            <Nav/>
            <Inventory/>
            <Footer/>
        </div>
    );
};
export default AdminPage;