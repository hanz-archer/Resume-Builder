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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form className="space-y-4">
        <input type="text" 
        name="name" 
        placeholder="name" 
        value={FormData.name}/>
        </form>
    )

export default ResumeForm;