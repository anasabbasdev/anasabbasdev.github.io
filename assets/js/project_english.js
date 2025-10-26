
// Project modal functionality
const projects = {
    project1 : {
leftCornerColor: 'gray-700',
Color: 'white',
cornerText: 'ERP Software',
cornerColor: 'gray-600',
cornerIcon: 'database',
faClass: 'fas',
title: 'New G Solution – Cloud ERP Platform',
image: 'assets/img/projects/ngs.png',
description:
'Joined New G Solution in 2021 as a WordPress developer, later contributing to the ERP’s backend development, and currently serving as CTO overseeing system architecture, integrations, and development workflows for the company’s multi-tenant cloud ERP.',
features: [
'Collaborated on ERP modules covering finance, inventory, RMA, returns, payroll, and manufacturing processes',
'Participated in the design of cost distribution and BOM manufacturing logic integrated with warehouse and accounting data',
'Supported the implementation of dynamic RMA and refurbishing systems with synchronized stock management',
'Supervised and contributed to integrations with 50+ external APIs (Amazon, eBay, Shopify, Walmart, ShipStation, FedEx, UPS, USPS, etc.)',
'Assisted in designing and maintaining a multi-tenant cloud deployment with custom branding and access rules per client',
'Integrated WordPress portals for company and client access',
'Currently leading system architecture, backend optimization, and cross-team collaboration as CTO'
],
technologies: [
'PHP (Yii Framework)',
'MySQL / MariaDB',
'AWS EC2 & S3',
'RESTful APIs',
'JavaScript / jQuery',
'Bootstrap / Tailwind',
'ACL / OBAC / RBAC',
'API Integrations',
'Multi-Tenant ERP',
'WordPress Integration'
],
// github: 'https://github.com/anasabbasdev/newg-erp',
demo: 'https://newgsolution.com'
}

        ,
        project2 : {
            leftCornerColor: 'red-500',
        Color: 'white',
        cornerText: 'B2B Platform',
        cornerColor: 'red-500',
        cornerIcon: 'laravel',
        faClass: 'fab',
        title: 'B2B E-Commerce Platform (Part of New G Solution)',
        image: 'assets/img/projects/ngs.png', // Add the correct path to the image
        description:
            'A Laravel-based B2B e-commerce platform built on the S-Cart framework, directly integrated with the New G Solution ERP ecosystem. Designed for multi-client deployments with secure, isolated sub-domains.',
        features: [
            'Maintained and expanded the platform architecture under New G Solution ERP',
            'Implemented RMA and Order History modules with dynamic cost calculations',
            'Enhanced customer privacy by securing media and images per sub-domain',
            'Integrated order and RMA data flow with the ERP backend for real-time cost tracking',
            'Optimized performance, caching, and data isolation for multi-tenant clients'
        ],
        technologies: [
            'Laravel Framework',
            'S-Cart Theme',
            'PHP',
            'MySQL',                    
            'ERP Integration',
            'Order & RMA Modules',
            'Multi-Tenant Architecture',
            'Secure',
            'Isolated Sub-Domains'
        ],
        //   github: 'https://github.com/anasabbasdev/b2b-platform',
        demo: 'https://newgsolution.com'
        }
,               
project3: {
leftCornerColor: 'blue-500',
Color: 'white',
cornerText: 'User Guide Platform',
cornerColor: 'blue-500',
cornerIcon: 'wordpress',
faClass: 'fab',
title: 'New G Solution – User Guide Platform',
image: 'assets/img/projects/ngs.png',
description:
'A dedicated WordPress-based documentation platform developed as part of the New G Solution ERP ecosystem. Fully customized to provide structured user guides, clean navigation, and an optimized reading experience for clients and internal teams.',
features: [
'Developed and structured the full WordPress site architecture for documentation and training materials',
'Customized and optimized the theme design, navigation, and layout for clarity and usability',
'Implemented responsive design, search structure, and dynamic content templates for future scalability',
'Handled all technical setup, configuration, and deployment of the platform'
],
technologies: [
'WordPress',
'PHP',
'HTML / CSS / JavaScript',
'Custom Theme Development',
'Responsive Design'
],
//   github: 'https://github.com/anasabbasdev/newg-userguide',
demo: 'https://newgsolution.com/userguide'
}
,
project4 : {
leftCornerColor: 'blue-500',
Color: 'white',
cornerText: 'Official Website',
cornerColor: 'blue-500',
cornerIcon: 'wordpress',
faClass: 'fab',
title: 'New G Solution – Official Website',
image: 'assets/img/projects/ngs.png',
description:
'The main corporate website for New G Solution ERP, fully developed and maintained by me. Built on WordPress to showcase ERP features, manage client subscriptions, and support affiliate marketing through MemberPress and EasyAffiliate integrations. Design and visuals by <a href="https://www.instagram.com/noor.aldeen93" target="_blank" class="text-green-400 hover:underline">Noor Al-Din Salama</a>.',
features: [
'Full WordPress development and technical management of the company’s main website',
'Integrated MemberPress for client subscription and license management',
'Implemented EasyAffiliate for the loyalty and affiliate program',
'Developed dedicated sections for product features, blog articles, and marketing pages with custom theme development',
'Handled server configuration, backups, security hardening, and ongoing maintenance',
'Customized design, layout, and responsive UI for consistent brand identity'
],
technologies: [
'WordPress',
'PHP',
'MemberPress',
'EasyAffiliate',
'HTML / CSS / JavaScript',
'Responsive Design',
'Security & Backups'
],
//   github: 'https://github.com/anasabbasdev/newg-main-website',
demo: 'https://newgsolution.com/'
},
project5 : {
leftCornerColor: 'gray-700',
cornerText: '',
cornerColor: 'gray-700',
cornerIcon: '',
faClass: '',
Color: 'gray-700',
title: 'DXB Karaoke – Music Store Website',
image: 'assets/img/projects/dxbkaraoke.png',
description:
'A bilingual karaoke selection website for a Dubai-based restaurant concept. The platform allows guests to browse and choose from over 16,000 karaoke tracks in multiple languages, submit their selections directly via WhatsApp, and have them prepared manually by staff for live performances.',
features: [
'Custom WordPress + WooCommerce setup used as a structured catalog for karaoke tracks (no online payment)',
'Interactive song selection form integrated with WhatsApp for instant submission',
'Supports over 16,000 karaoke tracks across multiple languages and genres',
'Implemented custom singer taxonomy with alphabetical sorting (Arabic, English, and others)',
'Polylang configuration for bilingual Arabic–English interface without product duplication',
'Optimized theme and UI for fast navigation, responsive design, and mobile-first usability',
'Full technical setup, plugin configuration, and hosting integration setup'
],
technologies: [
'WordPress',
'WooCommerce (Catalog Mode)',
'PHP',
'Polylang',
'XStore Theme',
'HTML / CSS / JavaScript',
'Custom Taxonomies',
'WhatsApp Integration'
],
demo: 'https://dxbkaraoke.com/shop/'
},
project6 : {
leftCornerColor: 'green-500',
Color: 'white',
cornerText: 'Shopify App',
cornerColor: 'green-500',
cornerIcon: 'shopify',
faClass: 'fab',
title: 'New G Solution – Shopify App Integration',
image: 'assets/img/projects/ngs.png',
description:
'An officially approved Shopify App listed on the Shopify App Store — marking a major milestone for New G Solution ERP. The app enables real-time synchronization of products, quantities, and orders between Shopify stores and the ERP cloud system, helping merchants streamline multi-channel operations efficiently.',
features: [
'Officially published and approved on Shopify App Store after technical and compliance review',
'Integrates Shopify stores directly with New G Solution ERP for real-time product, inventory, and order sync',
'Provides unified control of quantities, SKU, Master SKU, product categories, and dynamic cost across sales channels',
'Includes tiered subscription plans',
'Developed using secure REST API and GraphQL communication between Shopify and New G Solution ERP backend'
],
technologies: [
'Shopify',  
'Shopify REST API',
'Cloud Sync',
'Product Categories',
'SKU',
'Master SKU',
'Tiered Subscription Plans',
'Shopify GraphQL API',    
'PHP Yii Framework',
'MariaDB',
'OAuth 2.0 Authentication',
'RESTful APIs',    
],
// github: 'https://github.com/anasabbasdev/newg-shopify-app',
demo: 'https://apps.shopify.com/newgsolutionerp'
},
project7 : {
leftCornerColor: 'gray-700',
cornerText: '',
cornerColor: 'gray-700',
cornerIcon: '',
faClass: '',
Color: 'gray-700',
title: 'DXB Media Agency – Corporate Website (Dubai)',
image: 'assets/img/projects/dxbagency.svg',
description:
'Developed and deployed the official website for DXB Media Agency in Dubai using WordPress with a fully customised theme and tailored architecture. The site showcases the agency’s portfolio, services, blog and contact functionality, delivering a premium user experience and reflecting the brand’s modern identity.  Design and visuals by <a href="https://www.instagram.com/noor.aldeen93" target="_blank" class="text-green-400 hover:underline">Noor Al-Din Salama</a>.',
features: [
'Full WordPress installation and theme customisation from scratch',
'Development of services & portfolio sections including dynamic project gallery',
'Optimised responsive design and cross-device UI for international clients',
'Implemented blog module and CMS structure to allow easy future updates',
'Managed site performance, hosting setup, backups and security hardening'
],
technologies: [
'WordPress',
'PHP',
'Custom Theme Development',
'HTML / CSS / JavaScript',
'Responsive Design',
'Performance Optimisation'
],
demo: 'https://dxb-agency.com/'
}

,
project9 : {
leftCornerColor: 'white',
Color: 'white',
cornerText: '',
cornerColor: 'white',
cornerIcon: '',
faClass: '',
title: 'Anbar Restaurant – Interactive Digital Menu (Dubai)',
image: 'assets/img/projects/anbar.png',
description:
'Developed the official digital menu website for Anbar Restaurant in Dubai using WordPress. The site was engineered specifically for iPad in-restaurant use, providing a fast, elegant, and touch-friendly interface that mirrors a native app experience.  Design and visuals by <a href="https://www.instagram.com/noor.aldeen93" target="_blank" class="text-green-400 hover:underline">Noor Al-Din Salama</a>.',
features: [
'Custom WordPress development tailored for digital menu display only (no cart or checkout)',
'Responsive layout optimised for iPad and tablet usage',
'High-performance image loading and category-based navigation for dishes',
'Clean bilingual design supporting both Arabic and English menu views',
'Handled theme customisation, plugin setup, hosting, and ongoing maintenance'
],
technologies: [
'WordPress',
'PHP',
'HTML / CSS / JavaScript',
'Custom Theme',
'Responsive Design',
'Performance Optimisation'
],
demo: 'https://anbar-rest.com'
},
project10 : {
leftCornerColor: 'gray-700',
cornerText: '',
cornerColor: 'gray-700',
cornerIcon: '',
faClass: '',
Color: 'gray-700',
title: 'Caspersy Restaurant – Bilingual Dynamic Menu',
image: 'assets/img/projects/casper.png',
description:
'Developed a fully bilingual digital menu website for Caspersy Restaurant using WordPress. The platform enables restaurant owners to update prices and items easily by uploading Excel files from the admin dashboard, ensuring effortless menu management and accurate real-time pricing.',
features: [
'Custom WordPress development with bilingual Arabic–English interface',
'Automated Excel import feature for price and item updates directly from the admin panel',
'Dynamic menu categories with smooth navigation and responsive design',
'Optimised layout for tablets and in-restaurant use',
'Theme customisation, performance optimisation, and hosting setup handled end-to-end'
],
technologies: [
'WordPress',
'PHP',
'Excel Import Integration',
'HTML / CSS / JavaScript',
'Responsive Design',
'Multilingual Support'
],
demo: 'https://caspersy.com'
},
project11 : {

cornerText: '',
title: 'Augmented Reality for ERP Employee Training',
image: 'assets/img/projects/ar-thesis.png',
description:
'An applied research project forming the Master’s thesis of Anas Abbas, exploring how Augmented Reality (AR) can enhance training efficiency for ERP system employees. The project focuses on interactive modules, visual guidance, and immersive task simulation within the New G Solution ERP environment.',
features: [
'Applied research conducted in real ERP environment',
'AR prototypes for onboarding and process visualization',
'Improved comprehension and task accuracy through 3D interaction',
'Bridging academic research with enterprise software development'
],
technologies: [
'Augmented Reality (AR)',
'Web Science',
'ERP Systems',
'3D Visualization'
]
}




 
};
// <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover rounded-lg mb-6">
function openProjectModal(projectId) {
    const project = projects[projectId];
    if (!project) return;

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalContent').innerHTML = `
        
                
        
                <div class="relative bg-${project.Color} p-6 flex items-center justify-center object-contain rounded-lg mb-6 w-full h-64">
                <span class="absolute top-2 left-2 bg-${project.leftCornerColor} text-${project.Color} text-xs px-2 py-1 rounded">
                    ${project.cornerText}
                </span>
                <img src="${project.image}" alt="${project.title}" class=" object-contain h-64 p-7">
                <div class="absolute top-2 right-2 bg-${project.cornerColor} text-white p-2 rounded-full shadow-md">
                    <i class="${project.faClass} fa-${project.cornerIcon} text-lg"></i>
                </div>
                </div>
        <p class="text-gray-300 text-lg leading-relaxed mb-6">${project.description}</p>
        
        <div class="mb-6">
            <h4 class="text-xl font-bold mb-4">Key Features:</h4>
            <ul class="space-y-2">
                ${project.features.map(feature => `<li class="flex items-center space-x-2"><i class="fas fa-check text-green-400"></i><span>${feature}</span></li>`).join('')}
            </ul>
        </div>
        
        <div class="mb-6">
            <h4 class="text-xl font-bold mb-4">Technologies Used:</h4>
            <div class="flex flex-wrap gap-2">
                ${project.technologies.map(tech => `<span class="px-3 py-1 bg-green-400/20 text-green-400 rounded-full">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div class="flex space-x-4">
         
            <a href="${project.demo}" target="_blank" class="flex-1 bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center">
                <i class="fas fa-external-link-alt mr-2"></i>Live Demo
            </a>
        </div>
    `;
    
//     <a href="${project.github}" target="_blank" class="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center">
//     <i class="fab fa-github mr-2"></i>View Code
// </a>
    document.getElementById('projectModal').classList.remove('hidden');
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.add('hidden');
}

// Close modal on outside click
document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeProjectModal();
    }
});