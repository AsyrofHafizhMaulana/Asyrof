import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Zio from '../assets/Media/pentest.png';
import Forensik from '../assets/Media/forensik.png';
import Kolam from '../assets/Media/kolam.png';
import Wazuh from '../assets/Media/wazuh.png';

import "../assets/css/detail.css";

const projects: { [key: string]: { title: string; description: string; image: string } } = {
  pentest: {
    title: 'Penetration Testing',
    description: 'Penjelasan lengkap tentang penetration testing...',
    image: Zio,
  },
  kolam: {
    title: 'Dashboard Monitoring Kolam',
    description: 'Detail dashboard monitoring kolam dengan MQTT...',
    image: Kolam,
  },
  forensik: {
    title: 'Forensik Digital',
    description: 'Penjelasan tentang penggunaan tools forensik...',
    image: Forensik,
  },
  wazuh: {
    title: 'SIEM Wazuh',
    description: 'Penjelasan lengkap tentang penggunaan Wazuh...',
    image: Wazuh,
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projects[id] : null;

  if (!project) {
    return <div className="project-detail">Project tidak ditemukan.</div>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} style={{ maxWidth: '400px' }} />
      <p>{project.description}</p>

      {/* Back button ditempatkan DI DALAM komponen */}
      <Link to="/" className="back-button">← Back to Projects</Link>
    </div>
  );
};

export default ProjectDetail;
