import { useState } from 'react'
import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview'
import PDFExport from './components/PDFExport'
import './App.css'

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    education: '',
    experience: '',
  });

  return (
    <div className="app">
          <div className="form-container">
            <ResumeForm />
          </div>
          <div className="preview-container">
            <ResumePreview formData={formData} />
            <PDFExport />
          </div>
    </div>
  );
};

export default App
