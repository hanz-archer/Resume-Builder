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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (

        <form className="space-y-4">
            <input type="text" 
            name="name" 
            placeholder="name" 
            value={formData.name}
            onChange={handleChange}
            className="input"/>

            <input type="email" 
            name="email" 
            placeholder="email" 
            value={formData.email}
            onChange={handleChange}
            className="input"/>

            <textarea
            name="skills"
            placeholder="skills (Comma-separated)"
            value={formData.skills}
            onChange={handleChange}
            className="textArea"
            />

            <input type="education" 
            name="education" 
            placeholder="education" 
            value={formData.education}
            onChange={handleChange}
            className="input"/>

            <textarea
            name="experience"
            placeholder="experience (Comma-separated)"
            value={formData.experience}
            onChange={handleChange}
            className="textArea"
            />

        </form>
    );
};

export default ResumeForm;