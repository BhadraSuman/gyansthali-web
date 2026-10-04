/**
 * GYAN STHALI PUBLIC SCHOOL - KALAJHARIA, JAMTARA, JHARKHAND
 * Central Content Configuration
 * 
 * Verified Research Information:
 * - UDISE Code: 20191509702
 * - Established: 2007
 * - Location: Kalajharia-1, Kalajharia, Karmatanr Vidyasagar, Jamtara, Jharkhand - 815352
 * - Coordinates: 24.0367304, 86.7323
 * - Category: Primary with Upper Primary (Classes LKG - VIII)
 * - Platform Provider: Uddipta Tech Solution
 */

export interface SchoolContent {
  meta: {
    name: string;
    googleMapsName: string;
    locality: string;
    block: string;
    district: string;
    state: string;
    pin: string;
    fullAddress: string;
    udiseCode: string;
    established: number;
    type: string;
    area: string;
    geo: {
      latitude: number;
      longitude: number;
    };
    googleMapsUrl: string;
    googlePlaceIdHex: string;
    affiliation: string;
    affiliationStatus: string;
    classesOffered: string;
    entryClass: string;
    platformProvider: string;
  };
  contact: {
    fullAddress: string;
    phonePrimary: string;
    phoneSecondary: string;
    whatsappNumber: string;
    whatsappLink: string;
    email: string;
    officeHours: string;
    schoolTimings: string;
  };
  social: {
    facebook: string;
    youtube: string;
    instagram: string;
  };
  flags: {
    showTestimonials: boolean;
    showTransportFacility: boolean;
    showDigitalPlatformDemo: boolean;
    enableBilingualToggle: boolean;
  };
  en: {
    nav: {
      home: string;
      about: string;
      academics: string;
      facilities: string;
      notices: string;
      faculty: string;
      gallery: string;
      admissions: string;
      contact: string;
      applyNow: string;
      callUs: string;
    };
    hero: {
      badge: string;
      headline: string;
      subheadline: string;
      ctaPrimary: string;
      ctaSecondary: string;
      floatingChips: {
        chip1: string;
        chip2: string;
        chip3: string;
      };
      scrollPrompt: string;
    };
    stats: Array<{
      id: string;
      label: string;
      value: string;
      footnote?: string;
      icon: 'Calendar' | 'Users' | 'BookOpen' | 'School';
    }>;
    about: {
      tag: string;
      heading: string;
      story: string;
      missionTitle: string;
      missionText: string;
      visionTitle: string;
      visionText: string;
      principal: {
        badge: string;
        name: string;
        title: string;
        quote: string;
        image: string;
      };
    };
    whyChooseUs: {
      tag: string;
      heading: string;
      subheading: string;
      features: Array<{
        title: string;
        description: string;
        icon: 'Award' | 'ShieldCheck' | 'Monitor' | 'Trophy' | 'HeartHandshake' | 'UserCheck';
      }>;
    };
    notices: {
      tag: string;
      heading: string;
      subheading: string;
      items: Array<{
        id: string;
        title: string;
        date: string;
        category: 'Admissions' | 'Exams' | 'Events' | 'Official';
        summary: string;
        isUrgent?: boolean;
        pdfAvailable?: boolean;
      }>;
    };
    faculty: {
      tag: string;
      heading: string;
      subheading: string;
      notice: string;
      members: Array<{
        id: string;
        name: string;
        designation: string;
        subject: string;
        qualification: string;
        experience: string;
        image: string;
      }>;
    };
    academics: {
      tag: string;
      heading: string;
      subheading: string;
      sideImage: string;
      highlights: string[];
      stages: Array<{
        id: string;
        title: string;
        grades: string;
        ageGroup: string;
        focus: string;
        subjects: string[];
      }>;
    };
    facilities: {
      tag: string;
      heading: string;
      subheading: string;
      items: Array<{
        id: string;
        title: string;
        description: string;
        verificationBadge: string;
        icon: 'BookOpen' | 'Laptop' | 'School' | 'Droplet' | 'Sparkles' | 'ShieldCheck' | 'Bus' | 'Activity' | 'FlaskConical';
        imageSlot: string;
        enabled: boolean;
      }>;
    };
    events: {
      tag: string;
      heading: string;
      subheading: string;
      items: Array<{
        id: string;
        title: string;
        date: string;
        category: string;
        description: string;
        imageSlot: string;
      }>;
    };
    gallery: {
      tag: string;
      heading: string;
      subheading: string;
      categories: string[];
      items: Array<{
        id: string;
        title: string;
        category: string;
        imageSlot: string;
      }>;
    };
    admissions: {
      tag: string;
      heading: string;
      subheading: string;
      session: string;
      entryClassInfo: string;
      steps: Array<{
        stepNumber: string;
        title: string;
        description: string;
      }>;
      documentsChecklist: string[];
      feeNote: string;
      whatsappCtaText: string;
    };
    testimonials: {
      tag: string;
      heading: string;
      subheading: string;
      items: Array<{
        id: string;
        parentName: string;
        relation: string;
        quote: string;
        rating: number;
      }>;
    };
    digitalPlatform: {
      tag: string;
      heading: string;
      subheading: string;
      badge: string;
      provider: string;
      portals: Array<{
        title: string;
        badge: string;
        description: string;
        features: string[];
      }>;
    };
    faq: {
      tag: string;
      heading: string;
      subheading: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
    contact: {
      tag: string;
      heading: string;
      subheading: string;
      getDirections: string;
      formTitle: string;
      formSubtitle: string;
    };
    footer: {
      blurb: string;
      quickLinksTitle: string;
      academicsTitle: string;
      contactTitle: string;
      udiseInfo: string;
      designedWithCare: string;
      copyright: string;
      backToTop: string;
    };
  };
  hi: {
    nav: {
      home: string;
      about: string;
      academics: string;
      facilities: string;
      notices: string;
      faculty: string;
      gallery: string;
      admissions: string;
      contact: string;
      applyNow: string;
      callUs: string;
    };
    hero: {
      badge: string;
      headline: string;
      subheadline: string;
      ctaPrimary: string;
      ctaSecondary: string;
      floatingChips: {
        chip1: string;
        chip2: string;
        chip3: string;
      };
      scrollPrompt: string;
    };
    stats: Array<{
      id: string;
      label: string;
      value: string;
      footnote?: string;
      icon: 'Calendar' | 'Users' | 'BookOpen' | 'School';
    }>;
    about: {
      tag: string;
      heading: string;
      story: string;
      missionTitle: string;
      missionText: string;
      visionTitle: string;
      visionText: string;
      principal: {
        badge: string;
        name: string;
        title: string;
        quote: string;
        image: string;
      };
    };
    whyChooseUs: {
      tag: string;
      heading: string;
      subheading: string;
      features: Array<{
        title: string;
        description: string;
        icon: 'Award' | 'ShieldCheck' | 'Monitor' | 'Trophy' | 'HeartHandshake' | 'UserCheck';
      }>;
    };
    notices: {
      tag: string;
      heading: string;
      subheading: string;
      items: Array<{
        id: string;
        title: string;
        date: string;
        category: 'Admissions' | 'Exams' | 'Events' | 'Official';
        summary: string;
        isUrgent?: boolean;
        pdfAvailable?: boolean;
      }>;
    };
    faculty: {
      tag: string;
      heading: string;
      subheading: string;
      notice: string;
      members: Array<{
        id: string;
        name: string;
        designation: string;
        subject: string;
        qualification: string;
        experience: string;
        image: string;
      }>;
    };
    academics: {
      tag: string;
      heading: string;
      subheading: string;
      sideImage: string;
      highlights: string[];
      stages: Array<{
        id: string;
        title: string;
        grades: string;
        ageGroup: string;
        focus: string;
        subjects: string[];
      }>;
    };
    facilities: {
      tag: string;
      heading: string;
      subheading: string;
      items: Array<{
        id: string;
        title: string;
        description: string;
        verificationBadge: string;
        icon: 'BookOpen' | 'Laptop' | 'School' | 'Droplet' | 'Sparkles' | 'ShieldCheck' | 'Bus' | 'Activity' | 'FlaskConical';
        imageSlot: string;
        enabled: boolean;
      }>;
    };
    events: {
      tag: string;
      heading: string;
      subheading: string;
      items: Array<{
        id: string;
        title: string;
        date: string;
        category: string;
        description: string;
        imageSlot: string;
      }>;
    };
    gallery: {
      tag: string;
      heading: string;
      subheading: string;
      categories: string[];
      items: Array<{
        id: string;
        title: string;
        category: string;
        imageSlot: string;
      }>;
    };
    admissions: {
      tag: string;
      heading: string;
      subheading: string;
      session: string;
      entryClassInfo: string;
      steps: Array<{
        stepNumber: string;
        title: string;
        description: string;
      }>;
      documentsChecklist: string[];
      feeNote: string;
      whatsappCtaText: string;
    };
    testimonials: {
      tag: string;
      heading: string;
      subheading: string;
      items: Array<{
        id: string;
        parentName: string;
        relation: string;
        quote: string;
        rating: number;
      }>;
    };
    digitalPlatform: {
      tag: string;
      heading: string;
      subheading: string;
      badge: string;
      provider: string;
      portals: Array<{
        title: string;
        badge: string;
        description: string;
        features: string[];
      }>;
    };
    faq: {
      tag: string;
      heading: string;
      subheading: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
    contact: {
      tag: string;
      heading: string;
      subheading: string;
      getDirections: string;
      formTitle: string;
      formSubtitle: string;
    };
    footer: {
      blurb: string;
      quickLinksTitle: string;
      academicsTitle: string;
      contactTitle: string;
      udiseInfo: string;
      designedWithCare: string;
      copyright: string;
      backToTop: string;
    };
  };
}

export const schoolConfig: SchoolContent = {
  meta: {
    name: "Gyan Sthali Public School",
    googleMapsName: "Gyan Sthali Public School Kalajharia",
    locality: "Kalajharia-1, Kalajharia",
    block: "Karmatanr Vidyasagar",
    district: "Jamtara",
    state: "Jharkhand",
    pin: "815352",
    fullAddress: "Kalajharia-1, Karmatanr Vidyasagar, Jamtara, Jharkhand – 815352",
    udiseCode: "20191509702",
    established: 2007,
    type: "Co-educational",
    area: "Rural",
    geo: {
      latitude: 24.0367304,
      longitude: 86.7323
    },
    googleMapsUrl: "https://maps.app.goo.gl/A86E4pZyvebdmsZc9",
    googlePlaceIdHex: "0x39f6cda815063115:0x4ecc4b8bf3267e17",
    affiliation: "Affiliation / recognition status to be confirmed with management [EDIT]",
    affiliationStatus: "Pending Management Verification (Public UDISE: 20191509702)",
    classesOffered: "LKG to Class VIII",
    entryClass: "LKG (Entry Class • 25% RTE Quota)",
    platformProvider: "Uddipta Tech Solution"
  },

  contact: {
    fullAddress: "Kalajharia-1, Karmatanr Vidyasagar, Jamtara, Jharkhand – 815352",
    phonePrimary: "[EDIT] +91 98765 43210",
    phoneSecondary: "[EDIT] +91 98765 43211",
    whatsappNumber: "[EDIT] +91 98765 43210",
    whatsappLink: "https://wa.me/919876543210?text=Hello%20Gyan%20Sthali%20Public%20School,%20I%20would%20like%20to%20inquire%20about%20admissions.",
    email: "[EDIT] info@gyansthalischool.edu.in",
    officeHours: "Monday – Saturday: 8:00 AM – 2:30 PM",
    schoolTimings: "7:30 AM – 1:30 PM (Summer) | 8:30 AM – 2:30 PM (Winter)"
  },

  social: {
    facebook: "[EDIT] https://facebook.com/gyansthalischool",
    youtube: "[EDIT] https://youtube.com/@gyansthalischool",
    instagram: "[EDIT] https://instagram.com/gyansthali_kalajharia"
  },

  flags: {
    showTestimonials: false, // Set to true once verified quotes are provided by school
    showTransportFacility: true, // Confirmed on-site by school van photo
    showDigitalPlatformDemo: true, // Commercial showcase for Uddipta Tech Solution
    enableBilingualToggle: true
  },

  // ---------------------------------------------------------------------------
  // ENGLISH CONTENT
  // ---------------------------------------------------------------------------
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      academics: "Academics",
      facilities: "Campus Facilities",
      notices: "Notice Board",
      faculty: "Teachers",
      gallery: "Gallery",
      admissions: "Admissions",
      contact: "Contact",
      applyNow: "Apply for Admission",
      callUs: "Call School"
    },

    hero: {
      badge: "Est. 2007 • Kalajharia, Jamtara • UDISE 20191509702",
      headline: "Where Learning Inspires. Where Character Grows.",
      subheadline: "Established in 2007, Gyan Sthali Public School provides a disciplined, caring, and value-grounded learning environment for children in Kalajharia and the surrounding communities of Jamtara.",
      ctaPrimary: "Apply for Admission",
      ctaSecondary: "Explore Our School",
      floatingChips: {
        chip1: "Safe Walled Campus",
        chip2: "Dedicated Teachers",
        chip3: "Early Years to Class VIII"
      },
      scrollPrompt: "Discover Gyan Sthali"
    },

    stats: [
      {
        id: "established",
        label: "Year Established",
        value: "2007",
        footnote: "UDISE Registered",
        icon: "Calendar"
      },
      {
        id: "students",
        label: "Students Enrolled*",
        value: "150+*",
        footnote: "*Public records estimate",
        icon: "Users"
      },
      {
        id: "classes",
        label: "School Classes*",
        value: "LKG – VIII*",
        footnote: "*Early Years to Upper Primary",
        icon: "BookOpen"
      },
      {
        id: "classrooms",
        label: "Classrooms*",
        value: "9*",
        footnote: "*Plus 4 utility rooms",
        icon: "School"
      }
    ],

    about: {
      tag: "Our Journey & Purpose",
      heading: "Nurturing Young Minds in Kalajharia Since 2007",
      story: "Established in 2007, Gyan Sthali Public School has been serving the educational needs of children in Kalajharia and surrounding rural communities of Karmatanr Vidyasagar, Jamtara. The school focuses on providing a supportive learning environment where students can develop academically, socially, and personally. Through a balanced combination of classroom learning, co-curricular activities, and individual attention, the school aims to support the overall growth of every child.",
      missionTitle: "Our Commitment",
      missionText: "To build a strong foundation in reading, numeracy, and character, ensuring every student acquires the confidence and values necessary for higher educational success.",
      visionTitle: "Our Vision",
      visionText: "To serve as a trusted center of foundational learning in Kalajharia, inspiring discipline, curiosity, and ethical citizenship in every student.",
      principal: {
        badge: "From the Principal's Desk",
        name: "[EDIT] Principal / Headmaster Name",
        title: "Gyan Sthali Public School, Kalajharia",
        quote: "[EDIT] 'Education is the art of sculpting character and igniting human curiosity. At Gyan Sthali, we nurture our children with values of discipline, respect, and joyful inquiry. We invite parents to join us in supporting their children's future.'",
        image: "/images/campus-3.jpg"
      }
    },

    whyChooseUs: {
      tag: "Why Gyan Sthali",
      heading: "Why Parents in Kalajharia Entrust Us with Their Children",
      subheading: "A thoughtful blend of academic discipline, supportive pedagogy, and safe infrastructure.",
      features: [
        {
          title: "Dedicated Teaching Staff [EDIT]",
          description: "Passionate local educators who give personal attention and moral care to every child.",
          icon: "Award"
        },
        {
          title: "Pucca Boundary Wall & Safe Campus",
          description: "Walled perimeter, iron gates, and attentive supervision to ensure safety for all students.",
          icon: "ShieldCheck"
        },
        {
          title: "Digital Board Learning",
          description: "Visual aids and interactive educational media for clear foundational concept building.",
          icon: "Monitor"
        },
        {
          title: "Sports & Cultural Celebrations",
          description: "Santhali folk dances, national celebrations, tricolour balloon drills, and annual events.",
          icon: "Trophy"
        },
        {
          title: "Value-Based Education",
          description: "Deep roots in respect, moral responsibility, civic duties, and holistic development.",
          icon: "HeartHandshake"
        },
        {
          title: "Individual Academic Care",
          description: "Supportive teacher-student ratio so no child is left behind in reading or arithmetic.",
          icon: "UserCheck"
        }
      ]
    },

    notices: {
      tag: "Official Circulars",
      heading: "School Notice Board",
      subheading: "Recent administrative announcements, examination circulars, and academic notifications.",
      items: [
        {
          id: "n1",
          title: "Admissions Open for Academic Session 2026–27",
          date: "04 October 2026",
          category: "Admissions",
          summary: "Registrations are now accepted for Entry Class (LKG) through Class VIII. Parents can obtain application forms from the school office or submit an enquiry online.",
          isUrgent: true,
          pdfAvailable: true
        },
        {
          id: "n2",
          title: "Half-Yearly Examination Schedule & Revision Guidelines",
          date: "28 September 2026",
          category: "Exams",
          summary: "Half-yearly written assessments commence shortly. Subject-wise syllabus coverage and examination timetables are available on the school notice board.",
          isUrgent: false,
          pdfAvailable: true
        },
        {
          id: "n3",
          title: "Annual Cultural Function & Merit Prize Distribution",
          date: "15 September 2026",
          category: "Events",
          summary: "Students from all classes are rehearsing for traditional dance, poetry recitation, and patriotic demonstrations for the upcoming celebration.",
          isUrgent: false,
          pdfAvailable: false
        },
        {
          id: "n4",
          title: "Samagra Shiksha 25% RTE Seat Quota Information",
          date: "01 September 2026",
          category: "Official",
          summary: "Under the RTE guidelines in Jamtara district, 25% quota seats are reserved in the LKG entry class for eligible local students.",
          isUrgent: false,
          pdfAvailable: true
        }
      ]
    },

    faculty: {
      tag: "Educators & Mentors",
      heading: "Meet Our Dedicated Teachers",
      subheading: "A team of caring educators committed to personal attention and moral discipline in Kalajharia.",
      notice: "Faculty profiles will be updated upon official submission by school administration [EDIT].",
      members: [
        {
          id: "f1",
          name: "[EDIT] Senior Faculty Member",
          designation: "Head of Primary Wing",
          subject: "Mathematics & Environmental Science",
          qualification: "B.Sc., B.Ed. [EDIT]",
          experience: "10+ Years Experience [EDIT]",
          image: "/images/campus-3.jpg"
        },
        {
          id: "f2",
          name: "[EDIT] Language Teacher",
          designation: "Senior Faculty",
          subject: "Hindi Language & Literature",
          qualification: "M.A. (Hindi), B.Ed. [EDIT]",
          experience: "8+ Years Experience [EDIT]",
          image: "/images/campus-3.jpg"
        },
        {
          id: "f3",
          name: "[EDIT] English & Social Studies Teacher",
          designation: "Primary Educator",
          subject: "English & Social Studies",
          qualification: "B.A. (English), D.El.Ed. [EDIT]",
          experience: "6+ Years Experience [EDIT]",
          image: "/images/campus-3.jpg"
        },
        {
          id: "f4",
          name: "[EDIT] Early Years Coordinator",
          designation: "Pre-Primary In-Charge",
          subject: "Foundational Phonics & Numeracy",
          qualification: "Montessori Trained, B.A. [EDIT]",
          experience: "7+ Years Experience [EDIT]",
          image: "/images/campus-3.jpg"
        }
      ]
    },

    academics: {
      tag: "Academic Pathways",
      heading: "Structured Learning from Early Years to Class VIII",
      subheading: "A bilingual, supportive classroom atmosphere where Hindi and English are used to build confidence.",
      sideImage: "/images/classroom.jpg",
      highlights: [
        "Supportive bilingual classroom communication (Hindi & English)",
        "Strong foundation in numeracy and language literacy",
        "Continuous evaluations and monthly progress reviews",
        "Regular parent-teacher collaboration meetings (PTM)"
      ],
      stages: [
        {
          id: "early-years",
          title: "Early Years Wing",
          grades: "LKG & UKG",
          ageGroup: "Ages 3 to 5 Years",
          focus: "Sensory exploration, language phonics, number songs, fine motor coordination, and social habit formation through supportive care.",
          subjects: ["Foundational Phonics", "Akshar Gyan (Hindi)", "Basic Numbers & Counting", "Drawing & Paper Craft", "Rhymes & Storytelling"]
        },
        {
          id: "primary",
          title: "Primary School",
          grades: "Classes I to V",
          ageGroup: "Ages 6 to 10 Years",
          focus: "Developing confident reading comprehension, bilingual communication, mathematical computation, and environmental awareness.",
          subjects: ["English Language & Reading", "Hindi Sahitya & Vyakaran", "Mathematics", "Environmental Studies (EVS)", "Computer Basics", "General Awareness"]
        },
        {
          id: "upper-primary",
          title: "Upper Primary School",
          grades: "Classes VI to VIII",
          ageGroup: "Ages 11 to 14 Years",
          focus: "Transitioning to analytical problem solving, basic science concepts, social sciences, and preparation for secondary education.",
          subjects: ["Mathematics", "General Science", "Social Studies (History, Civics, Geography)", "English Grammar & Writing", "Hindi", "Sanskrit Basics", "Computer Studies"]
        }
      ]
    },

    facilities: {
      tag: "Campus Infrastructure",
      heading: "School Facilities in Kalajharia",
      subheading: "A transparent overview of campus resources, cross-checked with public UDISE records and on-site observations.",
      items: [
        {
          id: "classrooms",
          title: "9 Spacious Classrooms",
          description: "Ventilated learning spaces providing students with a quiet, comfortable environment for academic focus.",
          verificationBadge: "UDISE Verified",
          icon: "School",
          imageSlot: "classroom",
          enabled: true
        },
        {
          id: "boundary",
          title: "Pucca Boundary Wall & Gated Campus",
          description: "Walled perimeter and iron security gates ensuring safety, supervision, and peace of mind for parents.",
          verificationBadge: "UDISE Verified",
          icon: "ShieldCheck",
          imageSlot: "campus-2",
          enabled: true
        },
        {
          id: "digital",
          title: "Digital Learning & Digiboard",
          description: "Technology-assisted learning tools to make conceptual subjects interactive and visually engaging.",
          verificationBadge: "UDISE Verified",
          icon: "Laptop",
          imageSlot: "campus-4",
          enabled: true
        },
        {
          id: "library",
          title: "Library & Reading Corner",
          description: "Curated collection of children's storybooks, textbooks, and knowledge volumes to encourage reading habits.",
          verificationBadge: "UDISE Verified",
          icon: "BookOpen",
          imageSlot: "campus-5",
          enabled: true
        },
        {
          id: "water",
          title: "Clean Drinking Water",
          description: "Dedicated safe drinking water facility on campus for student hydration and well-being.",
          verificationBadge: "UDISE Verified",
          icon: "Droplet",
          imageSlot: "campus-1",
          enabled: true
        },
        {
          id: "toilets",
          title: "Separate Boys' & Girls' Washrooms",
          description: "Hygienic, segregated sanitation facilities with hand-washing stations to uphold student dignity.",
          verificationBadge: "UDISE Verified",
          icon: "Sparkles",
          imageSlot: "campus-1",
          enabled: true
        },
        {
          id: "transport",
          title: "Dedicated School Van Transport",
          description: "Dedicated school van serving Kalajharia and connected rural road routes for safe transit.",
          verificationBadge: "On-Site Confirmed",
          icon: "Bus",
          imageSlot: "campus-6",
          enabled: true
        },
        {
          id: "activity",
          title: "Courtyard & Play Area",
          description: "Open school courtyard for morning physical drills, national celebrations, and student games.",
          verificationBadge: "To Verify with School",
          icon: "Activity",
          imageSlot: "playground",
          enabled: true
        }
      ]
    },

    events: {
      tag: "Life at Gyan Sthali",
      heading: "Memories, Celebrations & Milestones",
      subheading: "School life is enriched through sports, cultural arts, national festivals, and joyful teamwork.",
      items: [
        {
          id: "annual-day",
          title: "Annual Cultural Function & Folk Dances",
          date: "December 2025",
          category: "Annual Function",
          description: "Traditional Santhali folk dances in red attire, cultural drama, choir, and annual merit prize distribution.",
          imageSlot: "events-2"
        },
        {
          id: "welcome-ceremony",
          title: "Welcome Stage Ceremony",
          date: "Annual Opening",
          category: "Celebrations",
          description: "Young primary students perform stage recitals and welcome dances for parents and guests.",
          imageSlot: "events-1"
        },
        {
          id: "independence-day",
          title: "Independence Day & Republic Day Celebrations",
          date: "August & January",
          category: "Celebrations",
          description: "National flag hoisting, tricolour balloon formations, human pyramids, and patriotic poetry recitations.",
          imageSlot: "events-3"
        },
        {
          id: "merit-awards",
          title: "Annual Merit Prize Distribution",
          date: "Annual Session",
          category: "Events",
          description: "Headmaster and senior teachers present medals, books, and certificates to academic toppers.",
          imageSlot: "events-4"
        }
      ]
    },

    gallery: {
      tag: "Visual Life",
      heading: "Campus Moments & Celebrations",
      subheading: "Real photographs from Gyan Sthali Public School, Kalajharia, capturing student life, cultural performances, and assemblies.",
      categories: ["All", "Campus", "Classroom", "Annual Function", "Celebrations"],
      items: [
        { id: "g1", title: "Morning Assembly in Winter Uniform", category: "Campus", imageSlot: "hero-building" },
        { id: "g2", title: "Main Gate & School Boundary Wall", category: "Campus", imageSlot: "campus-2" },
        { id: "g3", title: "Classroom Block & Open Courtyard", category: "Campus", imageSlot: "campus-1" },
        { id: "g4", title: "Students Seated in Courtyard Assembly", category: "Classroom", imageSlot: "campus-5" },
        { id: "g5", title: "Welcome Stage Performance by Young Students", category: "Annual Function", imageSlot: "events-1" },
        { id: "g6", title: "Traditional Santhali Folk Dance in Red Attire", category: "Annual Function", imageSlot: "events-2" },
        { id: "g7", title: "Independence Day Balloon Drill & Celebrations", category: "Celebrations", imageSlot: "playground" },
        { id: "g8", title: "Human Pyramid & Tricolour Flag Tribute", category: "Celebrations", imageSlot: "events-3" },
        { id: "g9", title: "Merit Certificate & Prize Distribution Ceremony", category: "Annual Function", imageSlot: "events-4" },
        { id: "g10", title: "School Transport Van Outside Boundary Wall", category: "Campus", imageSlot: "campus-6" }
      ]
    },

    admissions: {
      tag: "Admissions 2026–27",
      heading: "Admissions Open for Session 2026–27",
      subheading: "Transparent, parent-friendly admission guidance for classes LKG through VIII in Kalajharia.",
      session: "Academic Session 2026–27",
      entryClassInfo: "Entry Class: LKG (~30–40 seats capacity, including 25% RTE quota under Samagra Shiksha Jamtara).",
      steps: [
        {
          stepNumber: "01",
          title: "Enquiry & Counselling",
          description: "Submit our simple online form or visit the school office at Kalajharia-1 to collect the admission registration form."
        },
        {
          stepNumber: "02",
          title: "Campus Visit & Interaction",
          description: "Visit the campus with the child for a friendly, supportive interaction with the teachers."
        },
        {
          stepNumber: "03",
          title: "Document Verification",
          description: "Submit the child's birth certificate, passport photos, Aadhaar details, and previous marksheet (for Class 2+)."
        },
        {
          stepNumber: "04",
          title: "Admission Confirmation",
          description: "Complete nominal admission formalities, receive the booklist, and welcome the child to the Gyan Sthali family."
        }
      ],
      documentsChecklist: [
        "Child's Birth Certificate (Panchayat / Hospital / Municipal issued)",
        "4 Recent Passport-size Colour Photographs of the Student",
        "Aadhaar Card Copy (Child and Parents)",
        "Previous Class Marksheet / Progress Card (for Classes 2 and above)",
        "Transfer Certificate (TC) from Previous School (if applicable)",
        "Caste / Category Certificate for RTE quota applicants (if applicable)"
      ],
      feeNote: "Fee structure is affordable and set transparently for families in Kalajharia. Please contact the school office or send a WhatsApp message to receive the class-wise fee details.",
      whatsappCtaText: "Message on WhatsApp for Admission Details"
    },

    testimonials: {
      tag: "Parent Voices",
      heading: "Reflections from Parents",
      subheading: "Reflections from families who have chosen our school for their children's education.",
      items: [
        {
          id: "t1",
          parentName: "[EDIT] Parent Name",
          relation: "Parent of Student (Class 4)",
          quote: "[EDIT] 'A supportive school environment where teachers take personal care of children and encourage their foundational learning.'",
          rating: 5
        }
      ]
    },

    digitalPlatform: {
      tag: "Technology Showcase",
      heading: "Digital School Platform Architecture",
      subheading: "Gyan Sthali Public School is ready for modern digital transformation — website, admissions, notice board, and student management in one integrated system.",
      badge: "Powered by Uddipta Tech Solution",
      provider: "Uddipta Tech Solution",
      portals: [
        {
          title: "Public Website & Admissions",
          badge: "Live Prototype",
          description: "Mobile-optimized school identity, dynamic notice board, photo gallery, UDISE metadata, and instant lead capture for parents.",
          features: [
            "Responsive for Indian 4G Android devices",
            "Bilingual English / Hindi support",
            "Instant WhatsApp & direct call integration",
            "Spam-protected online admission enquiry"
          ]
        },
        {
          title: "Parent Portal (Interactive Preview)",
          badge: "Ready to Deploy",
          description: "A private dashboard where parents in Kalajharia can stay connected to their child's daily school life.",
          features: [
            "Daily student attendance tracking",
            "Homework and assignment notices",
            "Exam marksheet and report cards",
            "Transparent fee payment receipts & alerts"
          ]
        },
        {
          title: "Teacher & Admin Management Portal",
          badge: "Ready to Deploy",
          description: "Centralized administrative control for teachers, principal, and school management.",
          features: [
            "Student admissions & enrollment database",
            "Class-wise attendance & timetable manager",
            "Instant digital notice board publisher",
            "Gallery & events content manager"
          ]
        }
      ]
    },

    faq: {
      tag: "Parent Help",
      heading: "Frequently Asked Questions",
      subheading: "Clear answers to common questions about admissions, classes, and facilities in Kalajharia.",
      items: [
        {
          question: "Which classes are offered at Gyan Sthali Public School?",
          answer: "The school currently caters to Early Years (LKG & UKG), Primary Wing (Classes 1 to 5), and Upper Primary Wing (Classes 6 to 8) as registered in UDISE records."
        },
        {
          question: "What is the entry class and age criteria for admission?",
          answer: "The entry class is LKG. For LKG, children should ideally be 3.5 to 4 years old as of 31st March. 25% seats are reserved under RTE provisions."
        },
        {
          question: "What is the medium of instruction in classes?",
          answer: "A supportive bilingual approach is followed where both Hindi and English are used by educators to ensure children grasp core mathematical and scientific concepts comfortably."
        },
        {
          question: "What is the school's UDISE code and location?",
          answer: "The official UDISE Code is 20191509702. The school is located at Kalajharia-1, Karmatanr Vidyasagar block, Jamtara district, Jharkhand (PIN 815352)."
        },
        {
          question: "Is transport facility available for nearby villages?",
          answer: "Yes, dedicated school van transport is available serving students from Kalajharia and connected rural routes. Contact the office for specific route stops."
        },
        {
          question: "What is the school affiliation status?",
          answer: "The school operates as a recognized rural elementary institution under UDISE 20191509702. Formal board certificates (JAC/CBSE) are subject to official verification with school management."
        }
      ]
    },

    contact: {
      tag: "Campus Location",
      heading: "Visit Gyan Sthali Public School in Kalajharia",
      subheading: "Parents and guardians are warmly welcomed to tour our campus, view the classrooms, and meet the teaching staff.",
      getDirections: "Get Directions on Google Maps",
      formTitle: "Admission Enquiry Form",
      formSubtitle: "Submit your details below and the school office in Kalajharia will call you back promptly."
    },

    footer: {
      blurb: "Gyan Sthali Public School (UDISE: 20191509702), Kalajharia, Karmatanr Vidyasagar, Jamtara. Dedicated to foundational academic excellence, discipline, and moral character since 2007.",
      quickLinksTitle: "Quick Navigation",
      academicsTitle: "Academics",
      contactTitle: "Campus Contact",
      udiseInfo: "UDISE: 20191509702 • Established 2007 • Jamtara, Jharkhand",
      designedWithCare: "Built by Uddipta Tech Solution for Gyan Sthali Public School",
      copyright: "All Rights Reserved",
      backToTop: "Back to Top"
    }
  },

