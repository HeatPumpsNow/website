export default function ProjectTemplatePage() {
  return (
    <div>
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="breadcrumb">
              <a href="/">Home</a> → <a href="/transparency">Transparency</a> → <span>Project Template</span>
            </div>
            <h1>Project Template: Your Step-by-Step Journey</h1>
            <p className="hero-tagline">Complete transparency into our systematic approach. Every project follows this proven template to ensure consistent, high-quality results.</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">12-15</span>
                <span className="stat-label">Day Project Timeline</span>
              </div>
              <div className="stat">
                <span className="stat-number">47</span>
                <span className="stat-label">Quality Checkpoints</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Documentation Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-overview">
        <div className="container">
          <h2>Project Phases Overview</h2>
          
          <div className="phases-timeline">
            <div className="phase-summary">
              <div className="phase-item">
                <div className="phase-icon">📋</div>
                <h3>Assessment & Design</h3>
                <span className="phase-duration">Days 1-3</span>
                <p>Comprehensive analysis and custom system design</p>
              </div>
              <div className="phase-item">
                <div className="phase-icon">📄</div>
                <h3>Permits & Procurement</h3>
                <span className="phase-duration">Days 4-7</span>
                <p>Permits, equipment ordering, and pre-installation prep</p>
              </div>
              <div className="phase-item">
                <div className="phase-icon">🔧</div>
                <h3>Installation</h3>
                <span className="phase-duration">Days 8-11</span>
                <p>Professional installation following our quality standards</p>
              </div>
              <div className="phase-item">
                <div className="phase-icon">✅</div>
                <h3>Commissioning</h3>
                <span className="phase-duration">Days 12-13</span>
                <p>System testing, optimization, and performance verification</p>
              </div>
              <div className="phase-item">
                <div className="phase-icon">🎓</div>
                <h3>Handover</h3>
                <span className="phase-duration">Day 14</span>
                <p>Customer education and project completion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="detailed-phases">
        <div className="container">
          <h2>Detailed Phase Breakdown</h2>
          
          <div className="phase-detail">
            <div className="phase-header">
              <h3>📋 Phase 1: Assessment & Design (Days 1-3)</h3>
              <span className="phase-goal">Goal: Understand your needs and design the optimal system</span>
            </div>
            
            <div className="phase-content">
              <div className="day-breakdown">
                <div className="day-item">
                  <h4>Day 1: Initial Consultation & Site Assessment</h4>
                  <div className="day-activities">
                    <div className="activity-group">
                      <h5>🏠 Home Evaluation (2-3 hours)</h5>
                      <ul>
                        <li>Comprehensive walkthrough and measurements</li>
                        <li>Existing system assessment and performance review</li>
                        <li>Building envelope evaluation (insulation, air sealing)</li>
                        <li>Electrical service and capacity assessment</li>
                        <li>Indoor air quality testing and analysis</li>
                      </ul>
                    </div>
                    
                    <div className="activity-group">
                      <h5>🎯 Needs Assessment</h5>
                      <ul>
                        <li>Comfort preferences and problem areas</li>
                        <li>Energy efficiency goals</li>
                        <li>Budget parameters and financing options</li>
                        <li>Timeline requirements and constraints</li>
                        <li>Smart home integration preferences</li>
                      </ul>
                    </div>
                    
                    <div className="deliverables">
                      <h5>📋 Day 1 Deliverables:</h5>
                      <ul>
                        <li>Site assessment report with photos</li>
                        <li>Preliminary system recommendations</li>
                        <li>Estimated project timeline</li>
                        <li>Next steps and scheduling</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="day-item">
                  <h4>Day 2: Engineering & Design</h4>
                  <div className="day-activities">
                    <div className="activity-group">
                      <h5>📐 Manual J Load Calculations</h5>
                      <ul>
                        <li>Room-by-room heating and cooling load analysis</li>
                        <li>Building envelope heat transfer calculations</li>
                        <li>Internal load assessment (occupancy, appliances)</li>
                        <li>Infiltration and ventilation load calculations</li>
                        <li>Equipment sizing based on actual loads</li>
                      </ul>
                    </div>
                    
                    <div className="activity-group">
                      <h5>🌬️ Ductwork Design (Manual D)</h5>
                      <ul>
                        <li>Airflow requirements by room</li>
                        <li>Duct sizing and layout optimization</li>
                        <li>Static pressure calculations</li>
                        <li>Return air system design</li>
                        <li>Equipment location planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Experience our systematic approach to heat pump installation. Every project follows this proven template for consistent, exceptional results.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Begin Your Project</a>
            <a href="/transparency/portfolio" className="btn btn-secondary">See Our Work</a>
            <a href="/knowledge/how-we-install" className="btn btn-secondary">Installation Details</a>
          </div>
        </div>
      </section>
    </div>
  )
}