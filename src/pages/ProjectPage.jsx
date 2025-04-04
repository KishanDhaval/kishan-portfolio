import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProjectPage = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const projectPath = `/kishan-portfolio/basic-projects/${projectName}/index.html`;

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <button
        onClick={() => navigate('/kishan-portfolio/')}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '48%',
          padding: '10px 16px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        ← Back
      </button>

      {/* Iframe Preview */}
      <iframe
        src={projectPath}
        title={projectName}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      ></iframe>
    </div>
  );
};

export default ProjectPage;
