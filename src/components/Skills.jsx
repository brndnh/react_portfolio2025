import React from 'react';
import './Skills.css'

import sk_afterEffects from '../assets/sk_afterEffects.png';
import sk_illustrator from '../assets/sk_illustrator.png';
import sk_clipStudioPaint from '../assets/sk_clipstudio.jpg';
import sk_photoshop from '../assets/sk_photoshop.png';
import sk_css3 from '../assets/sk_css.png';
import sk_html5 from '../assets/sk_html.png';
import sk_javaScript from '../assets/sk_javaScript.png';
import sk_premiere from '../assets/sk_premiere.png';
import sk_react from '../assets/sk_react.png';
import sk_sonyVegas from '../assets/sk_vegas.png';

const skills = [
    { id: 2, src: sk_premiere, alt: 'Premiere Pro' },
    { id: 2, src: sk_afterEffects, alt: 'After Effects' },
    { id: 3, src: sk_photoshop, alt: 'Photoshop' },
    { id: 4, src: sk_sonyVegas, alt: 'Sony Vegas Pro' },
    { id: 5, src: sk_clipStudioPaint, alt: 'Clip Studio Paint' },
    { id: 6, src: sk_javaScript, alt: 'JavaScript' },
    { id: 7, src: sk_html5, alt: 'HTML5' },
    { id: 8, src: sk_css3, alt: 'CSS3' },
    { id: 9, src: sk_illustrator, alt: 'Illustrator' },
    { id: 10, src: sk_react, alt: 'React JS' },
];

function SkillSet() {
    return (
        <div className="skills-container">
            {skills.map((skill) => (
                <div key={skill.id} className="skill-item">
                    <img src={skill.src} alt={skill.alt} />
                </div>
            ))}
        </div>
    );
}

export default SkillSet;