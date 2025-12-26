const portfolioData = {
    id: {
        hero: {
            title: "Muhammad Sultansyah",
            subtitle:
                "Frontend Developer | Backend Developer | Fullstack Developer | Mobile Developer",
            cta_text: "Hubungi Saya",
        },
        about: {
            title: "Tentang Saya",
            description: "Saya adalah seorang software engineer yang bersemangat dalam pengembangan perangkat lunak dengan fokus pada teknologi web dan mobile. Saya memiliki pengalaman dalam membangun aplikasi yang skalabel dan user-friendly menggunakan berbagai teknologi modern.",
            description2: "Saya percaya pada pengembangan perangkat lunak yang berkelanjutan dan terus belajar teknologi baru untuk memberikan solusi terbaik bagi pengguna dan organisasi."
        },
        skills: {
            title: "Keahlian",
            frontend: {
                title: "Frontend",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
                technologies: "HTML, JavaScript, Next.js, Tailwind",
            },
            backend: {
                title: "Backend",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
                technologies: "PHP, Laravel, Golang, MySQL, Next.js, CodeIgniter",
            },
            mobile: {
                title: "Mobile",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
                technologies: "React Native",
            },
        },
        work: {
            title: "Pengalaman Kerja",
            jobs: [
                {
                    position: "Junior Programmer",
                    company: "Dinas Komunikasi, Informatika dan Persandian Aceh",
                    period: "Jul 2025 - Saat ini",
                    description:
                        "Memelihara dan mengembangkan aplikasi web dan mobile",
                    technologies:
                        "Next.js, React Native, PHP, CodeIgniter, JavaScript, HTML, MySQL, Git, Tailwind",
                },
                {
                    position: "Full-Stack Software Engineer",
                    company: "The Code",
                    period: "Feb 2025 - Jul 2025",
                    description: [
                        "Mengembangkan aplikasi desktop berbasis Go untuk pemrosesan dan konversi data dengan mekanisme lisensi terintegrasi.",
                        "Meningkatkan keandalan dan kinerja sistem melalui perbaikan bug serta pengembangan fitur.",
                        "Mengintegrasikan layanan eksternal untuk mendukung otomasi sistem dan sinkronisasi data.",
                        "Melakukan deployment serta pemeliharaan aplikasi pada infrastruktur cloud.",
                        "Mengajar dasar-dasar bahasa pemrograman dan keterampilan pemecahan masalah.",
                    ],
                    technologies:
                        "Golang, PHP, Laravel, JavaScript, Python, HTML, MySQL, PostgreSQL, Git, Amazon EC2",
                },
                {
                    position: "Freelance Developer",
                    company: "",
                    period: "Nov 2023 - Saat ini",
                    description:
                        "Merancang, mengembangkan, dan mengimplementasikan aplikasi web dan mobile sesuai kebutuhan klien, termasuk sistem informasi dan aplikasi lainnya.",
                    technologies:
                        "PHP, Flutter, Python, Laravel, JavaScript, HTML, MySQL, Git",
                },
            ],
        },
        experience: {
            title: "Magang",
            internships: [
                {
                    position: "Technical Support - Magang",
                    company: "PT Medianusa Permana, Batam",
                    period: "Feb, 2023 - Aug, 2023",
                    description: [
                        "Memelihara dan memasang perangkat jaringan (router, switch, access point) serta melakukan survei dan analisis lokasi.",
                        "Terlibat dalam instalasi dan perbaikan kabel serat optik.",
                        "Mengembangkan proyek tugas akhir berupa aplikasi mobile menggunakan Flutter secara mandiri.",
                    ],
                },
                {
                    position: "Internship - Teknisi Komputer",
                    company: "J Computer, Lhokseumawe",
                    period: "Feb 2019 - May 2019",
                    description: [
                        "Melakukan perbaikan perangkat keras dan perangkat lunak.",
                        "Membantu pelanggan menemukan produk dan memberikan informasi terkait produk.",
                        "Menangani keluhan pelanggan dengan tenang dan profesional, serta menyelesaikan masalah pelanggan secara tepat waktu.",
                    ],
                },
            ],
        },
        education: {
            title: "Pendidikan",
            items: [
                {
                    institution:
                        "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
                    program: "Mobile Development Path Cohort",
                    period: "Agu 2023 - Jan 2024",
                    description:
                        "Belajar dan mengerjakan proyek yang terkait dengan pengembangan mobile menggunakan Kotlin, XML, dan Jetpack Compose.",
                },
                {
                    institution: "Politeknik Negeri Lhokseumawe",
                    program: "Sarjana Terapan, Teknik Informatika",
                    period: "2020 - 2024",
                    description: [
                        "Mempelajari implementasi algoritma, pemrograman web dan mobile, basis data berbasis SQL, pemrograman berorientasi objek (OOP), dan desain sistem.",
                    ],
                },
                {
                    institution: "SMKN 1 Lhokseumawe",
                    program: "Rekayasa Perangkat Lunak",
                    period: "2017 - 2020",
                    description: "Mempelajari dasar-dasar pemrograman web.",
                },
            ],
        },
        projects: {
            title: "Proyek Saya",
            description: "Untuk melihat daftar lengkap proyek saya, silakan kunjungi halaman",
            link_text: "Proyek",
            items: [
                {
                    title: "Website Undangan Digital",
                    description:
                        "Undangan Digital adalah platform pembuatan undangan pernikahan, ulang tahun, atau acara lainnya secara online.",
                    link: "https://undangan.listundangan.my.id/",
                    technologies: {
                        frontend: ["JavaScript", "HTML", "CSS", "Bootstrap"],
                        backend: ["Laravel"],
                        database: ["MySQL"],
                    },
                    status: "100% Selesai",
                    images: ["image14.png", "image15.png"],
                },
                {
                    title: "Website Undangan Digital 2",
                    description:
                        "Undangan Digital 2 adalah platform pembuatan undangan pernikahan, ulang tahun, atau acara lainnya secara online yang praktis dan modern.",
                    link: "https://undangan.developerdadakan.com/",
                    technologies: {
                        frontend: ["JavaScript", "HTML", "CSS", "Bootstrap"],
                        backend: ["Laravel", "Midtrans"],
                        database: ["MySQL"],
                    },
                    features: [
                        "Pembayaran menggunakan midtrans",
                        "Upgrade Paket",
                        "Kelola undangan",
                        "Kelola histori pembayaran",
                        "Tampilan Undangan",
                        "Pembuatan dan Pengubahan undangan bisa langsung dilakukan oleh user",
                    ],
                    status: "90% Selesai, sedang tahap pengujian",
                    images: [
                        "image17.png",
                        "image18.png",
                        "image19.png",
                        "image20.png",
                        "image21.png",
                    ],
                },
                {
                    title: "Aplikasi Android Kompas Kiblat",
                    description:
                        "Kompas Kiblat adalah aplikasi berbasis mobile android yang membantu pengguna menentukan arah kiblat secara akurat dengan menggunakan sensor perangkat dan lokasi GPS.",
                    link: "#",
                    note: "Link saat ini belum ada karena masih dalam tahap pengujian",
                    technologies: {
                        frontend: ["Flutter"],
                    },
                    features: ["Kompas Kiblat"],
                    status: "100% Selesai",
                    images: ["image16.jpg"],
                },
                {
                    title:
                        "REST API Notes with Authentication using Golang and Gin Framework",
                    description:
                        "Proyek ini adalah REST API untuk manajemen catatan (notes) yang dibangun dengan Go dan Gin framework. API ini menyediakan fitur autentikasi pengguna menggunakan JWT (JSON Web Token). Pengguna dapat melakukan operasi CRUD pada catatan mereka setelah melakukan autentikasi. Proyek ini juga dilengkapi dengan dokumentasi API menggunakan Swagger, sistem migrasi database, dan environment configuration.",
                    links: [
                        {
                            text: "Link Github Backend",
                            url: "https://github.com/sultansyah/note-api",
                        },
                        {
                            text: "Link Github Frontend",
                            url: "https://github.com/sultansyah/note-frontend",
                        },
                    ],
                    technologies: {
                        frontend: ["JavaScript", "HTML", "CSS", "Bootstrap"],
                        backend: ["Golang", "Gin Framework", "JWT", "Swagger"],
                        database: ["MySQL"],
                        tools: ["Postman", "Migrate CLI"],
                    },
                    features: [
                        "Autentikasi pengguna (register, login)",
                        "Update profil pengguna (nama, email, password)",
                        "CRUD operasi untuk notes",
                        "Dokumentasi API dengan Swagger",
                        "Database migration",
                        "Environment configuration",
                    ],
                    status: "100% Selesai",
                    images: ["image12.png", "image13.png"],
                },
                {
                    title:
                        "Full-Stack Golang Vue NuxtJS: Website Crowdfunding (Course from BuildWithAngga)",
                    description:
                        "Proyek ini saya buat berdasarkan pembelajaran dari kursus Full-Stack Golang Vue NuxtJS. Proyek ini merupakan sebuah website crowdfunding yang menggunakan teknologi modern. Dalam prosesnya, saya mengembangkan backend menggunakan Golang untuk API, serta frontend yang interaktif dan responsif menggunakan Vue.js dan Nuxt.js. Saya juga mempelajari dan berhasil mengintegrasikan pembayaran menggunakan Midtrans Payment Gateway.",
                    links: [
                        {
                            text: "Link Github Backend",
                            url: "https://github.com/sultansyah/Crowdfunding-golang-vue-frontend",
                        },
                        {
                            text: "Link Github Frontend",
                            url: "https://github.com/sultansyah/Crowdfunding-golang-vue-backend",
                        },
                    ],
                    technologies: {
                        frontend: [
                            "Vue.js",
                            "Nuxt.js",
                            "JavaScript",
                            "HTML",
                            "Tailwind",
                        ],
                        backend: ["Golang", "Gin Framework", "Gorm"],
                        database: ["MySQL"],
                        tools: ["Postman"],
                    },
                    status: "100% Selesai",
                    images: [
                        "image8.png",
                        "image9.png",
                        "image10.png",
                        "image11.png",
                    ],
                },
                {
                    title:
                        "Rancang Bangun Sistem Prediksi Kebutuhan Bahan Baku Kopi pada Kafe Menggunakan ARIMA Berbasis Web",
                    description:
                        "Proyek Skripsi. Proyek ini bertujuan untuk mengembangkan sistem berbasis web yang dapat memprediksi kebutuhan bahan baku kopi pada kafe menggunakan metode ARIMA. Sistem ini dibagi menjadi dua bagian: backend menggunakan Laravel dan frontend menggunakan Vue.js. Fitur utama yang ada dalam sistem meliputi manajemen data kafe, bahan baku, menu, dan pesanan, serta memberikan prediksi kebutuhan bahan baku.",
                    technologies: {
                        frontend: [
                            "Vue.js",
                            "Bootstrap",
                            "JavaScript",
                            "HTML",
                            "CSS",
                        ],
                        backend: ["Laravel", "PHP"],
                        machine_learning: ["Python"],
                        database: ["MySQL"],
                        tools: ["Postman"],
                    },
                    status: "100% Selesai",
                    images: ["image1.png", "image2.png", "image3.png"],
                },
                {
                    title:
                        "Rancang Bangun Aplikasi Layanan Internet PermanaHome Berbasis Mobile Menggunakan Framework Flutter",
                    description:
                        "Proyek Magang. Proyek ini bertujuan untuk merancang dan mengembangkan aplikasi berbasis mobile yang memfasilitasi layanan internet PermanaHome. Aplikasi ini menyediakan berbagai fitur untuk pengguna, termasuk registrasi akun, pemilihan paket internet, formulir pemasangan, dan manajemen profil pengguna. Selain itu, terdapat fitur tambahan seperti berita, riwayat, keluhan, dan notifikasi untuk meningkatkan pengalaman pengguna dalam mengelola layanan internet mereka.",
                    links: [
                        {
                            text: "Link Github Backend",
                            url: "https://github.com/sultansyah/permanahome-admin-api",
                        },
                        {
                            text: "Link Github Frontend",
                            url: "https://github.com/sultansyah/permanahome",
                        },
                    ],
                    technologies: {
                        frontend: ["JavaScript", "Bootstrap", "HTML"],
                        backend: ["Laravel", "PHP"],
                        mobile: ["Flutter"],
                        database: ["MySQL"],
                        tools: ["Postman"],
                    },
                    status: "50% Selesai",
                    images: [
                        "image4.png",
                        "image5.png",
                        "image6.png",
                        "image7.png",
                    ],
                },
            ],
        },
        certifications: {
            title: "Sertifikasi",
            items: [
                "Junior Programmer, Badan Nasional Sertifikasi Profesi (BNSP) (Sep 2025 - Sep 2028)",
            ],
            more_certifications_link:
                "https://www.linkedin.com/in/muhammad-sultansyah/details/certifications/",
        },
        contact: {
            title: "Hubungi Saya",
            email: "muhammadsultansyah14@gmail.com",
            linkedin: "https://www.linkedin.com/in/muhammad-sultansyah/",
            github: "https://github.com/sultansyah",
            portfolio: "https://sultansyah.github.io/",
        },
        cv_download: "Unduh CV",
        cv_filename: "CV Muhammad Sultansyah Bahasa Indonesia.pdf",
        footer: "© {{year}} Muhammad Sultansyah. Hak Cipta Dilindungi.",
    },
    en: {
        hero: {
            title: "Muhammad Sultansyah",
            subtitle:
                "Frontend Developer | Backend Developer | Fullstack Developer | Mobile Developer",
            cta_text: "Contact Me",
        },
        about: {
            title: "About Me",
            description: "I am a passionate software engineer focused on web and mobile technology development. I have experience building scalable and user-friendly applications using various modern technologies.",
            description2: "I believe in sustainable software development and continuously learning new technologies to provide the best solutions for users and organizations."
        },
        skills: {
            title: "Skills",
            frontend: {
                title: "Frontend",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
                technologies: "HTML, JavaScript, Next.js, Tailwind",
            },
            backend: {
                title: "Backend",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
                technologies: "PHP, Laravel, Golang, MySQL, Next.js, CodeIgniter",
            },
            mobile: {
                title: "Mobile",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
                technologies: "React Native",
            },
        },
        work: {
            title: "Work Experience",
            jobs: [
                {
                    position: "Junior Programmer",
                    company: "Dinas Komunikasi, Informatika dan Persandian Aceh",
                    period: "Jul 2025 - Present",
                    description: "Maintain and develop web and mobile applications",
                    technologies:
                        "Next.js, React Native, PHP, CodeIgniter, JavaScript, HTML, MySQL, Git, Tailwind",
                },
                {
                    position: "Full-Stack Software Engineer",
                    company: "The Code",
                    period: "Feb 2025 - Jul 2025",
                    description: [
                        "Developed a Go-based desktop application for data processing and conversion with integrated licensing.",
                        "Improved system reliability and performance through bug fixes and enhancements.",
                        "Integrated external services to support system automation and data synchronization.",
                        "Deployed and maintained applications on cloud infrastructure.",
                        "Taught foundational programming languages and problem-solving skills.",
                    ],
                    technologies:
                        "Golang, PHP, Laravel, JavaScript, Python, HTML, MySQL, PostgreSQL, Git, Amazon EC2",
                },
                {
                    position: "Freelance Developer",
                    company: "",
                    period: "Nov 2023 - Present (part time)",
                    description:
                        "Design, develop, and implement web and mobile applications according to client requirements, including information systems and other applications.",
                    technologies:
                        "PHP, Flutter, Python, Laravel, JavaScript, HTML, MySQL, Git",
                },
            ],
        },
        experience: {
            title: "Internship",
            internships: [
                {
                    position: "Technical Support Intern",
                    company: "PT Medianusa Permana, Batam",
                    period: "Feb, 2023 - Aug, 2023",
                    description: [
                        "Maintained and installed network devices (routers, switches, access points) and conducted site surveys and analysis.",
                        "Participated in fiber optic cable installation and repair.",
                        "Independently developed a final project mobile application using Flutter.",
                    ],
                },
                {
                    position: "Internship - Computer Technician",
                    company: "J Computer, Lhokseumawe",
                    period: "Feb 2019 - May 2019",
                    description: [
                        "Performed hardware and software repairs.",
                        "Assisted customers with product selection and provided product information.",
                        "Handled customer complaints calmly and professionally, and resolved customer issues in a timely manner.",
                    ],
                },
            ],
        },
        education: {
            title: "Education",
            items: [
                {
                    institution:
                        "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
                    program: "Mobile Development Path Cohort",
                    period: "Aug 2023 - Jan 2024",
                    description:
                        "Learned and worked on projects related to mobile development using Kotlin, XML, and Jetpack Compose.",
                },
                {
                    institution: "Politeknik Negeri Lhokseumawe",
                    program: "Applied Bachelor's Degree in Informatics Engineering",
                    period: "2020 - 2024",
                    description: [
                        "Studied algorithm implementation, web and mobile programming, SQL-based databases, object-oriented programming (OOP), and system design.",
                    ],
                },
                {
                    institution: "SMKN 1 Lhokseumawe",
                    program: "Software Engineering",
                    period: "2017 - 2020",
                    description: "Learned basic web programming.",
                },
            ],
        },
        projects: {
            title: "My Projects",
            description: "To view my complete list of projects, please visit the",
            link_text: "Projects",
            items: [
                {
                    title: "Digital Invitation Website",
                    description:
                        "Digital Invitation is an online platform for creating wedding, birthday, or other event invitations.",
                    link: "https://undangan.listundangan.my.id/",
                    technologies: {
                        frontend: ["JavaScript", "HTML", "CSS", "Bootstrap"],
                        backend: ["Laravel"],
                        database: ["MySQL"],
                    },
                    status: "100% Complete",
                    images: ["image14.png", "image15.png"],
                },
                {
                    title: "Digital Invitation Website 2",
                    description:
                        "Digital Invitation 2 is a practical and modern online platform for creating wedding, birthday, or other event invitations.",
                    link: "https://undangan.developerdadakan.com/",
                    technologies: {
                        frontend: ["JavaScript", "HTML", "CSS", "Bootstrap"],
                        backend: ["Laravel", "Midtrans"],
                        database: ["MySQL"],
                    },
                    features: [
                        "Payment using midtrans",
                        "Package upgrade",
                        "Invitation management",
                        "Payment history management",
                        "Invitation display",
                        "Creation and modification of invitations can be done directly by the user",
                    ],
                    status: "90% Complete, currently in testing phase",
                    images: [
                        "image17.png",
                        "image18.png",
                        "image19.png",
                        "image20.png",
                        "image21.png",
                    ],
                },
                {
                    title: "Kiblat Compass Android App",
                    description:
                        "Kiblat Compass is an Android-based mobile app that helps users accurately determine the Qibla direction using device sensors and GPS location.",
                    link: "#",
                    note: "Link is currently unavailable as it is still in the testing phase",
                    technologies: {
                        frontend: ["Flutter"],
                    },
                    features: ["Kiblat Compass"],
                    status: "100% Complete",
                    images: ["image16.jpg"],
                },
                {
                    title:
                        "REST API Notes with Authentication using Golang and Gin Framework",
                    description:
                        "This project is a REST API for note management built with Go and Gin framework. The API provides user authentication features using JWT (JSON Web Token). Users can perform CRUD operations on their notes after authentication. This project also includes API documentation using Swagger, database migration system, and environment configuration.",
                    links: [
                        {
                            text: "Github Backend Link",
                            url: "https://github.com/sultansyah/note-api",
                        },
                        {
                            text: "Github Frontend Link",
                            url: "https://github.com/sultansyah/note-frontend",
                        },
                    ],
                    technologies: {
                        frontend: ["JavaScript", "HTML", "CSS", "Bootstrap"],
                        backend: ["Golang", "Gin Framework", "JWT", "Swagger"],
                        database: ["MySQL"],
                        tools: ["Postman", "Migrate CLI"],
                    },
                    features: [
                        "User authentication (register, login)",
                        "Update user profile (name, email, password)",
                        "CRUD operations for notes",
                        "API documentation with Swagger",
                        "Database migration",
                        "Environment configuration",
                    ],
                    status: "100% Complete",
                    images: ["image12.png", "image13.png"],
                },
                {
                    title:
                        "Full-Stack Golang Vue NuxtJS: Crowdfunding Website (Course from BuildWithAngga)",
                    description:
                        "This project was created based on the Full-Stack Golang Vue NuxtJS course. This project is a crowdfunding website using modern technology. During the process, I developed the backend using Golang for the API, and an interactive and responsive frontend using Vue.js and Nuxt.js. I also learned and successfully integrated payment using Midtrans Payment Gateway.",
                    links: [
                        {
                            text: "Github Backend Link",
                            url: "https://github.com/sultansyah/Crowdfunding-golang-vue-frontend",
                        },
                        {
                            text: "Github Frontend Link",
                            url: "https://github.com/sultansyah/Crowdfunding-golang-vue-backend",
                        },
                    ],
                    technologies: {
                        frontend: [
                            "Vue.js",
                            "Nuxt.js",
                            "JavaScript",
                            "HTML",
                            "Tailwind",
                        ],
                        backend: ["Golang", "Gin Framework", "Gorm"],
                        database: ["MySQL"],
                        tools: ["Postman"],
                    },
                    status: "100% Complete",
                    images: [
                        "image8.png",
                        "image9.png",
                        "image10.png",
                        "image11.png",
                    ],
                },
                {
                    title:
                        "Design of Web-Based Coffee Raw Material Needs Prediction System for Cafes Using ARIMA",
                    description:
                        "Thesis Project. This project aims to develop a web-based system that can predict coffee raw material needs for cafes using the ARIMA method. This system is divided into two parts: backend using Laravel and frontend using Vue.js. The main features in the system include cafe data management, raw material management, menu management, and orders, as well as providing raw material needs predictions.",
                    technologies: {
                        frontend: [
                            "Vue.js",
                            "Bootstrap",
                            "JavaScript",
                            "HTML",
                            "CSS",
                        ],
                        backend: ["Laravel", "PHP"],
                        machine_learning: ["Python"],
                        database: ["MySQL"],
                        tools: ["Postman"],
                    },
                    status: "100% Complete",
                    images: ["image1.png", "image2.png", "image3.png"],
                },
                {
                    title:
                        "Design and Development of PermanaHome Internet Service Application Based on Mobile Using Flutter Framework",
                    description:
                        "Internship Project. This project aims to design and develop a mobile application that facilitates PermanaHome internet services. This application provides various features for users, including account registration, internet package selection, installation forms, and user profile management. In addition, there are additional features such as news, history, complaints, and notifications to enhance the user experience in managing their internet services.",
                    links: [
                        {
                            text: "Github Backend Link",
                            url: "https://github.com/sultansyah/permanahome-admin-api",
                        },
                        {
                            text: "Github Frontend Link",
                            url: "https://github.com/sultansyah/permanahome",
                        },
                    ],
                    technologies: {
                        frontend: ["JavaScript", "Bootstrap", "HTML"],
                        backend: ["Laravel", "PHP"],
                        mobile: ["Flutter"],
                        database: ["MySQL"],
                        tools: ["Postman"],
                    },
                    status: "50% Complete",
                    images: [
                        "image4.png",
                        "image5.png",
                        "image6.png",
                        "image7.png",
                    ],
                },
            ],
        },
        certifications: {
            title: "Certifications",
            items: [
                "Junior Programmer, National Professional Certification Agency (BNSP) (Sep 2025 - Sep 2028)",
            ],
            more_certifications_link:
                "https://www.linkedin.com/in/muhammad-sultansyah/details/certifications/",
        },
        contact: {
            title: "Contact Me",
            email: "muhammadsultansyah14@gmail.com",
            linkedin: "https://www.linkedin.com/in/muhammad-sultansyah/",
            github: "https://github.com/sultansyah",
            portfolio: "https://sultansyah.github.io/",
        },
        cv_download: "Download CV",
        cv_filename: "CV Muhammad Sultansyah Bahasa Inggris.pdf",
        footer: "© {{year}} Muhammad Sultansyah. All Rights Reserved.",
    },
};

