export default function RulesForAirflowPage() {
  return (
    <div>
      <section className="article-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a> → <a href="/knowledge/">Knowledge</a> → <span>Rules for Airflow</span>
          </div>
          <div className="article-header">
            <div className="article-category">Fundamentals</div>
            <h1>Rules for Airflow: The Physics of HVAC Systems</h1>
            <p className="article-tagline">Understanding airflow fundamentals, pressure relationships, and ductwork design principles that govern efficient HVAC system operation.</p>
            <div className="article-meta">
              <span>16 min read</span>
              <span>•</span>
              <span>Technical Level: Intermediate</span>
              <span>•</span>
              <span>Updated: December 2024</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>The Fundamentals of Airflow</h2>
          <p>Airflow in HVAC systems follows the same physical laws that govern all fluid motion. Understanding these principles is essential for designing and troubleshooting efficient systems.</p>
          
          <div className="fundamental-concepts">
            <div className="concept">
              <h3>🌪️ Pressure Differentials Drive Flow</h3>
              <p>Air always moves from areas of higher pressure to areas of lower pressure. HVAC systems create these pressure differences using fans and blowers to move conditioned air throughout your home.</p>
              <div className="concept-details">
                <h4>Key Principles:</h4>
                <ul>
                  <li>Greater pressure difference = higher airflow</li>
                  <li>Resistance reduces flow for given pressure</li>
                  <li>System balance requires equal supply and return</li>
                  <li>Leaks disrupt intended pressure relationships</li>
                </ul>
              </div>
            </div>
            
            <div className="concept">
              <h3>⚡ Static Pressure is Your Energy Budget</h3>
              <p>Think of static pressure as your system's energy budget. Every component in the airflow path consumes some of this budget through friction losses.</p>
              <div className="concept-details">
                <h4>Typical Static Pressure Budget:</h4>
                <ul>
                  <li>Total available: 0.4 - 0.8 inches WC</li>
                  <li>Ductwork: 60-70% of budget</li>
                  <li>Equipment: 20-30% of budget</li>
                  <li>Filters and accessories: 10-20% of budget</li>
                </ul>
              </div>
            </div>
            
            <div className="concept">
              <h3>📐 Velocity and Area Relationship</h3>
              <p>Airflow (CFM) equals velocity (FPM) times area (square feet). This fundamental relationship drives duct sizing decisions.</p>
              <div className="velocity-guide">
                <h4>Recommended Velocities:</h4>
                <table>
                  <thead>
                    <tr><th>Application</th><th>Velocity (FPM)</th><th>Purpose</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Main Trunks</td><td>800-1200</td><td>Efficient transport</td></tr>
                    <tr><td>Branch Ducts</td><td>600-900</td><td>Balanced delivery</td></tr>
                    <tr><td>Return Ducts</td><td>500-800</td><td>Quiet operation</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pressure-section">
        <div className="container">
          <h2>Understanding Pressure Relationships</h2>
          
          <div className="pressure-types">
            <div className="pressure-type">
              <h3>📊 Static Pressure</h3>
              <p>The pressure exerted equally in all directions, measured perpendicular to airflow. This is the "pushing" force that moves air through the system.</p>
              
              <div className="pressure-examples">
                <h4>Measurement Locations:</h4>
                <ul>
                  <li><strong>Supply Plenum:</strong> Positive pressure pushes air into ducts</li>
                  <li><strong>Return Plenum:</strong> Negative pressure pulls air from rooms</li>
                  <li><strong>Duct System:</strong> Gradual pressure drop through friction</li>
                  <li><strong>Room:</strong> Slight pressure relative to outdoors</li>
                </ul>
              </div>
            </div>
            
            <div className="pressure-type">
              <h3>🏃 Velocity Pressure</h3>
              <p>The pressure component created by air movement. Higher velocities create higher velocity pressure, but also more noise and energy consumption.</p>
              
              <div className="velocity-relationship">
                <h4>Velocity Pressure Formula:</h4>
                <p><strong>VP = (Velocity ÷ 4005)²</strong></p>
                <div className="formula-examples">
                  <ul>
                    <li>500 FPM = 0.016" WC</li>
                    <li>1000 FPM = 0.062" WC</li>
                    <li>1500 FPM = 0.140" WC</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="pressure-type">
              <h3>🔄 Total Pressure</h3>
              <p>The sum of static and velocity pressure. This represents the total energy available to move air through the system.</p>
              
              <div className="total-pressure-concept">
                <h4>Energy Conservation:</h4>
                <p>Total pressure decreases through the system as energy is consumed by friction, but the relationship between static and velocity pressure can change based on duct sizing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Need Help with Airflow Design?</h2>
          <p>Our engineers apply these airflow principles to every installation, ensuring optimal performance and comfort.</p>
          <div className="cta-buttons">
            <a href="/services/inverter-heat-pumps" className="btn btn-primary">Our Services</a>
            <a href="/contact" className="btn btn-secondary">Get Assessment</a>
            <a href="/knowledge/how-to-install-ducting" className="btn btn-secondary">Ductwork Guide</a>
          </div>
        </div>
      </section>
    </div>
  )
}