document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    });
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });
    
    // Auto slide change
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Student Testimonial Slider
    const studentTestimonials = document.querySelectorAll('.student-testimonial');
    const studentDots = document.querySelectorAll('.slider-controls .dot');
    let currentStudentTestimonial = 0;
    
    function showStudentTestimonial(index) {
        studentTestimonials.forEach(testimonial => testimonial.classList.remove('active'));
        studentDots.forEach(dot => dot.classList.remove('active'));
        
        studentTestimonials[index].classList.add('active');
        studentDots[index].classList.add('active');
        currentStudentTestimonial = index;
    }
    
    studentDots.forEach((dot, index) => {
        dot.addEventListener('click', () => showStudentTestimonial(index));
    });
    
    // Auto slide change
    setInterval(() => {
        currentStudentTestimonial = (currentStudentTestimonial + 1) % studentTestimonials.length;
        showStudentTestimonial(currentStudentTestimonial);
    }, 6000);
    
    // Curriculum Tabs
    const curriculumTabBtns = document.querySelectorAll('.tab-btn');
    const curriculumTabContents = document.querySelectorAll('.tab-content');
    
    curriculumTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            curriculumTabBtns.forEach(b => b.classList.remove('active'));
            curriculumTabContents.forEach(content => content.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Fee Structure Tabs
    const feeTabBtns = document.querySelectorAll('.fee-tab-btn');
    const feeTabContents = document.querySelectorAll('.fee-tab-content');
    
    feeTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-fee-tab');
            
            feeTabBtns.forEach(b => b.classList.remove('active'));
            feeTabContents.forEach(content => content.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Facilities Tabs
    const facilityTabBtns = document.querySelectorAll('.facility-tab-btn');
    const facilityContents = document.querySelectorAll('.facility-content');
    
    facilityTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const facilityId = btn.getAttribute('data-facility');
            
            facilityTabBtns.forEach(b => b.classList.remove('active'));
            facilityContents.forEach(content => content.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(facilityId).classList.add('active');
        });
    });
    
    // Student Achievements Tabs
    const achievementTabBtns = document.querySelectorAll('.achievement-tab-btn');
    const achievementContents = document.querySelectorAll('.achievement-content');
    
    achievementTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const achievementId = btn.getAttribute('data-achievement');
            
            achievementTabBtns.forEach(b => b.classList.remove('active'));
            achievementContents.forEach(content => content.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(achievementId).classList.add('active');
        });
    });
    
    // Student Activities Tabs
    const activityTabBtns = document.querySelectorAll('.activity-tab-btn');
    const activityContents = document.querySelectorAll('.activity-content');
    
    activityTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const activityId = btn.getAttribute('data-activity');
            
            activityTabBtns.forEach(b => b.classList.remove('active'));
            activityContents.forEach(content => content.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(activityId).classList.add('active');
        });
    });
    
    // News Tabs
    const newsTabBtns = document.querySelectorAll('.news-tab-btn');
    const newsItems = document.querySelectorAll('.news-item');
    
    newsTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const newsType = btn.getAttribute('data-news');
            
            newsTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (newsType === 'all') {
                newsItems.forEach(item => item.style.display = 'grid');
            } else {
                newsItems.forEach(item => {
                    if (item.getAttribute('data-news') === newsType) {
                        item.style.display = 'grid';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
        });
    });
    
    // Gallery Filter
    const categoryBtns = document.querySelectorAll('.category-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (category === 'all') {
                galleryItems.forEach(item => item.style.display = 'block');
            } else {
                galleryItems.forEach(item => {
                    if (item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });
    
    // Lightbox Gallery
    const galleryImages = document.querySelectorAll('.gallery-item img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentImageIndex = 0;
    
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImageIndex = index;
            updateLightbox();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    function updateLightbox() {
        const imgSrc = galleryImages[currentImageIndex].getAttribute('src');
        const caption = galleryImages[currentImageIndex].parentElement.querySelector('.gallery-overlay p').textContent;
        
        lightboxImg.setAttribute('src', imgSrc);
        lightboxCaption.textContent = caption;
    }
    
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightbox();
    });
    
    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightbox();
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation - check if required fields are filled
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            if (name.value.trim() === '' || email.value.trim() === '' || subject.value === '' || message.value.trim() === '') {
                alert('Please fill in all required fields.');
                return;
            }
            
            // If validation passes, show success message
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation - check if required fields are filled
            const firstName = document.getElementById('firstName');
            const lastName = document.getElementById('lastName');
            const dob = document.getElementById('dob');
            const gender = document.getElementById('gender');
            const applyingFor = document.getElementById('applyingFor');
            const fatherName = document.getElementById('fatherName');
            const fatherMobile = document.getElementById('fatherMobile');
            const motherName = document.getElementById('motherName');
            const address = document.getElementById('address');
            const city = document.getElementById('city');
            const state = document.getElementById('state');
            const pincode = document.getElementById('pincode');
            const email = document.getElementById('email');
            const howHeard = document.getElementById('howHeard');
            const agreeTerms = document.getElementById('agreeTerms');
            
            if (
                firstName.value.trim() === '' || 
                lastName.value.trim() === '' || 
                dob.value.trim() === '' || 
                gender.value === '' || 
                applyingFor.value === '' || 
                fatherName.value.trim() === '' || 
                fatherMobile.value.trim() === '' || 
                motherName.value.trim() === '' || 
                address.value.trim() === '' || 
                city.value.trim() === '' || 
                state.value.trim() === '' || 
                pincode.value.trim() === '' || 
                email.value.trim() === '' || 
                howHeard.value === '' || 
                !agreeTerms.checked
            ) {
                alert('Please fill in all required fields and agree to the terms.');
                return;
            }
            
            // If validation passes, show success message
            alert('Thank you for your application! We will review it and contact you soon.');
            this.reset();
        });
    }
    
    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]');
            
            if (email.value.trim() === '') {
                alert('Please enter your email address.');
                return;
            }
            
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
    
    // Scroll to top button
    const scrollToTopBtn = document.createElement('div');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            document.querySelector('header').classList.add('header-scrolled');
        } else {
            document.querySelector('header').classList.remove('header-scrolled');
        }
    });
    
    // Initialize tabs on page load
    if (curriculumTabBtns.length > 0) {
        curriculumTabBtns[0].click();
    }
    
    if (feeTabBtns.length > 0) {
        feeTabBtns[0].click();
    }
    
    if (facilityTabBtns.length > 0) {
        facilityTabBtns[0].click();
    }
    
    if (achievementTabBtns.length > 0) {
        achievementTabBtns[0].click();
    }
    
    if (activityTabBtns.length > 0) {
        activityTabBtns[0].click();
    }
    
    if (newsTabBtns.length > 0) {
        newsTabBtns[0].click();
    }
    
    if (categoryBtns.length > 0) {
        categoryBtns[0].click();
    }
});

// Additional styles for scroll to top button
const scrollToTopStyle = document.createElement('style');
scrollToTopStyle.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--secondary-color);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    }
    
    .scroll-to-top.show {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-to-top:hover {
        background-color: var(--dark-color);
    }
`;
document.head.appendChild(scrollToTopStyle);