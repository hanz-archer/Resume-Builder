import React, { useState } from 'react';

const ResumeForm: React.FC = () => {
    const [formData, setFormData] = useState({

        name: '',
        email: '',
        phone: '',
        skills: '',
        education: '',
        experience: '',
    });
}

export default ResumeForm;