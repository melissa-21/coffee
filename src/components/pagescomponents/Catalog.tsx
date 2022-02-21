import React from 'react';
import './Catalog.css'

const Catalog = () => {
    return (
        <div className="catalog">
            <p className="c_catalog">Catalog</p>
            <p className="c_drinks">Drinks</p>
            <div className="block11"></div>
            <div className="block12"></div>
            <div className="block13"></div>
                <div className="coffee">
            <p className="c_amer">
                americano<br/>
                0,99$
            </p>
                <p className="c_cap">
                cappuccino<br/>
                1,29$
            </p>
                 <p className="c_moc">
                     mocchiato<br/>
                     1,99$
                 </p>
                </div>
        </div>
    );
};

export default Catalog;