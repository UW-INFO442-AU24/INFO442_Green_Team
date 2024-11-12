import React from 'react';

function Resources() {
  return (
    <div className="resources-page">
      <h1 className="resources-header">Carpooling Resources</h1>

      <div className="resources-container">
        <section className="resources-section">
          <h2>Introduction to Carpooling</h2>
          <p>Carpooling is a method of transportation where at least two individuals
            share using a vehicle to reach their destination. Through carpooling, traffic congestion
            decreases from less solo vehicle on the roadways, emissions are reduced, and money is 
            saved on paying for gas and parking. Dawgpool is designed to streamline the carpooling process,
            increasing accessilbity for finding a carpooling partner. With our application, users can find 
            carpool matches that align with their commuting schedule and develop new connections with UW
            students that share a similar commute. Dawgpool hopes to encourage more students to begin 
            carpooling with their peers, with an end goal of reducing pollution from transportation and create
            a more connected community. </p>
        </section>

        <section className="resources-section">
          <h2>Learn More About Carpooling</h2>
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

        

        <section className="resources-section">
          <h2>United Nations SDG 11</h2>
            <p>The UN Sustainable Development Goal 11 (SDG 11) aims to make 
                cities and human settlements inclusive, safe, resilient, and sustainable. 
                As the urban population grows rapidly, SDG 11 emphasizes the importance 
                of establishing urban environments that prioritize equitable access to housing and transportation, 
                while reducing the environmental impact of cities. Through our application, we hope to support
                these objectives by promoting carpooling. By decreasing the amount of vehicles commuting daily,
                our initiative strives to reduce emissions produced from vehicles. Aligning with SDG 11, Dawgpool
                reduces pollution and contributes to a healthier community both through fostering connections with other students
                and supporting the environment.  </p>
        </section>

        <section className="resources-section">
        <img src="./assets/carpool3.png" alt="Carpooling Image" className="carpool-image" />
        </section>

        <section className="resources-section">
          <h2>Financial Benefits of Carpooling</h2>
          <p>Carpooling saves money for everyone taking part. Benefits include:</p>
          <ul>
            <li><strong>Reduced Fuel Costs:</strong> Riders sharing the price of fuel will allow each individual to pay less individually.</li> 
            <br></br>
            <li><strong>Lower Maintenance:</strong> Less miles driven will reduce wear and tear, decreasing the cost of maintenance.</li>
            <br></br>
            <li><strong>Saving on Parking:</strong> Carpooling can eliminate parking fees or reduce prices from splitting costs.</li>
          </ul>
        </section>

        <section className="resources-section">
        <img src="./assets/carpooling.png" alt="Carpooling Image 2" className="carpool-image" />
        </section>


        <div
        class="resources-list-section"
        aria-labelledby="resources-heading"
      >
        <h2 class="resources-list-title">
          Resources
        </h2>
        <div class="resources-cards-container">
          <div
            class="resources-card"
            aria-labelledby="resources-heading"
          >
            <div class="resources-card-content">
              <h3>
                UW Parking
              </h3>
              <p>
                The University of Washington supports carpooling through discounted
                parking rates at their designated parking lots. 
              </p>
            </div>
            <a
              href="https://transportation.uw.edu/getting-here/rideshare/carpool#:~:text=Space%20availability%20in%20lots%20is,basis%20and%20is%20not%20guaranteed.&text=A%20coupon%20code%20provided%20for,of%202%20or%20more%20people."
              class="btn-details"
              target="_blank"
              aria-label="UW Carpool Parking Information"
            >
              Details
            </a>
          </div>

          <div
            class="resources-card"
            aria-labelledby="resources-wsdot-heading"
          >
            <div class="resources-card-content">
              <h3>
               HOV Information
              </h3>
              <p>
                Meeting occupacy requirements by carpooling allows drivers to
                use HOV lanes, which can save time during peak traffic hours.
              </p>
            </div>
            <a
              href="https://wsdot.wa.gov/travel/roads-bridges/hov-lanes#:~:text=HOV%20lanes%20are%20identified%20by,HOV%20rules%20are%20in%20force."
              class="btn-details"
              target="_blank"
              aria-label="HOV WA Details"
            >
              Details
            </a>
          </div>

          <div
            class="resources-card"
            aria-labelledby="resources-emergency-heading"
          >
            <div class="resources-card-content">
              <h3>King County Emergency Resources </h3>
              <p>
                In order to ensure a safe experience while carpooling,
                it is important to have emergency resources available.
                In case of an emergency while carpooling, the King County
                Emergency Hotline is available 24/7.
              </p>
            </div>
            <a
              href="https://kingcounty.gov/en/dept/sheriff"
              class="btn-details"
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