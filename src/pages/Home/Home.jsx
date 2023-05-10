import React from "react";
import "./Home.scss";
import introvideo from "../../assets/videos/bgvid.mp4";
import services_1a from "../../assets/icons/1a.jpg";
import services_2a from "../../assets/icons/2a.jpg";
import services_3a from "../../assets/icons/3a.jpg";
import services_4a from "../../assets/icons/4a.jpg";

import packages_p1 from "../../assets/images/p1.jpg";
import packages_p2 from "../../assets/images/p2.jpg";
import packages_p3 from "../../assets/images/p3.jpg";
import packages_p4 from "../../assets/images/p4.jpg";

import locations_hanoi from "../../assets/images/hanoi.jpeg";
import locations_halong from "../../assets/images/halong.jpeg";
import locations_haiphong from "../../assets/images/haiphong.jpeg";
import locations_hue from "../../assets/images/hue.jpeg";
import locations_danang from "../../assets/images/danang.jpeg";
import locations_hoian from "../../assets/images/hoian.jpeg";
import locations_nhatrang from "../../assets/images/nhatrang.jpeg";
import locations_dalat from "../../assets/images/dalat.jpeg";
import locations_phanthiet from "../../assets/images/phanthiet.jpeg";
import locations_hcm from "../../assets/images/hcm.jpeg";
import locations_vungtau from "../../assets/images/vungtau.jpeg";

