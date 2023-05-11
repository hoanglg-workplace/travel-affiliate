import React from "react";
import "./Locations.scss";

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

const data = [
  {
    id: 1,
    capital: "Ha Noi",
    id_ref: "hanoi",
    text: "Hanoi is the capital city of Vietnam, located in the northern part of the country. It is known for its rich cultural heritage, stunning architecture, delicious cuisine, and vibrant street life. The city's Old Quarter, with its narrow streets and French colonial architecture, is a must-visit for tourists, as are the Ho Chi Minh Mausoleum, the Temple of Literature, and the serene Hoan Kiem Lake. Hanoi is also famous for its street food, including pho (noodle soup), bun cha (grilled pork with noodles), and banh mi (baguette sandwiches), which can be enjoyed at the city's many street-side stalls and markets. With a population of over 8 million people, Hanoi is a bustling and exciting city that offers something for everyone.",
    img: locations_hanoi,
  },
  {
    id: 2,
    capital: "Ha Long",
    id_ref: "halong",
    text: "Ha Long is a city located in Quang Ninh province, Vietnam. It is known for its stunning natural beauty, particularly Ha Long Bay, which is a UNESCO World Heritage Site and one of the most popular tourist destinations in Vietnam. Ha Long Bay features thousands of limestone karsts and isles that rise out of the water, creating a breathtaking landscape that attracts millions of visitors each year. In addition to Ha Long Bay, the city has other attractions such as Bai Tu Long Bay, Tuan Chau Island, and Cat Ba Island. Ha Long is also known for its fresh seafood, particularly its crabs, prawns, and clams, which are caught daily and served in restaurants throughout the city.",
    img: locations_halong,
  },
  {
    id: 3,
    capital: "Hai Phong",
    id_ref: "haiphong",
    text: "Hai Phong is a major port city located in the northern part of Vietnam, known for its dynamic and vibrant economy, as well as its rich history and culture. The city has been an important trading hub and center of commerce since ancient times, and its location on the Red River Delta has made it a crucial gateway for both domestic and international trade. Hai Phong is home to numerous historical landmarks and attractions, including the Du Hang Pagoda, the Hai Phong Opera House, and the Hai Phong Museum, which showcases the city's rich history and culture. With its bustling streets, vibrant markets, and lively cultural scene, Hai Phong is a fascinating destination for anyone interested in exploring the many facets of Vietnamese life and culture.",
    img: locations_haiphong,
  },
  {
    id: 4,
    capital: "Hue",
    id_ref: "hue",
    text: "Hue is a city located in central Vietnam, known for its rich history and cultural heritage. It was once the imperial capital of the Nguyen Dynasty and remains an important cultural and educational center in the region. The city is famous for its magnificent historical monuments, including the UNESCO World Heritage Site of Hue Imperial City, as well as its beautiful natural surroundings, such as the Perfume River and the surrounding mountains. Hue is also renowned for its delicious cuisine, featuring many unique dishes that are distinct to the region. It is a popular destination for tourists seeking to experience the rich history and vibrant culture of Vietnam.",
    img: locations_hue,
  },
  {
    id: 5,
    capital: "Da Nang",
    id_ref: "danang",
    text: "Da Nang is a coastal city in central Vietnam that has become a popular tourist destination in recent years. It is known for its beautiful beaches, delicious local cuisine, and rich history. Visitors can explore ancient ruins such as the UNESCO-listed My Son Sanctuary, which was once the religious and political capital of the Champa Kingdom. Da Nang is also home to the iconic Dragon Bridge, which breathes fire and water on weekend evenings. The city offers a range of activities for travelers, from surfing and swimming to sampling fresh seafood and shopping at local markets. With its stunning natural beauty and vibrant culture, Da Nang is a must-see destination for anyone traveling to Vietnam.",
    img: locations_danang,
  },
  {
    id: 6,
    capital: "Hoi An",
    id_ref: "hoian",
    text: "Hoi An is a beautiful ancient town located on the central coast of Vietnam. Its well-preserved architecture, rich history, and vibrant cultural scene make it a popular tourist destination. The town was an important trading port during the 16th and 17th centuries, with influences from Chinese, Japanese, and European cultures still evident today. Visitors can explore the narrow streets lined with yellow-walled houses and visit historic sites such as the Japanese Bridge and the Quan Cong Temple. Hoi An is also known for its beautiful beaches, delicious food, and traditional handicrafts, making it a must-see destination for anyone visiting central Vietnam.",
    img: locations_hoian,
  },
  {
    id: 7,
    capital: "Nha Trang",
    id_ref: "nhatrang",
    text: "Nha Trang is a coastal city located in the south-central region of Vietnam. It is famous for its beautiful beaches and crystal-clear waters, making it a popular destination for both local and international tourists. In addition to its beaches, Nha Trang is also known for its lively nightlife, seafood cuisine, and water sports activities. Visitors can enjoy a variety of outdoor activities, including scuba diving, snorkeling, jet skiing, and parasailing. The city is also home to historical sites such as the Po Nagar Cham Towers, a group of 13th-century temple towers dedicated to the goddess Ponagar, and the Long Son Pagoda, a Buddhist temple with a giant white Buddha statue. Overall, Nha Trang is a must-visit destination for those who enjoy sun, sand, and sea.",
    img: locations_nhatrang,
  },
  {
    id: 8,
    capital: "Da Lat",
    id_ref: "dalat",
    text: "Da Lat is a charming city located in the Central Highlands of Vietnam, known for its temperate climate, picturesque scenery, and French colonial architecture. The city is often referred to as the 'City of Eternal Spring' due to its year-round mild temperatures. Visitors can explore numerous attractions such as the stunning Xuan Huong Lake, the bustling Dalat Night Market, and the iconic Crazy House, which features a whimsical and unique architectural design. The surrounding countryside is also a popular destination for adventure seekers, with opportunities for hiking, canyoning, and biking. Overall, Da Lat is a must-visit destination for those seeking a peaceful escape from the hustle and bustle of city life.",
    img: locations_dalat,
  },
  {
    id: 9,
    capital: "Phan Thiet",
    id_ref: "phanthiet",
    text: "Phan Thiet is a coastal city in the southern part of Vietnam, located in Binh Thuan Province. It is famous for its beautiful beaches, stunning sand dunes, and fresh seafood. One of the main attractions in Phan Thiet is the Mui Ne sand dunes, which offer a unique landscape of red and white sand hills that stretch for miles along the coast. Visitors can also enjoy a variety of water sports such as swimming, windsurfing, and kiteboarding, as well as explore the nearby fishing villages and local markets. Additionally, Phan Thiet is known for its production of high-quality fish sauce, which is a popular condiment used in Vietnamese cuisine.",
    img: locations_phanthiet,
  },
  {
    id: 10,
    capital: "Ho Chi Minh",
    id_ref: "hochiminh",
    text: "Ho Chi Minh City, also known as Saigon, is the largest city in Vietnam. It is a bustling metropolis with a population of over 8 million people. The city is known for its rich history, stunning architecture, vibrant street life, and delicious cuisine. Visitors can explore the famous landmarks such as the Notre-Dame Cathedral, the Central Post Office, and the Reunification Palace. Ho Chi Minh City also has a thriving art scene, with numerous galleries and museums showcasing traditional and contemporary Vietnamese art. The city is a shopper's paradise, with numerous markets and shopping centers offering a range of goods, from traditional handicrafts to luxury brands. At night, the city comes alive with a vibrant nightlife, with plenty of bars, clubs, and live music venues to choose from.",
    img: locations_hcm,
  },
  {
    id: 11,
    capital: "Vung Tau",
    id_ref: "vungtau",
    text: "Vung Tau is a coastal city located in southern Vietnam, about a two-hour drive from Ho Chi Minh City. Known for its beautiful beaches, Vung Tau attracts tourists from all over the world. Visitors can swim, sunbathe, and enjoy a range of water activities such as jet skiing, windsurfing, and parasailing. The city is also home to a number of interesting attractions, including the Jesus Christ Statue, which is located at the top of a mountain and provides stunning views of the surrounding area. Other popular sites include the Vung Tau Lighthouse, the White Palace, and the Long Hai Beach. In addition to its natural beauty and cultural attractions, Vung Tau also has a reputation for delicious seafood and local cuisine. ",
    img: locations_vungtau,
  },
];

const Locations = () => {
  return (
    <div className="Locations_wrapper">
      {/* Nav */}

      <section className="location-section">
        <div className="location-heading">
          <h1>
            Discover The <span>Beautiful World</span>
          </h1>
        </div>

        {data.map((item, index) => (
          <div key={index} className="location-detail" id={item.id_ref}>
            <h1>{item.capital}</h1>
            <div className="stars">
              <div>
                <i className="bx bxs-star"></i>
              </div>
              <div>
                <i className="bx bxs-star"></i>
              </div>
              <div>
                <i className="bx bxs-star"></i>
              </div>
              <div>
                <i className="bx bxs-star"></i>
              </div>
              <div>
                <i className="bx bxs-star"></i>
              </div>
            </div>
            <p>{item.text}</p>
            <div className="location-img">
              <img src={item.img} alt={item.capital} />
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
    </div>
  );
};

export default Locations;
