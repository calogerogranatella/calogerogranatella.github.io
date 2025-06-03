document.addEventListener('DOMContentLoaded', () => {

    const experienceData = [
        {
            role: "Business Specialist",
            company: "NEOM, Hotel Division",
            period: "Nov 2023 – Present",
            location: "Saudi Arabia",
            details: [
                "Driving strategy and innovation in one of the world's most ambitious hospitality and tourism projects.",
                "Preparing strategy documents for and presenting tech solutions and concepts to senior executive leadership.",
                "Managing the development and implementation of next-generation tech and business solutions for asset management, commercial distribution, and financial analysis.",
                "Leading the development of a cultural transformation initiative, redefining ways of working within the department to foster collaboration, efficiency, and innovation.",
                "Collaborating with cross-functional teams to develop groundbreaking hospitality concepts and business models, setting new industry standards."
            ]
        },
        {
            role: "Senior Consultant",
            company: "Treble",
            period: "Apr 2023 – Nov 2023",
            location: "Remote & On-site",
            details: [
                "Led strategic consulting initiatives in hospitality, focusing on business innovation and tech development.",
                "Delivered financial feasibility studies, labor modeling, and market research for top-tier clients in Europe and the Middle East.",
                "Played a key role in internal business growth, including talent recruitment, HR development, and strategic decisions."
            ]
        },
        {
            role: "Senior Consultant & Founding Employee",
            company: "Krisnen Management Consulting",
            period: "Jun 2021 – Apr 2023",
            location: "Remote & On-site",
            details: [
                "Developed financial models, asset management strategies, and financial analyses for hospitality and real estate investments.",
                "Managed large-scale strategy projects, benchmarking exercises",
                "Contributed to internal business development and private partner engagement.",
                "Recruited, hired, and onboarded the first set of management-level and entry-level consultants (20+ hires)."
            ]
        },
        {
            role: "Student Assistant & Treasurer",
            company: "Hotelschool The Hague",
            period: "Feb 2021 – Feb 2022",
            location: "Netherlands",
            details: [
                "Assisted in academic programs, research, and student success initiatives.",
                "Managed financial budgets, proposals, and treasury functions for the student-led Student Council.",
                "Designed and implemented efficiency-enhancing digital tools to optimize operations."
            ]
        },
        {
            role: "Apprenticeship as a Chef & Commis de Cuisine",
            company: "Various Fine-Dining Restaurants",
            period: "Aug 2017 – Feb 2021",
            location: "Germany & Netherlands",
            details: [
                "Professional education under the German apprenticeship system (2.5 years hybrid education) to become a certified chef.",
                "Commis de Cuisine and Tournant in a fine-dining restaurant in The Hague, Netherlands.",
                "Covered all traditional kitchen sections, breakfast service, banqueting events (both in kitchen and service), and fine dining a-la-carte (both in kitchen and service)."
            ]
        }
    ];

    const expertiseData = [
        { title: "Relationship Building & Collaboration", icon: "🤝", description: "Bring people together to discuss important issues and get things done.", longDescription: "It's truly rewarding to hear that colleagues often mention my ability to connect with people across various levels. I genuinely believe in building trust and clear communication through active listening and asking thoughtful questions, which helps foster a positive, collaborative team environment where everyone feels appreciated." },
        { title: "Reflection & Feedback", icon: "🔍", description: "Self-reflect, give emotionally intelligent feedback and speak up for change.", longDescription: "I believe in continuous growth, and I truly value feedback as a core part of professional development. Colleagues often highlight my self-awareness and how I use critique positively, driving progress and initiating beneficial changes for both myself and the team." },
        { title: "Innovation & Strategy Development", icon: "🚀", description: "Business innovation, corporate strategy, and tech development.", longDescription: "I enjoy a good challenge, and people often commend my approach to complex problems – even those outside my direct technical field – with creative, solution-driven thinking. I'm particularly skilled at breaking down intricate concepts into understandable stories, which helps bring fresh perspectives and innovative ideas to strategy and tech development, always aiming to add clear value." },
        { title: "Leadership & Hospitality", icon: "🌟", description: "Culture building, people development and service excellence.", longDescription: "I naturally bring positive energy and drive to my work, which I'm told motivates those around me. I genuinely enjoy taking initiative and leading by example, always striving to build strong team cultures and achieve excellence in every hospitality venture." },
        { title: "Financial & Business Analysis", icon: "📊", description: "Feasibility studies, financial modeling, and asset management.", longDescription: "Numbers truly tell a story for me, and colleagues often recognize my strong analytical skills and careful approach to financial modeling and feasibility studies. I pride myself on being a productive and efficient professional, ensuring thoroughness and accuracy in all my work, even when facing tight deadlines." }
    ];

    const educationData = [
        {
            degree: "Bachelor’s Degree in International Hospitality Management",
            school: "Hotelschool The Hague | Netherlands",
            period: "2020 – 2023"
        },
        {
            degree: "Apprenticeship as a Chef – Hybrid Education",
            school: "Robert Wetzlar Berufskolleg | Germany",
            period: "2017 – 2020"
        }
    ];

    const certificationsData = [
        { name: "Project Management Professional (PMP)", issuer: "Project Management Institute (PMI)", year: "2024" },
        { name: "Maximizing Your Leadership Potential (MLP)", issuer: "Center for Creative Leadership", year: "2024" },
        { name: "Winning Through Customer Experience", issuer: "Bain & Company", year: "2024" },
        { name: "Financial Modeling & Valuation Analyst (FMVA)", issuer: "Corporate Finance Institute (CFI)", year: "2023" }
    ];

    const languageData = {
        labels: ['German', 'Italian', 'English', 'Spanish', 'Dutch', 'Arabic'],
        datasets: [{
            label: 'Proficiency',
            data: [100, 100, 95, 70, 40, 20], 
            backgroundColor: 'rgba(56, 178, 172, 0.6)',
            borderColor: 'rgba(173, 216, 230, 1)',
            borderWidth: {
                top: 0,
                right: 0,
                bottom: 2,
                left: 0
            }
        }]
    };

    const interestsData = [
        { name: "Kitesurfing", icon: "🪁" },
        { name: "Tennis", icon: "🎾" },
        { name: "Scuba Diving", icon: "🤿" },
        { name: "Reading", icon: "📚" },
        { name: "Fine Dining", icon: "🍽️" }
    ];

    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');
    const timelineContainer = document.getElementById('timeline-container');
    const experienceDetailsContainer = document.getElementById('experience-details');
    const expertiseGrid = document.getElementById('expertise-grid');
    const interestsGrid = document.getElementById('interests-grid');
    const educationContainer = document.getElementById('education-container');
    const certificationsContainer = document.getElementById('certifications-container');
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const mobileNavClose = document.getElementById('mobile-nav-close');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
    let languageChartInstance = null;
    
    function navigateTo(hash) {
        // Remove active class from all sections and nav links
        sections.forEach(section => section.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));
        mobileNavLinks.forEach(link => link.classList.remove('active'));

        // Add active class to the target section and nav links
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            targetSection.classList.add('active');
            document.querySelector(`.nav-link[href="${hash}"]`)?.classList.add('active');
            document.querySelector(`.nav-link-mobile[href="${hash}"]`)?.classList.add('active');

            // Scroll to the top of the main content area
            document.querySelector('main').scrollTo(0, 0);

            // Special handling for skills section to render charts/interests
            if (targetSection.id === 'skills' && !languageChartInstance) {
                renderLanguageChart();
                renderInterests();
            }
        } else {
            // Default to home if hash is invalid or not found
            document.getElementById('home').classList.add('active');
            document.querySelector('.nav-link[href="#home"]')?.classList.add('active');
            document.querySelector('.nav-link-mobile[href="#home"]')?.classList.add('active');
            document.querySelector('main').scrollTo(0, 0); // Scroll to top for default home
        }

        // Close mobile nav after navigation
        if (mobileNav.classList.contains('active')) {
            toggleMobileNav();
        }
    }

    function renderExperience() {
        timelineContainer.innerHTML = experienceData.map((exp, index) => `
            <div class="timeline-item relative pl-8 pb-8 cursor-pointer" data-index="${index}">
                <div class="timeline-dot absolute left-0 top-1 w-5 h-5 bg-gray-600 rounded-full border-4 border-[#1A202C] transition-all duration-300"></div>
                <div class="timeline-content">
                    <h3 class="text-lg font-bold text-white transition-colors duration-300">${exp.role}</h3>
                    <p class="text-sm text-gray-400">${exp.company}</p>
                    <p class="text-xs text-gray-500">${exp.period}</p>
                </div>
            </div>
        `).join('');

        // Re-attach the vertical line as a separate element
        const timelineWrapper = document.querySelector('.md\\:w-1\\/3');
        if (timelineWrapper && !timelineWrapper.querySelector('.timeline-vertical-line')) {
            const line = document.createElement('div');
            line.className = 'timeline-vertical-line absolute left-2.5 top-0 h-full w-0.5 bg-gray-700';
            timelineWrapper.prepend(line);
        }

        document.querySelectorAll('.timeline-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const index = e.currentTarget.dataset.index;
                updateExperienceDetails(index);
                
                document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
                e.currentTarget.classList.add('active');
            });
        });
        
        updateExperienceDetails(0);
        document.querySelector('.timeline-item').classList.add('active');
    }
    
    function updateExperienceDetails(index) {
        const exp = experienceData[index];
        experienceDetailsContainer.innerHTML = `
            <h3 class="text-2xl font-bold text-white mb-2">${exp.role}</h3>
            <p class="text-md font-semibold text-[#38B2AC] mb-1">${exp.company}</p>
            <p class="text-sm text-gray-400 mb-4">${exp.period} | ${exp.location}</p>
            <ul class="space-y-2 text-gray-300 list-disc list-inside">
                ${exp.details.map(d => `<li>${d}</li>`).join('')}
            </ul>
        `;
    }

    function renderExpertise() {
        expertiseGrid.innerHTML = expertiseData.map(skill => `
            <div class="bg-[#1A202C] p-4 rounded-lg text-center transition-transform duration-300 transform hover:scale-105 hover:bg-gray-800 flex flex-col items-center justify-start overflow-hidden relative group"
                 onmouseenter="this.classList.add('skill-card-expanded')"
                 onmouseleave="this.classList.remove('skill-card-expanded')">
                <div class="text-4xl mb-2">${skill.icon}</div>
                <h4 class="text-lg font-bold text-white">${skill.title}</h4>
                <p class="text-sm text-gray-400 mt-2 skill-card-description w-full">${skill.description}</p>
                <p class="text-xs text-gray-500 mt-2 skill-card-additional-text w-full">${skill.longDescription}</p>
            </div>
        `).join('');
    }

    function renderEducation() {
        educationContainer.innerHTML = educationData.map(edu => `
            <div class="bg-[#1A202C] p-4 rounded-lg">
                <h4 class="text-lg font-bold text-white">${edu.degree}</h4>
                <p class="text-md text-[#38B2AC]">${edu.school}</p>
                <p class="text-sm text-gray-500">${edu.period}</p>
            </div>
        `).join('');
    }

    function renderCertifications() {
            certificationsContainer.innerHTML = certificationsData.map(cert => `
            <div class="bg-[#1A202C] p-4 rounded-lg">
                <h4 class="text-lg font-bold text-white">${cert.name}</h4>
                <p class="text-md text-[#38B2AC]">${cert.issuer}</p>
                <p class="text-sm text-gray-500">${cert.year}</p>
            </div>
        `).join('');
    }

    function renderLanguageChart() {
        const ctx = document.getElementById('languageChart').getContext('2d');
        if (languageChartInstance) {
            languageChartInstance.destroy();
        }
        languageChartInstance = new Chart(ctx, {
            type: 'bar',
            data: languageData,
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label === 'German' || label === 'Italian') {
                                    return 'Native';
                                } else if (label === 'English') {
                                    return 'Fluent (C1/C2 level)';
                                } else if (label === 'Spanish') {
                                    return 'Conversational Proficiency';
                                } else if (label === 'Dutch' || label === 'Arabic') {
                                    return 'Elementary Proficiency';
                                }
                                return '';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        min: 0,
                        max: 100,
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        ticks: { 
                            display: false,
                            callback: function(value) {
                                return '';
                            }
                        }
                    },
                    y: {
                        grid: { display: false },
                        ticks: { color: '#CBD5E0', font: { size: 14 } }
                    }
                }
            }
        });
    }

    function renderInterests() {
        interestsGrid.innerHTML = interestsData.map(interest => `
            <div class="interest-item flex flex-col items-center p-2">
                <span class="text-4xl mb-2">${interest.icon}</span>
                <span class="text-sm text-gray-400 text-center">${interest.name}</span>
            </div>
        `).join('');
    }

    function toggleMobileNav() {
        mobileNav.classList.toggle('active');
        mobileNavBackdrop.classList.toggle('active');
    }

    mobileNavToggle.addEventListener('click', toggleMobileNav);
    mobileNavClose.addEventListener('click', toggleMobileNav);
    mobileNavBackdrop.addEventListener('click', toggleMobileNav); // Close when clicking outside

    // Use a single event listener for all navigation links (desktop and mobile)
    document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Explicitly prevent default link behavior
            const hash = e.currentTarget.getAttribute('href');
            navigateTo(hash); // Directly call navigateTo
        });
    });

    window.addEventListener('hashchange', () => navigateTo(window.location.hash));
    
    // Initial render based on URL hash or default to #home
    renderExperience();
    renderExpertise();
    renderEducation();
    renderCertifications();
    navigateTo(window.location.hash || '#home');
});
