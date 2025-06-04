document.addEventListener('DOMContentLoaded', () => {

    const experienceData = [
        {
            id: "exp-neom",
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
            id: "exp-treble",
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
            id: "exp-krisnen",
            role: "Senior Consultant & Founding Employee",
            company: "Krisnen Management Consulting",
            period: "Jun 2021 – Apr 2023",
            location: "Remote & On-site",
            details: [
                "Developed financial models, asset management strategies, and financial analyses for hospitality and real estate investments.",
                "Managed large-scale strategy projects, benchmarking exercises, and corporate advisory services.",
                "Contributed to internal business development and private partner engagement.",
                "Recruited, hired, and onboarded the first set of management-level and entry-level consultants (20+ hires)."
            ]
        },
        {
            id: "exp-hotelschool-assistant",
            role: "Student Assistant & Treasurer",
            company: "Hotelschool The Hague",
            period: "Feb 2021 – Feb 2022",
            location: "Netherlands",
            details: [
                "Assisted in academic programs, research, and student success initiatives.",
                "Managed financial budgets, proposals, and treasury functions for the student-led Student Council.",
                "Design and implemented efficiency-enhancing digital tools to optimize operations."
            ]
        },
        {
            id: "exp-chef",
            role: "Apprenticeship as a Chef & Commis de Cuisine",
            period: "Aug 2017 – Feb 2021",
            company: "Various Fine-Dining Restaurants",
            location: "Germany & Netherlands",
            details: [
                "Professional education under the German apprenticeship system (2.5 years hybrid education) to become a certified chef.",
                "Commis de Cuisine and Tournant in a fine-dining restaurant in The Hague, Netherlands.",
                "Covered all traditional kitchen sections, breakfast service, banqueting events (both in kitchen and service), and fine dining a-la-carte (both in kitchen and service)."
            ]
        }
    ];

    const expertiseData = [
        { id: "skill-relationship", title: "Relationship Building & Collaboration", icon: "🤝", description: "Bring people together to discuss important issues and get things done.", longDescription: "It's truly rewarding to hear that colleagues often mention my ability to connect with people across various levels. I genuinely believe in building trust and clear communication through active listening and asking thoughtful questions, which helps foster a positive, collaborative team environment where everyone feels appreciated." },
        { id: "skill-reflection", title: "Reflection & Feedback", icon: "🔍", description: "Self-reflect, give emotionally intelligent feedback and speak up for change.", longDescription: "I believe in continuous growth, and I truly value feedback as a core part of professional development. Colleagues often highlight my self-awareness and how I use critique positively, driving progress and initiating beneficial changes for both myself and the team." },
        { id: "skill-innovation", title: "Innovation & Strategy Development", icon: "🚀", description: "Business innovation, corporate strategy, and tech development.", longDescription: "I enjoy a good challenge, and people often commend my approach to complex problems – even those outside my direct technical field – with creative, solution-driven thinking. I'm particularly skilled at breaking down intricate concepts into understandable stories, which helps bring fresh perspectives and innovative ideas to strategy and tech development." },
        { id: "skill-leadership", title: "Leadership & Hospitality", icon: "🌟", description: "Culture building, people development and service excellence.", longDescription: "I naturally bring positive energy and drive to my work, which I'm told motivates those around me. I genuinely enjoy taking initiative and leading by example, always striving to build strong team cultures and achieve excellence in every hospitality venture." },
        { id: "skill-financial", title: "Financial & Business Analysis", icon: "📊", description: "Feasibility studies, financial modeling, and asset management.", longDescription: "Numbers truly tell a story for me, and colleagues often recognize my strong analytical skills and careful approach to financial modeling and fluidity studies. I pride myself on being a productive and efficient professional, ensuring thoroughness and accuracy in all my work, even when facing tight deadlines." }
    ];

    const educationData = [
        {
            id: "edu-hotelschool",
            degree: "Bachelor’s Degree in International Hospitality Management",
            school: "Hotelschool The Hague | Netherlands",
            period: "2020 – 2023",
            relatedItems: ["exp-neom", "exp-treble", "exp-krisnen", "skill-innovation", "skill-leadership", "skill-financial"]
        },
        {
            id: "edu-chef",
            degree: "Apprenticeship as a Chef – Hybrid Education",
            school: "Robert Wetzlar Berufskolleg | Germany",
            period: "2017 – 2020",
            location: "Germany & Netherlands",
            relatedItems: ["exp-chef", "skill-leadership", "skill-reflection"]
        }
    ];

    const certificationsData = [
        { id: "cert-pmp", name: "Project Management Professional (PMP)", issuer: "Project Management Institute (PMI)", year: "2024", relatedItems: ["exp-neom", "exp-treble", "exp-krisnen", "skill-leadership", "skill-innovation"] },
        { id: "cert-mlp", name: "Maximizing Your Leadership Potential (MLP)", issuer: "Center for Creative Leadership", year: "2024", relatedItems: ["exp-neom", "exp-treble", "exp-krisnen", "skill-leadership", "skill-reflection"] },
        { id: "cert-cx", name: "Winning Through Customer Experience", issuer: "Bain & Company", year: "2024", relatedItems: ["exp-neom", "exp-chef", "skill-relationship", "skill-leadership"] },
        { id: "cert-fmva", name: "Financial Modeling & Valuation Analyst (FMVA)", issuer: "Corporate Finance Institute (CFI)", year: "2023", relatedItems: ["exp-treble", "exp-krisnen", "skill-financial"] }
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
        { name: "Scuba Diving", "icon": "🤿" },
        { name: "Reading", icon: "📚" },
        { name: "Fine Dining",
