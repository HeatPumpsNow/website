export default function HowToInstallDuctingPage() {
  return (
    <div>
      <section className="article-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a> → <a href="/knowledge/">Knowledge</a> → <span>How to Install Ducting</span>
          </div>
          <div className="article-header">
            <div className="article-category">Technical Guide</div>
            <h1>How to Install Ducting: Professional Techniques and Standards</h1>
            <p className="article-tagline">Comprehensive guide to professional ductwork installation, covering design principles, materials, installation techniques, and quality standards.</p>
            <div className="article-meta">
              <span>20 min read</span>
              <span>•</span>
              <span>Technical Level: Advanced</span>
              <span>•</span>
              <span>Updated: December 2024</span>
            </div>
          </div>
        </div>
      </section>

      <section className="toc-section">
        <div className="container">
          <div className="toc-box">
            <h3>Article Contents</h3>
            <ul className="toc-list">
              <li><a href="#fundamentals">Ductwork Fundamentals</a></li>
              <li><a href="#design">Design and Sizing</a></li>
              <li><a href="#materials">Materials and Components</a></li>
              <li><a href="#installation">Installation Techniques</a></li>
              <li><a href="#sealing">Sealing and Insulation</a></li>
              <li><a href="#testing">Testing and Commissioning</a></li>
              <li><a href="#common-mistakes">Common Mistakes to Avoid</a></li>
            </ul>
          </div>
        </div>
      </section>

      <article className="knowledge-article">
        <div className="container">
          <section id="fundamentals" className="article-section">
            <h2>Ductwork Fundamentals</h2>
            <p>Proper ductwork is the circulatory system of your HVAC installation. Like arteries and veins in the human body, ducts must be properly sized, sealed, and routed to deliver conditioned air efficiently to every room.</p>
            
            <div className="fundamental-principles">
              <div className="principle">
                <h3>🎯 Pressure Balance</h3>
                <p>Supply and return systems must be balanced to maintain proper pressure relationships. Undersized returns create positive pressure, while oversized returns create negative pressure—both reduce efficiency and comfort.</p>
              </div>
              <div className="principle">
                <h3>📏 Proper Sizing</h3>
                <p>Duct sizing follows Manual D calculations based on airflow requirements, available static pressure, and friction loss. Bigger isn't always better—oversized ducts reduce air velocity and can cause comfort issues.</p>
              </div>
              <div className="principle">
                <h3>🔒 Air Tightness</h3>
                <p>Duct leakage directly impacts system efficiency. Industry standards require less than 6% total leakage (measured at 25 Pascals), but best practice targets less than 3%.</p>
              </div>
            </div>
          </section>

          <section id="design" className="article-section">
            <h2>Design and Sizing</h2>
            <p>Professional ductwork design starts with Manual J load calculations and follows Manual D sizing procedures. This ensures each room receives the correct airflow for optimal comfort and efficiency.</p>
            
            <div className="design-process">
              <div className="design-step">
                <h3>Step 1: Load Analysis</h3>
                <p>Calculate room-by-room heating and cooling loads using Manual J procedures. This determines the CFM requirement for each space.</p>
                <div className="step-details">
                  <h4>Key Factors:</h4>
                  <ul>
                    <li>Room size and orientation</li>
                    <li>Window area and quality</li>
                    <li>Insulation levels</li>
                    <li>Internal heat gains</li>
                    <li>Infiltration rates</li>
                  </ul>
                </div>
              </div>
              
              <div className="design-step">
                <h3>Step 2: System Layout</h3>
                <p>Design supply and return duct systems that minimize pressure drop while providing proper airflow to each room.</p>
                <div className="step-details">
                  <h4>Layout Principles:</h4>
                  <ul>
                    <li>Minimize duct length and turns</li>
                    <li>Use proper trunk-and-branch design</li>
                    <li>Locate returns in central areas</li>
                    <li>Avoid duct runs in unconditioned spaces</li>
                    <li>Plan for service access</li>
                  </ul>
                </div>
              </div>
              
              <div className="design-step">
                <h3>Step 3: Sizing Calculations</h3>
                <p>Calculate duct sizes using Manual D friction loss method to maintain proper air velocities and minimize energy consumption.</p>
                <div className="sizing-table">
                  <h4>Recommended Air Velocities:</h4>
                  <table>
                    <thead>
                      <tr><th>Duct Type</th><th>Velocity (FPM)</th><th>Application</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Main Trunk</td><td>800-1200</td><td>Low noise, efficient</td></tr>
                      <tr><td>Branch Ducts</td><td>600-900</td><td>Good balance</td></tr>
                      <tr><td>Return Ducts</td><td>500-800</td><td>Quiet operation</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>

      <section className="cta-section">
        <div className="container">
          <h2>Need Professional Ductwork Installation?</h2>
          <p>Our certified technicians follow these exact procedures to ensure your ductwork performs optimally for decades.</p>
          <div className="cta-buttons">
            <a href="/services/inverter-heat-pumps" className="btn btn-primary">See Our Services</a>
            <a href="/contact" className="btn btn-secondary">Get a Quote</a>
            <a href="/knowledge" className="btn btn-secondary">More Guides</a>
          </div>
        </div>
      </section>
    </div>
  )
}