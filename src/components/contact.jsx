import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  function handleSubmit(e) {
    e.preventDefault();

    const mailtoLink = `mailto:imam55.1khoironi@gmail.com?subject=Pesan dari ${name}&body=${encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`
    )}`;

    window.location.href = mailtoLink;
  }
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Hubungi Kami</h2>
                <p>
                Silakan isikan pesan di bawah ini untuk mengirimkan email kepada kami, dan kami akan segera menghubungi Anda kembali.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nama"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Pesan"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Alamat
                </span>
                {props.data ? props.data.address : "Jl. Mendut Gg. 13 No.20, Taman Baru, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68416"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telpon
                </span>{" "}
                {props.data ? props.data.phone : "+62 83-03-3399"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "sariroti@gmail.com"}
              </p>
            </div>
          </div>
          <div className="Maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.800075328535!2d114.3604076738131!3d-8.222850282530448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15bed3390bad5%3A0xdbc8f9b87e0fa960!2sUD%20Dekatron%20Distributor%20Sari%20Roti!5e0!3m2!1sen!2sid!4v1737085942765!5m2!1sen!2sid"
              width="100%"
              height="50%"
              style={{ border: 0 }}
              title="Peta Lokasi UD Dekatron"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <span>
                  <h3>Ikuti Sosial Media Kami</h3>
                </span>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>Galileo &copy; 2024</p>
        </div>
      </div>
    </div>
  );
};