// Load language preference from localStorage, default to English if not set
let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

function initializePage() {
    updateContent(currentLanguage);
}

function updateContent(lang) {
    const data = portfolioData[lang];
    if (!data) return;

    // Update hero section (if exists)
    if (document.getElementById("heroTitle")) {
        document.getElementById("heroTitle").textContent = data.hero.title;
        document.getElementById("heroSubtitle").textContent = data.hero.subtitle;
        document.getElementById("heroCta").textContent = data.hero.cta_text;
        document.getElementById("heroDescription").textContent = data.about.description;
        // Set CV button text based on current language
        const cvButtonText = currentLanguage === 'id' ? 'Lihat CV' : 'View CV';
        document.getElementById("cvDownloadIdBtn").innerHTML = `<i class="fas fa-file-pdf me-2"></i>${cvButtonText} (ID)`;
        document.getElementById("cvDownloadIdBtn").href = "CV Muhammad Sultansyah Bahasa Indonesia.pdf";
        document.getElementById("cvDownloadEnBtn").innerHTML = `<i class="fas fa-file-pdf me-2"></i>${cvButtonText} (EN)`;
        document.getElementById("cvDownloadEnBtn").href = "CV Muhammad Sultansyah Bahasa Inggris.pdf";
    }


    // Update skills section (if exists)
    if (document.getElementById("skillsTitle")) {
        document.getElementById("skillsTitle").textContent = data.skills.title;
        document.getElementById("frontendTitle").innerHTML = data.skills.frontend.icon + data.skills.frontend.title;
        document.getElementById("frontendTech").textContent = data.skills.frontend.technologies;
        document.getElementById("backendTitle").innerHTML = data.skills.backend.icon + data.skills.backend.title;
        document.getElementById("backendTech").textContent = data.skills.backend.technologies;
        document.getElementById("mobileTitle").innerHTML = data.skills.mobile.icon + data.skills.mobile.title;
        document.getElementById("mobileTech").textContent = data.skills.mobile.technologies;
    }

    // Update work experience (if exists)
    if (document.getElementById("workTitle")) {
        document.getElementById("workTitle").textContent = data.work.title;
        updateWorkExperience(data.work.jobs, lang);
    }

    // Update experience/internships (if exists)
    if (document.getElementById("experienceTitle")) {
        document.getElementById("experienceTitle").textContent = data.experience.title;
        updateInternships(data.experience.internships, lang);
    }

    // Update education (if exists)
    if (document.getElementById("educationTitle")) {
        document.getElementById("educationTitle").textContent = data.education.title;
        updateEducation(data.education.items, lang);
    }

    // Update projects (if exists)
    if (document.getElementById("projectsTitle")) {
        document.getElementById("projectsTitle").textContent = data.projects.title;
        if (document.getElementById("projectsDescription")) {
            document.getElementById("projectsDescription").innerHTML = `${data.projects.description} <a href="projects.html" id="projectsLink">${data.projects.link_text}</a>.`;
        }
        updateProjects(data.projects.items, lang);
    }

    // Update certifications (if exists)
    if (document.getElementById("certificationsTitle")) {
        document.getElementById("certificationsTitle").textContent = data.certifications.title;
        updateCertifications(data.certifications, lang);
    }


    // Update navigation
    if (document.getElementById("navbarBrand")) {
        document.getElementById("navbarBrand").textContent = data.hero.title;
    }
    if (document.getElementById("navSkills")) {
        document.getElementById("navSkills").textContent = data.skills.title;
    }
    if (document.getElementById("navWork")) {
        document.getElementById("navWork").textContent = data.work.title;
    }
    if (document.getElementById("navExperience")) {
        document.getElementById("navExperience").textContent = data.experience.title;
    }
    if (document.getElementById("navEducation")) {
        document.getElementById("navEducation").textContent = data.education.title;
    }
    if (document.getElementById("navProjects")) {
        document.getElementById("navProjects").textContent = data.projects.title;
    }
    if (document.getElementById("navCertifications")) {
        document.getElementById("navCertifications").textContent = data.certifications.title;
    }

    // Update CV download button (if exists)
    if (document.getElementById("cvDownloadBtn")) {
        const cvButtonText = currentLanguage === 'id' ? 'Lihat CV' : 'View CV';
        document.getElementById("cvDownloadBtn").innerHTML = `<i class="fas fa-file-pdf me-1"></i>${cvButtonText}`;
        document.getElementById("cvDownloadBtn").href = data.cv_filename;
    }

    // Update footer (if exists)
    if (document.getElementById("footerText")) {
        const currentYear = new Date().getFullYear();
        const footerText = data.footer.replace('{{year}}', currentYear);
        document.getElementById("footerText").textContent = footerText;
    }

    // Update language button states
    if (document.getElementById("langIdBtn") && document.getElementById("langEnBtn")) {
        if (lang === "id") {
            document.getElementById("langIdBtn").classList.remove("btn-outline-secondary");
            document.getElementById("langIdBtn").classList.add("btn-primary");
            document.getElementById("langIdBtn").classList.add("active");
            document.getElementById("langEnBtn").classList.remove("btn-primary");
            document.getElementById("langEnBtn").classList.remove("active");
            document.getElementById("langEnBtn").classList.add("btn-outline-secondary");
        } else {
            document.getElementById("langEnBtn").classList.remove("btn-outline-secondary");
            document.getElementById("langEnBtn").classList.add("btn-primary");
            document.getElementById("langEnBtn").classList.add("active");
            document.getElementById("langIdBtn").classList.remove("btn-primary");
            document.getElementById("langIdBtn").classList.remove("active");
            document.getElementById("langIdBtn").classList.add("btn-outline-secondary");
        }
    }
}

