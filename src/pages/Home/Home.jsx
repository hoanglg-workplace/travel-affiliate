import React from "react";
import "./Home.scss";
import { HashLink } from "react-router-hash-link";

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

const location_data = [
  {
    id: 1,
    link: "/locations#hanoi",
    img: locations_hanoi,
    country: "Viet Nam",
    capital: "Ha Noi",
  },
  {
    id: 2,
    link: "/locations#halong",
    img: locations_halong,
    country: "Viet Nam",
    capital: "Ha Long",
  },
  {
    id: 3,
    link: "/locations#haiphong",
    img: locations_haiphong,
    country: "Viet Nam",
    capital: "Hai Phong",
  },
  {
    id: 4,
    link: "/locations#hue",
    img: locations_hue,
    country: "Viet Nam",
    capital: "Hue",
  },
  {
    id: 5,
    link: "/locations#danang",
    img: locations_danang,
    country: "Viet Nam",
    capital: "Da Nang",
  },
  {
    id: 6,
    link: "/locations#hoian",
    img: locations_hoian,
    country: "Viet Nam",
    capital: "Hoi An",
  },

  {
    id: 7,
    link: "/locations#nhatrang",
    img: locations_nhatrang,
    country: "Viet Nam",
    capital: "Nha Trang",
  },
  {
    id: 8,
    link: "/locations#dalat",
    img: locations_dalat,
    country: "Viet Nam",
    capital: "Da Lat",
  },
  {
    id: 9,
    link: "/locations#phanthiet",
    img: locations_phanthiet,
    country: "Viet Nam",
    capital: "Phan Thiet",
  },
  {
    id: 10,
    link: "/locations#hochiminh",
    img: locations_hcm,
    country: "Viet Nam",
    capital: "Ho Chi Minh",
  },
  {
    id: 11,
    link: "/locations#vungtau",
    img: locations_vungtau,
    country: "Viet Nam",
    capital: "Vung Tau",
  },
];

const package_data = [
  {
    id: 1,
    img: packages_p1,
    price: "$99.99/-",
    rank: "Bronze",
    details: [
      {
        id: 1,
        text: "2 Star Hotel",
      },
      {
        id: 2,
        text: "5 Nights Stay",
      },
      {
        id: 3,
        text: "Free photo Session",
      },
      {
        id: 4,
        text: "Friendly Tour Guide",
      },
      {
        id: 5,
        text: "24/7 Customer Help Center",
      },
    ],
  },
  {
    id: 2,
    img: packages_p2,
    price: "$199.99/-",
    rank: "Silver",
    details: [
      {
        id: 1,
        text: "3 Star Hotel",
      },
      {
        id: 2,
        text: "7 Nights Stay",
      },
      {
        id: 3,
        text: "Free photo Session",
      },
      {
        id: 4,
        text: "Friendly Tour Guide",
      },
      {
        id: 5,
        text: "24/7 Customer Help Center",
      },
    ],
  },
  {
    id: 3,
    img: packages_p3,
    price: "$299.99/-",
    rank: "Gold",
    details: [
      {
        id: 1,
        text: "4 Star Hotel",
      },
      {
        id: 2,
        text: "10 Nights Stay",
      },
      {
        id: 3,
        text: "Free photo Session",
      },
      {
        id: 4,
        text: "Friendly Tour Guide",
      },
      {
        id: 5,
        text: "24/7 Customer Help Center",
      },
      {
        id: 6,
        text: "Breakfast and Dinner",
      },
    ],
  },
  {
    id: 4,
    img: packages_p4,
    price: "$399.99/-",
    rank: "Platinum",
    details: [
      {
        id: 1,
        text: "5 Star Hotel",
      },
      {
        id: 2,
        text: "14 Nights Stay",
      },
      {
        id: 3,
        text: "Free photo Session",
      },
      {
        id: 4,
        text: "Friendly Tour Guide",
      },
      {
        id: 5,
        text: "24/7 Customer Help Center",
      },
      {
        id: 6,
        text: "Breakfast, Lunch and Dinner",
      },
      {
        id: 7,
        text: "Bornfire",
      },
    ],
  },
];

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
        <video
          loop
          muted
          autoplay
          playsinline
          src={introvideo}
         
        />
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
          {location_data.map((item, index) => (
            <HashLink key={index} to={item.link}>
              <div className="col-content">
                <img src={item.img} alt={item.capital} />
                <h5>{item.country}</h5>
                <p>{item.capital}</p>
              </div>
            </HashLink>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="home_package" id="package">
        <div className="package-title">
          <h2>Packages</h2>
        </div>

        <div className="package-content">
          {package_data.map((item, index) => (
            <div key={index} className="box">
              <div className="image">
                <img src={item.img} alt="" />
                <h3>{item.price}</h3>
              </div>

              <div className="dest-content">
                <div className="location">
                  <h4>{item.rank}</h4>
                  <ul className="pac-details">
                    {item.details.map((detail, index) => (
                      <li key={index}>{detail.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
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
