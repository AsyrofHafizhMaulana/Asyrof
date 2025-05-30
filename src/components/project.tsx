import React, { useState } from 'react';
import '../assets/css/project.css';
import Zio from '../assets/Media/pentest.png';
import Forensik from '../assets/Media/forensik.png';
import Kolam from '../assets/Media/kolam.png';
import Wazuh from '../assets/Media/wazuh.png';
import Crypthography from '../assets/Media/crypthography.png';
import Urbackup from '../assets/Media/urbackup.png';
import Cisco from '../assets/Media/cisco.png';

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  details: string;
  tools: string[];
  year: string;
  role: string;
  pdfUrl: string;
}

const projects: ProjectItem[] = [
  {
    title: 'Penetration Testing',
    description: 'Project untuk penetration testing web DISKOMINFO pemerintah Sulawesi Selatan bagian Rumah Sakit',
    image: Zio,
    details: 'Project ini menggunakan metode POC (prod of concept) untuk mengidentifikasi kerentanan pada sistem informasi rumah sakit.',
    tools: ['OWASP ZAP', 'Nikto', 'Burp Suite', 'Acunetix', 'wapiti', 'Pentest Tools', 'Hosted Scan'],
    year: '2024',
    role: 'Cybersecurity',
    pdfUrl: 'https://example.com/penetration-testing-report.pdf',
  },
  {
    title: 'Dashboard Monitoring Kolam',
    description: 'Project untuk membuat aplikasi dashboard pemantauan kolam ikan berbasis IoT',
    image: Kolam,
    details: 'Monitoring kolam ikan dengan sensor suhu, pH, DO, dan berat pakan menggunakan MQTT dan Flutter.',
    tools: ['Flutter', 'MQTT', 'EMX.IO'],
    year: '2024',
    role: 'Web/Mobile Developer',
    pdfUrl: 'https://example.com/monitoring-kolam.pdf',
  },
  {
    title: 'Forensic Digital',
    description: 'Project untuk melakukan forensik digital untuk mengembalikan file yang hilang',
    image: Forensik,
    details: 'Menganalisis image disk dan melakukan recovery file menggunakan berbagai tools digital forensic.',
    tools: ['Autopsy', 'Foremost', 'FTK Imager'],
    year: '2024',
    role: 'Cybersecurity',
    pdfUrl: 'https://example.com/forensik-report.pdf',
  },
  {
    title: 'Pemantauan Menggunakan SIEM Wazuh',
    description: 'Project untuk melakukan monitoring menggunakan SIEM Wazuh dan pengecekan kerentanan yang didapat',
    image: Wazuh,
    details: 'Monitoring aktivitas dan vulnerability menggunakan Wazuh, termasuk integrasi dengan agent client.',
    tools: ['Siem Wazuh'],
    year: '2024',
    role: 'Cybersecurity',
    pdfUrl: 'https://example.com/wazuh-monitoring.pdf',
  },
  {
    title: 'Cryptography',
    description: 'Memanfaatkan tools Crypthography dalam menerapkan prinsip privacy, confidentiality dan Integrity',
    image: Crypthography,
    details: 'Melalui enkripsi dengan public key penerima, isi email hanya dapat dibaca oleh pihak yang berwenang. Selain itu, tanda tangan digital menggunakan private key pengirim memastikan bahwa pesan tidak diubah dan benar-benar berasal dari pengirim yang sah.',
    tools: ['Thunderbird'],
    year: '2024',
    role: 'Cybersecurity',
    pdfUrl: 'https://example.com/wazuh-monitoring.pdf',
  },
  {
    title: 'Backup',
    description: 'Menggunakan tools URBACKUP untuk melakukan Full Backup dan Incremental Backup',
    image: Urbackup,
    details: 'Full Backup dilakukan untuk menyalin seluruh data secara menyeluruh pada satu waktu tertentu, sedangkan Incremental Backup hanya mencadangkan perubahan data sejak backup terakhir, sehingga menghemat ruang penyimpanan dan waktu proses.',
    tools: ['UrBackup'],
    year: '2024',
    role: 'Cybersecurity',
    pdfUrl: 'https://example.com/wazuh-monitoring.pdf',
  },
  {
    title: 'KONFIGURASI VLAN & ROUTING INTERVLAN',
    description: 'Mengkonfigurasi masing masing perangkat/devices mulai dari PC, SWITCH dan ROUTER, sehingga semua PC dapat berkomunikasi baik sesama VLAN maupun antar VLAN.',
    image: Cisco,
    details: 'Untuk memastikan semua PC bisa berkomunikasi baik dalam maupun antar VLAN, setiap PC diberikan IP sesuai VLAN-nya. Switch dikonfigurasi dengan port access untuk PC dan port trunk untuk menghubungkan ke router atau switch lain. Router atau switch Layer 3 diatur dengan inter-VLAN routing agar lalu lintas antar VLAN dapat terjadi. Dengan konfigurasi ini, komunikasi antar PC dalam satu atau berbeda VLAN bisa berjalan lancar.',
    tools: ['Cisco Packet Tracer'],
    year: '2024',
    role: 'Network Engineering',
    pdfUrl: 'https://example.com/wazuh-monitoring.pdf',
  },
  {
    title: 'SIEM Wazuh Monitoring 2',
    description: 'Project untuk melakukan monitoring menggunakan SIEM Wazuh dan pengecekan kerentanan yang didapat',
    image: Wazuh,
    details: 'Monitoring aktivitas dan vulnerability menggunakan Wazuh, termasuk integrasi dengan agent client.',
    tools: ['Wazuh', 'OpenVAS', 'Kibana'],
    year: '2024',
    role: 'Cybersecurity',
    pdfUrl: 'https://example.com/wazuh-monitoring.pdf',
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedRole, setSelectedRole] = useState<string>('All');

  const openModal = (project: ProjectItem) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const roles = ['All', 'Cybersecurity', 'Web/Mobile Developer', 'Network Engineering'];

  const filteredProjects = selectedRole === 'All'
    ? projects
    : projects.filter(project => project.role === selectedRole);

  return (
    <div id="project" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="filter-container">
        {roles.map(role => (
          <button
            key={role}
            className={`filter-button ${selectedRole === role ? 'active' : ''}`}
            onClick={() => setSelectedRole(role)}
          >
            {role}
          </button>
        ))}
      </div>
      <div className={`projects-container ${filteredProjects.length === 1 ? 'single-project' : ''}`}>
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <button className="project-button" onClick={() => openModal(project)}>
                Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <h2 className="modal-title">{selectedProject.title}</h2>
            <p className="modal-details">{selectedProject.details}</p>
            <div className="project-info">
              <p><strong>Role:</strong> {selectedProject.role}</p>
              <p><strong>Year:</strong> {selectedProject.year}</p>
              <p><strong>Tools:</strong> {selectedProject.tools.join(', ')}</p>
            </div>
            <a
              href={selectedProject.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-button"
            >
              📄 View PDF Documentation
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;