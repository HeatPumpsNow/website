export default function HowToMaintainSystemsPage() {
  return (
    <div>
      <section className="article-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a> → <a href="/knowledge/">Knowledge</a> → <span>System Maintenance</span>
          </div>
          <div className="article-header">
            <div className="article-category">Maintenance Guide</div>
            <h1>Complete HVAC System Maintenance Guide</h1>
            <p className="article-tagline">Comprehensive maintenance schedules, DIY tasks, troubleshooting guides, and professional care recommendations to maximize your system's efficiency and lifespan.</p>
            <div className="article-meta">
              <span>15 min read</span>
              <span>•</span>
              <span>Technical Level: Beginner to Intermediate</span>
              <span>•</span>
              <span>Updated: December 2024</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>The Value of Preventive Maintenance</h2>
          <p>Proper maintenance can extend your HVAC system's life by 50% while reducing energy costs by up to 30%. More importantly, it prevents unexpected breakdowns during peak usage periods.</p>
          
          <div className="maintenance-benefits">
            <div className="benefit">
              <h3>💰 Cost Savings</h3>
              <ul>
                <li>15-30% reduction in energy costs</li>
                <li>Prevents expensive emergency repairs</li>
                <li>Extends equipment life by 5-10 years</li>
                <li>Maintains manufacturer warranties</li>
              </ul>
            </div>
            <div className="benefit">
              <h3>🏠 Performance Benefits</h3>
              <ul>
                <li>Consistent comfort throughout your home</li>
                <li>Better indoor air quality</li>
                <li>Quieter system operation</li>
                <li>Improved humidity control</li>
              </ul>
            </div>
            <div className="benefit">
              <h3>🔧 Reliability Gains</h3>
              <ul>
                <li>95% reduction in breakdowns</li>
                <li>Early problem detection</li>
                <li>Maintained safety systems</li>
                <li>Peace of mind during extreme weather</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="maintenance-schedules">
        <div className="container">
          <h2>Complete Maintenance Schedule</h2>
          
          <div className="schedule-tabs">
            <div className="schedule-category">
              <h3>Monthly Tasks (5 minutes)</h3>
              <div className="task-list">
                <div className="task">
                  <h4>🔍 Visual Inspection</h4>
                  <ul>
                    <li>Check thermostat for proper operation</li>
                    <li>Listen for unusual noises</li>
                    <li>Verify all vents are open and unobstructed</li>
                    <li>Look for water leaks around equipment</li>
                  </ul>
                </div>
                <div className="task">
                  <h4>🌡️ Filter Check</h4>
                  <p>Check filter condition. Replace if dirty (typically every 1-3 months depending on usage and filter type).</p>
                  <div className="filter-guide">
                    <strong>Filter Replacement Schedule:</strong>
                    <ul>
                      <li>Basic fiberglass: Monthly</li>
                      <li>Pleated filters: Every 2-3 months</li>
                      <li>HEPA filters: Every 6-12 months</li>
                      <li>Washable filters: Clean monthly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="schedule-category">
              <h3>Seasonal Tasks (30 minutes)</h3>
              
              <div className="season-tasks">
                <h4>🌸 Spring Preparation</h4>
                <div className="seasonal-checklist">
                  <h5>Indoor Unit:</h5>
                  <ul>
                    <li>Replace air filter</li>
                    <li>Test cooling mode operation</li>
                    <li>Check thermostat battery</li>
                    <li>Inspect ductwork visible areas</li>
                    <li>Clean return air grilles</li>
                  </ul>
                  <h5>Outdoor Unit:</h5>
                  <ul>
                    <li>Remove debris from around unit (2 ft clearance)</li>
                    <li>Gently clean condenser coils with garden hose</li>
                    <li>Check refrigerant lines for damage</li>
                    <li>Verify unit is level and secure</li>
                    <li>Trim vegetation for adequate airflow</li>
                  </ul>
                </div>
              </div>
              
              <div className="season-tasks">
                <h4>🍂 Fall Preparation</h4>
                <div className="seasonal-checklist">
                  <h5>System Transition:</h5>
                  <ul>
                    <li>Test heating mode operation</li>
                    <li>Check heat pump defrost cycle</li>
                    <li>Inspect outdoor unit for summer damage</li>
                    <li>Clean leaves from outdoor unit</li>
                    <li>Check and seal any duct leaks discovered</li>
                  </ul>
                  <h5>Winter Prep:</h5>
                  <ul>
                    <li>Ensure adequate clearance for snow</li>
                    <li>Check backup heating system (if applicable)</li>
                    <li>Program thermostat for heating season</li>
                    <li>Inspect weather stripping and caulking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Need Professional Maintenance?</h2>
          <p>Our comprehensive maintenance plans keep your system running efficiently while protecting your investment.</p>
          <div className="cta-buttons">
            <a href="/services/hvac-repair-service" className="btn btn-primary">See Maintenance Plans</a>
            <a href="/contact" className="btn btn-secondary">Schedule Service</a>
            <a href="/knowledge" className="btn btn-secondary">More Guides</a>
          </div>
        </div>
      </section>
    </div>
  )
}