function updateWorkExperience(jobs, lang) {
    const container = document.getElementById("workTimeline");
    if (!container) return;
    
    container.innerHTML = "";

    jobs.forEach((job) => {
        const jobElement = document.createElement("div");
        jobElement.className = "timeline-item";

        let descriptionHtml = "";
        if (Array.isArray(job.description)) {
            descriptionHtml = "<ul>";
            job.description.forEach((desc) => {
                descriptionHtml += `<li>${desc}</li>`;
            });
            descriptionHtml += "</ul>";
        } else {
            descriptionHtml = `<p class="text-muted mb-1">${job.description}</p>`;
        }

        jobElement.innerHTML = `
            <div class="timeline-content">
                <h5>${job.position} - ${job.company}</h5>
                <p class="period">${job.period}</p>
                ${descriptionHtml}
                <p><strong>Teknologi:</strong> ${job.technologies}</p>
            </div>
        `;

        container.appendChild(jobElement);
    });
}

function updateInternships(internships, lang) {
    const container = document.getElementById("internshipTimeline");
    if (!container) return;
    
    container.innerHTML = "";

    internships.forEach((intern) => {
        const internElement = document.createElement("div");
        internElement.className = "timeline-item";

        let descriptionHtml = "";
        if (Array.isArray(intern.description)) {
            descriptionHtml = "<ul>";
            intern.description.forEach((desc) => {
                descriptionHtml += `<li>${desc}</li>`;
            });
            descriptionHtml += "</ul>";
        } else {
            descriptionHtml = `<p class="text-muted mb-1">${intern.description}</p>`;
        }

        internElement.innerHTML = `
            <div class="timeline-content">
                <h5>${intern.position} - ${intern.company}</h5>
                <p class="period">${intern.period}</p>
                ${descriptionHtml}
            </div>
        `;

        container.appendChild(internElement);
    });
}

