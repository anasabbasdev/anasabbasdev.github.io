// ATS Resume Generator - Automatic CV extraction from website
// This script extracts data from the English page and generates an ATS-friendly PDF

// Wait for all libraries to load
window.ATSResumeGenerator = (function() {
    'use strict';

    // Function to extract text content from elements
    function extractText(elements, selector) {
        const element = elements.querySelector(selector);
        return element ? element.textContent.trim() : '';
    }

    // Function to clean text - remove unwanted strings
    function cleanText(text) {
        if (!text) return '';
        // Remove "Download CV", "Download ATS CV" and variations
        return text.replace(/Download\s+(ATS\s+)?CV/gi, '')
                   .replace(/\s+/g, ' ')
                   .trim();
    }

    // Extract personal information
    function extractPersonalInfo() {
        const sidebar = document.getElementById('sidebar');
        if (!sidebar) return {};
        
        const name = extractText(sidebar, 'h1') || 'ANAS M. ABBAS';
        const title = extractText(sidebar, '.typing-text') || 
                     extractText(sidebar, 'p.text-gray-300') ||
                     'Software Engineer & ERP Developer';
        
        const allTextWhite = sidebar.querySelectorAll('.text-white');
        const location = allTextWhite.length > 0 
            ? allTextWhite[allTextWhite.length - 1].textContent.trim() 
            : 'Damascus, Syria';
        
        return {
            name: name,
            title: title,
            location: location,
            email: 'anas.abass1@gmail.com',
            phone: '+963-988-102-369'
        };
    }

    // Extract experience
    function extractExperience() {
        const items = document.querySelectorAll('#experience .timeline-item-modern');
        const experiences = [];
        
        items.forEach(item => {
            const date = extractText(item, '.timeline-date-modern');
            const title = extractText(item, '.timeline-title-modern');
            const company = extractText(item, '.timeline-company-modern');
            const description = cleanText(extractText(item, '.timeline-description-modern'));
            
            const techTags = Array.from(item.querySelectorAll('.tech-tag-modern')).map(tag => tag.textContent.trim());
            
            if (title && company) {
                experiences.push({
                    date: date || 'N/A',
                    title: title,
                    company: company,
                    description: description || '',
                    technologies: techTags
                });
            }
        });
        
        return experiences;
    }

    // Extract education - ALL items, no limit
    function extractEducation() {
        const items = document.querySelectorAll('#education .timeline-item-modern');
        const education = [];
        
        items.forEach(item => {
            const date = extractText(item, '.timeline-date-modern');
            const degree = extractText(item, '.timeline-title-modern');
            const institution = extractText(item, '.timeline-company-modern');
            const description = cleanText(extractText(item, '.timeline-description-modern'));
            
            if (degree && institution) {
                education.push({
                    date: date || 'N/A',
                    degree: degree,
                    institution: institution,
                    description: description || ''
                });
            }
        });
        
        return education;
    }

    // Extract volunteer/community work
    function extractVolunteer() {
        const volunteerItems = document.querySelectorAll('#volunteer .glass-effect');
        const volunteers = [];
        
        volunteerItems.forEach(item => {
            const h3 = item.querySelector('h3');
            const title = h3 ? h3.textContent.trim() : '';
            
            // Get location text
            const pTags = item.querySelectorAll('p.text-gray-300');
            const location = pTags.length > 0 ? pTags[0].textContent.trim() : '';
            
            // Get description - all text minus title and location
            let description = item.textContent.trim()
                .replace(title, '')
                .replace(location, '')
                .replace(/\s+/g, ' ')
                .trim();
            
            // Clean any remaining unwanted text
            description = cleanText(description);
            
            if (title) {
                volunteers.push({
                    title: title,
                    location: location,
                    description: description
                });
            }
        });
        
        return volunteers;
    }

    // Extract skills
    function extractSkills() {
        const skillCategories = document.querySelectorAll('#skills .glass-effect');
        const skills = {};
        
        skillCategories.forEach(category => {
            const categoryName = extractText(category, 'h3');
            const skillItems = [];
            
            category.querySelectorAll('.flex.justify-between').forEach(item => {
                const skillText = item.textContent.trim();
                const match = skillText.match(/(.+?)\s+(\d+)%/);
                if (match) {
                    skillItems.push({
                        name: match[1].trim(),
                        level: parseInt(match[2])
                    });
                }
            });
            
            if (skillItems.length > 0) {
                skills[categoryName] = skillItems;
            }
        });
        
        return skills;
    }

    // Extract projects
    function extractProjects() {
        const projectCards = document.querySelectorAll('#projects .project-card');
        const projects = [];
        
        projectCards.forEach(card => {
            const title = extractText(card, 'h3');
            const description = cleanText(extractText(card, 'p.text-gray-300'));
            const techTags = Array.from(card.querySelectorAll('.bg-green-400\\/20')).map(tag => tag.textContent.trim());
            
            if (title && description) {
                projects.push({
                    title: title,
                    description: description,
                    technologies: techTags
                });
            }
        });
        
        return projects;
    }

    // Extract languages
    function extractLanguages() {
        const langSections = document.querySelectorAll('#languages .glass-effect');
        const languages = [];
        
        langSections.forEach(section => {
            const lang = extractText(section, 'h3');
            const level = extractText(section, '.text-gray-300');
            
            if (lang && level) {
                languages.push({
                    language: lang,
                    level: level
                });
            }
        });
        
        return languages;
    }

    // Generate ATS-friendly PDF
    function generateATSPDF() {
        if (typeof window.jspdf === 'undefined' && typeof jsPDF === 'undefined') {
            alert('PDF library is still loading. Please wait a moment and try again.');
            return;
        }

        const loadingDiv = document.createElement('div');
        loadingDiv.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;color:white;';
        loadingDiv.innerHTML = '<i class="fas fa-spinner fa-spin fa-3x mb-4"></i><p class="text-xl">Generating ATS Resume...</p>';
        document.body.appendChild(loadingDiv);

        setTimeout(() => {
            try {
                const personalInfo = extractPersonalInfo();
                const experience = extractExperience();
                const education = extractEducation(); // Now extracts ALL education
                const skills = extractSkills();
                const projects = extractProjects();
                const languages = extractLanguages();
                const volunteers = extractVolunteer(); // New: extract volunteer work

                console.log('Personal Info:', personalInfo);
                console.log('Experience:', experience);
                console.log('Education:', education);
                console.log('Skills:', skills);
                console.log('Projects:', projects);
                console.log('Languages:', languages);
                console.log('Volunteers:', volunteers);

                const jsPDFLib = window.jspdf?.jsPDF || jsPDF;
                const pdf = new jsPDFLib('p', 'mm', 'letter');
                const pageWidth = pdf.internal.pageSize.getWidth();
                const margin = 15;
                let yPosition = margin;

                function addText(text, x, y, maxWidth, fontSize = 11) {
                    if (!text) return y;
                    const cleanText = text.replace(/Download\s+(ATS\s+)?CV/gi, '');
                    pdf.setFontSize(fontSize);
                    const lines = pdf.splitTextToSize(cleanText, maxWidth);
                    pdf.text(lines, x, y);
                    return y + (lines.length * (fontSize * 0.4));
                }

                function addSection(title, content) {
                    // Check if we need a new page before adding section title
                    if (yPosition > 240) {
                        pdf.addPage();
                        yPosition = margin;
                    }
                    pdf.setFont('helvetica', 'bold');
                    pdf.setFontSize(12);
                    pdf.text(title, margin, yPosition);
                    yPosition += 6;
                    return content();
                }

                function checkPageBreak(requiredSpace = 10) {
                    if (yPosition > (280 - requiredSpace)) {
                        pdf.addPage();
                        yPosition = margin;
                        return true;
                    }
                    return false;
                }

                // Header
                pdf.setFont('helvetica', 'bold');
                pdf.setFontSize(18);
                const headerName = cleanText(personalInfo.name || 'ANAS M. ABBAS');
                pdf.text(headerName, margin, yPosition);
                yPosition += 8;

                pdf.setFont('helvetica', 'normal');
                pdf.setFontSize(11);
                const headerTitle = cleanText(personalInfo.title || 'Software Engineer & ERP Developer');
                pdf.text(headerTitle, margin, yPosition);
                yPosition += 8;

                // Contact Info
                pdf.setFontSize(9);
                let contactX = margin;
                const contactInfo = [
                    personalInfo.email,
                    personalInfo.phone,
                    personalInfo.location
                ].filter(Boolean);

                contactInfo.forEach((info, index) => {
                    if (index > 0) contactX += 50;
                    pdf.text(info, contactX, yPosition);
                });
                yPosition += 10;

                // Professional Summary
                addSection('PROFESSIONAL SUMMARY', () => {
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(10);
                    const summary = `${personalInfo.title} with 11+ years of experience in ERP development, full-stack development, and technical training. Expert in PHP (Yii/Laravel), C# (.NET), API integrations, and cloud systems. Currently CTO at New G Solution, leading system architecture, integrations, and development workflows for a multi-tenant cloud-based ERP platform.`;
                    yPosition = addText(summary, margin, yPosition, pageWidth - (margin * 2), 10);
                    yPosition += 5;
                    return yPosition;
                });

                // Professional Experience - ALL experiences
                addSection('PROFESSIONAL EXPERIENCE', () => {
                    pdf.setFont('helvetica', 'normal');
                    experience.forEach((exp, index) => {
                        checkPageBreak(20);
                        pdf.setFont('helvetica', 'bold');
                        pdf.setFontSize(11);
                        yPosition = addText(exp.title, margin, yPosition, pageWidth - (margin * 2), 11);
                        pdf.setFont('helvetica', 'italic');
                        pdf.setFontSize(10);
                        yPosition = addText(`${exp.company} | ${exp.date}`, margin, yPosition, pageWidth - (margin * 2), 10);
                        pdf.setFont('helvetica', 'normal');
                        pdf.setFontSize(9);
                        yPosition = addText(exp.description, margin, yPosition, pageWidth - (margin * 2), 9);
                        if (exp.technologies && exp.technologies.length > 0) {
                            pdf.setFontSize(8);
                            const techText = 'Technologies: ' + exp.technologies.join(', ');
                            yPosition = addText(techText, margin, yPosition, pageWidth - (margin * 2), 8);
                        }
                        yPosition += 3;
                    });
                    return yPosition;
                });

                // Education - ALL items
                addSection('EDUCATION', () => {
                    pdf.setFont('helvetica', 'normal');
                    education.forEach((edu, index) => {
                        // Check page break before each education item
                        checkPageBreak(15);
                        
                        pdf.setFont('helvetica', 'bold');
                        pdf.setFontSize(10);
                        yPosition = addText(edu.degree, margin, yPosition, pageWidth - (margin * 2), 10);
                        
                        pdf.setFont('helvetica', 'italic');
                        pdf.setFontSize(9);
                        yPosition = addText(`${edu.institution} | ${edu.date}`, margin, yPosition, pageWidth - (margin * 2), 9);
                        
                        if (edu.description) {
                            pdf.setFont('helvetica', 'normal');
                            pdf.setFontSize(8);
                            yPosition = addText(edu.description, margin, yPosition, pageWidth - (margin * 2), 8);
                        }
                        yPosition += 3;
                    });
                    return yPosition;
                });

                // Community Service & Volunteer Work
                if (volunteers.length > 0) {
                    addSection('COMMUNITY SERVICE & VOLUNTEER WORK', () => {
                        pdf.setFont('helvetica', 'normal');
                        pdf.setFontSize(9);
                        volunteers.forEach((vol) => {
                            checkPageBreak(12);
                            pdf.setFont('helvetica', 'bold');
                            pdf.setFontSize(9);
                            yPosition = addText(vol.title, margin, yPosition, pageWidth - (margin * 2), 9);
                            if (vol.location) {
                                pdf.setFont('helvetica', 'italic');
                                pdf.setFontSize(8);
                                yPosition = addText(vol.location, margin, yPosition, pageWidth - (margin * 2), 8);
                            }
                            if (vol.description) {
                                pdf.setFont('helvetica', 'normal');
                                pdf.setFontSize(8);
                                yPosition = addText(vol.description, margin, yPosition, pageWidth - (margin * 2), 8);
                            }
                            yPosition += 2;
                        });
                        return yPosition;
                    });
                }

                // Technical Skills
                addSection('TECHNICAL SKILLS', () => {
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(9);
                    Object.keys(skills).forEach(category => {
                        pdf.setFont('helvetica', 'bold');
                        pdf.setFontSize(10);
                        yPosition = addText(category + ':', margin, yPosition, pageWidth - (margin * 2), 10);
                        pdf.setFont('helvetica', 'normal');
                        const skillNames = skills[category].map(s => s.name).join(', ');
                        yPosition = addText(skillNames, margin, yPosition, pageWidth - (margin * 2), 9);
                        yPosition += 2;
                    });
                    return yPosition;
                });

                // Projects
                if (projects.length > 0) {
                    addSection('KEY PROJECTS', () => {
                        pdf.setFont('helvetica', 'normal');
                        pdf.setFontSize(9);
                        projects.slice(0, 5).forEach((project) => {
                            pdf.setFont('helvetica', 'bold');
                            pdf.setFontSize(9);
                            yPosition = addText(project.title, margin, yPosition, pageWidth - (margin * 2), 9);
                            pdf.setFont('helvetica', 'normal');
                            pdf.setFontSize(8);
                            yPosition = addText(project.description, margin, yPosition, pageWidth - (margin * 2), 8);
                            yPosition += 2;
                        });
                        return yPosition;
                    });
                }

                // Languages
                if (languages.length > 0) {
                    addSection('LANGUAGES', () => {
                        pdf.setFont('helvetica', 'normal');
                        pdf.setFontSize(10);
                        languages.forEach(lang => {
                            pdf.text(`• ${lang.language}: ${lang.level}`, margin, yPosition);
                            yPosition += 5;
                        });
                        return yPosition;
                    });
                }

                pdf.save('Anas_M_Abbas_ATS_Resume.pdf');
                document.body.removeChild(loadingDiv);
            } catch (error) {
                console.error('Error generating PDF:', error);
                document.body.removeChild(loadingDiv);
                alert('Error generating PDF: ' + error.message);
            }
        }, 500);
    }

    return {
        generate: generateATSPDF
    };
})();
