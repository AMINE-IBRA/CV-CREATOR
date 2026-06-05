import React, { useState } from 'react';
import { Download, LayoutTemplate } from 'lucide-react';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import PaymentModal from './components/PaymentModal';
import './index.css';

function App() {
  const [showPayment, setShowPayment] = useState(false);
  const [cvData, setCvData] = useState({
    personalInfo: {
      fullName: 'John Doe',
      jobTitle: 'Senior Frontend Developer',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      summary: 'Passionate and experienced developer with a knack for creating stunning web applications and a strong track record of successful projects.'
    },
    experience: [
      {
        id: '1',
        title: 'Senior Frontend Developer',
        company: 'Tech Innovators Inc.',
        startDate: 'Jan 2020',
        endDate: 'Present',
        description: 'Led the development of the core product frontend.\nImproved performance by 40% and mentored junior developers.'
      }
    ],
    education: [
      {
        id: '1',
        degree: 'B.S. Computer Science',
        school: 'University of Technology',
        startDate: 'Sep 2015',
        endDate: 'May 2019',
        description: 'Graduated with Honors. Specialized in Human-Computer Interaction.'
      }
    ],
    skills: 'React, JavaScript, CSS, UI/UX Design, Node.js'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div className="action-bar">
        <div className="brand">
          <LayoutTemplate size={28} />
          CV Maker Pro
        </div>
        <button className="btn btn-primary" onClick={() => setShowPayment(true)} style={{ backgroundColor: '#10b981', color: '#000', fontWeight: 'bold' }}>
          <Download size={18} />
          Pay $5 & Download PDF
        </button>
      </div>
      <div className="app-container">
        <div className="pane editor-pane">
          <CVForm cvData={cvData} setCvData={setCvData} />
        </div>
        <div className="pane preview-pane">
          <CVPreview cvData={cvData} />
        </div>
      </div>
      {showPayment && (
        <PaymentModal 
          onClose={() => setShowPayment(false)} 
          onSuccess={handlePrint} 
        />
      )}
    </div>
  );
}

export default App;