function updateEducation(educationItems, lang) {
    const container = document.getElementById("educationTimeline");
    if (!container) return;
    
    container.innerHTML = "";

    educationItems.forEach((edu) => {
        const eduElement = document.createElement("div");
        eduElement.className = "timeline-item";

        let descriptionHtml = "";
        if (Array.isArray(edu.description)) {
            descriptionHtml = "<ul>";
            edu.description.forEach((desc) => {
                descriptionHtml += `<li>${desc}</li>`;
            });
            descriptionHtml += "</ul>";
        } else {
            descriptionHtml = `<p class="text-muted mb-1">${edu.description}</p>`;
        }

        eduElement.innerHTML = `
            <div class="timeline-content">
                <h5>${edu.institution}</h5>
                <p class="text-muted mb-1">${edu.program}</p>
                 <p class="period">${edu.period}</p>
                ${descriptionHtml}
            </div>
        `;

        container.appendChild(eduElement);
    });
}

function updateProjects(projects, lang) {
    const container = document.getElementById("projectsContainer");
    if (!container) return;

    container.innerHTML = "";

    projects.forEach((project, index) => {
        const projectElement = document.createElement("div");
        projectElement.className = "col-md-12 mb-4";

        let linkHtml = "";
        if (project.link) {
            linkHtml = `<a href="${project.link}" target="_blank" class="btn btn-sm btn-outline-primary mb-2">${project.link.includes("github.com") ? "GitHub" : "Live Demo"}</a>`;
        } else if (project.links) {
            project.links.forEach((link) => {
                linkHtml += `<a href="${link.url}" target="_blank" class="btn btn-sm btn-outline-primary me-2 mb-2">${link.text}</a>`;
            });
        }

        if (project.note) {
            linkHtml += `<span class="badge bg-warning text-dark me-2 mb-2">${project.note}</span>`;
        }

        let featuresHtml = "";
        if (project.features) {
            featuresHtml =
                "<h6><strong>" +
                (lang === "id" ? "Fitur Utama:" : "Main Features:") +
                "</strong></h6><ul>";
            project.features.forEach((feature) => {
                featuresHtml += `<li>${feature}</li>`;
            });
            featuresHtml += "</ul>";
        }

        let technologiesHtml = "<div>";
        const techCategories = Object.keys(project.technologies);
        techCategories.forEach(category => {
            const techs = project.technologies[category];
            if (techs && techs.length > 0) {
                 techs.forEach((tech) => {
                    technologiesHtml += `<span class="badge bg-secondary me-1 mb-1">${tech}</span>`;
                });
            }
        });
        technologiesHtml += "</div>";


        let carouselHtml = "";
        if (project.images && project.images.length > 0) {
            const carouselId = `projectCarousel${index}`;

            carouselHtml = `
                <div id="${carouselId}" class="carousel slide project-carousel" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="hover">
                    <div class="carousel-indicators">`;

            project.images.forEach((image, imgIndex) => {
                carouselHtml += `
                        <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${imgIndex}" ${imgIndex === 0 ? 'class="active"' : ''}></button>`;
            });

            carouselHtml += `
                    </div>
                    <div class="carousel-inner">`;

            project.images.forEach((image, imgIndex) => {
                carouselHtml += `
                        <div class="carousel-item ${imgIndex === 0 ? 'active' : ''}">
                            <img src="${image}" class="d-block w-100" alt="Project Image ${imgIndex + 1}" onerror="this.onerror=null; this.src='image1.png'; this.alt='Image not available';">
                        </div>`;
            });

            carouselHtml += `
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>`;
        }

        projectElement.innerHTML = `
            <div class="card">
                <div class="project-card-inner">
                    <div class="project-images">
                        ${carouselHtml}
                    </div>
                    <div class="project-details">
                        <h5 class="fw-bold card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <p><strong>${project.status}</strong></p>
                        <div class="mb-3">${linkHtml}</div>
                        <h6><strong>${lang === "id" ? "Teknologi:" : "Technologies:"}</strong></h6>
                        ${technologiesHtml}
                        <div class="mt-3">${featuresHtml}</div>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(projectElement);
    });
}


function updateCertifications(certifications, lang) {
    const container = document.getElementById("certificationsList");
    if (!container) return;
    
    container.innerHTML = "";

    certifications.items.forEach((cert) => {
        const certElement = document.createElement("li");
        certElement.className = "list-group-item";
        certElement.textContent = cert;
        container.appendChild(certElement);
    });

    // Add link to more certifications on LinkedIn
    if (certifications.more_certifications_link) {
        const moreCertElement = document.createElement("li");
        moreCertElement.className = "list-group-item";
        const linkText =
            lang === "id"
                ? "Lihat semua sertifikasi di LinkedIn"
                : "View all certifications on LinkedIn";
        moreCertElement.innerHTML = `<a href="${certifications.more_certifications_link}" target="_blank">${linkText}</a>`;
        container.appendChild(moreCertElement);
    }
}

// Function to extract all unique technologies from projects
function getAllTechnologies(projects) {
    const technologies = new Set();
    projects.forEach(project => {
        if (project.technologies) {
            Object.values(project.technologies).forEach(techList => {
                if (Array.isArray(techList)) {
                    techList.forEach(tech => technologies.add(tech));
                }
            });
        }
    });
    return Array.from(technologies).sort();
}

// Function to filter projects by technology
function filterProjects(tech) {
    const data = portfolioData[currentLanguage];
    let filteredProjects = data.projects.items;

    if (tech !== 'all') {
        filteredProjects = data.projects.items.filter(project => {
            if (project.technologies) {
                return Object.values(project.technologies).some(techList => {
                    if (Array.isArray(techList)) {
                        return techList.some(techItem => techItem.toLowerCase().includes(tech.toLowerCase()));
                    }
                    return false;
                });
            }
            return false;
        });
    }

    updateProjects(filteredProjects, currentLanguage);
}

// Add event listeners for language switching
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById("langIdBtn")) {
        document.getElementById("langIdBtn").addEventListener("click", function () {
            currentLanguage = "id";
            localStorage.setItem('preferredLanguage', 'id');
            updateContent("id");
        });
    }

    if (document.getElementById("langEnBtn")) {
        document.getElementById("langEnBtn").addEventListener("click", function () {
            currentLanguage = "en";
            localStorage.setItem('preferredLanguage', 'en');
            updateContent("en");
        });
    }

    // Initialize the page
    initializePage();

    // Initialize project filtering if on projects page
    if (document.getElementById("projectsContainer")) {
        const data = portfolioData[currentLanguage];
        const technologies = getAllTechnologies(data.projects.items);

        const filterContainer = document.getElementById("techFilter");
        technologies.forEach(tech => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "btn btn-outline-secondary btn-sm mx-1 my-1";
            button.setAttribute("data-filter", tech);
            button.textContent = tech;
            button.addEventListener("click", function() {
                // Remove active class from all buttons
                document.querySelectorAll("#techFilter .btn").forEach(btn => {
                    btn.classList.remove("active");
                });
                // Add active class to clicked button
                this.classList.add("active");
                // Filter projects
                filterProjects(tech);
            });
            filterContainer.appendChild(button);
        });

        // Add event listeners to existing "All" button
        document.querySelector("#techFilter .btn[data-filter='all']").addEventListener("click", function() {
            // Remove active class from all buttons
            document.querySelectorAll("#techFilter .btn").forEach(btn => {
                btn.classList.remove("active");
            });
            // Add active class to "All" button
            this.classList.add("active");
            // Show all projects
            updateProjects(data.projects.items, currentLanguage);
        });
    }
});