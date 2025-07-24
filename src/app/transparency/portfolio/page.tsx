export default function PortfolioPage() {
  return (
    <div>
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="breadcrumb">
              <a href="/">Home</a> → <a href="/transparency">Transparency</a> → <span>Portfolio</span>
            </div>
            <h1>Our Work: Real Projects, Real Results</h1>
            <p className="hero-tagline">Every installation tells a story of improved comfort, energy savings, and satisfied customers. See the actual performance data from our completed projects.</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Completed Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Customer Satisfaction</span>
              </div>
              <div className="stat">
                <span className="stat-number">45%</span>
                <span className="stat-label">Average Energy Savings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="container">
          <h2>Featured Project Case Studies</h2>
          
          <div className="project-grid">
            <div className="project-case">
              <div className="project-header">
                <h3>La Verne Historic Home Transformation</h3>
                <div className="project-meta">
                  <span>2,400 sq ft • 1952 Construction • Completed March 2024</span>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-challenge">
                  <h4>The Challenge</h4>
                  <p>100+ year old home with original knob-and-tube electrical, no central air, and rooms that varied by 15°F. Previous contractors quoted $35,000+ for traditional gas furnace and AC system.</p>
                  
                  <div className="before-conditions">
                    <h5>Before Conditions:</h5>
                    <ul>
                      <li>Window AC units consuming 4,500 kWh annually</li>
                      <li>Wall heaters creating uneven temperatures</li>
                      <li>No whole-house air filtration</li>
                      <li>High utility bills ($2,400/year average)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="project-solution">
                  <h4>Our Solution</h4>
                  <p>3-ton Mitsubishi variable-speed heat pump with optimized ductwork design and comprehensive air sealing.</p>
                  
                  <div className="solution-details">
                    <h5>System Components:</h5>
                    <ul>
                      <li>Mitsubishi MSZ-FH36NA (24 SEER) heat pump</li>
                      <li>Custom ductwork with R-8 insulation</li>
                      <li>Smart thermostat with zoning controls</li>
                      <li>MERV 13 filtration system</li>
                      <li>Comprehensive air sealing (reduced by 40%)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="project-results">
                  <h4>Measured Results (12 months post-installation)</h4>
                  <div className="results-grid">
                    <div className="result">
                      <span className="result-number">$847</span>
                      <span className="result-label">Annual Energy Cost</span>
                      <span className="result-improvement">65% reduction</span>
                    </div>
                    <div className="result">
                      <span className="result-number">23.2 SEER</span>
                      <span className="result-label">Measured Efficiency</span>
                      <span className="result-improvement">Exceeds rating</span>
                    </div>
                    <div className="result">
                      <span className="result-number">±1°F</span>
                      <span className="result-label">Temperature Variation</span>
                      <span className="result-improvement">Previously ±15°F</span>
                    </div>
                    <div className="result">
                      <span className="result-number">4.2 tons</span>
                      <span className="result-label">CO₂ Avoided Annually</span>
                      <span className="result-improvement">Environmental benefit</span>
                    </div>
                  </div>
                </div>
                
                <div className="customer-testimonial">
                  <blockquote>
                    "We went from dreading our utility bills to being amazed at how little we spend on energy. The house is comfortable year-round, and we love knowing we're helping the environment. Heat Pumps Now delivered everything they promised and more."
                  </blockquote>
                  <cite>— Maria and Robert Chen, La Verne Homeowners</cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="performance-metrics">
        <div className="container">
          <h2>Portfolio Performance Summary</h2>
          <p>Aggregate performance data from our completed projects demonstrates consistent results across diverse home types and conditions.</p>
          
          <div className="metrics-grid">
            <div className="metric-category">
              <h3>💰 Financial Performance</h3>
              <div className="metric-stats">
                <div className="stat">
                  <span className="stat-number">45%</span>
                  <span className="stat-label">Average Energy Cost Reduction</span>
                </div>
                <div className="stat">
                  <span className="stat-number">$1,200</span>
                  <span className="stat-label">Average Annual Savings</span>
                </div>
                <div className="stat">
                  <span className="stat-number">6.2 years</span>
                  <span className="stat-label">Average Payback Period</span>
                </div>
              </div>
            </div>
            
            <div className="metric-category">
              <h3>⚡ Technical Performance</h3>
              <div className="metric-stats">
                <div className="stat">
                  <span className="stat-number">22.1 SEER</span>
                  <span className="stat-label">Average Measured Efficiency</span>
                </div>
                <div className="stat">
                  <span className="stat-number">103%</span>
                  <span className="stat-label">Efficiency vs. Rating</span>
                </div>
                <div className="stat">
                  <span className="stat-number">99.2%</span>
                  <span className="stat-label">System Uptime</span>
                </div>
              </div>
            </div>
            
            <div className="metric-category">
              <h3>🏠 Comfort Performance</h3>
              <div className="metric-stats">
                <div className="stat">
                  <span className="stat-number">±1.5°F</span>
                  <span className="stat-label">Average Temperature Control</span>
                </div>
                <div className="stat">
                  <span className="stat-number">44%</span>
                  <span className="stat-label">Average Humidity Level</span>
                </div>
                <div className="stat">
                  <span className="stat-number">48 dB</span>
                  <span className="stat-label">Average Noise Level</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Join Our Portfolio of Success Stories?</h2>
          <p>See why hundreds of California homeowners trust Heat Pumps Now for their heating and cooling needs.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Start Your Project</a>
            <a href="/transparency/project-template" className="btn btn-secondary">Our Process</a>
            <a href="/services/inverter-heat-pumps" className="btn btn-secondary">Our Services</a>
          </div>
        </div>
      </section>
    </div>
  )
}