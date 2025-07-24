export default function PricingPage() {
  return (
    <div>
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="breadcrumb">
              <a href="/">Home</a> → <a href="/transparency">Transparency</a> → <span>Pricing</span>
            </div>
            <h1>Transparent Pricing: How Our Pricing Works</h1>
            <p className="hero-tagline">No hidden fees, no high-pressure sales tactics. Here's exactly how we price our heat pump installations and what you can expect to pay.</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Transparent Pricing</span>
              </div>
              <div className="stat">
                <span className="stat-number">0</span>
                <span className="stat-label">Hidden Fees</span>
              </div>
              <div className="stat">
                <span className="stat-number">30 min</span>
                <span className="stat-label">Free Assessment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-philosophy">
        <div className="container">
          <h2>Our Pricing Philosophy</h2>
          <p>We believe in honest, upfront pricing based on the actual work required for your specific home. No games, no gimmicks—just fair prices for exceptional work.</p>
          
          <div className="pricing-principles">
            <div className="principle">
              <h3>🎯 Project-Based Pricing</h3>
              <p>Every price is customized based on your home's specific requirements, not arbitrary markup formulas.</p>
            </div>
            <div className="principle">
              <h3>📊 Data-Driven Estimates</h3>
              <p>Our quotes are based on actual load calculations, material requirements, and labor hours—not guesswork.</p>
            </div>
            <div className="principle">
              <h3>🔒 Fixed-Price Contracts</h3>
              <p>Once we provide a quote, that's your price. No surprises or change orders unless you request additional work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-factors">
        <div className="container">
          <h2>What Affects Your Project Cost</h2>
          
          <div className="factors-grid">
            <div className="factor-category">
              <h3>🏠 Home Characteristics</h3>
              <ul>
                <li>Home size and layout</li>
                <li>Existing ductwork condition</li>
                <li>Electrical service capacity</li>
                <li>Insulation and air sealing needs</li>
                <li>Access and working conditions</li>
              </ul>
            </div>
            
            <div className="factor-category">
              <h3>⚙️ System Requirements</h3>
              <ul>
                <li>Heat pump capacity needed</li>
                <li>Efficiency level selected</li>
                <li>Indoor air quality upgrades</li>
                <li>Smart controls and automation</li>
                <li>Zoning and specialty features</li>
              </ul>
            </div>
            
            <div className="factor-category">
              <h3>🔧 Installation Complexity</h3>
              <ul>
                <li>Ductwork modifications required</li>
                <li>Electrical upgrades needed</li>
                <li>Refrigerant line routing</li>
                <li>Equipment placement challenges</li>
                <li>Permit and inspection requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="typical-pricing">
        <div className="container">
          <h2>Typical Project Investment Ranges</h2>
          <p className="pricing-disclaimer">These ranges reflect completed projects in Southern California. Your actual cost may vary based on specific requirements and current incentives.</p>
          
          <div className="pricing-tiers">
            <div className="pricing-tier">
              <h3>Essential System</h3>
              <div className="price-range">$12,000 - $18,000</div>
              <div className="tier-details">
                <h4>Typical Scope:</h4>
                <ul>
                  <li>Basic heat pump replacement</li>
                  <li>Minimal ductwork modifications</li>
                  <li>Standard efficiency equipment</li>
                  <li>Basic programmable thermostat</li>
                  <li>Homes under 1,800 sq ft</li>
                </ul>
              </div>
            </div>
            
            <div className="pricing-tier featured">
              <h3>Complete System</h3>
              <div className="price-range">$18,000 - $28,000</div>
              <div className="tier-details">
                <h4>Most Popular - Typical Scope:</h4>
                <ul>
                  <li>High-efficiency heat pump</li>
                  <li>Ductwork optimization</li>
                  <li>Smart thermostat with zoning</li>
                  <li>Air quality improvements</li>
                  <li>Homes 1,800 - 3,000 sq ft</li>
                </ul>
              </div>
            </div>
            
            <div className="pricing-tier">
              <h3>Premium System</h3>
              <div className="price-range">$28,000 - $40,000+</div>
              <div className="tier-details">
                <h4>Typical Scope:</h4>
                <ul>
                  <li>Top-tier variable-speed heat pump</li>
                  <li>Complete ductwork replacement</li>
                  <li>Advanced IAQ systems</li>
                  <li>Multi-zone smart controls</li>
                  <li>Homes over 3,000 sq ft or complex installs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready for Your Personalized Quote?</h2>
          <p>Get an accurate, honest assessment of your heat pump project cost with no obligation.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Get Free Quote</a>
            <a href="/transparency/rebates" className="btn btn-secondary">See Available Rebates</a>
            <a href="/services/inverter-heat-pumps" className="btn btn-secondary">Our Services</a>
          </div>
        </div>
      </section>
    </div>
  )
}