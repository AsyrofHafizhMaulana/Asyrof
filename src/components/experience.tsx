import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import bestGroupImg from '../assets/Media/Best group.png';
import kepesertaanImg from '../assets/Media/Kepesertaan.jpg';
import lombaPosterImg from '../assets/Media/Lomba_Poster_SIA_Design_Competittion.jpg';
import panitiaHimatekImg from '../assets/Media/Panitia LK HIMATEK.jpeg';
import panitiaWamikaImg from '../assets/Media/Panitia LK WAMIKA.png';
import penanggungJawabBEMImg from '../assets/Media/Penanggung jawab BEM.jpeg';
import penghargaanDiskominfoImg from '../assets/Media/Penghargaan Diskominfo.jpg';
import pesertaWamikaImg from '../assets/Media/Peserta LK WAMIKA.jpeg';
import stupenImg from '../assets/Media/Stupen.png';
import '../assets/css/experience.css';

interface Certificate {
  year: string;
  title: string;
  image: string;
  description?: string;
}

const certificates: Certificate[] = [
  {
    year: '-2024-',
    title: 'Penghargaan Best Group oleh PT Gama Multi Usaha Mandiri',
    image: bestGroupImg,
  },
  
  {
    year: '2024',
    title: 'Sertifikat kepesertaan Kampus Merdeka',
    image: kepesertaanImg,
  },
  {
    year: '2024',
    title: 'Sertifikat Peserta Lomba Poster SIA Design Competition',
    image: lombaPosterImg,
  },
  {
    year: '2023',
    title: 'Sertifikat Panitia LK HIMATEK',
    image: panitiaHimatekImg,
  },
  {
    year: '2024',
    title: 'Sertifikat Panitia LK WAMIKA',
    image: panitiaWamikaImg,
  },
  {
    year: '2024',
    title: 'Sertifikat Sebagai Penanggung Jawab Pada Kegiatan Pengabdian Masyarakat',
    image: penanggungJawabBEMImg,
  },
  {
    year: '2024',
    title: 'Sertifikat Penghargaan Diskominfo Sulawesi Selatan',
    image: penghargaanDiskominfoImg,
  },
  {
    year: '2024',
    title: 'Peserta LK WAMIKA',
    image: pesertaWamikaImg,
  },
  {
    year: '202 besieged',
    title: 'Sertifikat Studi Independent',
    image: stupenImg,
  },
];

const CertificateList: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="experience-certificates">
      <h2>My Certificates</h2>
      <div className="certificates-grid">
        {certificates.map(({ year, title, image }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="certificate-card"
            onClick={() => setSelectedCertificate({ year, title, image })}
          >
            <img src={image} alt={title} className="certificate-img" />
            <div className="certificate-overlay">
              <div className="certificate-text">
                <strong>{year}</strong>
                <p>{title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Detail Certificate */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              <a
                href={selectedCertificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-image-link"
                aria-label={`View full ${selectedCertificate.title} certificate`}
              >
                <div
                  className="modal-image"
                  style={{ backgroundImage: `url(${selectedCertificate.image})` }}
                />
              </a>
              <h3>{selectedCertificate.title}</h3>
              <p className="modal-meta">{selectedCertificate.year}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificateList;