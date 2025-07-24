export default function HeatLoadCalculationPage() {
  return (
    <div>
      <section className="article-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a> → <a href="/knowledge/">Knowledge</a> → <span>Heat Load Calculations</span>
          </div>
          <div className="article-header">
            <div className="article-category">Engineering Guide</div>
            <h1>Heat Load Calculations: The Science of Proper Sizing</h1>
            <p className="article-tagline">Understanding Manual J load calculations and why proper system sizing is the foundation of efficient, comfortable HVAC systems.</p>
            <div className="article-meta">
              <span>22 min read</span>
              <span>•</span>
              <span>Technical Level: Advanced</span>
              <span>•</span>
              <span>Updated: December 2024</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Why Accurate Load Calculations Are Critical</h2>
          <p>Heat load calculations determine exactly how much heating and cooling capacity your home needs. This scientific approach ensures optimal comfort, efficiency, and equipment longevity.</p>
          
          <div className="importance-grid">
            <div className="importance-item">
              <h3>🎯 Right-Sized Equipment</h3>
              <div className="sizing-comparison">
                <div className="sizing-issue">
                  <h4>❌ Oversized Systems:</h4>
                  <ul>
                    <li>Short cycling reduces efficiency</li>
                    <li>Poor humidity control</li>
                    <li>Uneven temperatures</li>
                    <li>Increased equipment wear</li>
                    <li>Higher installation costs</li>
                  </ul>
                </div>
                <div className="sizing-issue">
                  <h4>❌ Undersized Systems:</h4>
                  <ul>
                    <li>Cannot maintain comfort during peak loads</li>
                    <li>Continuous operation reduces lifespan</li>
                    <li>Higher energy costs</li>
                    <li>Occupant dissatisfaction</li>
                    <li>Potential for backup heat overuse</li>
                  </ul>
                </div>
                <div className="sizing-correct">
                  <h4>✅ Properly Sized Systems:</h4>
                  <ul>
                    <li>Optimal efficiency at all loads</li>
                    <li>Consistent comfort throughout home</li>
                    <li>Proper humidity control</li>
                    <li>Maximum equipment lifespan</li>
                    <li>Lowest total cost of ownership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="manual-j-section">
        <div className="container">
          <h2>Manual J: The Industry Standard</h2>
          <p>Manual J, published by the Air Conditioning Contractors of America (ACCA), is the recognized standard for residential load calculations. It provides a systematic method for calculating heating and cooling loads based on building characteristics and local climate conditions.</p>
          
          <div className="manual-j-components">
            <div className="component">
              <h3>🏠 Building Envelope Analysis</h3>
              <p>Detailed analysis of heat transfer through walls, windows, roof, and foundation.</p>
              <div className="component-details">
                <h4>Key Factors:</h4>
                <ul>
                  <li>Construction materials and methods</li>
                  <li>Insulation levels and effectiveness</li>
                  <li>Window area, type, and orientation</li>
                  <li>Air infiltration rates</li>
                  <li>Thermal bridging effects</li>
                </ul>
              </div>
            </div>
            
            <div className="component">
              <h3>🌡️ Climate Considerations</h3>
              <p>Local weather data drives the calculation using design temperatures and degree days.</p>
              <div className="climate-data">
                <h4>Design Conditions (Los Angeles Area):</h4>
                <ul>
                  <li><strong>Winter Design:</strong> 45°F (1% condition)</li>
                  <li><strong>Summer Design:</strong> 82°F dry bulb, 66°F wet bulb</li>
                  <li><strong>Daily Temperature Range:</strong> Medium (16-20°F)</li>
                  <li><strong>Humidity Ratio:</strong> 0.0099 lb/lb</li>
                </ul>
              </div>
            </div>
            
            <div className="component">
              <h3>👥 Internal Heat Gains</h3>
              <p>Heat generated by occupants, lighting, appliances, and other equipment.</p>
              <div className="internal-gains">
                <h4>Typical Residential Gains:</h4>
                <ul>
                  <li><strong>People:</strong> 230 Btuh sensible + 190 Btuh latent per person</li>
                  <li><strong>Lighting:</strong> 1.2 watts/sq ft average</li>
                  <li><strong>Appliances:</strong> Kitchen 1,200 Btuh, other 1,000 Btuh</li>
                  <li><strong>Electronics:</strong> Variable based on actual equipment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Get Professional Load Calculations</h2>
          <p>Every Heat Pumps Now installation includes comprehensive Manual J load calculations to ensure optimal performance and efficiency.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Schedule Assessment</a>
            <a href="/services/inverter-heat-pumps" className="btn btn-secondary">Our Services</a>
            <a href="/knowledge/how-we-install" className="btn btn-secondary">Our Process</a>
          </div>
        </div>
      </section>
    </div>
  )
}