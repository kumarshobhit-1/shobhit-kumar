import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Footer } from './components/footer/Footer';

// SVG components to maintain clean inline styles and responsive hand-drawn assets
const StarIcon = ({ className, size = 24, fill = "currentColor" }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0C12.7 5.6 18.4 11.3 24 12C18.4 12.7 12.7 18.4 12 24C11.3 18.4 5.6 12.7 0 12C5.6 11.3 11.3 5.6 12 0Z"
      fill={fill}
    />
  </svg>
);

const SparkleIcon = ({ className, size = 24, fill = "currentColor", color = "#000" }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 0 C53 30 70 47 100 50 C70 53 53 70 50 100 C47 70 30 53 0 50 C30 47 47 30 50 0 Z"
      fill={fill}
      stroke={color}
      strokeWidth="4"
    />
  </svg>
);

const StarburstSticker = ({ className, size = 80, fill = "#F472B6", border = "#08060D" }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 5L61 24L82 18L76 39L95 50L76 61L82 82L61 76L50 95L39 76L18 82L24 61L5 50L24 39L18 18L39 24L50 5Z"
      fill={fill}
      stroke={border}
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="50" r="10" fill={border} />
    <path d="M47 50C47 48 53 48 53 50" stroke={fill} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SpiralArrow = ({ className }) => (
  <svg
    className={className}
    width="80"
    height="60"
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 10 C 25 -5, 55 5, 50 25 C 45 40, 20 40, 35 20 C 40 15, 60 25, 65 35"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      className="svg-draw-path"
    />
    <path
      d="M55 35 L66 37 L63 26"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UnderlineDoodle = () => (
  <svg
    className="portfolio-header-underline"
    viewBox="0 0 300 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 15C50 10 150 5 295 12"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

const LightbulbIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const ArrowUpRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const CrossIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const DiplomaIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
    <path d="M6 6h10" />
    <path d="M6 10h10" />
    <path d="M13 22l3-3 3 3" />
    <path d="M16 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
);

const AboutCard = ({ title, text, activeColor }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className="about-card"
      style={{
        backgroundColor: isClicked ? activeColor : 'var(--bg)',
        transform: isClicked ? 'translate(2px, 2px)' : '',
        boxShadow: isClicked ? '2px 2px 0 var(--border)' : 'var(--shadow-flat)'
      }}
      onClick={() => setIsClicked(!isClicked)}
      title="Click to toggle highlight color!"
    >
      <div className="sketch-corner-line s-top-left"></div>
      <div className="sketch-corner-line s-top-right"></div>
      <div className="sketch-corner-line s-bottom-left"></div>
      <div className="sketch-corner-line s-bottom-right"></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

const EditableMetricCard = ({ id, label, value, color, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempVal, setTempVal] = useState(value);

  useEffect(() => {
    setTempVal(value);
  }, [value]);

  const handleBlur = () => {
    setIsEditing(false);
    onUpdate(id, tempVal);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      onUpdate(id, tempVal);
    }
  };

  return (
    <div className="about-stat-item" style={{ borderLeft: `6px solid ${color}`, cursor: 'pointer' }}>
      {isEditing ? (
        <input
          type="text"
          value={tempVal}
          onChange={(e) => setTempVal(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className="form-input"
          style={{
            fontSize: '22px',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '4px',
            width: '100%',
            fontFamily: 'var(--font-heading)',
            marginBottom: '6px',
            boxSizing: 'border-box',
            border: '2px solid var(--border)',
            borderRadius: '4px',
            backgroundColor: 'var(--bg)',
            color: 'var(--text)'
          }}
        />
      ) : (
        <div
          className="about-stat-number"
          onClick={() => setIsEditing(true)}
          title="Click to edit value!"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
        >
          {value} <span style={{ fontSize: '12px', opacity: 0.5 }}>✏️</span>
        </div>
      )}
      <div className="about-stat-label">{label}</div>
    </div>
  );
};

const SkillIcon = ({ name, size = 20 }) => {
  if (name === 'engineering') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    );
  }
  if (name === 'backend') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    );
  }
  if (name === 'frontend') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }
  if (name === 'database') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    );
  }
  if (name === 'workflow') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 15V9a4 4 0 0 0-4-4H9" />
        <line x1="6" y1="9" x2="6" y2="15" />
      </svg>
    );
  }
  if (name === 'learning') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5Z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    );
  }
  return null;
};

const renderColorfulTerminalText = (text) => {
  if (!text) return null;
  const lines = text.split('\n');
  return lines.map((line, lIdx) => {
    // If it's a separator line
    if (line.startsWith('---') || line.startsWith('===')) {
      return <div key={lIdx} style={{ color: '#6272a4', userSelect: 'none' }}>{line}</div>;
    }

    // Highlight file names or main actions
    if (line.startsWith('File:') || line.startsWith('Running') || line.startsWith('On branch') || line.startsWith('Project') || line.startsWith('Certificate:') || line.startsWith('Professional Experience') || line.startsWith('Software Engineering') || line.startsWith('Shobhit\'s Achievements') || line.startsWith('Shobhit\'s Software')) {
      return <div key={lIdx} style={{ color: '#f1fa8c', fontWeight: 'bold' }}>{line}</div>;
    }

    // Highlight git status modified lines
    if (line.includes('modified:')) {
      const parts = line.split('modified:');
      const prefix = parts[0];
      const filePath = parts[1];
      return (
        <div key={lIdx}>
          <span>{prefix}</span>
          <span style={{ color: '#ff5555', fontWeight: 'bold' }}>modified: </span>
          <span style={{ color: '#50fa7b' }}>{filePath}</span>
        </div>
      );
    }

    // Highlight progress bar lines
    if (line.includes('[') && line.includes(']') && line.includes('█')) {
      const parts = line.split('[');
      const label = parts[0];
      const progressAndValue = parts[1].split(']');
      const progressBar = progressAndValue[0];
      const val = progressAndValue[1];
      return (
        <div key={lIdx} style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', alignItems: 'center' }}>
          <span style={{ color: '#8be9fd', minWidth: '130px', display: 'inline-block' }}>{label}</span>
          <span style={{ color: '#6272a4' }}>[</span>
          <span style={{ color: '#ff79c6' }}>{progressBar}</span>
          <span style={{ color: '#6272a4' }}>]</span>
          <span style={{ color: '#50fa7b', fontWeight: 'bold' }}>{val}</span>
        </div>
      );
    }

    // Highlight list indexes like "1. ", "2. "
    if (/^\s*\d+\.\s/.test(line)) {
      const trimmed = line.trim();
      const dotIndex = line.indexOf('.');
      const indexNum = line.substring(0, dotIndex + 1);
      const rest = line.substring(dotIndex + 1);
      return (
        <div key={lIdx} style={{ textAlign: 'left' }}>
          <span style={{ color: '#50fa7b', fontWeight: 'bold' }}>{indexNum}</span>
          <span style={{ color: '#f8f8f2' }}>{rest}</span>
        </div>
      );
    }

    // Highlight key-value pairs with colon divider
    if (line.includes(': ') && !line.includes('http://') && !line.includes('https://')) {
      const parts = line.split(': ');
      const key = parts[0];
      const val = parts.slice(1).join(': ');
      return (
        <div key={lIdx}>
          <span style={{ color: '#bd93f9', fontWeight: 'bold' }}>{key}: </span>
          <span style={{ color: '#f8f8f2' }}>{val}</span>
        </div>
      );
    }

    // Default fallback
    return <div key={lIdx} style={{ color: '#f8f8f2' }}>{line}</div>;
  });
};