const locations_data = [
  {
    id: 1,
    link: '/locations#hanoi',
    img: locations_hanoi,
    country: 'Viet Nam',
    capital: 'Ha Noi',
  },
  {
    id: 2,
    link: '/locations#halong',
    img: locations_halong,
    country: 'Viet Nam',
    capital: 'Ha Long',
  },
  {
    id: 3,
    link: '/locations#haiphong',
    img: locations_haiphong,
    country: 'Viet Nam',
    capital: 'Hai Phong',
  },
  {
    id: 4,
    link: '/locations#hue',
    img: locations_hue,
    country: 'Viet Nam',
    capital: 'Hue',
  },
  {
    id: 5,
    link: '/locations#danang',
    img: locations_danang,
    country: 'Viet Nam',
    capital: 'Da Nang',
  },
  {
    id: 6,
    link: '/locations#hoian',
    img: locations_hoian,
    country: 'Viet Nam',
    capital: 'Hoi An',
  },

  {
    id: 7,
    link: '/locations#nhatrang',
    img: locations_nhatrang,
    country: 'Viet Nam',
    capital: 'Nha Trang',
  },
  {
    id: 8,
    link: '/locations#dalat',
    img: locations_dalat,
    country: 'Viet Nam',
    capital: 'Da Lat',
  },
  {
    id: 9,
    link: '/locations#phanthiet',
    img: locations_phanthiet,
    country: 'Viet Nam',
    capital: 'Phan Thiet',
  },
  {
    id: 10,
    link: '/locations#hochiminh',
    img: locations_hcm,
    country: 'Viet Nam',
    capital: 'Ho Chi Minh',
  },
  {
    id: 11,
    link: '/locations#vungtau',
    img: locations_vungtau,
    country: 'Viet Nam',
    capital: 'Vung Tau',
  },

]
const Home = () => {
  return (
    <div className="Home_wrapper">
      {/* Header */}
      <div className="home_banner">
        {/* <video
          autoplay
          muted
          loop
          playsInline
        >
          <source src={introvideo} type="video/mp4" />
        </video> */}
        <video src={introvideo} type="video/mp4" autoplay muted loop></video>
        <div className="content" id="home">
          <div className="title">
            <h1>TRAVEL AFFILIATE</h1>
            <p>
              Plan your trip with us and travel around the world with the most
              affordable packages!
            </p>
            <a href="./register" className="button">
              Register Now!
            </a>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="home_container">
        <div className="text">
          <h2>We have the best services available for you!</h2>
        </div>
        <div className="rowitems">
          <div className="container-box">
            <div className="container-image">
              <img src={services_1a} alt="Flight Services" />
            </div>
            <h4>Flight Services</h4>
            <p>Arrival and Departure</p>
          </div>

          <div className="container-box">
            <div className="container-image">
              <img src={services_2a} alt="Food Services" />
            </div>
            <h4>Food Services</h4>
            <p>Catering</p>
          </div>

          <div className="container-box">
            <div className="container-image">
              <img src={services_3a} alt="Travel Services" />
            </div>
            <h4>Travel Services</h4>
            <p>Pick-up/drop</p>
          </div>

          <div className="container-box">
            <div className="container-image">
              <img src={services_4a} alt="Hotel Services" />
            </div>
            <h4>Hotel Services</h4>
            <p>Check-in/out</p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="locations" id="locations">
        <div className="package-title">
          <h2>Locations</h2>
        </div>

        

        <div className="location-content">
          {locations_data.map((item, index) => (
            <a key={item.id} href={item.link} target="_blank" rel="noreferrer">
            <div className="col-content">
              <img src={item.img} alt={item.capital} />
              <h5>{item.country}</h5>
              <p>{item.capital}</p>
            </div>
          </a>
          ))}

          {/* <a href="/locations#kashmir" target="_blank">
            <div className="col-content">
              <img src={locations_l1} alt="" />
              <h5>India</h5>
              <p>Kashmir</p>
            </div>
          </a>

          <a href="./locations#istanbul" target="_blank">
            <div className="col-content">
              <img src={locations_l2} alt="" />
              <h5>Turkey</h5>
              <p>Istanbul</p>
            </div>
          </a>

          <a href="./locations.html#paris" target="_blank">
            <div className="col-content">
              <img src={locations_l3} alt="" />
              <h5>France</h5>
              <p>Paris</p>
            </div>
          </a>

          <a href="./locations.html#bali" target="_blank">
            <div className="col-content">
              <img src={locations_l4} alt="" />
              <h5>Indonesia</h5>
              <p>Bali</p>
            </div>
          </a>

          <a href="./locations.html#dubai" target="_blank">
            <div className="col-content">
              <img src={locations_l5} alt="" />
              <h5>United Arab Emirates</h5>
              <p>Dubai</p>
            </div>
          </a>

          <a href="./locations.html#geneva" target="_blank">
            <div className="col-content">
              <img src={locations_l6} alt="" />
              <h5>Switzerland</h5>
              <p>Geneva</p>
            </div>
          </a>

          <a href="./locations.html#port-blair" target="_blank">
            <div className="col-content">
              <img src={locations_l7} alt="" />
              <h5>Andaman & Nicobar</h5>
              <p>Port Blair</p>
            </div>
          </a>

          <a href="./locations.html#rome" target="_blank">
            <div className="col-content">
              <img src={locations_l8} alt="" />
              <h5>Italy</h5>
              <p>Rome</p>
            </div>
          </a> */}
        </div>
      </section>

      {/* Packages */}
      <section className="home_package" id="package">
        <div className="package-title">
          <h2>Packages</h2>
        </div>

        <div className="package-content">
          <div className="box">
            <div className="image">
              <img src={packages_p1} alt="" />
              <h3>Rs.9,999/-</h3>
            </div>

            <div className="dest-content">
              <div className="location">
                <h4>Bronze</h4>
                <ul className="pac-details">
                  <li>2 Star Hotel</li>
                  <li>5 Nights Stay</li>
                  <li>Free photo Session</li>
                  <li>Friendly Tour Guide</li>
                  <li>24/7 Customer Help Center</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={packages_p2} alt="" />
              <h3>Rs.19,999/-</h3>
            </div>

            <div className="dest-content">
              <div className="location">
                <h4>Silver</h4>
                <ul className="pac-details">
                  <li>3 Star Hotel</li>
                  <li>7 Nights Stay</li>
                  <li>Free photo Session</li>
                  <li>Friendly Tour Guide</li>
                  <li>24/7 Customer Help Center</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={packages_p3} alt="" />
              <h3>Rs.29,999/-</h3>
            </div>

            <div className="dest-content">
              <div className="location">
                <h4>Gold</h4>
                <ul className="pac-details">
                  <li>4 Star Hotel</li>
                  <li>10 Nights Stay</li>
                  <li>Breakfast and Dinner</li>
                  <li>Free photo Session</li>
                  <li>Friendly Tour Guide</li>
                  <li>24/7 Customer Help Center</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={packages_p4} alt="" />
              <h3>Rs.39,999/-</h3>
            </div>

            <div className="dest-content">
              <div className="location">
                <h4>Platinum</h4>
                <ul className="pac-details">
                  <li>5 Star Hotel</li>
                  <li>14 Nights Stay</li>
                  <li>Breakfast, Lunch and Dinner</li>
                  <li>Bornfire</li>
                  <li>Free photo Session</li>
                  <li>Friendly Tour Guide</li>
                  <li>24/7 Customer Help Center</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newstext">
          <h2>Newsletter</h2>
          <p>
            Subscribe to get offers and latest
            <br />
            updates every week!
          </p>
        </div>

        <div className="send">
          <form action="">
            <input type="email" name="emailid" placeholder="E-mail" required />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
