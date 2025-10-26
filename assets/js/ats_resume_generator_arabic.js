// ATS Resume Generator Arabic - استخلاص السيرة الذاتية تلقائياً من الصفحة العربية
// This script extracts data from the Arabic page and generates an ATS-friendly PDF
// Using html2canvas for proper Arabic text rendering with intelligent pagination

// Wait for all libraries to load
window.ATSResumeGeneratorArabic = (function() {
    'use strict';

    // Function to extract text content from elements
    function extractText(elements, selector) {
        const element = elements.querySelector(selector);
        return element ? element.textContent.trim() : '';
    }

    // Function to clean text - remove unwanted strings
    function cleanText(text) {
        if (!text) return '';
        return text.replace(/تحميل\s+(السيرة\s+الذاتية\s*)?(ATS\s+)?/gi, '')
                   .replace(/Download\s+(ATS\s+)?CV/gi, '')
                   .replace(/\s+/g, ' ')
                   .trim();
    }

    // Extract personal information
    function extractPersonalInfo() {
        const sidebar = document.getElementById('sidebar');
        if (!sidebar) return {};
        
        const name = extractText(sidebar, 'h1') || 'أنس م. عباس';
        const title = extractText(sidebar, '.typing-text') || 
                     extractText(sidebar, 'p.text-gray-300') ||
                     'مهندس برمجيات ومطور أنظمة ERP';
        
        const allTextWhite = sidebar.querySelectorAll('.text-white');
        const location = allTextWhite.length > 0 
            ? allTextWhite[allTextWhite.length - 1].textContent.trim() 
            : 'دمشق، سوريا';
        
        return {
            name: cleanText(name),
            title: cleanText(title),
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

    // Extract education
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
            
            const pTags = item.querySelectorAll('p.text-gray-300');
            const location = pTags.length > 0 ? pTags[0].textContent.trim() : '';
            
            let description = item.textContent.trim()
                .replace(title, '')
                .replace(location, '')
                .replace(/\s+/g, ' ')
                .trim();
            
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

    // Helper function to create page content with proper pagination
    function createPageContent(sectionHtml) {
        return `
            <div style="width: 210mm; min-height: 100vh; padding: 20mm 15mm; box-sizing: border-box; background: #fff; direction: rtl; font-family: 'Cairo', Arial, sans-serif;">
                ${sectionHtml}
            </div>
        `;
    }

    // Generate ATS-friendly PDF using html2canvas with proper pagination
    function generateATSPDF() {
        if (typeof window.jspdf === 'undefined' && typeof jsPDF === 'undefined') {
            alert('مكتبة PDF ما زالت تحمّل. يرجى الانتظار لحظة والمحاولة مرة أخرى.');
            return;
        }

        if (typeof html2canvas === 'undefined') {
            alert('مكتبة html2canvas ما زالت تحمّل. يرجى الانتظار لحظة والمحاولة مرة أخرى.');
            return;
        }

        const loadingDiv = document.createElement('div');
        loadingDiv.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;color:white;';
        loadingDiv.innerHTML = '<i class="fas fa-spinner fa-spin fa-3x mb-4"></i><p class="text-xl">جاري إنشاء السيرة الذاتية...</p>';
        document.body.appendChild(loadingDiv);

        setTimeout(() => {
            try {
                const personalInfo = extractPersonalInfo();
                const experience = extractExperience();
                const education = extractEducation();
                const skills = extractSkills();
                const projects = extractProjects();
                const languages = extractLanguages();
                const volunteers = extractVolunteer();

                console.log('Personal Info:', personalInfo);
                console.log('Experience:', experience);
                console.log('Education:', education);
                console.log('Skills:', skills);
                console.log('Projects:', projects);
                console.log('Languages:', languages);
                console.log('Volunteers:', volunteers);

                                    // Build complete HTML content with break-inside:avoid to prevent splitting
                    const completeHtml = `
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');
                            * { margin: 0; padding: 0; box-sizing: border-box; }
                                                         .experience-item, .education-item, .volunteer-item, .project-item {
                                 break-inside: avoid !important;
                                 page-break-inside: avoid !important;
                                 display: inline-block;
                                 width: 100%;
                             }
                        </style>
                        <div style="width: 210mm; min-height: auto; padding: 20mm 15mm; box-sizing: border-box; background: #fff; direction: rtl; font-family: 'Cairo', Arial, sans-serif;">
                        <!-- Header -->
                        <div style="text-align: center; margin-bottom: 25px; border-bottom: 2px solid #333; padding-bottom: 12px;">
                            <h1 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 6px;">${personalInfo.name || 'أنس م. عباس'}</h1>
                            <div style="font-size: 13px; color: #666; margin-bottom: 8px;">${personalInfo.title || 'مهندس برمجيات ومطور أنظمة ERP'}</div>
                            <div style="font-size: 9px; color: #555;">${personalInfo.email || 'anas.abass1@gmail.com'} | ${personalInfo.phone || '+963-988-102-369'} | ${personalInfo.location || 'دمشق، سوريا'}</div>
                        </div>

                        <!-- Professional Summary -->
                        <div style="margin-bottom: 18px;">
                            <div style="font-size: 13px; font-weight: 700; color: #1a1a1a; margin-bottom: 8px; padding-bottom: 4px; border-bottom: 1px solid #ddd;">ملخص مهني</div>
                            <div style="font-size: 10px; line-height: 1.6; text-align: justify; color: #444;">${personalInfo.title || 'مهندس برمجيات'} مع خبرة تزيد عن 11 عاماً في تطوير أنظمة ERP، التطوير المكدس الكامل، والتدريب التقني. خبير في PHP (Yii/Laravel)، C# (.NET)، تكاملات API، والأنظمة السحابية. حالياً CTO في New G Solution، أتولى هندسة النظام، التكاملات، وسير عمل التطوير لمنصة ERP سحابية متعددة المستأجرين.</div>
                        </div>

                                                    <!-- Experience -->
                            <div style="margin-bottom: 18px;">
                                <div style="font-size: 13px; font-weight: 700; color: #1a1a1a; margin-bottom: 8px; padding-bottom: 4px; border-bottom: 1px solid #ddd;">الخبرة المهنية</div>
                                ${experience.map(exp => `
                                                                         <div class="experience-item" style="margin-bottom: 10px; padding: 8px; border: 1px solid transparent;">
                                         <div style="font-size: 11px; font-weight: 600; color: #333; margin-bottom: 2px;">${exp.title}</div>
                                         <div style="font-size: 10px; color: #666; font-style: italic; margin-bottom: 3px;">${exp.company} | ${exp.date}</div>
                                         <div style="font-size: 9px; color: #555; line-height: 1.5; text-align: justify;">${exp.description}</div>
                                         ${exp.technologies && exp.technologies.length > 0 ? `<div style="font-size: 8px; color: #777; margin-top: 2px;">التقنيات: ${exp.technologies.join('، ')}</div>` : ''}
                                     </div>
                                `).join('')}
                            </div>

                                                    <!-- Education -->
                            <div style="margin-bottom: 18px;">
                                <div style="font-size: 13px; font-weight: 700; color: #1a1a1a; margin-bottom: 8px; padding-bottom: 4px; border-bottom: 1px solid #ddd;">التعليم</div>
                                ${education.map(edu => `
                                    <div class="education-item" style="margin-bottom: 8px;">
                                        <div style="font-size: 10px; font-weight: 600; color: #333; margin-bottom: 2px;">${edu.degree}</div>
                                        <div style="font-size: 9px; color: #666; font-style: italic; margin-bottom: 2px;">${edu.institution} | ${edu.date}</div>
                                        ${edu.description ? `<div style="font-size: 8px; color: #555; line-height: 1.4;">${edu.description}</div>` : ''}
                                    </div>
                                `).join('')}
                            </div>

                                                    ${volunteers.length > 0 ? `
                            <!-- Community Service -->
                            <div style="margin-bottom: 18px;">
                                <div style="font-size: 13px; font-weight: 700; color: #1a1a1a; margin-bottom: 8px; padding-bottom: 4px; border-bottom: 1px solid #ddd;">المساهمات المجتمعية والعمل التطوعي</div>
                                ${volunteers.map(vol => `
                                    <div class="volunteer-item" style="margin-bottom: 8px;">
                                        <div style="font-size: 10px; font-weight: 600; color: #333; margin-bottom: 2px;">${vol.title}</div>
                                        ${vol.location ? `<div style="font-size: 9px; color: #666; font-style: italic; margin-bottom: 2px;">${vol.location}</div>` : ''}
                                        ${vol.description ? `<div style="font-size: 8px; color: #555; line-height: 1.4;">${vol.description}</div>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                            ` : ''}

                        

                                                    ${projects.length > 0 ? `
                            <!-- Projects -->
                            <div style="margin-bottom: 18px;">
                                <div style="font-size: 13px; font-weight: 700; color: #1a1a1a; margin-bottom: 8px; padding-bottom: 4px; border-bottom: 1px solid #ddd;">المشاريع الرئيسية</div>
                                ${projects.slice(0, 5).map(project => `
                                    <div class="project-item" style="margin-bottom: 8px;">
                                        <div style="font-size: 10px; font-weight: 600; color: #333; margin-bottom: 2px;">${project.title}</div>
                                        <div style="font-size: 9px; color: #555; line-height: 1.4;">${project.description}</div>
                                    </div>
                                `).join('')}
                            </div>
                            ` : ''}

                        ${languages.length > 0 ? `
                        <!-- Languages -->
                        <div style="margin-bottom: 18px;">
                            <div style="font-size: 13px; font-weight: 700; color: #1a1a1a; margin-bottom: 8px; padding-bottom: 4px; border-bottom: 1px solid #ddd;">اللغات</div>
                            ${languages.map(lang => `
                                <div style="font-size: 9px; color: #555; margin-bottom: 2px;">• ${lang.language}: ${lang.level}</div>
                            `).join('')}
                        </div>
                        ` : ''}
                    </div>
                `;

                // Create container for measurement
                const measureContainer = document.createElement('div');
                measureContainer.style.cssText = 'position: absolute; left: -9999px; visibility: hidden; width: 210mm;';
                measureContainer.innerHTML = completeHtml;
                document.body.appendChild(measureContainer);

                // Wait for fonts to load
                setTimeout(() => {
                    // Get actual content height
                    const contentDiv = measureContainer.querySelector('div[style*="210mm"]');
                    if (!contentDiv) {
                        document.body.removeChild(measureContainer);
                        document.body.removeChild(loadingDiv);
                        alert('خطأ: لم يتم العثور على المحتوى');
                        return;
                    }
                    
                                         const actualHeight = contentDiv.scrollHeight;
                     const pageHeight = 1123; // A4 height in pixels (297mm at 96 DPI)
                     const maxContentHeight = pageHeight - (2 * 20 * 3.779528); // Subtract margins (20mm * DPI conversion)
                     
                     // Calculate number of pages needed
                     const numberOfPages = Math.ceil(actualHeight / maxContentHeight);
                     
                     const jsPDFLib = window.jspdf?.jsPDF || jsPDF;
                     const pdf = new jsPDFLib('p', 'mm', 'a4');

                     // Render entire content as one long image
                     const fullContainer = document.createElement('div');
                     fullContainer.style.cssText = 'position: absolute; left: -9999px; width: 210mm;';
                     fullContainer.innerHTML = completeHtml;
                     document.body.appendChild(fullContainer);

                     setTimeout(() => {
                                                   html2canvas(fullContainer, {
                              scale: 2,
                              useCORS: true,
                              logging: false,
                              backgroundColor: '#ffffff',
                              allowTaint: true
                          }).then(canvas => {
                              document.body.removeChild(fullContainer);
                              document.body.removeChild(measureContainer);

                              const imgData = canvas.toDataURL('image/jpeg', 1.0);
                              const imgWidth = 210;
                              const imgHeight = (canvas.height * imgWidth) / canvas.width;
                              const pageHeight = 297;
                              
                              let heightLeft = imgHeight;
                              let position = 0;

                              // Add first page
                              pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                              heightLeft -= pageHeight;

                              // Add additional pages with proper overlap to avoid cutting
                              while (heightLeft > -pageHeight) {
                                  position = heightLeft - imgHeight;
                                  pdf.addPage();
                                  pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                                  heightLeft -= pageHeight;
                              }

                             pdf.save('Anas_M_Abbas_ATS_Resume_Arabic.pdf');
                             document.body.removeChild(loadingDiv);
                         }).catch(error => {
                             console.error('Error generating PDF:', error);
                             document.body.removeChild(fullContainer);
                             document.body.removeChild(measureContainer);
                             document.body.removeChild(loadingDiv);
                             alert('حدث خطأ في إنشاء PDF: ' + error.message);
                         });
                     }, 200);
                }, 1500);
            } catch (error) {
                console.error('Error generating PDF:', error);
                document.body.removeChild(loadingDiv);
                alert('خطأ في إنشاء PDF: ' + error.message);
            }
        }, 500);
    }

    return {
        generate: generateATSPDF
    };
})();
