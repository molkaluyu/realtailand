// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化轮播
    if ($('.hero-slider').length) {
        $('.hero-slider').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true,
            cssEase: 'ease-in-out',
            accessibility: true,
            focusOnSelect: false,
            focusOnChange: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
        
        // 解决aria-hidden的可访问性问题
        $('.hero-slider').on('afterChange', function() {
            $('.slick-slide').removeAttr('tabindex');
            $('.slick-current').attr('tabindex', '0');
        });
    }
    
    // 获取语言切换按钮
    const enBtn = document.getElementById('en-btn');
    const thBtn = document.getElementById('th-btn');
    
    // 获取所有英文和泰文元素
    const enElements = document.querySelectorAll('.en');
    const thElements = document.querySelectorAll('.th');
    
    // 设置默认语言为英文
    let currentLanguage = 'en';
    
    // 切换到英文的函数
    function switchToEnglish() {
        enElements.forEach(el => el.style.display = 'block');
        thElements.forEach(el => el.style.display = 'none');
        enBtn.classList.add('active');
        thBtn.classList.remove('active');
        currentLanguage = 'en';
        // 保存语言偏好到localStorage
        localStorage.setItem('language', 'en');
        
        // 通知用户语言已切换
        console.log('语言已切换为英文');
    }
    
    // 切换到泰文的函数
    function switchToThai() {
        enElements.forEach(el => el.style.display = 'none');
        thElements.forEach(el => el.style.display = 'block');
        thBtn.classList.add('active');
        enBtn.classList.remove('active');
        currentLanguage = 'th';
        // 保存语言偏好到localStorage
        localStorage.setItem('language', 'th');
        
        // 通知用户语言已切换
        console.log('语言已切换为泰文');
    }
    
    // 为英文按钮添加点击事件
    enBtn.addEventListener('click', switchToEnglish);
    
    // 为泰文按钮添加点击事件
    thBtn.addEventListener('click', switchToThai);
    
    // 检查localStorage中是否有保存的语言偏好
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'th') {
        switchToThai();
    } else {
        switchToEnglish(); // 默认英文
    }
    
    // 数据统计动画效果
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(statNumber => {
            const target = parseInt(statNumber.innerText.replace(/[^0-9]/g, ''));
            let current = 0;
            const increment = Math.ceil(target / 50); // 分50步完成动画
            const duration = 1500; // 动画持续时间(毫秒)
            const intervalTime = duration / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                // 根据原始格式显示数字
                if (statNumber.innerText.includes('+')) {
                    statNumber.innerText = current + '+';
                } else {
                    statNumber.innerText = current;
                }
            }, intervalTime);
        });
    }
    
    // 检查元素是否在可视区域内
    const isInViewport = function(elem) {
        const bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    
    // 监听滚动事件，当统计区域进入视口时启动动画
    const statsSection = document.querySelector('.stats');
    let animated = false; // 确保动画只执行一次
    
    if (statsSection) {
        window.addEventListener('scroll', function() {
            if (!animated && isInViewport(statsSection)) {
                animateStats();
                animated = true;
            }
        });
        
        // 检查页面加载时统计区域是否已在视口内
        if (isInViewport(statsSection)) {
            animateStats();
            animated = true;
        }
    }
    
    // 添加滚动动画效果
    const scrollElements = document.querySelectorAll('.service-card, .project-card');
    
    // 检查元素是否在视口内
    const isElementInViewport = el => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };
    
    // 给在视口中的元素添加动画类
    const displayScrollElement = el => {
        el.classList.add('scrolled');
    };
    
    // 处理滚动事件
    const handleScrollAnimation = () => {
        scrollElements.forEach(el => {
            if (isElementInViewport(el)) {
                displayScrollElement(el);
            }
        });
    };
    
    // 绑定滚动事件
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // 初始检查
    handleScrollAnimation();
    
    // 表单提交事件
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // 表单验证
            if (!formData.name || !formData.email || !formData.message) {
                alert(currentLanguage === 'en' ? 'Please fill all required fields!' : 'กรุณากรอกข้อมูลที่จำเป็นทั้งหมด!');
                return;
            }
            
            // 简单的电子邮件验证
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert(currentLanguage === 'en' ? 'Please enter a valid email address!' : 'กรุณาป้อนที่อยู่อีเมลที่ถูกต้อง!');
                return;
            }
            
            // 表单提交处理 - 实际应用中应该发送到服务器
            console.log('表单提交数据:', formData);
            
            // 清空表单
            contactForm.reset();
            
            // 显示提交成功消息
            alert(currentLanguage === 'en' ? 'Message sent successfully!' : 'ส่งข้อความสำเร็จ!');
        });
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 