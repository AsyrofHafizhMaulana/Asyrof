import React, { useState } from 'react';
import '../assets/css/about.css';

// Import semua gambar icon (sesuaikan path)
import acunetix from '../assets/Media/icon/acunetix.png';
import adobe from '../assets/Media/icon/adobei.png';
import autopsy from '../assets/Media/icon/autopsy.png';
import burpsuite from '../assets/Media/icon/burpsuite.png';
import canva from '../assets/Media/icon/canva.png';
import css from '../assets/Media/icon/css.png';
import dart from '../assets/Media/icon/dart.png';
import flutter from '../assets/Media/icon/flutter.png';
import FTK from '../assets/Media/icon/FTK.png';
import hostedscan from '../assets/Media/icon/hostedscan.png';
import html from '../assets/Media/icon/html.png';
import ibispaint from '../assets/Media/icon/ibispaint.png';
import id from '../assets/Media/icon/id.png';
import kali from '../assets/Media/icon/kali.png';
import nikto from '../assets/Media/icon/nikto.png';
import nmap from '../assets/Media/icon/nmap.png';
import owasp from '../assets/Media/icon/owasp.png';
import php from '../assets/Media/icon/php.png';
import react from '../assets/Media/icon/react.png';
import sketchbook from '../assets/Media/icon/sketchbook.png';
import vs from '../assets/Media/icon/vs.png';
import wazuh from '../assets/Media/icon/wazuh.png';
import wireshark from '../assets/Media/icon/wireshark.png';

interface Tool {
  name: string;
  img: string;
  category: string;
}

const allTools: Tool[] = [
  // Programming
  { name: 'HTML', img: html, category: 'Programming' },
  { name: 'CSS', img: css, category: 'Programming' },
  { name: 'PHP', img: php, category: 'Programming' },
  { name: 'Dart', img: dart, category: 'Programming' },
  { name: 'Flutter', img: flutter, category: 'Programming' },
  { name: 'React', img: react, category: 'Programming' },
  { name: 'VS Code', img: vs, category: 'Programming' },

  // Cybersecurity
  { name: 'Acunetix', img: acunetix, category: 'Cybersecurity' },
  { name: 'Burp Suite', img: burpsuite, category: 'Cybersecurity' },
  { name: 'Autopsy', img: autopsy, category: 'Cybersecurity' },
  { name: 'FTK Imager', img: FTK, category: 'Cybersecurity' },
  { name: 'Nikto', img: nikto, category: 'Cybersecurity' },
  { name: 'Nmap', img: nmap, category: 'Cybersecurity' },
  { name: 'OWASP', img: owasp, category: 'Cybersecurity' },
  { name: 'Wireshark', img: wireshark, category: 'Cybersecurity' },
  { name: 'Kali Linux', img: kali, category: 'Cybersecurity' },
  { name: 'HostedScan', img: hostedscan, category: 'Cybersecurity' },
  { name: 'Wazuh', img: wazuh, category: 'Cybersecurity' },

  // Design
  { name: 'Adobe Illustrator', img: adobe, category: 'Design' },
  { name: 'Canva', img: canva, category: 'Design' },
  { name: 'Sketchbook', img: sketchbook, category: 'Design' },
  { name: 'Ibis Paint', img: ibispaint, category: 'Design' },
  { name: 'ID', img: id, category: 'Design' },
];

const About: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Programming', 'Cybersecurity', 'Design'];

  const filteredTools = selectedCategory === 'All'
    ? allTools
    : allTools.filter(tool => tool.category === selectedCategory);

  return (
    <div id="about" className="about-container">
      {/* About Me Section */}
      <div className="about-left">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          Halo! Saya Asyrof Hafizh Maulana, seorang developer dan desainer yang
          berpengalaman dalam programming, cybersecurity, dan desain grafis. Saya
          menggunakan berbagai tools dan teknologi untuk menghasilkan karya terbaik.
        </p>
      </div>

      {/* Tools & Technologies Section */}
      <div className="about-right">
        <h2 className="category-title">Tools & Technologies</h2>
        <div className="filter-container">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className={`logo-grid ${filteredTools.length === 1 ? 'single-tool' : ''}`}>
          {filteredTools.map((tool, index) => (
            <div className="logo-item" key={tool.name} style={{ '--index': index } as React.CSSProperties}>
              <img src={tool.img} alt={tool.name} className="logo-img" />
              <span className="logo-label">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;