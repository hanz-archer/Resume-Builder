import React from "react";

interface ResumePreviewProps {
    formData: {
        name: String;
        email: String;
        phone: String;
        skills: String;
        education: String;
        experience: String;
    };
}

    const ResumePreview: React.FC<ResumePreviewProps> = ({ formData }) => {
        return(
            <div className="resume-preview">
                <h1>{formData.name}</h1>
                <h1>{formData.email}</h1>
                <h1>{formData.phone}</h1>
                <h2>Skills</h2>
                <p>{formData.skills}</p>
                <h1>{formData.education}</h1>
                <h2>Experience</h2>
                <p>{formData.experience}</p>
            </div>
        );
    };

export default ResumePreview;