const NotFoundPage = ({
  navigateToHome,
  navigateToTerminal,
  navigateAndScroll,
  isDarkMode,
  setIsDarkMode,
  setIsMessageDrawerOpen
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="not-found-container">
      <header className="site-header">
        <div className="container nav-container">
          <nav className={`nav-box ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="nav-main-row">
              <div className="logo-box" onClick={navigateToHome} style={{ cursor: 'pointer' }}>
                <span>SHOBHIT KUMAR</span>
              </div>

              {/* Desktop Nav Items */}
              <ul className="nav-items desktop-only">
                <li>
                  <a className="nav-link" onClick={() => navigateAndScroll('about-section')}>
                    About
                  </a>
                </li>
                <li>
                  <a className="nav-link" onClick={() => navigateAndScroll('skills-section')}>
                    Skills
                  </a>
                </li>
                <li>
                  <a className="nav-link" onClick={() => navigateAndScroll('portfolio-section')}>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="nav-link" onClick={() => navigateAndScroll('experience-section')}>
                    Experience
                  </a>
                </li>
                <li>
                  <a className="nav-link" onClick={() => navigateAndScroll('certificates-section')}>
                    Certificates
                  </a>
                </li>
                <li>
                  <a className="nav-link" onClick={() => navigateAndScroll('terminal-section')}>
                    Terminal
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigateToHome();
                      setTimeout(() => setIsMessageDrawerOpen(true), 200);
                    }}
                  >
                    Hire Me
                  </a>
                </li>
              </ul>

              <div className="nav-actions">
                <button
                  className="theme-toggle-btn"
                  onClick={() => setIsDarkMode(prev => !prev)}
                  title="Toggle Theme"
                  aria-label="Toggle Theme"
                >
                  {isDarkMode ? '☀' : '☾'}
                </button>

                {/* Mobile Hamburger Trigger */}
                <button
                  className="mobile-menu-btn"
                  onClick={() => setIsMobileMenuOpen(prev => !prev)}
                  title="Toggle Menu"
                  aria-label="Toggle Menu"
                >
                  {isMobileMenuOpen ? '✕' : '☰'}
                </button>
              </div>
            </div>

            {/* Mobile Nav Dropdown */}
            {isMobileMenuOpen && (
              <ul className="nav-items-mobile">
                <li>
                  <a
                    className="nav-link-mobile"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigateAndScroll('about-section');
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link-mobile"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigateAndScroll('skills-section');
                    }}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link-mobile"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigateAndScroll('portfolio-section');
                    }}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link-mobile"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigateAndScroll('experience-section');
                    }}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link-mobile"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigateAndScroll('certificates-section');
                    }}
                  >
                    Certificates
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link-mobile"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigateAndScroll('terminal-section');
                    }}
                  >
                    Terminal
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link-mobile"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigateToHome();
                      setTimeout(() => setIsMessageDrawerOpen(true), 200);
                    }}
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>

      <div className="container" style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px' }}>
        <div className="not-found-card">
          <div className="sketch-corner-line s-top-left"></div>
          <div className="sketch-corner-line s-top-right"></div>
          <div className="sketch-corner-line s-bottom-left"></div>
          <div className="sketch-corner-line s-bottom-right"></div>

          <div className="not-found-badge">
            <span>⚠️</span> ERROR 404
          </div>

          <h1 className="not-found-title">Page Not Found</h1>

          <p className="not-found-desc">
            Oops! The requested URL route does not exist or has been moved. Don't worry, even the best algorithms get lost sometimes!
          </p>

          <div className="not-found-terminal-box">
            <div className="not-found-terminal-header">
              <span className="not-found-dot red"></span>
              <span className="not-found-dot yellow"></span>
              <span className="not-found-dot green"></span>
              <span className="not-found-terminal-title">bash - 404_error.log</span>
            </div>
            <div className="not-found-terminal-body">
              <div><span style={{ color: '#ff5555', fontWeight: 'bold' }}>$ GET {window.location.pathname}</span></div>
              <div style={{ color: '#f1fa8c' }}>HTTP/1.1 404 Not Found</div>
              <div style={{ color: '#6272a4' }}>// Route does not resolve to any active portfolio section</div>
              <div style={{ color: '#50fa7b' }}>Hint: Click below to return to homepage or open terminal console.</div>
            </div>
          </div>

          <div className="not-found-btn-group">
            <button
              className="brutal-btn"
              style={{ backgroundColor: 'var(--yellow)', fontSize: '15px', padding: '12px 24px', margin: 0 }}
              onClick={navigateToHome}
            >
              ← Back to Portfolio Homepage
            </button>
            <button
              className="brutal-btn"
              style={{ backgroundColor: 'var(--blue)', fontSize: '15px', padding: '12px 24px', margin: 0, color: '#08060D' }}
              onClick={navigateToTerminal}
            >
              Open Interactive Console →
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);
  const [isAvatarFlipped, setIsAvatarFlipped] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [activeExperience, setActiveExperience] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isMessageDrawerOpen, setIsMessageDrawerOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('portfolio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTerminal = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    setTimeout(() => {
      document.getElementById('terminal-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const navigateAndScroll = (sectionId) => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const isMobile = window.innerWidth <= 991;
        const headerHeight = isMobile ? 80 : 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 15;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 150);
  };

  // Terminal console states
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'sys', text: 'Welcome to Shobhit\'s developer terminal!' },
    { type: 'sys', text: 'Type a command (or click a preset below) to learn more about my skills.' },
    { type: 'sys', text: 'Available presets: bio | stats | status | clear' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalBodyRef = useRef(null);

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');

  // SDE Portfolio metrics state
  const defaultMetrics = [
    { id: 'users', label: 'Active Users', value: '1800+', color: 'var(--yellow)' },
    { id: 'platforms', label: 'Production Ready Platforms', value: '2', color: 'var(--blue)' },
    { id: 'real_users', label: 'Real Users Using My Product', value: 'Yes', color: 'var(--purple)' },
    { id: 'apps', label: 'Full Stack Apps Built', value: '15+', color: 'var(--pink)' },
    { id: 'apis', label: 'REST APIs Developed', value: '40+', color: 'var(--mint)' },
    { id: 'uis', label: 'Responsive UIs Created', value: '25+', color: 'var(--coral)' }
  ];

  const [metrics, setMetrics] = useState(() => {
    const saved = localStorage.getItem('sde_portfolio_metrics');
    return saved ? JSON.parse(saved) : defaultMetrics;
  });

  const handleMetricUpdate = (id, newValue) => {
    const updated = metrics.map(m => m.id === id ? { ...m, value: newValue } : m);
    setMetrics(updated);
    localStorage.setItem('sde_portfolio_metrics', JSON.stringify(updated));
  };

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);

    // Delay calculation to allow the mobile dropdown menu to collapse first
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const isMobile = window.innerWidth <= 991;
        const headerHeight = isMobile ? 80 : 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 15;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  // Auto-scroll terminal history to bottom
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  // Sync dark theme to body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  // Handle contact form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSendError('');
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address (e.g., name@domain.com)';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      const key = 'f5d18be6-e61b-4703-9534-93a28424243b';
      setFormErrors({});
      setIsSending(true);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: key,
            from_name: '☺ SHOBHIT KUMAR - Portfolio',
            subject: `⚡ New Message from ${formData.name} ⚡`,
            theme: 'bold',
            'PORTFOLIO MESSAGE CARD': `
=========================================
⚡ SENDER INFO:
-----------------------------------------
✍️ Name  : ${formData.name}
✉️ Email : ${formData.email}

💬 INCOMING MESSAGE:
-----------------------------------------
${formData.message}
=========================================
            `.trim()
          })
        });

        const text = await response.text();
        let data = {};
        try {
          data = JSON.parse(text);
        } catch (parseErr) {
          data = { message: text };
        }

        if (response.ok && data.success) {
          setIsSubmitted(true);
        } else {
          setSendError(data.message || 'Web3Forms API returned a submission error. Check key status.');
        }
      } catch (err) {
        console.error(err);
        setSendError('Failed to connect to email server. Check your connection.');
      } finally {
        setIsSending(false);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(false);
  };

  // Real Certificates Data (Arranged in Descending Date Order)
  const certificates = [
    {
      id: 1,
      title: "Virtual Internship - Generative AI",
      issuer: "IBM Mooc",
      date: "Issued Feb 2026",
      verifyId: "D242E29A72A240619B69400CF8B1007B",
      skillsCovered: ["Generative AI", "Prompt Engineering", "LLMs", "AI Applications", "IBM AI"],
      link: "https://courses.ibmmooc.skillsnetwork.site/certificates/d242e29a72a240619b69400cf8b1007b",
      image: "/6.1.png"
    },
    {
      id: 2,
      title: "TCS iON Certified Communication Skills",
      issuer: "TCS iON",
      date: "Issued Sep 2025",
      verifyId: "913006-29130727-1016",
      skillsCovered: ["Communication", "Professional Communication", "Presentation Skills", "Workplace Communication"],
      image: "/6.2.png"
    },
    {
      id: 3,
      title: "JavaScript (Basic)",
      issuer: "HackerRank",
      date: "Issued Jan 2025",
      verifyId: "FAA6A41007D6",
      skillsCovered: ["JavaScript", "ES6+", "Functions", "Arrays", "Problem Solving"],
      link: "https://www.hackerrank.com/certificates/faa6a41007d6",
      image: "/6.3.png"
    },
    {
      id: 4,
      title: "JavaScript Bootcamp",
      issuer: "LetsUpgrade",
      date: "Issued Jan 2025",
      verifyId: "LUEJSJAN125376",
      skillsCovered: ["JavaScript", "DOM Manipulation", "ES6", "Asynchronous JavaScript", "Web Development"],
      link: "https://verify.letsupgrade.in/certificate/LUEJSJAN125376",
      image: "/6.4.png"
    },
    {
      id: 5,
      title: "Blockchain Fundamentals",
      issuer: "101 Blockchains",
      date: "Issued Dec 2024",
      verifyId: "127831867",
      skillsCovered: ["Blockchain", "Smart Contracts", "Decentralization", "Web3", "Distributed Ledger"],
      link: "https://www.credential.net/6ccf34b6-7ba0-4c3e-8a25-6af02bf28eb0",
      image: "/6.5.png"
    },
    {
      id: 6,
      title: "INGENUITY 2K24 - Tech Startup Innovation (3rd Place)",
      issuer: "School of Management Sciences (SMS), Lucknow",
      date: "Issued Oct 2024",
      verifyId: "INGENUITY-2K24",
      skillsCovered: ["Startup Innovation", "Entrepreneurship", "Problem Solving", "Pitch Presentation", "Team Collaboration"],
      image: "/6.6.jpeg"
    },
    {
      id: 7,
      title: "IoT Apps with Watson, Swift, and Node-RED",
      issuer: "IBM Cognitive Class",
      date: "Issued Oct 2024",
      verifyId: "22A847475B8F42539062F33BEF84212E",
      skillsCovered: ["Internet of Things", "IBM Watson", "Node-RED", "Swift", "IoT Development"],
      link: "https://courses.cognitiveclass.ai/certificates/22a847475b8f42539062f33bef84212e",
      image: "/6.7.png"
    },
    {
      id: 8,
      title: "Data Visualization with Python",
      issuer: "IBM Cognitive Class",
      date: "Issued May 2024",
      verifyId: "1A6ADBDB368634762A9B3F71219C5C16F",
      skillsCovered: ["Python", "Data Visualization", "Matplotlib", "Data Analysis", "Charts & Graphs"],
      link: "https://courses.cognitiveclass.ai/certificates/1a6adbd368634762a9b3f71219c5c16f",
      image: "/6.8.png"
    }
  ];

  // Real Projects Data
  const projects = [
    {
      id: 1,
      title: "The Victory Key (TVK) - Online Learning & Examination Platform",
      category: "Full Stack EdTech Platform",
      tags: ["Next.js", "Firebase", "Firestore", "Authentication", "Admin Dashboard", "Online Exams", "Premium Content", "Cloudinary"],
      images: ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png', '/7.png', '/8.png',],
      accentClass: 'hover-blue',
      description: "A scalable EdTech platform built for competitive exam aspirants, offering online mock tests, premium study materials, performance tracking, and role-based administration. Features secure authentication, real-time exam management, result analytics, premium content access, and an optimized Firebase architecture for fast, cost-efficient performance.",
      tech: ["Next.js", "React", "Firebase Authentication", "Firestore", "Cloudinary", "Tailwind CSS", "JavaScript", "Vercel"],
      link: 'https://thevictorykey.com/',
      githubLink: 'https://github.com/kumarshobhit-1/tvk'
    },
    {
      id: 2,
      title: 'Vetwoplay - Media Sharing Platform',
      category: 'Full-Stack Creator Platform',
      tags: 'React - Express - MongoDB - Cloudinary',
      images: ['/1.1.png', '/1.2.png', '/1.3.png', '/1.4.png', '/1.5.png', '/1.6.png',],
      accentClass: 'hover-rose',
      description: 'A creator-first media sharing platform that combines YouTube-style video hosting with tweet-style community posts, playlists, likes, authentication, and a studio dashboard for content management.',
      tech: ['React', 'Vite', 'Bootstrap', "JavaScript", 'Express.js', 'MongoDB', 'Mongoose', 'Cloudinary', 'JWT', 'Axios'],
      link: 'https://vetwoplay.vercel.app/',
      githubLink: 'https://github.com/kumarshobhit-1/vetwoplay_frontend'
    },
    {
      id: 3,
      title: 'Wanderlust - Full-Stack Vacation Rental Platform',
      category: 'Full Stack MERN Application',
      tags: ["MERN Stack", "Node.js", "Express.js", "MongoDB", "Passport.js", "Cloudinary", "Mapbox", "EJS", "REST API"],
      images: ['/Project-1-1.png', '/Project-1-2.png', '/Project-1-3.png', '/Project-1-4.png', '/Project-1-5.png', '/Project-1-6.png', '/Project-1-7.png', '/Project-1-8.png'],
      accentClass: 'hover-purple',
      description: "A production-ready vacation rental platform inspired by Airbnb, enabling users to explore, create, edit, and manage property listings. Features secure authentication, interactive maps, image uploads, reviews, and responsive UI, delivering a seamless booking and property management experience.",
      tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Passport.js", "HTML5", "JavaScript", "Cloudinary", "Mapbox", "Bootstrap"],
      link: 'https://wanderluststay.vercel.app/listings',
      githubLink: 'https://github.com/kumarshobhit-1/WanderLust-Major-Project'
    },
    {
      id: 4,
      title: "EpicMint - Web3 Literary NFT Platform",
      category: "Full Stack Web3 Application",
      tags: ["Next.js", "TypeScript", "Firebase", "Web3", "NFT", "MetaMask", "Ethers.js", "Gemini AI"],
      images: ['/2.1.png', '/2.2.png', '/2.3.png', '/2.4.png', '/2.5.png',],
      accentClass: "hover-cyan",
      description: "A decentralized platform where writers can publish AI-assisted stories as NFTs, enabling secure ownership, wallet authentication, NFT minting, and community engagement through a modern Web3-powered user experience.",
      tech: ["Next.js", "React", "JavaScript", "Firebase", "Genkit (Gemini AI)", "Ethers.js", "MetaMask", "Tailwind CSS"],
      link: "https://epicmintminor.vercel.app/",
      githubLink: 'https://github.com/kumarshobhit-1/epicmint'
    },
    {
      id: 5,
      title: 'Home Automation - Decentralized Smart Home Relayer System',
      category: 'IoT security platform',
      tags: 'React dashboard - MQTT relayer - Solidity audit trail',
      images: ['/3.1.png', '/3.1.png', '/3.1.png',],
      accentClass: 'hover-cyan',
      description: 'A hybrid Web2/Web3 smart-home dashboard that sends instant MQTT device commands while recording immutable access logs on Ethereum, with live status monitoring, offline handling, and Wokwi-based hardware simulation.',
      tech: ['React', 'Node.js/Express', 'Solidity', 'MQTT', 'Ethers.js', 'Wokwi/ESP32'],
      link: 'https://homeiotsecure.vercel.app/',
      githubLink: 'https://github.com/kumarshobhit-1/home_frontend'
    },
  ];

  const executeTerminalCommand = (cmdText) => {
    const trimmedCmd = cmdText.trim();
    if (!trimmedCmd) return;

    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    const cleanCmd = trimmedCmd.toLowerCase();
    const newHistory = [...terminalHistory, { type: 'cmd', text: trimmedCmd }];

    if (cleanCmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    }

    let output = '';
    const isGreeting = /^(h+(i+|ey+|ello+|ola+)|yo+|sup|namaste|greetings)/i.test(cleanCmd) || cleanCmd.startsWith('hi ') || cleanCmd.startsWith('hello ') || cleanCmd.startsWith('hey ');
    const isFarewell = /^(b+y+(e+)?|goodbye|see ya|cya|exit|quit|ttyl|tata)/i.test(cleanCmd) || cleanCmd.startsWith('bye ') || cleanCmd.startsWith('goodbye ');

    if (isGreeting) {
      output = `Hello there! 👋 Welcome to Shobhit's interactive developer terminal.\n---------------------------------\nI am a Software Development Engineer & Full Stack Developer building scalable applications.\n\nTry typing "bio", "skills", "projects", "experience", or "help" to learn more!`;
    } else if (isFarewell) {
      output = `Goodbye! 👋 Thanks for exploring my terminal console.\n---------------------------------\nFeel free to connect with me on LinkedIn or GitHub. Have a great day ahead! 🚀`;
    } else if (cleanCmd === 'bio' || cleanCmd === 'cat bio.md') {
      output = `File: bio.md\n-----------------\nName: Shobhit Kumar\nRole: Software Development Engineer (SDE) | Full Stack Developer\nFocus: Designing production-ready web apps, scalable backend systems, and secure REST APIs with a focus on clean architecture.\nStack: JavaScript (ES6+), React.js, Next.js, Node.js, Express.js, MongoDB, Firebase, MySQL, REST APIs, Git & GitHub, Tailwind CSS, Bootstrap.`;
    } else if (cleanCmd === 'stats' || cleanCmd === 'npm run stats') {
      output = `Running SDE & TVK Production metrics...\n---------------------------------\nActive Users   [████████] 1807\nPremium Users  [██████]   135\nExam Takers    [███████]  800\nSuccess Rate   [█████]    59%\nREST APIs      [████████] 40+\nPerformance    [████████] +35%`;
    } else if (cleanCmd === 'whoami' || cleanCmd === 'about me') {
      output = `shobhit@dev:~$ whoami\n─────────────────────────────\n👤  Shobhit Kumar\n🎓  B.Tech CSE — Graduation: 2026\n📍  Uttar Pradesh, India\n─────────────────────────────\n💼  Role     : Software Development Engineer\n⚡  Stack    : Full Stack | Web3 | IoT\n🛠  Core     : React · Next.js · Node.js · MongoDB\n               Firebase · Solidity · Express · REST APIs\n🚀  Projects : 5 Production Apps | 1800+ Real Users\n📄  Resume   : kumarshobhit.tech\n📧  Email    : maishobhitkumar@gmail.com\n─────────────────────────────\nAvailable for Internship & Full-Time roles!`;
    } else if (cleanCmd === 'projects' || cleanCmd === 'ls') {
      const listStr = projects.map((p, idx) => `${idx + 1}. ${p.title} [${p.category}]`).join('\n');
      output = `Shobhit's Software Products & Projects:\n---------------------------------\n${listStr}\n\nWhich project would you like to know more about?\nType "project 1", "project 2", ..., or "project ${projects.length}" to get details!`;
    } else if (cleanCmd.startsWith('project ') || /^[1-9]\d*$/.test(cleanCmd) || projects.some(p => p.title.toLowerCase().includes(cleanCmd))) {
      let targetProj = null;
      if (cleanCmd.startsWith('project ')) {
        const numOrName = cleanCmd.replace('project ', '').trim();
        const num = parseInt(numOrName, 10);
        targetProj = projects.find(p => p.id === num) || projects.find(p => p.title.toLowerCase().includes(numOrName));
      } else if (/^[1-9]\d*$/.test(cleanCmd)) {
        const num = parseInt(cleanCmd, 10);
        targetProj = projects.find(p => p.id === num);
      } else {
        targetProj = projects.find(p => p.title.toLowerCase().includes(cleanCmd));
      }

      if (targetProj) {
        const techStr = Array.isArray(targetProj.tech) ? targetProj.tech.join(', ') : targetProj.tech;
        output = `Project ${targetProj.id}: ${targetProj.title}\nCategory: ${targetProj.category}\nDescription: ${targetProj.description}\nTech Stack: ${techStr}\nLive Demo: ${targetProj.link}\nGitHub Repo: ${targetProj.githubLink || 'https://github.com/kumarshobhit-1'}`;
      } else {
        output = `Project not found. Type "projects" to see available projects (1 to ${projects.length}).`;
      }
    } else if (cleanCmd === 'skills' || cleanCmd === 'skill') {
      output = `Software Engineering Capabilities:\n---------------------------------\n• Software Engineering: Clean Code, OOP, System Architecture, Debugging\n• Backend Engineering: Node/Express, REST APIs, Authentication, API Security\n• Frontend Engineering: Responsive UI, React/Next, State Management, A11y\n• Database & Cloud: MongoDB, Firebase, MySQL, Cloud Deployments, Query Optimization\n• Workflows: Version Control Git/GitHub, Agile, Version Control, API Testing`;
    } else if (cleanCmd === 'experience' || cleanCmd === 'exp') {
      output = `Professional Experience details:\n---------------------------------\nRole: Full Stack Developer | Software Development Engineer\nOrganization: The Victory Key (TVK) [thevictorykey.com]\nDuration: November 2025 – Present (🟢 Currently Maintaining)\nType: Self-Initiated Product | SaaS Platform\n\nKey Responsibilities:\n• Building and maintaining scalable full-stack applications.\n• Developing secure REST APIs using Node.js and Express.js.\n• Creating responsive user interfaces using React.js and Next.js.\n• Designing and optimizing MongoDB and Firebase databases.\n• Implementing authentication and authorization.\n• Improving application performance.\n• Fixing production issues and bugs.\n\nCore Tech Stack:\nJavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, Firebase, MySQL, REST APIs, Git & GitHub, Tailwind CSS, Bootstrap.`;
    } else if (cleanCmd === 'certificates' || cleanCmd === 'certificate' || cleanCmd === 'certs') {
      const listStr = certificates.map((c, idx) => `${idx + 1}. ${c.title} [${c.issuer} - ${c.date}]`).join('\n');
      output = `Shobhit's Achievements & Certificates:\n---------------------------------\n${listStr}\n\nType "verify 1", "verify 2", ..., or "verify ${certificates.length}" to get details & verification links!`;
    } else if (cleanCmd.startsWith('verify ') || (cleanCmd.startsWith('cert ') && /^\d+$/.test(cleanCmd.replace('cert ', '').trim()))) {
      const numStr = cleanCmd.replace('verify ', '').replace('cert ', '').trim();
      const num = parseInt(numStr, 10);
      const targetCert = certificates[num - 1] || certificates.find(c => c.id === num);
      if (targetCert) {
        const skillsStr = Array.isArray(targetCert.skillsCovered) ? targetCert.skillsCovered.join(', ') : targetCert.skillsCovered;
        const linkInfo = targetCert.link && targetCert.link !== '#' ? `Verification Link: ${targetCert.link}` : `Verification Link: No online link provided`;
        output = `Certificate ${num}: ${targetCert.title}\nIssuer: ${targetCert.issuer} (${targetCert.date})\nVerification ID: ${targetCert.verifyId || 'N/A'}\nCore Skills: ${skillsStr}\n${linkInfo}`;
      } else {
        output = `Certificate not found. Type "certificates" to see available certificates (1 to ${certificates.length}).`;
      }
    } else if (cleanCmd === 'help') {
      output = `Available Commands:\n- hi / hello / hey / sup : Send a greeting to Shobhit\n- bye / goodbye / cya   : Say farewell\n- bio / cat bio.md       : Show Shobhit's bio\n- stats / npm run stats   : Renders skill mastery stats\n- whoami / about me      : Developer profile & contact info\n- projects               : Lists all portfolio projects\n- project <num>          : Shows details of specific project (e.g. "project 1")\n- skills / skill          : Lists all skill categories & badges\n- experience / exp       : Shows professional SDE experience details\n- certificates / certs   : Lists certifications & verify guides\n- verify <num>           : Shows verification info for specific credential\n- clear                  : Clear terminal history\n- help                   : Prints this help message`;
    } else {
      output = `Command not found: "${trimmedCmd}". Type "help" or click one of the preset buttons below to see available inputs.`;
    }

    setTerminalHistory([...newHistory, { type: 'sys', text: output }]);
    setTerminalInput('');
  };

  const handleTerminalKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;

      let newIndex = historyIndex;
      if (historyIndex === -1) {
        newIndex = commandHistory.length - 1;
      } else if (historyIndex > 0) {
        newIndex = historyIndex - 1;
      }

      setHistoryIndex(newIndex);
      setTerminalInput(commandHistory[newIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;

      let newIndex = historyIndex + 1;
      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setTerminalInput('');
      } else {
        setHistoryIndex(newIndex);
        setTerminalInput(commandHistory[newIndex]);
      }
    }
  };

  // Mock Skills Data
  const skills = [
    {
      category: 'Software Engineering',
      class: 'engineering',
      items: [
        'Clean Code',
        'Problem Solving',
        'Object-Oriented Programming',
        'Software Architecture',
        'Scalable Systems',
        'Debugging'
      ]
    },
    {
      category: 'Backend Engineering',
      class: 'backend',
      items: [
        'REST API Development',
        'Authentication & Authorization',
        'Database Design',
        'API Security',
        'Performance Optimization',
        'Server-side Development'
      ]
    },
    {
      category: 'Frontend Engineering',
      class: 'frontend',
      items: [
        'Responsive UI',
        'Component Architecture',
        'State Management',
        'Performance Optimization',
        'Accessibility',
        'Modern JavaScript'
      ]
    },
    {
      category: 'Database & Cloud',
      class: 'database',
      items: [
        'MongoDB',
        'MySQL',
        'Firebase',
        'Database Optimization',
        'Cloud Deployment',
        'Data Modeling'
      ]
    },
    {
      category: 'Development Workflow',
      class: 'workflow',
      items: [
        'Git & GitHub',
        'Agile Development',
        'Version Control',
        'API Testing',
        'CI/CD Basics',
        'Team Collaboration'
      ]
    },
    {
      category: 'Currently Learning',
      class: 'learning',
      items: [
        'Docker',
        'AWS',
        'Redis',
        'System Design',
        'Kubernetes',
        'AI Integration'
      ]
    }
  ];

  // Mock Experience Data
  const experiences = [
    {
      id: 1,
      role: 'Full Stack Developer | Software Development Engineer',
      company: 'The Victory Key (TVK)',
      badge: 'Software Engineer',
      duration: 'November 2025 – Present',
      status: '🟢 Currently Maintaining',
      type: 'Production Platform | SaaS System',
      linkText: 'thevictorykey.com',
      linkUrl: 'https://thevictorykey.com',
      description: 'Working as a Full Stack Developer and Software Development Engineer for The Victory Key (TVK), an educational platform serving real users. Responsible for developing, maintaining, optimizing, and continuously improving the platform.',
      responsibilities: [
        'Building and maintaining scalable full-stack applications.',
        'Developing secure REST APIs using Node.js and Express.js.',
        'Creating responsive user interfaces using React.js and Next.js.',
        'Designing and optimizing MongoDB and Firebase databases.',
        'Implementing authentication and authorization.',
        'Improving application performance.',
        'Fixing production issues and bugs.',
        'Deploying new features.',
        'Maintaining production systems.',
        'Continuously improving user experience.'
      ],
      skills: [
        'JavaScript',
        'React.js',
        'Next.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Firebase',
        'MySQL',
        'REST APIs',
        'Git & GitHub',
        'Tailwind CSS',
        'Bootstrap'
      ],
      achievements: [
        '1800+ Users',
        'Production Ready Platform',
        'Real Users',
        'Continuous Feature Development',
        'End-to-End Product Ownership'
      ]
    }
  ];

  if (isLoading) {
    return (
      <div className="loader-overlay">
        <div className="loader-container">
          <div className="loader-header">
            <span className="loader-dot l-red"></span>
            <span className="loader-dot l-yellow"></span>
            <span className="loader-dot l-green"></span>
            <span className="loader-title">shobhit@dev:~</span>
          </div>
          <div className="loader-body">
            <div className="loader-text">INITIALIZING PORTFOLIO...</div>
            <div className="loader-bar-outer">
              <div className="loader-bar-inner" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="loader-percentage">{progress}%</div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPath !== '/' && currentPath !== '') {
    return (
      <NotFoundPage
        navigateToHome={navigateToHome}
        navigateToTerminal={navigateToTerminal}
        navigateAndScroll={navigateAndScroll}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        setIsMessageDrawerOpen={setIsMessageDrawerOpen}
      />
    );
  }

  return (
    <div className="app-wrapper">
      {/* Decorative floating stickers in margins */}
      {/* <StarburstSticker className="sticker sticker-interactive" size={75} fill="var(--pink)" style={{ top: '15px', left: '15px', '--rot': '12deg' }} />
      <StarburstSticker className="sticker sticker-interactive" size={85} fill="var(--yellow)" style={{ top: '80%', right: '20px', '--rot': '-15deg' }} />
      <StarburstSticker className="sticker sticker-interactive" size={60} fill="var(--purple)" style={{ top: '45%', left: '12px', '--rot': '35deg' }} /> */}

      {/* Navigation Header */}
      <header className="site-header">
        <div className="container nav-container">
          <nav className={`nav-box ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="nav-main-row">
              <div className="logo-box" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                {/* <StarIcon className="logo-star" size={24} /> */}
                <span>SHOBHIT KUMAR</span>
              </div>

              {/* Desktop Nav Items */}
              <ul className="nav-items desktop-only">
                <li>
                  <a
                    className={`nav-link ${activeNav === 'about' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveNav('about');
                      scrollToSection('about-section');
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link ${activeNav === 'skills' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveNav('skills');
                      scrollToSection('skills-section');
                    }}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link ${activeNav === 'portfolio' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveNav('portfolio');
                      scrollToSection('portfolio-section');
                    }}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link ${activeNav === 'experience' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveNav('experience');
                      scrollToSection('experience-section');
                    }}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link ${activeNav === 'certificates' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveNav('certificates');
                      scrollToSection('certificates-section');
                    }}
                  >
                    Certificates
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link ${activeNav === 'terminal' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveNav('terminal');
                      scrollToSection('terminal-section');
                    }}
                  >
                    Terminal
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link ${activeNav === 'hire' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveNav('hire');
                      setIsMessageDrawerOpen(true);
                    }}
                  >
                    Hire Me
                  </a>
                </li>
              </ul>

              <div className="nav-actions">
                <button
                  className="theme-toggle-btn"
                  onClick={() => setIsDarkMode(prev => !prev)}
                  title="Toggle Theme"
                  aria-label="Toggle Theme"
                >
                  {isDarkMode ? '☀' : '☾'}
                </button>

                {/* Mobile Hamburger Trigger */}
                <button
                  className="mobile-menu-btn"
                  onClick={() => setIsMobileMenuOpen(prev => !prev)}
                  title="Toggle Menu"
                  aria-label="Toggle Menu"
                >
                  {isMobileMenuOpen ? '✕' : '☰'}
                </button>
              </div>
            </div>

            {/* Mobile Nav Dropdown */}
            {isMobileMenuOpen && (
              <ul className="nav-items-mobile">
                <li>
                  <a
                    className={`nav-link-mobile ${activeNav === 'about' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveNav('about');
                      setIsMobileMenuOpen(false);
                      scrollToSection('about-section');
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link-mobile ${activeNav === 'skills' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveNav('skills');
                      setIsMobileMenuOpen(false);
                      scrollToSection('skills-section');
                    }}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link-mobile ${activeNav === 'portfolio' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveNav('portfolio');
                      setIsMobileMenuOpen(false);
                      scrollToSection('portfolio-section');
                    }}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link-mobile ${activeNav === 'experience' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveNav('experience');
                      setIsMobileMenuOpen(false);
                      scrollToSection('experience-section');
                    }}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link-mobile ${activeNav === 'certificates' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveNav('certificates');
                      setIsMobileMenuOpen(false);
                      scrollToSection('certificates-section');
                    }}
                  >
                    Certificates
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link-mobile ${activeNav === 'terminal' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveNav('terminal');
                      setIsMobileMenuOpen(false);
                      scrollToSection('terminal-section');
                    }}
                  >
                    Terminal
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link-mobile ${activeNav === 'hire' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveNav('hire');
                      setIsMobileMenuOpen(false);
                      setIsMessageDrawerOpen(true);
                    }}
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" style={{ borderBottom: 'var(--border-width) solid var(--border)', paddingBottom: '60px' }}>
        <div className="container hero-grid">
          <div className="hero-content">
            {/* Sub-heading tag */}
            <div className="hero-subheading">
              Software Development Engineer | Full Stack Developer
            </div>

            {/* Main Title Heading */}
            <h1 className="dev" style={{ fontSize: '48px', lineHeight: '1.2', marginBottom: '20px', textAlign: 'left' }}>
              Building <span className="highlight-container">Scalable Software<span className="highlight-bg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.25)' }}></span></span> for <span className="highlight-container">Real Users.<span className="highlight-bg" style={{ backgroundColor: 'rgba(244, 114, 182, 0.25)' }}></span></span>
            </h1>

            {/* Short Description */}
            <p className="hero-desc" style={{ fontSize: '18px', lineHeight: '1.6', color: 'var(--text)', opacity: 0.9, marginBottom: '30px', maxWidth: '600px', textAlign: 'left' }}>
              I design, develop, and maintain production-ready web applications, scalable backend systems, and secure REST APIs with a focus on clean architecture, performance optimization, and exceptional user experience.
            </p>



            {/* Horizontal Achievement Badges Row */}
            {/* <div className="hero-badges-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'flex-start' }}>
              {[
                { label: '🚀 1807+ Active Users', color: 'var(--blue)' },
                { label: '⚙️ Production Ready Platform', color: 'var(--purple)' },
                { label: '💻 Full Stack Developer', color: 'var(--pink)' },
                { label: '📍 Open for Internship & Full-Time Opportunities', color: 'var(--yellow)' }
              ].map((badge, bIdx) => (
                <span
                  key={bIdx}
                  className="tech-tag"
                  style={{
                    backgroundColor: badge.color,
                    border: '2px solid var(--border)',
                    borderRadius: '4px',
                    padding: '6px 12px',
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#08060D',
                    boxShadow: '2px 2px 0 var(--border)'
                  }}
                >
                  {badge.label}
                </span>
              ))}
            </div> */}

          </div>

          {/* Interactive Smiley Box */}
          <div className="hero-avatar-area">
            {/* Curved hand-drawn arrow pointing to frame */}
            <div className="sticker" style={{ top: '-45px', left: '150px', transform: 'rotate(-20deg)', color: 'var(--text)' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold', fontSize: '14px', display: 'block', marginBottom: '4px' }}>
                ☺ SHOBHIT KUMAR
              </span>
              <SpiralArrow />
            </div>

            <div className="avatar-container" style={{ position: 'relative' }}>
              <div
                className={`avatar-card ${isAvatarFlipped ? 'flipped' : ''}`}
                onClick={() => setIsAvatarFlipped(prev => !prev)}
                title="Click to flip between sketch and photo!"
              >
                {/* Front Face: Hand-drawn Smiley sketch */}
                <div className="avatar-face avatar-front">
                  <div className="sketch-box">
                    <div className="polaroid-sketch-lines"></div>
                    <div className="sketch-corner-line s-top-left"></div>
                    <div className="sketch-corner-line s-top-right"></div>
                    <div className="sketch-corner-line s-bottom-left"></div>
                    <div className="sketch-corner-line s-bottom-right"></div>

                    <svg className="smiley-svg" viewBox="0 0 100 100">
                      <circle cx="35" cy="40" r="6" fill="var(--text)" />
                      <circle cx="65" cy="40" r="6" fill="var(--text)" />
                      <path d="M30 65 Q50 85 70 65" stroke="var(--text)" strokeWidth="6" strokeLinecap="round" fill="none" />
                    </svg>
                  </div>
                </div>

                {/* Back Face: Real User Photo */}
                <div className="avatar-face avatar-back">
                  <div className="polaroid-sketch-lines"></div>
                  <img
                    src="/photo.png"
                    alt="Shobhit Kumar Photo"
                    className="real-photo-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/image.jpeg";
                    }}
                  />
                </div>
              </div>

              {/* Overlapping Badge */}
              <div className="avatar-badge" onClick={() => setIsAvatarFlipped(prev => !prev)}>
                <LightbulbIcon size={22} />
              </div>

              {/* Sticky Note near Smiley Card */}
              {/* <div
                className="sticker-interactive"
                style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-40px',
                  backgroundColor: 'var(--yellow)',
                  border: '2.5px solid var(--border)',
                  padding: '12px 16px',
                  transform: 'rotate(-5deg)',
                  boxShadow: '4px 4px 0 var(--border)',
                  maxWidth: '180px',
                  borderRadius: '2px',
                  zIndex: 10,
                  textAlign: 'left'
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', color: 'rgba(8, 6, 13, 0.6)', marginBottom: '4px', letterSpacing: '0.05em' }}>
                  📌 Currently Building
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: '800', color: '#08060D', marginBottom: '6px', lineHeight: '1.2' }}>
                  The Victory Key (TVK)
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: 'bold', fontFamily: 'var(--font-mono)', color: '#08060D' }}>
                  <span>🟢</span> Production Platform
                </div>
              </div> */}

            </div>
          </div>
        </div>

        {/* Subtle animated scroll indicator below the Hero section */}
        <div
          className="hero-scroll-indicator"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '50px',
            cursor: 'pointer',
            fontFamily: 'var(--font-heading)',
            fontWeight: 'bold',
            fontSize: '14px',
            color: 'var(--text)',
            gap: '4px'
          }}
          onClick={() => scrollToSection('about-section')}
        >
          <span style={{ fontSize: '20px' }}>↓</span>
          <span>Scroll to Explore</span>
        </div>
      </section>

      {/* Infinite Scrolling Marquee Banner */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>
            // SOFTWARE DEVELOPMENT ENGINEER // BACKEND ARCHITECTURES // SCALABLE SYSTEMS // REST API INTEGRATION // NODE.JS & EXPRESS // REACT.JS & NEXT.JS // MYSQL & MONGODB // FORWARD-THINKING SDE // SOFTWARE DEVELOPMENT ENGINEER // BACKEND ARCHITECTURES // SCALABLE SYSTEMS // REST API INTEGRATION // NODE.JS & EXPRESS // REACT.JS & NEXT.JS // MYSQL & MONGODB // FORWARD-THINKING SDE //
          </span>
        </div>
      </div>

      {/* About Me Section */}
      <section id="about-section" className="about-section">
        <div className="container about-container">

          {/* 1. Header */}
          <div className="portfolio-header" style={{ marginBottom: '40px' }}>
            <h2>
              About Me
              <UnderlineDoodle />
            </h2>
            <div className="sticker" style={{ top: '-15px', right: '35%', transform: 'rotate(15deg)' }}>
              <StarburstSticker size={50} fill="var(--yellow)" />
            </div>
          </div>

          {/* 2. Top Profile Row (Intro, Quote, Facts) */}
          <div className="about-profile-grid">
            <div className="about-intro-col">
              {/* Introduction Paragraph */}
              <div className="about-intro-block">
                <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '24px', fontWeight: '500' }}>
                  Hello! My name is <span className="highlight-container"><span style={{ fontWeight: 'bold' }}>Shobhit Kumar</span><span className="highlight-bg" style={{ backgroundColor: 'rgba(74, 222, 128, 0.3)' }}></span></span>.
                  I am a <span style={{ fontWeight: 'bold' }}>Software Development Engineer (SDE) | Full Stack Developer</span> passionate about Software Engineering, Full Stack Development, Backend Engineering, and building scalable products.
                  Currently pursuing my B.Tech in Computer Science & Engineering, I focus on applying software development best practices, database design, clean architecture, and system thinking to create robust, performant, and production-ready applications.
                </p>
              </div>

              {/* 3. Highlighted Quote */}
              <div className="about-quote-block">
                <blockquote>
                  "I focus on clean architecture, performance optimization, and robust REST API development to build scalable systems that solve real-world problems."
                </blockquote>
              </div>
            </div>

            {/* 8. Quick Facts */}
            <div className="about-facts-card">
              <div className="sketch-corner-line s-top-left"></div>
              <div className="sketch-corner-line s-top-right"></div>
              <div className="sketch-corner-line s-bottom-left"></div>
              <div className="sketch-corner-line s-bottom-right"></div>

              <h3>Quick Facts //</h3>
              <ul className="about-facts-list">
                <li><span>📍 Location:</span> <strong>India</strong></li>
                <li><span>🎓 Degree:</span> <strong>B.Tech in CSE</strong></li>
                <li><span>⚡ Exp Level:</span> <strong>SDE | Full Stack Developer</strong></li>
                <li><span>💼 Freelance:</span> <strong>Open for projects</strong></li>
                <li><span>🚀 Internship:</span> <strong>Open to offers</strong></li>
                <li><span>🔧 Focus:</span> <strong>Scalable Systems & APIs</strong></li>
                <li><span>🤝 Collaboration:</span> <strong>Available</strong></li>
              </ul>
            </div>
          </div>

          {/* 4, 5, 6, 7. Interactive Cards Grid */}
          <div className="about-cards-grid">
            <AboutCard
              title="Who I Am //"
              text="I am a computer science student and software engineer based in India. I apply system thinking and engineering best practices to solve complex, real-world problems. I enjoy diving deep into system architecture, design patterns, and performance metrics."
              activeColor="var(--blue)"
            />
            <AboutCard
              title="What I Do //"
              text="I design scalable backend architectures, build performant REST APIs, and implement responsive frontend user interfaces. I bridge the gap between design and engineering to build clean, maintainable codebases."
              activeColor="var(--purple)"
            />
            <AboutCard
              title="Currently Learning //"
              text="Deepening my knowledge of distributed systems, AWS deployment pipelines, Docker containerization, Redis caching layers, and advanced database optimization techniques."
              activeColor="var(--pink)"
            />
            <AboutCard
              title="Career Goal //"
              text="To become a Software Development Engineer building large-scale products used by millions of users while continuously learning new technologies."
              activeColor="var(--yellow)"
            />
            <AboutCard
              title="What I'm Building //"
              text="I focus on creating software products that people actually use. I enjoy building tools that solve daily friction, optimize data retrieval, and transition prototype ideas into solid, production-ready platforms."
              activeColor="var(--mint)"
            />
            <AboutCard
              title="Engineering Mindset //"
              text="An engineer who operates as a persistent problem solver, continuous learner, team-player, performance-focused builder, and a dedicated advocate for clean code."
              activeColor="var(--coral)"
            />
          </div>

          {/* 12. Call-to-action Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <button
              className="brutal-btn"
              style={{ backgroundColor: 'var(--blue)', fontSize: '18px', padding: '16px 32px' }}
              onClick={() => setIsMessageDrawerOpen(true)}
            >
              Let's Build Something Together
            </button>
          </div>

        </div>
      </section>


      {/* Interactive Terminal Section */}
      <section id="terminal-section" className="terminal-section">
        <div className="container">
          <div className="portfolio-header" style={{ marginBottom: '40px' }}>
            <h2>
              Interactive Console
              <UnderlineDoodle />
            </h2>
            <div className="sticker" style={{ top: '-15px', right: '35%', transform: 'rotate(15deg)' }}>
              <StarburstSticker size={50} fill="var(--mint)" />
            </div>
          </div>

          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot t-red"></div>
                <div className="terminal-dot t-yellow"></div>
                <div className="terminal-dot t-green"></div>
              </div>
              <div className="terminal-title">shobhit@creative-dev:~</div>
              <div style={{ width: '48px' }}></div> {/* Spacer */}
            </div>

            <div className="terminal-body" ref={terminalBodyRef}>
              {terminalHistory.map((line, idx) => (
                <div key={idx} className="terminal-line">
                  {line.type === 'cmd' ? (
                    <span className="terminal-cmd-input">
                      <span className="terminal-prompt-prefix">shobhit@dev:~$</span>
                      {line.text}
                    </span>
                  ) : (
                    <div className="terminal-system-output" style={{ textAlign: 'left', lineHeight: '1.6' }}>
                      {renderColorfulTerminalText(line.text)}
                    </div>
                  )}
                </div>
              ))}

              <div className="terminal-line" style={{ display: 'flex', alignItems: 'center' }}>
                <span className="terminal-prompt-prefix">shobhit@dev:~$</span>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    executeTerminalCommand(terminalInput);
                  }}
                  style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
                >
                  <input
                    type="text"
                    className="terminal-user-input-field"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyDown={handleTerminalKeyDown}
                    placeholder='Type "help" or click a preset...'
                    autoComplete="off"
                    autoCapitalize="off"
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="terminal-helper-buttons">
            <button className="terminal-preset-btn" onClick={() => executeTerminalCommand('cat bio.md')}>
              cat bio.md
            </button>
            <button className="terminal-preset-btn" onClick={() => executeTerminalCommand('npm run stats')}>
              npm run stats
            </button>
            <button className="terminal-preset-btn" onClick={() => executeTerminalCommand('whoami')}>
              whoami
            </button>
            <button className="terminal-preset-btn" onClick={() => executeTerminalCommand('help')}>
              help
            </button>
            <button className="terminal-preset-btn" onClick={() => executeTerminalCommand('clear')} style={{ backgroundColor: 'var(--pink)' }}>
              clear
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="skills-section">
        <div className="container">
          <div className="portfolio-header" style={{ marginBottom: '40px' }}>
            <h2>
              Software Engineering Skills
              <UnderlineDoodle />
            </h2>
            <div className="sticker" style={{ top: '-15px', right: '35%', transform: 'rotate(15deg)' }}>
              <StarburstSticker size={50} fill="var(--pink)" />
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className={`skill-category-card ${skillGroup.class}`}>
                <div className="skill-card-header">
                  <div className="skill-icon-box">
                    <SkillIcon name={skillGroup.class} />
                  </div>
                  <h3>{skillGroup.category}</h3>
                </div>
                <ul className="skill-capabilities-list">
                  {skillGroup.items.map((item, sIdx) => (
                    <li key={sIdx}>
                      <span className="skill-list-dot">✦</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio-section" className="portfolio-section">
        <div className="container">
          <div className="portfolio-header">
            <h2>
              Featured Projects
              <UnderlineDoodle />
            </h2>
            <div className="sticker" style={{ top: '-15px', right: '35%', transform: 'rotate(15deg)' }}>
              <StarburstSticker size={50} fill="var(--blue)" />
            </div>
          </div>

          <div className="portfolio-grid">
            {projects.map(project => (
              <div
                key={project.id}
                className={`project-card ${project.accentClass}`}
                onClick={() => {
                  setActiveProject(project);
                  setActiveImageIdx(0);
                }}
              >
                <div className="polaroid-sketch-lines"></div>
                <div className="sketch-corner-line s-top-left"></div>
                <div className="sketch-corner-line s-top-right"></div>
                <div className="sketch-corner-line s-bottom-left"></div>
                <div className="sketch-corner-line s-bottom-right"></div>

                <div className="project-image-wrapper">
                  <img
                    src={project.images && project.images.length > 0 ? project.images[0] : "/image.jpeg"}
                    alt={project.title}
                    className="project-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/image.jpeg";
                    }}
                  />
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <h3>{project.title}</h3>
                    <div className="project-tags">{project.tags}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-arrow-btn"
                        style={{ backgroundColor: 'var(--mint)', color: '#08060D' }}
                        aria-label="GitHub Repo"
                        onClick={(e) => e.stopPropagation()}
                        title="GitHub Repository"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                    <button className="project-arrow-btn" aria-label="View Details">
                      <ArrowUpRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies I Work With Section */}
      <section id="tech-section" className="tech-section" style={{ padding: '60px 0', borderTop: 'var(--border-width) solid var(--border)', backgroundColor: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Technologies I Work With
            </h3>
            <div className="about-tech-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {[
                { name: 'JavaScript (ES6+)', color: 'var(--yellow)' },
                { name: 'React.js', color: 'var(--blue)' },
                { name: 'Next.js', color: 'var(--mint)' },
                { name: 'Node.js', color: 'var(--purple)' },
                { name: 'Express.js', color: 'var(--pink)' },
                { name: 'MongoDB', color: 'var(--coral)' },
                { name: 'Firebase', color: 'var(--yellow)' },
                { name: 'MySQL', color: 'var(--blue)' },
                { name: 'REST APIs', color: 'var(--mint)' },
                { name: 'Git & GitHub', color: 'var(--purple)' },
                { name: 'Tailwind CSS', color: 'var(--pink)' },
                { name: 'Bootstrap', color: 'var(--coral)' }
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="about-tech-badge"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience-section" className="experience-section">
        <div className="container">
          <div className="portfolio-header" style={{ marginBottom: '40px' }}>
            <h2>
              Professional Experience
              <UnderlineDoodle />
            </h2>
            <div className="sticker" style={{ top: '-15px', right: '35%', transform: 'rotate(15deg)' }}>
              <StarburstSticker size={50} fill="var(--blue)" />
            </div>
          </div>

          <div className="experiences-list">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="experience-item-card"
                onClick={() => setActiveExperience(exp)}
                style={{ cursor: 'pointer', position: 'relative' }}
                title="Click to view detailed SDE contributions & achievements!"
              >
                <div className="sketch-corner-line s-top-left"></div>
                <div className="sketch-corner-line s-top-right"></div>
                <div className="sketch-corner-line s-bottom-left"></div>
                <div className="sketch-corner-line s-bottom-right"></div>

                <div className="experience-meta-row" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
                  <div style={{ paddingRight: '20px' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      {exp.role}
                    </h3>
                    <div className="experience-company" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', flexWrap: 'wrap' }}>
                      <strong>{exp.company}</strong>
                      {exp.linkUrl && (
                        <a
                          href={exp.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{ color: 'var(--blue)', textDecoration: 'underline', fontSize: '13px', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                        >
                          {exp.linkText}
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </a>
                      )}
                      <span className="experience-badge" style={{ backgroundColor: 'var(--purple)', color: '#08060D', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', border: '1px solid var(--border)', fontWeight: 'bold' }}>
                        {exp.badge}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px', marginRight: '50px' }}>
                    <div className="experience-duration-tag">{exp.duration}</div>
                    <span className="experience-status-badge" style={{ fontSize: '12px', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>{exp.status}</span>
                  </div>
                </div>

                <button className="project-arrow-btn" aria-label="View Details" style={{ position: 'absolute', top: '24px', right: '24px' }}>
                  <ArrowUpRight />
                </button>

                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', padding: '4px 8px', border: '1px solid var(--border)', borderRadius: '4px', backgroundColor: 'var(--mint)', display: 'inline-block', color: '#08060D' }}>
                    {exp.type}
                  </span>
                  <button className="brutal-btn" style={{ fontSize: '12px', padding: '6px 14px', margin: 0, backgroundColor: 'var(--yellow)', fontWeight: 'bold', color: '#08060D' }}>
                    View SDE Contributions →
                  </button>
                </div>
              </div>
            ))}
          </div>



          {/* Timeline inside Experience to show growth journey visually */}
          <div className="about-timeline-section" style={{ marginTop: '60px' }}>
            <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '24px', textAlign: 'center' }}>Developer Journey & Roadmap //</h3>
            <div className="about-timeline-container">
              {[
                { year: '2023', title: 'Started Programming', desc: 'Learned fundamentals of C/C++ and core computer science concepts.', color: 'var(--yellow)' },
                { year: '2024', title: 'Mastered Frontend', desc: 'Dived into HTML, CSS, JavaScript (ES6+), and React.js build frameworks.', color: 'var(--blue)' },
                { year: '2024-2025', title: 'Backend Specialization', desc: 'Learned Node.js, Express.js, MongoDB, and SQL to design server architectures.', color: 'var(--purple)' },
                { year: '2025', title: 'Full Stack Deployment', desc: 'Built and shipped complete full-stack web applications, decentralized clocks, and API hubs.', color: 'var(--pink)' },
                { year: '2026', title: 'SDE Career Goal', desc: 'Focusing on scaling systems using Docker, AWS, Redis caching, and System Design.', color: 'var(--mint)' }
              ].map((item, idx) => (
                <div key={idx} className="about-timeline-item">
                  <div className="about-timeline-marker" style={{ backgroundColor: item.color }}></div>
                  <div className="about-timeline-year">{item.year}</div>
                  <div className="about-timeline-title">{item.title}</div>
                  <div className="about-timeline-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates-section" className="certificates-section">
        <div className="container">
          <div className="portfolio-header">
            <h2>
              Achievements & Certificates
              <UnderlineDoodle />
            </h2>
            <div className="sticker" style={{ top: '-15px', right: '35%', transform: 'rotate(15deg)' }}>
              <StarburstSticker size={50} fill="var(--coral)" />
            </div>
          </div>

          <div className="certificates-grid">
            {certificates.map(cert => (
              <div
                key={cert.id}
                className="certificate-card"
                onClick={() => setActiveCertificate(cert)}
              >
                {cert.image ? (
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: 'var(--radius-sm)',
                      border: 'var(--border-width) solid var(--border)',
                      boxShadow: '3px 3px 0 var(--border)',
                      overflow: 'hidden',
                      flexShrink: 0,
                      backgroundColor: 'var(--bg)'
                    }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.parentElement.style.backgroundColor = 'var(--yellow)';
                        e.target.parentElement.style.display = 'flex';
                        e.target.parentElement.style.alignItems = 'center';
                        e.target.parentElement.style.justifyContent = 'center';
                        e.target.parentElement.innerHTML = '<span style="font-size:24px">🎖</span>';
                      }}
                    />
                  </div>
                ) : (
                  <div className="diploma-icon-box">
                    <DiplomaIcon />
                  </div>
                )}
                <div className="certificate-info">
                  <h3>{cert.title}</h3>
                  <div className="certificate-issuer">{cert.issuer}</div>
                  <div className="certificate-date">{cert.date}</div>
                </div>
                <button className="project-arrow-btn" aria-label="Verify Credential">
                  <ArrowUpRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box Section */}
      <section className="cta-section">
        <div className="container">
          <div
            className="cta-box"
            onMouseEnter={(e) => e.currentTarget.classList.add('active-border')}
            onMouseLeave={(e) => e.currentTarget.classList.remove('active-border')}
          >
            {/* Top overlapping sticker */}
            <StarburstSticker className="sticker sticker-interactive" size={70} fill="var(--coral)" style={{ top: '-35px', right: '40px', '--rot': '-10deg' }} />

            <h2>Let's start designing your project</h2>
            <p>Want to see how to transform your brand into a unique style? Send us a message and we'll reply in 24 hours.</p>

            <button
              className="brutal-btn"
              style={{ backgroundColor: 'var(--blue)' }}
              onClick={() => setIsMessageDrawerOpen(true)}
            >
              Send us message
            </button>
            <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
              {/* Short hand drawn markings */}
              <svg width="40" height="20" viewBox="0 0 40 20" style={{ fill: 'none', stroke: 'var(--text)', strokeWidth: 3 }}>
                <path d="M5 5 L 15 15 M 15 5 L 25 15 M 25 5 L 35 15" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {/* Footer Section */}


      {/* Slide-out Drawer: Message/Contact Form */}
      <div className={`drawer-overlay ${isMessageDrawerOpen ? 'open' : ''}`} onClick={() => setIsMessageDrawerOpen(false)}>
        <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
          <div className="drawer-header">
            <h2>Send a message</h2>
            <button className="drawer-close-btn" onClick={() => setIsMessageDrawerOpen(false)} aria-label="Close drawer">
              <CrossIcon />
            </button>
          </div>

          <div className="drawer-body">
            {!isSubmitted ? (
              <>
                {sendError && (
                  <div style={{ padding: '16px', border: 'var(--border-width) solid var(--border)', borderRadius: 'var(--radius-sm)', backgroundColor: '#ff5f56', color: '#08060D', fontWeight: 'bold', fontSize: '13px', marginBottom: '16px' }}>
                    ⚠️ {sendError}
                  </div>
                )}


                <form className="contact-form-fields" onSubmit={handleContactSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter name"
                      disabled={isSending}
                    />
                    {formErrors.name && <span style={{ color: 'red', fontSize: '12px', fontWeight: 'bold' }}>{formErrors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="name@example.com"
                      disabled={isSending}
                    />
                    {formErrors.email && <span style={{ color: 'red', fontSize: '12px', fontWeight: 'bold' }}>{formErrors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Tell us about your brand/project..."
                      disabled={isSending}
                    />
                    {formErrors.message && <span style={{ color: 'red', fontSize: '12px', fontWeight: 'bold' }}>{formErrors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="brutal-btn"
                    style={{ backgroundColor: 'var(--yellow)', marginTop: '10px' }}
                    disabled={isSending}
                  >
                    {isSending ? 'Sending...' : 'Send message'}
                  </button>
                </form>
              </>
            ) : (
              <div className="celebration-screen">
                <div className="celebration-icon">✈</div>
                <h3 className="celebration-title">Message Received!</h3>
                <p className="celebration-text">Thanks for reaching out, Shobhit will get back to you shortly.</p>
                <button
                  className="brutal-btn"
                  style={{ backgroundColor: 'var(--blue)' }}
                  onClick={() => {
                    resetForm();
                    setIsMessageDrawerOpen(false);
                  }}
                >
                  Return to Portfolio
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Slide-out Drawer: Project Details */}
      <div className={`drawer-overlay ${activeProject ? 'open' : ''}`} onClick={() => setActiveProject(null)}>
        {activeProject && (
          <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <h2>Project details</h2>
              <button className="drawer-close-btn" onClick={() => setActiveProject(null)} aria-label="Close drawer">
                <CrossIcon />
              </button>
            </div>

            <div className="drawer-body">
              <span className="drawer-badge">{activeProject.category}</span>
              <h3 style={{ fontSize: '28px', marginBottom: '16px' }}>{activeProject.title}</h3>

              <img
                src={activeProject.images && activeProject.images.length > 0 ? activeProject.images[activeImageIdx] : "/image.jpeg"}
                alt={activeProject.title}
                className="drawer-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/image.jpeg";
                }}
              />

              {activeProject.images && activeProject.images.length > 1 && (
                <div className="drawer-thumbnails-row">
                  {activeProject.images.map((imgUrl, tIdx) => (
                    <button
                      key={tIdx}
                      className={`drawer-thumbnail-btn ${activeImageIdx === tIdx ? 'active' : ''}`}
                      onClick={() => setActiveImageIdx(tIdx)}
                      aria-label={`View project screenshot ${tIdx + 1}`}
                    >
                      <img
                        src={imgUrl}
                        alt=""
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/image.jpeg";
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}

              <p style={{ fontSize: '15px', marginBottom: '24px' }}>{activeProject.description}</p>

              <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>Tech stack:</h4>
              <div className="drawer-tech-stack">
                {activeProject.tech.map((t, idx) => (
                  <span key={idx} className="tech-tag">{t}</span>
                ))}
              </div>

              <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {activeProject.link && activeProject.link !== '#' && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn"
                    style={{ backgroundColor: 'var(--yellow)', width: '100%', textDecoration: 'none', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                  >
                    🚀 Launch Live Website
                  </a>
                )}
                <a
                  href={activeProject.githubLink || 'https://github.com/kumarshobhit-1'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn"
                  style={{ backgroundColor: 'var(--mint)', width: '100%', textDecoration: 'none', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '8px', color: '#08060D' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>View GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>



      {/* Slide-out Drawer: Certificate Details */}
      <div className={`drawer-overlay ${activeCertificate ? 'open' : ''}`} onClick={() => setActiveCertificate(null)}>
        {activeCertificate && (
          <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <h2>Verify Credential</h2>
              <button className="drawer-close-btn" onClick={() => setActiveCertificate(null)} aria-label="Close drawer">
                <CrossIcon />
              </button>
            </div>

            <div className="drawer-body">
              {activeCertificate.image ? (
                <div
                  style={{
                    width: '100%',
                    maxHeight: '260px',
                    borderRadius: 'var(--radius-sm)',
                    border: 'var(--border-width) solid var(--border)',
                    boxShadow: '4px 4px 0 var(--border)',
                    overflow: 'hidden',
                    marginBottom: '20px',
                    backgroundColor: '#121016',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <img
                    src={activeCertificate.image}
                    alt={activeCertificate.title}
                    style={{ width: '100%', height: 'auto', maxHeight: '260px', objectFit: 'contain' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--yellow)',
                    border: 'var(--border-width) solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: '3px 3px 0 var(--border)',
                    marginBottom: '20px'
                  }}
                >
                  <span style={{ fontSize: '24px' }}>🎖</span>
                </div>
              )}
              <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{activeCertificate.title}</h3>
              <p style={{ fontSize: '15px', fontWeight: 'bold', color: 'var(--text)', marginBottom: '16px' }}>
                Issued by: {activeCertificate.issuer} ({activeCertificate.date})
              </p>

              <div style={{ margin: '20px 0', padding: '16px', border: 'var(--border-width) solid var(--border)', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(8, 6, 13, 0.03)' }}>
                <strong style={{ fontSize: '14px', fontFamily: 'var(--font-heading)' }}>Verification ID:</strong>
                <code style={{ marginLeft: '8px', fontSize: '14px' }}>{activeCertificate.verifyId}</code>
              </div>

              <h4 style={{ fontSize: '16px', marginBottom: '8px' }}>Core concepts covered:</h4>
              <div className="drawer-tech-stack">
                {activeCertificate.skillsCovered.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-tag">{skill}</span>
                ))}
              </div>

              {activeCertificate.link && activeCertificate.link !== '#' && (
                <div style={{ marginTop: '40px' }}>
                  <a
                    href={activeCertificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn"
                    style={{ backgroundColor: 'var(--yellow)', width: '100%', textDecoration: 'none', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                  >
                    Verify Online ↗
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Slide-out Drawer: Experience Details */}
      <div className={`drawer-overlay ${activeExperience ? 'open' : ''}`} onClick={() => setActiveExperience(null)}>
        {activeExperience && (
          <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <h2>Experience details</h2>
              <button className="drawer-close-btn" onClick={() => setActiveExperience(null)} aria-label="Close drawer">
                <CrossIcon />
              </button>
            </div>

            <div className="drawer-body" style={{ textAlign: 'left' }}>
              <span className="drawer-badge" style={{ backgroundColor: 'var(--purple)', color: '#08060D', border: '1px solid var(--border)', fontWeight: 'bold' }}>
                {activeExperience.badge}
              </span>
              <h3 style={{ fontSize: '28px', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>{activeExperience.role}</h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <strong style={{ fontSize: '16px' }}>{activeExperience.company}</strong>
                {activeExperience.linkUrl && (
                  <a
                    href={activeExperience.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--blue)', textDecoration: 'underline', fontSize: '14px', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    {activeExperience.linkText}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                )}
              </div>

              <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <span className="experience-duration-tag" style={{ margin: 0 }}>{activeExperience.duration}</span>
                <span style={{ fontSize: '13px', fontWeight: '700', padding: '4px 8px', border: '1px solid var(--border)', borderRadius: '4px', backgroundColor: 'var(--mint)', color: '#08060D' }}>
                  {activeExperience.type}
                </span>
                <span style={{ fontSize: '13px', fontWeight: '700', padding: '4px 8px', border: '1px solid var(--border)', borderRadius: '4px', backgroundColor: 'var(--yellow)', color: '#08060D' }}>
                  {activeExperience.status}
                </span>
              </div>

              <p className="experience-desc" style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
                {activeExperience.description}
              </p>

              {activeExperience.company.includes("TVK") && (
                <div style={{ marginBottom: '24px', backgroundColor: 'rgba(8,6,13,0.03)', padding: '20px', border: 'var(--border-width) solid var(--border)', borderRadius: 'var(--radius-sm)', boxShadow: '4px 4px 0 var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <h4 style={{ fontSize: '16px', fontFamily: 'var(--font-heading)', margin: 0 }}>TVK Platform Statistics</h4>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(74, 222, 128, 0.15)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold' }}>
                      <span className="live-indicator-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ade80', display: 'inline-block' }}></span>
                      <span style={{ color: 'var(--text)' }}>Live Metrics</span>
                    </div>
                  </div>
                  <div className="about-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                    {[
                      { label: '👥 Active Users', value: '1807', color: 'var(--blue)' },
                      { label: '⭐ Premium Users', value: '135', color: 'var(--yellow)' },
                      { label: '📝 Unique Exam Takers', value: '800', color: 'var(--purple)' },
                      { label: '📈 Success Rate', value: '59%', color: 'var(--mint)' }
                    ].map((stat, idx) => (
                      <div key={idx} className="about-stat-item" style={{ borderLeft: `4px solid ${stat.color}`, padding: '10px 14px', borderTop: '1px solid var(--border)', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg)', boxShadow: '2px 2px 0 var(--border)', textAlign: 'center' }}>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: 'var(--text)', marginBottom: '2px' }}>
                          {stat.value}
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--text)', opacity: 0.8, fontWeight: '600' }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '16px', fontFamily: 'var(--font-heading)', marginBottom: '12px', borderBottom: '2px solid var(--border)', paddingBottom: '6px' }}>Key Responsibilities & Contributions:</h4>
                <ul className="skill-capabilities-list" style={{ paddingLeft: '0', listStyle: 'none' }}>
                  {activeExperience.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                      <span className="skill-list-dot" style={{ color: 'var(--purple)' }}>✦</span> <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '16px', fontFamily: 'var(--font-heading)', marginBottom: '12px', borderBottom: '2px solid var(--border)', paddingBottom: '6px' }}>Technologies Used:</h4>
                <div className="experience-skills-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeExperience.skills.map((s, sIdx) => (
                    <span key={sIdx} className="tech-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
