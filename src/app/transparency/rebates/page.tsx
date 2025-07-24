export default function RebatesPage() {
  return (
    <div>
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="breadcrumb">
              <a href="/">Home</a> → <a href="/transparency">Transparency</a> → <span>Rebates & Incentives</span>
            </div>
            <h1>Rebates & Incentives: Maximize Your Heat Pump Savings</h1>
            <p className="hero-tagline">Take advantage of generous federal, state, and utility incentives that can reduce your heat pump investment by thousands of dollars. We handle all the paperwork.</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">30%</span>
                <span className="stat-label">Federal Tax Credit</span>
              </div>
              <div className="stat">
                <span className="stat-number">$6,000+</span>
                <span className="stat-label">Local Utility Rebates</span>
              </div>
              <div className="stat">
                <span className="stat-number">50%+</span>
                <span className="stat-label">Total Potential Savings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="incentive-overview">
        <div className="container">
          <h2>Current Incentive Programs (Updated December 2024)</h2>
          <p>California leads the nation in heat pump incentives. Here's everything available to help make your transition to efficient heating and cooling more affordable.</p>
          
          <div className="incentive-categories">
            <div className="incentive-category">
              <div className="category-header">
                <h3>🇺🇸 Federal Incentives</h3>
                <span className="category-value">Up to $6,000+ per home</span>
              </div>
              <div className="category-programs">
                <div className="program">
                  <h4>Federal Tax Credit (25C)</h4>
                  <div className="program-details">
                    <p><strong>Credit Amount:</strong> 30% of total project cost (including installation)</p>
                    <p><strong>Maximum Credit:</strong> $2,000 per year (can carry over unused credits)</p>
                    <p><strong>Valid Through:</strong> December 31, 2032</p>
                    
                    <div className="eligibility-requirements">
                      <h5>Eligibility Requirements:</h5>
                      <ul>
                        <li>Heat pump must meet ENERGY STAR Most Efficient criteria</li>
                        <li>Installation in primary or secondary residence</li>
                        <li>Professional installation required</li>
                        <li>Equipment must be placed in service during tax year</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="incentive-category">
              <div className="category-header">
                <h3>🏛️ California State Programs</h3>
                <span className="category-value">Up to $4,000+ per home</span>
              </div>
              <div className="category-programs">
                <div className="program">
                  <h4>TECH Clean California</h4>
                  <div className="program-details">
                    <p><strong>Rebate Amount:</strong> $3,000 for heat pump HVAC systems</p>
                    <p><strong>Additional:</strong> $1,000 bonus for replacing gas heating</p>
                    <p><strong>Income Qualification:</strong> Available to all income levels</p>
                    <p><strong>Status:</strong> Active through 2024</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="incentive-category">
              <div className="category-header">
                <h3>⚡ Utility Company Rebates</h3>
                <span className="category-value">$1,000-$6,000+ per home</span>
              </div>
              <div className="category-programs">
                <div className="program">
                  <h4>Southern California Edison (SCE)</h4>
                  <div className="program-details">
                    <p><strong>Heat Pump Rebate:</strong> Up to $3,000 for qualified systems</p>
                    <p><strong>Ductwork Rebate:</strong> Up to $2,000 for duct sealing/replacement</p>
                    <p><strong>Smart Thermostat:</strong> $75 rebate</p>
                  </div>
                </div>
                
                <div className="program">
                  <h4>Los Angeles Department of Water & Power (LADWP)</h4>
                  <div className="program-details">
                    <p><strong>Heat Pump Rebate:</strong> Up to $6,000 for high-efficiency systems</p>
                    <p><strong>Additional Incentives:</strong> Financing options available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="savings-calculator">
        <div className="container">
          <h2>Potential Savings Calculator</h2>
          <p>See how much you could save on your heat pump installation with available incentives.</p>
          
          <div className="calculator-example">
            <h3>Example: Typical 2,000 sq ft Home</h3>
            <div className="calculation-breakdown">
              <div className="cost-item">
                <span className="cost-label">Total Project Cost:</span>
                <span className="cost-value">$18,000</span>
              </div>
              <div className="cost-item savings">
                <span className="cost-label">Federal Tax Credit (30%):</span>
                <span className="cost-value">-$2,000</span>
              </div>
              <div className="cost-item savings">
                <span className="cost-label">TECH Clean California:</span>
                <span className="cost-value">-$4,000</span>
              </div>
              <div className="cost-item savings">
                <span className="cost-label">Utility Rebate:</span>
                <span className="cost-value">-$3,000</span>
              </div>
              <div className="cost-item total">
                <span className="cost-label">Your Final Cost:</span>
                <span className="cost-value">$9,000</span>
              </div>
              <div className="savings-summary">
                <strong>Total Savings: $9,000 (50% of project cost)</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Maximize Your Savings?</h2>
          <p>Let us help you navigate all available incentives and handle the paperwork. Get your personalized rebate analysis today.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Get Rebate Analysis</a>
            <a href="/services/inverter-heat-pumps" className="btn btn-secondary">Our Services</a>
            <a href="/transparency/pricing" className="btn btn-secondary">Pricing Guide</a>
          </div>
        </div>
      </section>
    </div>
  )
}