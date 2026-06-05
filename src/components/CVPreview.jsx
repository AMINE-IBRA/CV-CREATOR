import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function CVPreview({ cvData }) {
  const { personalInfo, experience, education, skills } = cvData;
  const skillsList = skills.split(',').map(s => s.trim()).filter(s => s);

  return (
    <div id="cv-print-area" className="cv-document">
      <div className="text-center mb-4">
        <h1>{personalInfo.fullName || 'Your Name'}</h1>
        <div className="subtitle">{personalInfo.jobTitle || 'Profession'}</div>
        <div className="contact-info" style={{ justifyContent: 'center' }}>
          {personalInfo.email && (
            <div className="contact-item">
              <Mail size={14} />
              {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div className="contact-item">
              <Phone size={14} />
              {personalInfo.phone}
            </div>
          )}
          {personalInfo.location && (
            <div className="contact-item">
              <MapPin size={14} />
              {personalInfo.location}
            </div>
          )}
        </div>
      </div>

      {personalInfo.summary && (
        <div className="section-content">
          <h2>Summary</h2>
          <p>{personalInfo.summary}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div className="section-content">
          <h2>Experience</h2>
          {experience.map(exp => (
            <div key={exp.id} className="entry">
              <div className="entry-header">
                <h3>{exp.title || 'Job Title'}</h3>
                <div className="entry-meta">
                  {exp.startDate ? `${exp.startDate} - ${exp.endDate || 'Present'}` : ''}
                </div>
              </div>
              <div style={{ fontWeight: 500, color: '#4b5563', marginBottom: '0.5rem' }}>{exp.company}</div>
              <div className="entry-desc">{exp.description}</div>
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className="section-content">
          <h2>Education</h2>
          {education.map(edu => (
            <div key={edu.id} className="entry">
              <div className="entry-header">
                <h3>{edu.degree || 'Degree'}</h3>
                <div className="entry-meta">
                  {edu.startDate ? `${edu.startDate} - ${edu.endDate || 'Present'}` : ''}
                </div>
              </div>
              <div style={{ fontWeight: 500, color: '#4b5563', marginBottom: '0.5rem' }}>{edu.school}</div>
              <div className="entry-desc">{edu.description}</div>
            </div>
          ))}
        </div>
      )}

      {skillsList.length > 0 && (
        <div className="section-content">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skillsList.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CVPreview;