  // ---------------------------------------------------------------------------
  // HINDI CONTENT
  // ---------------------------------------------------------------------------
  hi: {
    nav: {
      home: "मुख्य पृष्ठ",
      about: "परिचय",
      academics: "शिक्षा",
      facilities: "सुविधाएं",
      notices: "सूचना पट्ट",
      faculty: "शिक्षक गण",
      gallery: "तस्वीरें",
      admissions: "नामांकन",
      contact: "संपर्क",
      applyNow: "नामांकन हेतु आवेदन",
      callUs: "कॉल करें"
    },

    hero: {
      badge: "स्थापना 2007 • कालाझरिया, जामताड़ा • UDISE 20191509702",
      headline: "जहाँ शिक्षा प्रेरणा देती है, चरित्र निखरता है।",
      subheadline: "वर्ष 2007 से स्थापित, ज्ञान स्थली पब्लिक स्कूल कालाझरिया और करमाटांड़ विद्यासागर क्षेत्र के बच्चों को अनुशासित, स्नेहपूर्ण और संस्कारी शिक्षा प्रदान कर रहा है।",
      ctaPrimary: "नामांकन हेतु आवेदन करें",
      ctaSecondary: "विद्यालय का अवलोकन करें",
      floatingChips: {
        chip1: "चारदीवारी युक्त सुरक्षित परिसर",
        chip2: "समर्पित शिक्षक",
        chip3: "एलकेजी से आठवीं कक्षा"
      },
      scrollPrompt: "नीचे देखें"
    },

    stats: [
      {
        id: "established",
        label: "स्थापना वर्ष",
        value: "2007",
        footnote: "UDISE पंजीकृत",
        icon: "Calendar"
      },
      {
        id: "students",
        label: "अनुमानित छात्र संख्या*",
        value: "150+*",
        footnote: "*सार्वजनिक रिकॉर्ड्स के अनुसार",
        icon: "Users"
      },
      {
        id: "classes",
        label: "उपलब्ध कक्षाएं*",
        value: "LKG – VIII*",
        footnote: "*प्रारंभिक से उच्च प्राथमिक",
        icon: "BookOpen"
      },
      {
        id: "classrooms",
        label: "कक्षा कक्ष*",
        value: "9*",
        footnote: "*4 अन्य कमरों सहित",
        icon: "School"
      }
    ],

    about: {
      tag: "हमारी यात्रा और संकल्प",
      heading: "2007 से कालाझरिया में शिक्षा की ज्योति",
      story: "वर्ष 2007 में स्थापित ज्ञान स्थली पब्लिक स्कूल कालाझरिया एवं करमाटांड़ विद्यासागर, जामताड़ा के बच्चों को गुणवत्तापूर्ण, संस्कारयुक्त और समग्र शिक्षा प्रदान कर रहा है। यहाँ प्रत्येक विद्यार्थी पर व्यक्तिगत ध्यान देकर उनमें आत्मविश्वास, अनुशासन और सीखने की ललक जागृत की जाती है।",
      missionTitle: "हमारा उद्देश्य",
      missionText: "बुनियादी भाषा ज्ञान, गणितीय समझ और नैतिक मूल्यों की मजबूत नींव तैयार करना ताकि हर बच्चा आगे चलकर सफल नागरिक बने।",
      visionTitle: "हमारी दूरदृष्टि",
      visionText: "कालाझरिया क्षेत्र का एक उत्कृष्ट और विश्वसनीय प्राथमिक व उच्च प्राथमिक शिक्षण केंद्र बनना जहाँ हर बालक-बालिका का सर्वांगीण विकास हो।",
      principal: {
        badge: "प्राचार्य संदेश",
        name: "[EDIT] प्रधानाध्यापक / प्राचार्य",
        title: "ज्ञान स्थली पब्लिक स्कूल, कालाझरिया",
        quote: "[EDIT] 'शिक्षा केवल अक्षरों का ज्ञान नहीं, यह बालक के चरित्र निर्माण की साधना है। ज्ञान स्थली में हम बच्चों को संस्कारों की जड़ें और सपनों की उड़ान देते हैं। सभी अभिभावकों का इस यात्रा में स्वागत है।'",
        image: "/images/campus-3.jpg"
      }
    },

    whyChooseUs: {
      tag: "ज्ञान स्थली ही क्यों?",
      heading: "अभिभावकों का प्रथम और विश्वसनीय विकल्प",
      subheading: "अनुशासन, आधुनिक शिक्षण और सुरक्षित वातावरण का संगम।",
      features: [
        {
          title: "समर्पित एवं संवेदनशील शिक्षक",
          description: "स्थानीय पृष्ठभूमि के अनुभवी शिक्षक जो हर बच्चे पर व्यक्तिगत ध्यान देते हैं।",
          icon: "Award"
        },
        {
          title: "पक्की चारदीवारी एवं सुरक्षित परिसर",
          description: "चारदीवारी से घिरा सुरक्षित परिसर जहाँ बच्चे निश्चिंत होकर पढ़ते और खेलते हैं।",
          icon: "ShieldCheck"
        },
        {
          title: "डिजिटल बोर्ड द्वारा शिक्षण",
          description: "दृश्य माध्यम और आधुनिक तकनीकों द्वारा विषयों की सहज समझ।",
          icon: "Monitor"
        },
        {
          title: "खेलकूद एवं सांस्कृतिक कार्यक्रम",
          description: "पारंपरिक संथाली लोकनृत्य, राष्ट्रीय पर्व और खेलकूद का निरंतर आयोजन।",
          icon: "Trophy"
        },
        {
          title: "संस्कारयुक्त नैतिक शिक्षा",
          description: "भारतीय संस्कृति, अनुशासन, गुरुजनों के सम्मान और नैतिक मूल्यों पर विशेष बल।",
          icon: "HeartHandshake"
        },
        {
          title: "व्यक्तिगत ध्यान",
          description: "सीमित छात्र अनुपात ताकि पढ़ने और गणित में कोई बच्चा पीछे न छूटे।",
          icon: "UserCheck"
        }
      ]
    },

    notices: {
      tag: "सूचना पट्ट",
      heading: "विद्यालय की महत्वपूर्ण सूचनाएं",
      subheading: "नवीनतम प्रशासनिक घोषणाएं, परीक्षा समय सारणी और शैक्षणिक सूचनाएं।",
      items: [
        {
          id: "n1",
          title: "सत्र 2026–27 के लिए नामांकन प्रारंभ (कक्षा LKG से VIII)",
          date: "04 अक्टूबर 2026",
          category: "Admissions",
          summary: "प्रारंभिक कक्षा (LKG) से आठवीं तक के लिए नए प्रवेश फॉर्म विद्यालय कार्यालय में उपलब्ध हैं। अभिभावक सीधे कार्यालय आकर या ऑनलाइन पूछताछ भेज सकते हैं।",
          isUrgent: true,
          pdfAvailable: true
        },
        {
          id: "n2",
          title: "अर्द्धवार्षिक परीक्षा समय-सारणी एवं दिशानिर्देश",
          date: "28 सितंबर 2026",
          category: "Exams",
          summary: "अर्द्धवार्षिक परीक्षाएं शीघ्र प्रारंभ हो रही हैं। विषयवार पाठ्यक्रम और परीक्षा कार्यक्रम नोटिस बोर्ड पर उपलब्ध करा दिया गया है।",
          isUrgent: false,
          pdfAvailable: true
        },
        {
          id: "n3",
          title: "वार्षिकोत्सव एवं पुरस्कार वितरण समारोह की सूचना",
          date: "15 सितंबर 2026",
          category: "Events",
          summary: "सांस्कृतिक कार्यक्रम, लोकनृत्य एवं मेधावी छात्रों के सम्मान हेतु तैयारियां जोरों पर हैं।",
          isUrgent: false,
          pdfAvailable: false
        },
        {
          id: "n4",
          title: "समग्र शिक्षा जामताड़ा: 25% आरटीई (RTE) सीट कोटा",
          date: "01 सितंबर 2026",
          category: "Official",
          summary: "आरटीई प्रावधानों के तहत LKG प्रवेश कक्षा में 25% सीटें पात्र स्थानीय बच्चों के लिए आरक्षित हैं।",
          isUrgent: false,
          pdfAvailable: true
        }
      ]
    },

    faculty: {
      tag: "शिक्षक वृंद",
      heading: "हमारे समर्पित शिक्षक",
      subheading: "अनुभवी और संवेदनशील शिक्षक जो हर बच्चे पर व्यक्तिगत ध्यान देते हैं।",
      notice: "शिक्षकों का विवरण विद्यालय प्रबंधन से सत्यापन के उपरांत अद्यतन किया जाएगा [EDIT]।",
      members: [
        {
          id: "f1",
          name: "[EDIT] वरिष्ठ शिक्षक",
          designation: "प्राथमिक विभाग प्रमुख",
          subject: "गणित एवं पर्यावरण अध्ययन",
          qualification: "B.Sc., B.Ed. [EDIT]",
          experience: "10+ वर्ष अनुभव [EDIT]",
          image: "/images/campus-3.jpg"
        },
        {
          id: "f2",
          name: "[EDIT] भाषा शिक्षक",
          designation: "वरिष्ठ शिक्षक",
          subject: "हिंदी भाषा एवं व्याकरण",
          qualification: "M.A. (हिंदी), B.Ed. [EDIT]",
          experience: "8+ वर्ष अनुभव [EDIT]",
          image: "/images/campus-3.jpg"
        },
        {
          id: "f3",
          name: "[EDIT] अंग्रेजी एवं सामाजिक अध्ययन शिक्षक",
          designation: "प्राथमिक शिक्षक",
          subject: "अंग्रेजी एवं सामाजिक विज्ञान",
          qualification: "B.A. (English), D.El.Ed. [EDIT]",
          experience: "6+ वर्ष अनुभव [EDIT]",
          image: "/images/campus-3.jpg"
        },
        {
          id: "f4",
          name: "[EDIT] पूर्व-प्राथमिक शिक्षिका",
          designation: "एलकेजी / यूकेजी प्रभारी",
          subject: "बुनियादी अक्षर एवं संख्या ज्ञान",
          qualification: "मोंटेसरी प्रशिक्षित, B.A. [EDIT]",
          experience: "7+ वर्ष अनुभव [EDIT]",
          image: "/images/campus-3.jpg"
        }
      ]
    },

    academics: {
      tag: "शैक्षणिक ढांचा",
      heading: "एलकेजी से आठवीं तक सुव्यवस्थित शिक्षण",
      subheading: "सहज द्विभाषी वातावरण (हिंदी व अंग्रेजी) जहाँ बच्चे बिना किसी संकोच के सीखते हैं।",
      sideImage: "/images/classroom.jpg",
      highlights: [
        "कक्षा में हिंदी और अंग्रेजी दोनों भाषाओं का सहज उपयोग",
        "बुनियादी गणित, भाषा और विज्ञान पर विशेष जोर",
        "नियमित मासिक मूल्यांकन और अभ्यास",
        "अभिभावक-शिक्षक बैठक (PTM) का निरंतर आयोजन"
      ],
      stages: [
        {
          id: "early-years",
          title: "प्रारंभिक बाल विभाग (Early Years)",
          grades: "LKG एवं UKG",
          ageGroup: "उम्र 3 से 5 वर्ष",
          focus: "खेल-खेल में अक्षर पहचान, गिनती गीत, रंग ज्ञान, अच्छी आदतें और सामाजिक व्यवहार का विकास।",
          subjects: ["ध्वनि व अक्षर ज्ञान", "हिंदी वर्णमाला", "प्रारंभिक अंक व गिनती", "चित्रकला", "बालगीत व कहानियां"]
        },
        {
          id: "primary",
          title: "प्राथमिक विभाग (Primary)",
          grades: "कक्षा 1 से 5",
          ageGroup: "उम्र 6 से 10 वर्ष",
          focus: "पढ़ने-लिखने की धाराप्रवाह क्षमता, बुनियादी गणितीय गणनाएं और पर्यावरण के प्रति समझ।",
          subjects: ["अंग्रेजी भाषा", "हिंदी साहित्य व व्याकरण", "गणित", "पर्यावरण अध्ययन (EVS)", "कंप्यूटर परिचय", "सामान्य ज्ञान"]
        },
        {
          id: "upper-primary",
          title: "उच्च प्राथमिक विभाग (Upper Primary)",
          grades: "कक्षा 6 से 8",
          ageGroup: "उम्र 11 से 14 वर्ष",
          focus: "विश्लेषणात्मक चिंतन, विज्ञान के मूलभूत नियम, सामाजिक विषय और आगे की उच्च कक्षाओं की तैयारी।",
          subjects: ["गणित", "सामान्य विज्ञान", "सामाजिक विज्ञान (इतिहास, नागरिक शास्त्र, भूगोल)", "अंग्रेजी", "हिंदी", "संस्कृत परिचय", "कंप्यूटर शिक्षा"]
        }
      ]
    },

    facilities: {
      tag: "परिसर सुविधाएं",
      heading: "विद्यालय परिसर की सुविधाएं",
      subheading: "सरकारी UDISE डेटा और जमीनी रिकॉर्ड्स पर आधारित पारदर्शी विवरण।",
      items: [
        {
          id: "classrooms",
          title: "9 हवादार कक्षा कक्ष",
          description: "शांत और आरामदायक अध्ययन वातावरण जहाँ बच्चे एकाग्रचित्त होकर पढ़ते हैं।",
          verificationBadge: "UDISE सत्यापित",
          icon: "School",
          imageSlot: "classroom",
          enabled: true
        },
        {
          id: "boundary",
          title: "पक्की चारदीवारी एवं सुरक्षित मुख्य द्वार",
          description: "चारदीवारी से घिरा परिसर और गेट जो बच्चों की सुरक्षा सुनिश्चित करता है।",
          verificationBadge: "UDISE सत्यापित",
          icon: "ShieldCheck",
          imageSlot: "campus-2",
          enabled: true
        },
        {
          id: "digital",
          title: "डिजिटल शिक्षण व डिजीबोर्ड",
          description: "आधुनिक तकनीक द्वारा कठिन विषयों को रोचक और दृश्य रूप में समझाने की व्यवस्था।",
          verificationBadge: "UDISE सत्यापित",
          icon: "Laptop",
          imageSlot: "campus-4",
          enabled: true
        },
        {
          id: "library",
          title: "पुस्तकालय एवं वाचन कोना",
          description: "बाल साहित्य, ज्ञानवर्धक पुस्तकें और शब्दकोशों का संग्रह ताकि बच्चों में पढ़ने की आदत पड़े।",
          verificationBadge: "UDISE सत्यापित",
          icon: "BookOpen",
          imageSlot: "campus-5",
          enabled: true
        },
        {
          id: "water",
          title: "शुद्ध व स्वच्छ पेयजल",
          description: "विद्यार्थियों के स्वास्थ्य और स्वच्छता हेतु विद्यालय में पीने के स्वच्छ पानी की व्यवस्था।",
          verificationBadge: "UDISE सत्यापित",
          icon: "Droplet",
          imageSlot: "campus-1",
          enabled: true
        },
        {
          id: "toilets",
          title: "छात्र एवं छात्राओं हेतु अलग शौचालय",
          description: "हाथ धोने की व्यवस्था और बालक-बालिकाओं के लिए अलग-अलग स्वच्छ शौचालय।",
          verificationBadge: "UDISE सत्यापित",
          icon: "Sparkles",
          imageSlot: "campus-1",
          enabled: true
        },
        {
          id: "transport",
          title: "विद्यालय वैन वाहन सुविधा",
          description: "कालाझरिया और आसपास के ग्रामीण मार्गों तक सुरक्षित वाहन सेवा।",
          verificationBadge: "परिसर में उपलब्ध",
          icon: "Bus",
          imageSlot: "campus-6",
          enabled: true
        },
        {
          id: "activity",
          title: "प्रांगण एवं खेल का मैदान",
          description: "सुबह की प्रार्थना सभा, दौड़, योग और सांस्कृतिक कार्यक्रमों हेतु खुला प्रांगण।",
          verificationBadge: "विद्यालय से सत्यापन योग्य",
          icon: "Activity",
          imageSlot: "playground",
          enabled: true
        }
      ]
    },

    events: {
      tag: "विद्यालयी जीवन",
      heading: "उत्सव, खेलकूद और सांस्कृतिक रंग",
      subheading: "ज्ञान स्थली में पढ़ाई के साथ-साथ हर पर्व और उत्सव को उत्साह से मनाया जाता है।",
      items: [
        {
          id: "annual-day",
          title: "वार्षिकोत्सव एवं संथाली लोकनृत्य",
          date: "दिसंबर 2025",
          category: "वार्षिकोत्सव",
          description: "पारंपरिक संथाली लाल परिधान में नृत्य, नाटक, गायन और मेधावी छात्रों का पुरस्कार वितरण समारोह।",
          imageSlot: "events-2"
        },
        {
          id: "welcome-ceremony",
          title: "स्वागत मंच समारोह",
          date: "वार्षिक प्रारंभ",
          category: "उत्सव",
          description: "नन्हे विद्यार्थियों द्वारा स्वागत नृत्य एवं सांस्कृतिक मंच प्रस्तुति।",
          imageSlot: "events-1"
        },
        {
          id: "independence-day",
          title: "स्वतंत्रता दिवस एवं गणतंत्र दिवस",
          date: "अगस्त एवं जनवरी",
          category: "उत्सव",
          description: "ध्वजारोहण, तिरंगा गुब्बारा प्रदर्शन, मानव पिरामिड एवं देशभक्ति गीत।",
          imageSlot: "events-3"
        },
        {
          id: "merit-awards",
          title: "वार्षिक मेधावी छात्र सम्मान समारोह",
          date: "सत्र समापन",
          category: "उत्सव",
          description: "प्रधानाध्यापक एवं शिक्षकों द्वारा प्रमाण पत्र, पदक एवं पुस्तकों का वितरण।",
          imageSlot: "events-4"
        }
      ]
    },

    gallery: {
      tag: "विद्यालय की छवियां",
      heading: "सजीव परिसर और सांस्कृतिक रंग",
      subheading: "ज्ञान स्थली पब्लिक स्कूल, कालाझरिया की वास्तविक तस्वीरें।",
      categories: ["सभी", "परिसर", "कक्षाएं", "वार्षिकोत्सव", "उत्सव"],
      items: [
        { id: "g1", title: "शीतकालीन प्रार्थना सभा में छात्र", category: "परिसर", imageSlot: "hero-building" },
        { id: "g2", title: "मुख्य द्वार एवं चारदीवारी", category: "परिसर", imageSlot: "campus-2" },
        { id: "g3", title: "कक्षा भवन एवं प्रांगण", category: "परिसर", imageSlot: "campus-1" },
        { id: "g4", title: "प्रांगण में एकत्रित विद्यार्थी", category: "कक्षाएं", imageSlot: "campus-5" },
        { id: "g5", title: "स्वागत मंच पर नन्हे विद्यार्थियों की प्रस्तुति", category: "वार्षिकोत्सव", imageSlot: "events-1" },
        { id: "g6", title: "पारंपरिक संथाली लोकनृत्य की मनमोहक प्रस्तुति", category: "वार्षिकोत्सव", imageSlot: "events-2" },
        { id: "g7", title: "स्वतंत्रता दिवस पर तिरंगा गुब्बारा प्रदर्शन", category: "उत्सव", imageSlot: "playground" },
        { id: "g8", title: "मानव पिरामिड और तिरंगा सलामी", category: "उत्सव", imageSlot: "events-3" },
        { id: "g9", title: "मेधावी छात्रों को प्रमाण पत्र एवं पुरस्कार वितरण", category: "वार्षिकोत्सव", imageSlot: "events-4" },
        { id: "g10", title: "विद्यालय वैन सेवा", category: "परिसर", imageSlot: "campus-6" }
      ]
    },

    admissions: {
      tag: "सत्र 2026–27 नामांकन",
      heading: "सत्र 2026–27 के लिए नामांकन खुला है",
      subheading: "कालाझरिया के अभिभावकों के लिए सरल, सुगम और पारदर्शी नामांकन प्रक्रिया।",
      session: "शैक्षणिक सत्र 2026–27",
      entryClassInfo: "प्रवेश कक्षा: LKG (~30–40 सीटें क्षमता, समग्र शिक्षा जामताड़ा अंतर्गत 25% आरटीई कोटा)।",
      steps: [
        {
          stepNumber: "01",
          title: "पूछताछ व फॉर्म प्राप्ति",
          description: "ऑनलाइन फॉर्म भरें या कालाझरिया-1 स्थित विद्यालय कार्यालय से नामांकन फॉर्म प्राप्त करें।"
        },
        {
          stepNumber: "02",
          title: "परिसर भ्रमण व संवाद",
          description: "बच्चे के साथ विद्यालय आएं और शिक्षकों से सहज संवाद करें।"
        },
        {
          stepNumber: "03",
          title: "दस्तावेज़ जमा करना",
          description: "जन्म प्रमाण पत्र, पासपोर्ट फोटो, आधार कार्ड और पूर्व अंकपत्र जमा करें।"
        },
        {
          stepNumber: "04",
          title: "प्रवेश पुष्टि व स्वागत",
          description: "नामांकन औपचारिकताएं पूर्ण कर अपने बच्चे का ज्ञान स्थली परिवार में स्वागत करें।"
        }
      ],
      documentsChecklist: [
        "बच्चे का जन्म प्रमाण पत्र (पंचायत / अस्पताल / नगर निकाय द्वारा जारी)",
        "विद्यार्थी की 4 पासपोर्ट साइज रंगीन फोटो",
        "छात्र एवं माता-पिता के आधार कार्ड की प्रति",
        "पिछली कक्षा का प्रगति पत्र / अंकपत्र (कक्षा 2 एवं ऊपर हेतु)",
        "स्थानांतरण प्रमाण पत्र (TC - यदि लागू हो)",
        "जाति प्रमाण पत्र (आरटीई कोटा आवेदकों हेतु, यदि लागू हो)"
      ],
      feeNote: "कालाझरिया क्षेत्र के परिवारों के लिए किफायती और पारदर्शी शुल्क व्यवस्था। विस्तृत कक्षावार शुल्क तालिका हेतु विद्यालय कार्यालय में संपर्क करें या व्हाट्सएप करें।",
      whatsappCtaText: "व्हाट्सएप पर नामांकन जानकारी प्राप्त करें"
    },

    testimonials: {
      tag: "अभिभावकों के विचार",
      heading: "अभिभावक अनुभव",
      subheading: "हमारे छात्रों के माता-पिता के अनुभव।",
      items: [
        {
          id: "t1",
          parentName: "[EDIT] अभिभावक का नाम",
          relation: "अभिभावक (कक्षा 4)",
          quote: "[EDIT] 'ज्ञान स्थली में बच्चों पर व्यक्तिगत ध्यान दिया जाता है जिससे बुनियादी पढ़ाई बहुत मजबूत होती है।'",
          rating: 5
        }
      ]
    },

    digitalPlatform: {
      tag: "डिजिटल विद्यालय पहल",
      heading: "उद्दीप्त टेक सॉल्यूशन द्वारा समर्थित डिजिटल प्लेटफॉर्म",
      subheading: "ज्ञान स्थली पब्लिक स्कूल के लिए एक सम्पूर्ण डिजिटल विद्यालय व्यवस्था — वेबसाइट, नामांकन, नोटिस बोर्ड और विद्यार्थी प्रबंधन।",
      badge: "Powered by Uddipta Tech Solution",
      provider: "उद्दीप्त टेक सॉल्यूशन",
      portals: [
        {
          title: "सार्वजनिक वेबसाइट एवं ऑनलाइन नामांकन",
          badge: "लाइव प्रोटोटाइप",
          description: "आधुनिक मोबाइल अनुकूलित वेबसाइट, डायनामिक नोटिस बोर्ड, फोटो गैलरी और अभिभावकों के लिए सीधा संपर्क।",
          features: [
            "4G मोबाइल पर तेज लोडिंग",
            "हिंदी और अंग्रेजी दोनों भाषाओं में उपलब्ध",
            "व्हाट्सएप और डायरेक्ट कॉल सुविधा",
            "स्पैम-सुरक्षित ऑनलाइन पूछताछ फॉर्म"
          ]
        },
        {
          title: "अभिभावक पोर्टल (Parent Portal Preview)",
          badge: "प्रस्तावित प्रणाली",
          description: "अभिभावक अपने मोबाइल पर बच्चे की दैनिक उपस्थिति, गृहकार्य, परीक्षा परिणाम और शुल्क की जानकारी देख सकेंगे।",
          features: [
            "दैनिक छात्र उपस्थिति ट्रैकिंग",
            "गृहकार्य व असाइनमेंट सूचनाएं",
            "परीक्षा परिणाम और रिपोर्ट कार्ड",
            "पारदर्शी शुल्क रसीद व रिमाइंडर"
          ]
        },
        {
          title: "शिक्षक एवं प्रबंधन पोर्टल (Admin Panel)",
          badge: "प्रस्तावित प्रणाली",
          description: "विद्यालय प्रशासन के लिए छात्र, शिक्षक, उपस्थिति, शुल्क और सूचना पट्ट का केंद्रीकृत नियंत्रण।",
          features: [
            "छात्र नामांकन व डेटाबेस प्रबंधन",
            "कक्षावार उपस्थिति और समय सारणी",
            "तत्काल डिजिटल नोटिस बोर्ड प्रकाशन",
            "गैलरी व कार्यक्रम प्रबंधन"
          ]
        }
      ]
    },

    faq: {
      tag: "सामान्य प्रश्न",
      heading: "अक्सर पूछे जाने वाले सवाल",
      subheading: "कालाझरिया में नामांकन, कक्षाओं और सुविधाओं से जुड़े महत्वपूर्ण प्रश्नों के स्पष्ट उत्तर।",
      items: [
        {
          question: "ज्ञान स्थली में कौन-कौन सी कक्षाएं संचालित होती हैं?",
          answer: "सरकारी UDISE रिकॉर्ड के अनुसार विद्यालय में एलकेजी, यूकेजी, कक्षा 1 से 5 (प्राथमिक) और कक्षा 6 से 8 (उच्च प्राथमिक) संचालित होती हैं।"
        },
        {
          question: "प्रवेश कक्षा (Entry Class) और आयु सीमा क्या है?",
          answer: "प्रवेश कक्षा LKG है। 31 मार्च तक बच्चे की आयु लगभग 3.5 से 4 वर्ष होनी चाहिए। 25% सीटें आरटीई कोटे के तहत आरक्षित हैं।"
        },
        {
          question: "पढ़ाने का माध्यम क्या है?",
          answer: "कक्षाओं में सहज द्विभाषी माध्यम (हिंदी और अंग्रेजी) का उपयोग होता है ताकि ग्रामीण पृष्ठभूमि के बच्चे विषयों को गहराई से समझ सकें।"
        },
        {
          question: "विद्यालय का UDISE कोड क्या है?",
          answer: "आधिकारिक UDISE कोड 20191509702 है। विद्यालय कालझरिया-1, करमाटांड़ विद्यासागर, जामताड़ा में स्थित है (पिन 815352)।"
        },
        {
          question: "क्या आसपास के गांवों के लिए वाहन सुविधा उपलब्ध है?",
          answer: "हाँ, विद्यालय की समर्पित वैन सेवा कालाझरिया और समीपवर्ती ग्रामीण मार्गों तक उपलब्ध है।"
        },
        {
          question: "विद्यालय की संबद्धता (Affiliation) स्थिति क्या है?",
          answer: "विद्यालय UDISE कोड 20191509702 के अंतर्गत प्राथमिक व उच्च प्राथमिक स्तर पर संचालित है। बोर्ड संबद्धता की आधिकारिक पुष्टि विद्यालय प्रबंधन से की जानी है।"
        }
      ]
    },

    contact: {
      tag: "संपर्क व स्थान",
      heading: "कालाझरिया परिसर में पधारें",
      subheading: "हम सभी अभिभावकों का विद्यालय भ्रमण और परामर्श हेतु सहर्ष स्वागत करते हैं।",
      getDirections: "गूगल मैप्स पर रास्ता देखें",
      formTitle: "नामांकन पूछताछ फॉर्म",
      formSubtitle: "नीचे विवरण भरें, कालाझरिया कार्यालय से आपको शीघ्र कॉल किया जाएगा।"
    },

    footer: {
      blurb: "ज्ञान स्थली पब्लिक स्कूल (UDISE: 20191509702), कालझरिया-1, करमाटांड़ विद्यासागर, जामताड़ा। वर्ष 2007 से समर्पित प्राथमिक एवं उच्च प्राथमिक शिक्षण संस्थान।",
      quickLinksTitle: "मुख्य लिंक",
      academicsTitle: "कक्षाएं",
      contactTitle: "संपर्क पता",
      udiseInfo: "UDISE: 20191509702 • स्थापना 2007 • जामताड़ा, झारखंड",
      designedWithCare: "उद्दीप्त टेक सॉल्यूशन (Uddipta Tech Solution) द्वारा निर्मित",
      copyright: "सर्वाधिकार सुरक्षित",
      backToTop: "शीर्ष पर जाएं"
    }
  }
};
