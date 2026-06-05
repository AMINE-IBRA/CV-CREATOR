import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

function CVForm({ cvData, setCvData }) {
  const handleChange = (section, field, value) => {
    setCvData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (section, id, field, value) => {
    setCvData(prev => ({
      ...prev,
      [section]: prev[section].map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const addArrayItem = (section, defaultItem) => {
    setCvData(prev => ({
      ...prev,
      [section]: [...prev[section], { id: Date.now().toString(), ...defaultItem }]
    }));
  };

  const removeArrayItem = (section, id) => {
    setCvData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }));
  };

  return (
    <div className="cv-form" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Personal Info */}
      <div className="form-section">
        <h2 className="form-section-header">Personal Information</h2>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" value={cvData.personalInfo.fullName} onChange={e => handleChange('personalInfo', 'fullName', e.target.value)} />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input type="text" value={cvData.personalInfo.jobTitle} onChange={e => handleChange('personalInfo', 'jobTitle', e.target.value)} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={cvData.personalInfo.email} onChange={e => handleChange('personalInfo', 'email', e.target.value)} />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" value={cvData.personalInfo.phone} onChange={e => handleChange('personalInfo', 'phone', e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" value={cvData.personalInfo.location} onChange={e => handleChange('personalInfo', 'location', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Professional Summary</label>
          <textarea value={cvData.personalInfo.summary} onChange={e => handleChange('personalInfo', 'summary', e.target.value)} />
        </div>
      </div>

      {/* Experience */}
      <div className="form-section">
        <h2 className="form-section-header">Experience</h2>
        {cvData.experience.map(exp => (
          <div key={exp.id} className="item-card">
            <button className="btn btn-danger item-card-actions" onClick={() => removeArrayItem('experience', exp.id)}>
              <Trash2 size={16} />
            </button>
            <div className="form-row">
              <div className="form-group">
                <label>Job Title</label>
                <input type="text" value={exp.title} onChange={e => handleArrayChange('experience', exp.id, 'title', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" value={exp.company} onChange={e => handleArrayChange('experience', exp.id, 'company', e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Start Date</label>
                <input type="text" value={exp.startDate} onChange={e => handleArrayChange('experience', exp.id, 'startDate', e.target.value)} />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input type="text" value={exp.endDate} onChange={e => handleArrayChange('experience', exp.id, 'endDate', e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea value={exp.description} onChange={e => handleArrayChange('experience', exp.id, 'description', e.target.value)} />
            </div>
          </div>
        ))}
        <button className="btn btn-outline" onClick={() => addArrayItem('experience', { title: '', company: '', startDate: '', endDate: '', description: '' })}>
          <Plus size={16} /> Add Experience
        </button>
      </div>

      {/* Education */}
      <div className="form-section">
        <h2 className="form-section-header">Education</h2>
        {cvData.education.map(edu => (
          <div key={edu.id} className="item-card">
            <button className="btn btn-danger item-card-actions" onClick={() => removeArrayItem('education', edu.id)}>
              <Trash2 size={16} />
            </button>
            <div className="form-row">
              <div className="form-group">
                <label>Degree</label>
                <input type="text" value={edu.degree} onChange={e => handleArrayChange('education', edu.id, 'degree', e.target.value)} />
              </div>
              <div className="form-group">
                <label>School</label>
                <input type="text" value={edu.school} onChange={e => handleArrayChange('education', edu.id, 'school', e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Start Date</label>
                <input type="text" value={edu.startDate} onChange={e => handleArrayChange('education', edu.id, 'startDate', e.target.value)} />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input type="text" value={edu.endDate} onChange={e => handleArrayChange('education', edu.id, 'endDate', e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea value={edu.description} onChange={e => handleArrayChange('education', edu.id, 'description', e.target.value)} />
            </div>
          </div>
        ))}
        <button className="btn btn-outline" onClick={() => addArrayItem('education', { degree: '', school: '', startDate: '', endDate: '', description: '' })}>
          <Plus size={16} /> Add Education
        </button>
      </div>

      {/* Skills */}
      <div className="form-section">
        <h2 className="form-section-header">Skills</h2>
        <div className="form-group">
          <label>Skills (comma separated)</label>
          <input type="text" value={cvData.skills} onChange={e => setCvData({ ...cvData, skills: e.target.value })} />
        </div>
      </div>
    </div>
  );
}

export default CVForm;
