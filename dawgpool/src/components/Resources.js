import React from 'react';

function Resources() {
  return (
    <div className="resources-page">
      <h1 className="resources-header">Carpooling Resources</h1>
      <div className="resources-container container-fluid">
        <section className="resources-section" aria-labelledby="intro-heading">
          <h2 id="intro-heading">Introduction to Carpooling</h2>
          <p>Carpooling is a method of transportation where at least two individuals
            share using a vehicle to reach their destination. Through carpooling, traffic congestion
            decreases from less solo vehicle on the roadways, emissions are reduced, and money is 
            saved on paying for gas and parking. Dawgpool is designed to streamline the carpooling process,
            increasing accessibility for finding a carpooling partner. With our application, users can find 
            carpool matches that align with their commuting schedule and develop new connections with UW
            students that share a similar commute. Dawgpool hopes to encourage more students to begin 
            carpooling with their peers, with an end goal of reducing pollution from transportation and create
            a more connected community.</p>
        </section>

        <section className="resources-section" aria-labelledby="learn-more-heading">
          <h2 id="learn-more-heading">Learn More About Carpooling</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IYsPASTCbEw?si=543IyKmGVaIhhjiM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        <section className="resources-section" aria-labelledby="sdg11-heading">
          <h2 id="sdg11-heading">United Nations SDG 11</h2>
          <p>The UN Sustainable Development Goal 11 (SDG 11) aims to make 
            cities and human settlements inclusive, safe, resilient, and sustainable. 
            As the urban population grows rapidly, SDG 11 emphasizes the importance 
            of establishing urban environments that prioritize equitable access to housing and transportation, 
            while reducing the environmental impact of cities. Through our application, we hope to support
            these objectives by promoting carpooling. By decreasing the amount of vehicles commuting daily,
            our initiative strives to reduce emissions produced from vehicles. Aligning with SDG 11, Dawgpool
            reduces pollution and contributes to a healthier community both through fostering connections with other students
            and supporting the environment.</p>
        </section>

        <section className="resources-section" aria-labelledby="carpool-image-heading">
          <h2 id="carpool-image-heading">Carpooling Image</h2>
          <img src="./assets/carpool3.png" alt="Carpooling Image" className="carpool-image" />
        </section>

        <section className="resources-section" aria-labelledby="financial-benefits-heading">
          <h2 id="financial-benefits-heading">Financial Benefits of Carpooling</h2>
          <p>Carpooling saves money for everyone taking part. Benefits include:</p>
          <ul>
            <li><strong>Reduced Fuel Costs:</strong> Riders sharing the price of fuel will allow each individual to pay less individually.</li> 
            <br></br>
            <li><strong>Lower Maintenance:</strong> Less miles driven will reduce wear and tear, decreasing the cost of maintenance.</li>
            <br></br>
            <li><strong>Saving on Parking:</strong> Carpooling can eliminate parking fees or reduce prices from splitting costs.</li>
          </ul>
        </section>

        <section className="resources-section" aria-labelledby="carpooling-image2-heading">
          <h2 id="carpooling-image2-heading">Carpooling Image 2</h2>
          <img src="./assets/carpooling.png" alt="Carpooling Image 2" className="carpool-image" />
        </section>

        <div className="resources-list-section" aria-labelledby="resources-heading">
          <h2 id="resources-heading" className="resources-list-title">Resources</h2>
          <div className="resources-cards-container">
            <div className="resources-card" aria-labelledby="uw-parking-heading">
              <div className="resources-card-content">
                <h3 id="uw-parking-heading">UW Parking</h3>
                <p>
                  The University of Washington supports carpooling through discounted
                  parking rates at their designated parking lots. 
                </p>
              </div>
              <a
                href="https://transportation.uw.edu/getting-here/rideshare/carpool#:~:text=Space%20availability%20in%20lots%20is,basis%20and%20is%20not%20guaranteed.&text=A%20coupon%20code%20provided%20for,of%202%20or%20more%20people."
                className="btn-details"
                target="_blank"
                aria-label="UW Carpool Parking Information"
              >
                Details
              </a>
            </div>

            <div className="resources-card" aria-labelledby="hov-info-heading">
              <div className="resources-card-content">
                <h3 id="hov-info-heading">HOV Information</h3>
                <p>
                  Meeting occupancy requirements by carpooling allows drivers to
                  use HOV lanes, which can save time during peak traffic hours.
                </p>
              </div>
              <a
                href="https://wsdot.wa.gov/travel/roads-bridges/hov-lanes#:~:text=HOV%20lanes%20are%20identified%20by,HOV%20rules%20are%20in%20force."
                className="btn-details"
                target="_blank"
                aria-label="HOV WA Details"
              >
                Details
              </a>
            </div>

            <div className="resources-card" aria-labelledby="king-county-emergency-heading">
              <div className="resources-card-content">
                <h3 id="king-county-emergency-heading">King County Emergency Resources</h3>
                <p>
                  In order to ensure a safe experience while carpooling,
                  it is important to have emergency resources available.
                  In case of an emergency while carpooling, the King County
                  Emergency Hotline is available 24/7.
                </p>
              </div>
              <a
                href="https://kingcounty.gov/en/dept/sheriff"
                className="btn-details"
                target="_blank"
                aria-label="King County Emergency Hotline"
              >
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;