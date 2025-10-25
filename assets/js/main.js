// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Navigation functionality
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetSection = item.getAttribute('data-section');
        const targetElement = document.getElementById(targetSection);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Update active nav item on scroll
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === current) {
            item.classList.add('active');
        }
    });
});

// Sidebar is now always visible - no scroll animation needed

// Progress bars animation
const progressBars = document.querySelectorAll('.progress-bar');
const observerOptions = {
    threshold: 0.5
};

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width;
            progressBar.style.width = '0%';
            setTimeout(() => {
                progressBar.style.width = width;
            }, 500);
        }
    });
}, observerOptions);

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Add event listener for mobile menu button
document.getElementById('mobileMenuBtn').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});



// Download CV functionality for sidebar
document.querySelector('aside button[class*="bg-green-400"]').addEventListener('click', () => {
    // Create a simple PDF content (in real implementation, you'd use a PDF library)
    const cvContent = `
        CURRICULUM VITAE
        Anas M. Abbas
        IT Specialist & Developer
        
        Personal Information:
        - Location: Damascus, Syria
        - Phone: +963-988 102 369
        - Email: anas.abass1@gmail.com
        
        Experience:
        - ERP Software Developer & WordPress Developer (2021-Present)
        - IT Specialist Freelance (2019-Present)
        - Programming Trainer (2019-Present)
        - IT Specialist at APEX (2017-2019)
        
        Skills:
        - PHP Yii Framework (95%)
        - C# & .NET (90%)
        - WordPress (88%)
        - SQL Server (85%)
    `;
    
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Anas_Abbas_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Compiling animation for steps
const compilingSteps = document.querySelectorAll('.compiling-step');
compilingSteps.forEach((step, index) => {
    step.style.animationDelay = `${index * 0.2}s`;
});

// Download CV functionality for main section
document.querySelector('main button[class*="border-green-400"]').addEventListener('click', () => {
    // Create a simple PDF content (in real implementation, you'd use a PDF library)
    const cvContent = `
        CURRICULUM VITAE
        Anas M. Abbas
        IT Specialist & Developer
        
        Personal Information:
        - Location: Damascus, Syria
        - Phone: +963-988 102 369
        - Email: anas.abass1@gmail.com
        
        Experience:
        - ERP Software Developer & WordPress Developer (2021-Present)
        - IT Specialist Freelance (2019-Present)
        - Programming Trainer (2019-Present)
        - IT Specialist at APEX (2017-2019)
        
        Skills:
        - PHP Yii Framework (95%)
        - C# & .NET (90%)
        - WordPress (88%)
        - SQL Server (85%)
    `;
    
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Anas_Abbas_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
