import React from "react";

function Services() {
  return (
    <>
      <section className="services">
        <h1 className="title">Services</h1>
        <div className="card-container">
          <div className="card">
            <i className="fa-solid fa-cart-shopping card-icon"></i>
            <p className="card-title">Buy</p>
            <p className="card-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              vitae nesciunt rerum minima autem reiciendis.
            </p>
          </div>
          <div className="card">
            <i className="fa-solid fa-truck card-icon"></i>
            <p className="card-title">Logistics</p>
            <p className="card-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              vitae nesciunt rerum minima autem reiciendis.
            </p>
          </div>
          <div className="card">
            <i className="fa-solid fa-warehouse card-icon"></i>
            <p className="card-title">Storage</p>
            <p className="card-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              vitae nesciunt rerum minima autem reiciendis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
