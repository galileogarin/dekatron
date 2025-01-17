import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Produk Kami</h2>
          <p>
          Gizi dan kenikmatan roti untuk keseharian padat Anda. Lebih dari 25 tahun, Sari Roti bangga menjadi "Pilihan Keluarga Indonesia". Hadir dengan beragam varian sesuai selera keluarga Indonesia, mulai dari roti tawar, roti manis, kue, hingga susu dan selai.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {d.icon.includes("img") ? (
                    <img src={d.icon} alt={d.name} className="product-image" />
                  ) : (
                    <i className={d.icon}></i>
                  )}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
