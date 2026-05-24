var cart = [];
var currentCaptcha = '';
var currentRegisterCaptcha = '';
var landingCaptcha = '';
var landingRegCaptcha = '';



function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const mainHeader = document.getElementById('mainHeader');
    const currentPath = window.location.pathname.toLowerCase();
    
    // 检查页面类型
    const isLandingPage = currentPath.includes('landing.html');
    const isLoginPage = currentPath.includes('login.html');
    const isProtectedPage = !isLandingPage && !isLoginPage;
    
    if (isProtectedPage && isLoggedIn !== 'true') {
        // 未登录但访问受保护页面，重定向到着陆页
        window.location.href = 'landing.html';
        return;
    }
    
    // 对于有mainHeader的页面（着陆页和登录页），登录后显示导航栏
    if (isLoggedIn === 'true' && mainHeader) {
        mainHeader.style.display = 'block';
    }
    
    // Update profile page with user info
    if (isLoggedIn === 'true') {
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');
        
        if (username) {
            const userNameEl = document.getElementById('userName');
            if (userNameEl) userNameEl.textContent = username;
        }
        if (email) {
            const userEmailEl = document.getElementById('userEmail');
            if (userEmailEl) userEmailEl.textContent = email;
        }
    }
}

function showLandingLogin() {
    document.getElementById('landingLogin').classList.add('active');
    document.getElementById('landingRegister').classList.remove('active');
    generateLandingCaptcha();
}

function hideLandingLogin() {
    document.getElementById('landingLogin').classList.remove('active');
}

function showLandingRegister() {
    document.getElementById('landingRegister').classList.add('active');
    document.getElementById('landingLogin').classList.remove('active');
    generateLandingRegCaptcha();
}

function hideLandingRegister() {
    document.getElementById('landingRegister').classList.remove('active');
}

function generateLandingCaptcha() {
    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    var captcha = '';
    for (var i = 0; i < 4; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    landingCaptcha = captcha;
    document.getElementById('landingCaptchaText').textContent = captcha;
}

function generateLandingRegCaptcha() {
    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    var captcha = '';
    for (var i = 0; i < 4; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    landingRegCaptcha = captcha;
    document.getElementById('landingRegCaptchaText').textContent = captcha;
}

function validateLandingLogin() {
    var username = document.getElementById('landingUsername').value.trim();
    var password = document.getElementById('landingPassword').value;
    var captcha = document.getElementById('landingCaptcha').value.toUpperCase();
    
    if (!username) {
        alert('请输入用户名');
        return false;
    }
    
    if (!password) {
        alert('请输入密码');
        return false;
    }
    
    if (!captcha) {
        alert('请输入验证码');
        return false;
    }
    
    if (captcha !== landingCaptcha) {
        alert('验证码错误，请重新输入');
        generateLandingCaptcha();
        document.getElementById('landingCaptcha').value = '';
        return false;
    }
    
    if (username === '240802203' && password === '123456') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('email', username + '@example.com');
        window.location.href = 'index.html';
        return false;
    } else {
        alert('用户名或密码错误\n测试用户名: 240802203\n测试密码: 123456');
        return false;
    }
}

function validateLandingRegister() {
    var username = document.getElementById('landingRegUsername').value.trim();
    var password = document.getElementById('landingRegPassword').value;
    var email = document.getElementById('landingRegEmail').value;
    var captcha = document.getElementById('landingRegCaptcha').value.toUpperCase();
    
    if (!username) {
        alert('请输入用户名');
        return false;
    }
    
    if (!password) {
        alert('请输入密码');
        return false;
    }
    
    if (!email) {
        alert('请输入邮箱');
        return false;
    }
    
    if (!captcha) {
        alert('请输入验证码');
        return false;
    }
    
    if (captcha !== landingRegCaptcha) {
        alert('验证码错误，请重新输入');
        generateLandingRegCaptcha();
        document.getElementById('landingRegCaptcha').value = '';
        return false;
    }
    
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    window.location.href = 'index.html';
    return false;
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    alert('已成功退出登录');
    window.location.href = 'landing.html';
}

// Theme Toggle Functionality
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    // Check for saved theme preference or default to light theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Add click event listener
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');

        // Save preference
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

function searchFlower() {
    var searchInput = document.getElementById('searchInput');
    var keyword = searchInput.value.toLowerCase().trim();
    
    if (!keyword) {
        alert('请输入搜索关键词');
        return;
    }
    
    var results = [];
    
    var flowerCards = document.querySelectorAll('.flower-card');
    flowerCards.forEach(function(card) {
        var title = card.querySelector('h3').textContent.toLowerCase();
        var desc = card.querySelector('p').textContent.toLowerCase();
        if (title.includes(keyword) || desc.includes(keyword)) {
            results.push({
                type: 'flower',
                id: card.id,
                name: card.querySelector('h3').textContent.split(' ')[0],
                desc: card.querySelector('p').textContent.substring(0, 50) + '...'
            });
        }
    });
    
    for (var province in provinceFlowers) {
        var flower = provinceFlowers[province].flower.toLowerCase();
        var desc = provinceFlowers[province].description.toLowerCase();
        if (province.toLowerCase().includes(keyword) || 
            flower.includes(keyword) || 
            desc.includes(keyword)) {
            results.push({
                type: 'province',
                name: province,
                flower: provinceFlowers[province].flower,
                desc: provinceFlowers[province].description
            });
        }
    }
    
    showSearchResults(results, keyword);
    searchInput.value = '';
}

function showSearchResults(results, keyword) {
    var resultsDiv = document.getElementById('searchResults');
    if (!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.id = 'searchResults';
        resultsDiv.className = 'search-results-overlay';
        document.body.appendChild(resultsDiv);
    }
    
    if (results.length === 0) {
        resultsDiv.innerHTML = `
            <div class="search-results">
                <div class="results-header">
                    <h3>搜索结果</h3>
                    <span class="close-btn" onclick="closeSearchResults()">&times;</span>
                </div>
                <p class="no-results">未找到与 "${keyword}" 相关的内容</p>
            </div>
        `;
    } else {
        var html = `
            <div class="search-results">
                <div class="results-header">
                    <h3>搜索结果 - 共找到 ${results.length} 条</h3>
                    <span class="close-btn" onclick="closeSearchResults()">&times;</span>
                </div>
                <div class="results-list">
        `;
        
        results.forEach(function(result) {
            if (result.type === 'flower') {
                html += `
                    <div class="result-item" onclick="scrollToFlower('${result.id}')">
                        <span class="result-icon">🌸</span>
                        <div class="result-content">
                            <h4>${result.name}</h4>
                            <p>${result.desc}</p>
                        </div>
                        <span class="result-arrow">→</span>
                    </div>
                `;
            } else {
                html += `
                    <div class="result-item" onclick="showProvinceSearch('${result.name}')">
                        <span class="result-icon">📍</span>
                        <div class="result-content">
                            <h4>${result.name} - ${result.flower}</h4>
                            <p>${result.desc}</p>
                        </div>
                        <span class="result-arrow">→</span>
                    </div>
                `;
            }
        });
        
        html += `
                </div>
            </div>
        `;
        resultsDiv.innerHTML = html;
    }
    
    resultsDiv.style.display = 'flex';
}

function closeSearchResults() {
    var resultsDiv = document.getElementById('searchResults');
    if (resultsDiv) {
        resultsDiv.style.display = 'none';
    }
}

function scrollToFlower(flowerId) {
    var element = document.getElementById(flowerId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.add('highlight');
        setTimeout(function() {
            element.classList.remove('highlight');
        }, 2000);
    }
    closeSearchResults();
}

function showProvinceSearch(provinceName) {
    var mapSection = document.querySelector('.map-section');
    if (mapSection) {
        mapSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    setTimeout(function() {
        showProvinceInfo(provinceName);
    }, 500);
    closeSearchResults();
}

function searchProduct() {
    var searchInput = document.getElementById('searchInput');
    var keyword = searchInput.value.toLowerCase().trim();
    
    if (!keyword) {
        alert('请输入搜索关键词');
        return;
    }
    
    var products = document.querySelectorAll('.product-card');
    var found = false;
    
    products.forEach(function(product) {
        var name = product.querySelector('h3').textContent.toLowerCase();
        if (name.includes(keyword)) {
            product.style.display = 'block';
            found = true;
        } else {
            product.style.display = 'none';
        }
    });
    
    if (!found) {
        alert('未找到 "' + keyword + '" 相关商品');
    }
    
    searchInput.value = '';
}

function filterProducts(category) {
    var tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    var products = document.querySelectorAll('.product-card');
    
    products.forEach(function(product) {
        if (category === 'all') {
            product.style.display = 'block';
        } else {
            if (product.dataset.category === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        }
    });
}

function increaseQty(btn) {
    var input = btn.parentElement.querySelector('.qty-input');
    input.value = parseInt(input.value) + 1;
}

function decreaseQty(btn) {
    var input = btn.parentElement.querySelector('.qty-input');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function addToCart(name, price, btn) {
    var qtyInput = btn.parentElement.querySelector('.qty-input');
    var quantity = parseInt(qtyInput.value);
    
    var existingItem = cart.find(function(item) {
        return item.name === name;
    });
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }
    
    alert(name + ' x ' + quantity + ' 已加入购物车');
    qtyInput.value = 1;
    updateCart();
}

function updateCart() {
    var cartItemsDiv = document.getElementById('cartItems');
    var cartTotalDiv = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="empty-cart">购物车为空，请添加商品</p>';
        cartTotalDiv.style.display = 'none';
        return;
    }
    
    var cartHTML = '';
    var totalAmount = 0;
    var totalCount = 0;
    
    cart.forEach(function(item, index) {
        var itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;
        totalCount += item.quantity;
        
        cartHTML += '<div class="cart-item">';
        cartHTML += '<span class="cart-item-name">' + item.name + '</span>';
        cartHTML += '<span class="cart-item-qty">x' + item.quantity + '</span>';
        cartHTML += '<span class="cart-item-price">¥' + itemTotal.toFixed(2) + '</span>';
        cartHTML += '<button class="remove-item" onclick="removeFromCart(' + index + ')">删除</button>';
        cartHTML += '</div>';
    });
    
    cartItemsDiv.innerHTML = cartHTML;
    cartTotalDiv.style.display = 'block';
    document.getElementById('totalCount').textContent = totalCount;
    document.getElementById('totalAmount').textContent = '¥' + totalAmount.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    var totalAmount = 0;
    cart.forEach(function(item) {
        totalAmount += item.price * item.quantity;
    });
    
    alert('结算成功！\n商品总数: ' + cart.reduce(function(sum, item) { return sum + item.quantity; }, 0) + '\n付款总额: ¥' + totalAmount.toFixed(2));
    cart = [];
    updateCart();
}

function generateCaptcha() {
    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    var captcha = '';
    for (var i = 0; i < 4; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    currentCaptcha = captcha;
    document.getElementById('captchaText').textContent = captcha;
}

function generateRegisterCaptcha() {
    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    var captcha = '';
    for (var i = 0; i < 4; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    currentRegisterCaptcha = captcha;
    document.getElementById('regCaptchaText').textContent = captcha;
}

function validateLogin() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value;
    var captcha = document.getElementById('captcha').value.toUpperCase();
    
    if (!username) {
        alert('请输入用户名');
        return false;
    }
    
    if (!password) {
        alert('请输入密码');
        return false;
    }
    
    if (!captcha) {
        alert('请输入验证码');
        return false;
    }
    
    if (captcha !== currentCaptcha) {
        alert('验证码错误，请重新输入');
        generateCaptcha();
        return false;
    }
    
    if (username === '240802203' && password === '123456') {
        alert('登录成功！欢迎来到浮光花事');
        return false;
    } else {
        alert('用户名或密码错误\n测试用户名: 240802203\n测试密码: 123456');
        return false;
    }
}

function validateRegister() {
    var username = document.getElementById('regUsername').value.trim();
    var password = document.getElementById('regPassword').value;
    var confirmPassword = document.getElementById('regConfirmPassword').value;
    var email = document.getElementById('regEmail').value;
    var captcha = document.getElementById('regCaptcha').value.toUpperCase();
    
    if (!username) {
        alert('请输入用户名');
        return false;
    }
    
    if (username.length < 3) {
        alert('用户名至少需要3个字符');
        return false;
    }
    
    if (!password) {
        alert('请输入密码');
        return false;
    }
    
    if (password.length < 6) {
        alert('密码至少需要6个字符');
        return false;
    }
    
    if (password !== confirmPassword) {
        alert('两次输入的密码不一致');
        return false;
    }
    
    if (!email) {
        alert('请输入邮箱');
        return false;
    }
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('请输入有效的邮箱地址');
        return false;
    }
    
    if (!captcha) {
        alert('请输入验证码');
        return false;
    }
    
    if (captcha !== currentRegisterCaptcha) {
        alert('验证码错误，请重新输入');
        generateRegisterCaptcha();
        return false;
    }
    
    alert('注册成功！\n用户名: ' + username + '\n邮箱: ' + email);
    showLogin();
    return false;
}

function showRegister() {
    document.querySelector('.form-container').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'block';
    generateRegisterCaptcha();
}

function showLogin() {
    document.querySelector('.form-container').style.display = 'block';
    document.getElementById('registerContainer').style.display = 'none';
    generateCaptcha();
}

function forgotPassword() {
    alert('请联系管理员重置密码：3050745668@qq.com');
}

var canvasCtx = null;
var cursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
var canvasLines = [];
var config = {
    friction: 0.5,
    trails: 10,
    size: 30,
    dampening: 0.25,
    tension: 0.98
};

function Node() {
    this.x = cursorPos.x;
    this.y = cursorPos.y;
    this.vy = 0;
    this.vx = 0;
}

function Line(e) {
    this.init(e || {});
}

Line.prototype = {
    init: function(e) {
        this.spring = e.spring + 0.1 * Math.random() - 0.02;
        this.friction = config.friction + 0.01 * Math.random() - 0.002;
        this.nodes = [];
        for (var t, n = 0; n < config.size; n++) {
            t = new Node();
            t.x = cursorPos.x;
            t.y = cursorPos.y;
            this.nodes.push(t);
        }
    },
    update: function() {
        var e = this.spring;
        var t = this.nodes[0];
        t.vx += (cursorPos.x - t.x) * e;
        t.vy += (cursorPos.y - t.y) * e;
        
        for (var n, i = 0, a = this.nodes.length; i < a; i++) {
            t = this.nodes[i];
            if (i > 0) {
                n = this.nodes[i - 1];
                t.vx += (n.x - t.x) * e;
                t.vy += (n.y - t.y) * e;
                t.vx += n.vx * config.dampening;
                t.vy += n.vy * config.dampening;
            }
            t.vx *= this.friction;
            t.vy *= this.friction;
            t.x += t.vx;
            t.y += t.vy;
            e *= config.tension;
        }
    },
    draw: function() {
        var e, t, n = this.nodes[0].x, i = this.nodes[0].y;
        canvasCtx.beginPath();
        canvasCtx.moveTo(n, i);
        
        for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
            e = this.nodes[a];
            t = this.nodes[a + 1];
            n = 0.5 * (e.x + t.x);
            i = 0.5 * (e.y + t.y);
            canvasCtx.quadraticCurveTo(e.x, e.y, n, i);
        }
        
        e = this.nodes[a];
        t = this.nodes[a + 1];
        canvasCtx.quadraticCurveTo(e.x, e.y, t.x, t.y);
        canvasCtx.stroke();
        canvasCtx.closePath();
    }
};

function renderCanvas() {
    if (!canvasCtx || !canvasCtx.running) return;
    
    canvasCtx.globalCompositeOperation = 'source-over';
    canvasCtx.clearRect(0, 0, canvasCtx.canvas.width, canvasCtx.canvas.height);
    canvasCtx.globalCompositeOperation = 'lighter';
    
    canvasCtx.strokeStyle = 'rgba(102, 187, 106, 0.25)';
    canvasCtx.lineWidth = 1;
    
    for (var i = 0; i < config.trails; i++) {
        canvasLines[i].update();
        canvasLines[i].draw();
    }
    
    canvasCtx.frame++;
    requestAnimationFrame(renderCanvas);
}

function initCanvasCursor() {
    var canvas = document.getElementById('canvas');
    if (!canvas) {
        console.log('Canvas element not found');
        return;
    }
    
    canvasCtx = canvas.getContext('2d');
    canvasCtx.running = true;
    canvasCtx.frame = 1;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    canvasLines = [];
    for (var i = 0; i < config.trails; i++) {
        canvasLines.push(new Line({ spring: 0.4 + (i / config.trails) * 0.025 }));
    }
    
    function updateCursor(e) {
        if (e.touches) {
            cursorPos.x = e.touches[0].pageX;
            cursorPos.y = e.touches[0].pageY;
        } else {
            cursorPos.x = e.clientX;
            cursorPos.y = e.clientY;
        }
    }
    
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('touchmove', updateCursor);
    
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    renderCanvas();
}

// Images Slider
var currentImageIndex = 0;
var sliderImages = [];
var sliderInterval;

function initImagesSlider() {
    var sliderContainer = document.getElementById('imagesSlider');
    if (!sliderContainer) return;
    
    sliderImages = sliderContainer.querySelectorAll('.slider-image');
    if (sliderImages.length === 0) return;
    
    startSliderAutoplay();
}

function startSliderAutoplay() {
    if (sliderInterval) clearInterval(sliderInterval);
    
    sliderInterval = setInterval(function() {
        goToNextImage();
    }, 5000);
}

function goToNextImage() {
    var prevIndex = currentImageIndex;
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    
    updateSliderImages(prevIndex, currentImageIndex, 'next');
}

function goToPrevImage() {
    var prevIndex = currentImageIndex;
    currentImageIndex = (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
    
    updateSliderImages(prevIndex, currentImageIndex, 'prev');
}

function updateSliderImages(fromIndex, toIndex, direction) {
    var fromImage = sliderImages[fromIndex];
    var toImage = sliderImages[toIndex];
    
    // 先设置好下一张图片的位置
    if (direction === 'next') {
        toImage.style.transform = 'translateY(100%)';
    } else {
        toImage.style.transform = 'translateY(-100%)';
    }
    toImage.style.opacity = '0';
    toImage.classList.add('active');
    toImage.style.zIndex = '2';
    
    // 强制重排
    toImage.offsetHeight;
    
    // 进行动画
    setTimeout(function() {
        // 当前图片向上/向下滑出
        fromImage.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
        fromImage.style.transform = direction === 'next' ? 'translateY(-100%)' : 'translateY(100%)';
        fromImage.style.opacity = '0';
        
        // 新图片滑入
        toImage.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
        toImage.style.transform = 'translateY(0)';
        toImage.style.opacity = '1';
        
        // 动画结束后重置
        setTimeout(function() {
            fromImage.classList.remove('active');
            fromImage.style.zIndex = '0';
            fromImage.style.transform = '';
            fromImage.style.opacity = '0';
            fromImage.style.transition = '';
            
            toImage.style.zIndex = '1';
            toImage.style.transition = '';
        }, 800);
    }, 50);
}

// 中国省份花卉数据
var provinceFlowers = {
    '北京市': { name: '北京市', flower: '月季', description: '北京市花，象征着繁荣富强' },
    '天津市': { name: '天津市', flower: '月季', description: '天津市花，优雅而坚韧' },
    '上海市': { name: '上海市', flower: '白玉兰', description: '上海市花，象征着开路先锋' },
    '重庆市': { name: '重庆市', flower: '山茶花', description: '重庆市花，热情似火' },
    '河北省': { name: '河北省', flower: '太平花', description: '河北省花，吉祥如意' },
    '山西省': { name: '山西省', flower: '榆叶梅', description: '山西省花，春意盎然' },
    '辽宁省': { name: '辽宁省', flower: '天女花', description: '辽宁省花，清丽脱俗' },
    '吉林省': { name: '吉林省', flower: '君子兰', description: '吉林省花，高雅端庄' },
    '黑龙江省': { name: '黑龙江省', flower: '丁香花', description: '黑龙江省花，芬芳馥郁' },
    '江苏省': { name: '江苏省', flower: '茉莉花', description: '江苏省花，清香四溢' },
    '浙江省': { name: '浙江省', flower: '兰花', description: '浙江省花，清雅高洁' },
    '安徽省': { name: '安徽省', flower: '黄山杜鹃', description: '安徽省花，艳丽多姿' },
    '福建省': { name: '福建省', flower: '水仙', description: '福建省花，凌波仙子' },
    '江西省': { name: '江西省', flower: '杜鹃花', description: '江西省花，映山红遍' },
    '山东省': { name: '山东省', flower: '牡丹', description: '山东省花，国色天香' },
    '河南省': { name: '河南省', flower: '腊梅', description: '河南省花，傲雪凌霜' },
    '湖北省': { name: '湖北省', flower: '梅花', description: '湖北省花，凌寒独开' },
    '湖南省': { name: '湖南省', flower: '荷花', description: '湖南省花，出淤泥而不染' },
    '广东省': { name: '广东省', flower: '木棉', description: '广东省花，英雄之花' },
    '海南省': { name: '海南省', flower: '三角梅', description: '海南省花，热情奔放' },
    '四川省': { name: '四川省', flower: '木芙蓉', description: '四川省花，娇艳动人' },
    '贵州省': { name: '贵州省', flower: '杜鹃', description: '贵州省花，漫山遍野' },
    '云南省': { name: '云南省', flower: '云南山茶', description: '云南省花，花中珍品' },
    '陕西省': { name: '陕西省', flower: '石榴花', description: '陕西省花，红红火火' },
    '甘肃省': { name: '甘肃省', flower: '郁金香', description: '甘肃省花，绚丽多彩' },
    '青海省': { name: '青海省', flower: '丁香花', description: '青海省花，高原之花' },
    '台湾省': { name: '台湾省', flower: '蝴蝶兰', description: '台湾省花，翩翩起舞' },
    '内蒙古自治区': { name: '内蒙古自治区', flower: '马兰', description: '内蒙古区花，草原之花' },
    '广西壮族自治区': { name: '广西壮族自治区', flower: '桂花', description: '广西区花，十里飘香' },
    '西藏自治区': { name: '西藏自治区', flower: '格桑花', description: '西藏区花，幸福之花' },
    '宁夏回族自治区': { name: '宁夏回族自治区', flower: '马兰花', description: '宁夏区花，生命力强' },
    '新疆维吾尔自治区': { name: '新疆维吾尔自治区', flower: '雪莲花', description: '新疆区花，天山奇花' },
    '香港特别行政区': { name: '香港特别行政区', flower: '紫荆花', description: '香港区花，永远盛开' },
    '澳门特别行政区': { name: '澳门特别行政区', flower: '莲花', description: '澳门区花，圣洁之花' }
};

// 完整的中国省份简化数据
var chinaProvincesData = {
    "type": "FeatureCollection",
    "features": [
        {"type": "Feature", "properties": {"name": "北京", "cp": [116.4, 39.9]}, "geometry": {"type": "Polygon", "coordinates": [[[115.5, 39.8], [117.0, 39.8], [117.0, 40.5], [115.5, 40.5], [115.5, 39.8]]]}},
        {"type": "Feature", "properties": {"name": "天津", "cp": [117.2, 39.1]}, "geometry": {"type": "Polygon", "coordinates": [[[116.8, 38.8], [117.8, 38.8], [117.8, 39.4], [116.8, 39.4], [116.8, 38.8]]]}},
        {"type": "Feature", "properties": {"name": "河北", "cp": [114.5, 38.0]}, "geometry": {"type": "Polygon", "coordinates": [[[113.0, 36.0], [116.5, 36.0], [116.5, 40.0], [113.0, 40.0], [113.0, 36.0]]]}},
        {"type": "Feature", "properties": {"name": "山西", "cp": [112.5, 37.8]}, "geometry": {"type": "Polygon", "coordinates": [[[110.5, 34.5], [114.5, 34.5], [114.5, 40.0], [110.5, 40.0], [110.5, 34.5]]]}},
        {"type": "Feature", "properties": {"name": "内蒙古", "cp": [111.5, 41.0]}, "geometry": {"type": "Polygon", "coordinates": [[[97.0, 37.0], [126.0, 37.0], [126.0, 53.0], [97.0, 53.0], [97.0, 37.0]]]}},
        {"type": "Feature", "properties": {"name": "辽宁", "cp": [123.5, 41.8]}, "geometry": {"type": "Polygon", "coordinates": [[[118.0, 38.5], [125.5, 38.5], [125.5, 43.5], [118.0, 43.5], [118.0, 38.5]]]}},
        {"type": "Feature", "properties": {"name": "吉林", "cp": [125.5, 43.8]}, "geometry": {"type": "Polygon", "coordinates": [[[121.5, 40.5], [131.0, 40.5], [131.0, 46.5], [121.5, 46.5], [121.5, 40.5]]]}},
        {"type": "Feature", "properties": {"name": "黑龙江", "cp": [127.5, 47.5]}, "geometry": {"type": "Polygon", "coordinates": [[[121.0, 43.0], [135.0, 43.0], [135.0, 54.5], [121.0, 54.5], [121.0, 43.0]]]}},
        {"type": "Feature", "properties": {"name": "上海", "cp": [121.5, 31.2]}, "geometry": {"type": "Polygon", "coordinates": [[[121.0, 30.8], [122.0, 30.8], [122.0, 31.5], [121.0, 31.5], [121.0, 30.8]]]}},
        {"type": "Feature", "properties": {"name": "江苏", "cp": [119.2, 32.0]}, "geometry": {"type": "Polygon", "coordinates": [[[116.5, 30.5], [122.0, 30.5], [122.0, 35.0], [116.5, 35.0], [116.5, 30.5]]]}},
        {"type": "Feature", "properties": {"name": "浙江", "cp": [120.2, 29.1]}, "geometry": {"type": "Polygon", "coordinates": [[[118.0, 27.0], [123.0, 27.0], [123.0, 31.5], [118.0, 31.5], [118.0, 27.0]]]}},
        {"type": "Feature", "properties": {"name": "安徽", "cp": [117.2, 31.8]}, "geometry": {"type": "Polygon", "coordinates": [[[114.5, 29.0], [119.5, 29.0], [119.5, 34.5], [114.5, 34.5], [114.5, 29.0]]]}},
        {"type": "Feature", "properties": {"name": "福建", "cp": [119.3, 26.1]}, "geometry": {"type": "Polygon", "coordinates": [[[115.0, 23.5], [121.5, 23.5], [121.5, 28.5], [115.0, 28.5], [115.0, 23.5]]]}},
        {"type": "Feature", "properties": {"name": "江西", "cp": [115.9, 28.6]}, "geometry": {"type": "Polygon", "coordinates": [[[113.5, 24.5], [118.5, 24.5], [118.5, 30.0], [113.5, 30.0], [113.5, 24.5]]]}},
        {"type": "Feature", "properties": {"name": "山东", "cp": [117.0, 36.6]}, "geometry": {"type": "Polygon", "coordinates": [[[114.0, 34.0], [122.5, 34.0], [122.5, 38.5], [114.0, 38.5], [114.0, 34.0]]]}},
        {"type": "Feature", "properties": {"name": "河南", "cp": [113.6, 34.7]}, "geometry": {"type": "Polygon", "coordinates": [[[110.5, 31.5], [116.5, 31.5], [116.5, 36.5], [110.5, 36.5], [110.5, 31.5]]]}},
        {"type": "Feature", "properties": {"name": "湖北", "cp": [114.3, 30.5]}, "geometry": {"type": "Polygon", "coordinates": [[[110.5, 29.0], [116.0, 29.0], [116.0, 33.0], [110.5, 33.0], [110.5, 29.0]]]}},
        {"type": "Feature", "properties": {"name": "湖南", "cp": [112.9, 28.2]}, "geometry": {"type": "Polygon", "coordinates": [[[108.5, 24.5], [114.5, 24.5], [114.5, 30.5], [108.5, 30.5], [108.5, 24.5]]]}},
        {"type": "Feature", "properties": {"name": "广东", "cp": [113.3, 23.1]}, "geometry": {"type": "Polygon", "coordinates": [[[109.5, 20.0], [117.5, 20.0], [117.5, 25.5], [109.5, 25.5], [109.5, 20.0]]]}},
        {"type": "Feature", "properties": {"name": "广西", "cp": [108.3, 23.3]}, "geometry": {"type": "Polygon", "coordinates": [[[104.0, 20.5], [112.5, 20.5], [112.5, 26.5], [104.0, 26.5], [104.0, 20.5]]]}},
        {"type": "Feature", "properties": {"name": "海南", "cp": [110.3, 19.1]}, "geometry": {"type": "Polygon", "coordinates": [[[108.0, 18.0], [112.0, 18.0], [112.0, 20.5], [108.0, 20.5], [108.0, 18.0]]]}},
        {"type": "Feature", "properties": {"name": "重庆", "cp": [106.5, 29.5]}, "geometry": {"type": "Polygon", "coordinates": [[[105.0, 28.0], [108.0, 28.0], [108.0, 31.0], [105.0, 31.0], [105.0, 28.0]]]}},
        {"type": "Feature", "properties": {"name": "四川", "cp": [104.0, 30.6]}, "geometry": {"type": "Polygon", "coordinates": [[[97.5, 26.0], [110.5, 26.0], [110.5, 34.0], [97.5, 34.0], [97.5, 26.0]]]}},
        {"type": "Feature", "properties": {"name": "贵州", "cp": [106.7, 26.6]}, "geometry": {"type": "Polygon", "coordinates": [[[103.0, 24.0], [109.5, 24.0], [109.5, 29.5], [103.0, 29.5], [103.0, 24.0]]]}},
        {"type": "Feature", "properties": {"name": "云南", "cp": [102.7, 25.0]}, "geometry": {"type": "Polygon", "coordinates": [[[97.5, 21.0], [106.5, 21.0], [106.5, 29.5], [97.5, 29.5], [97.5, 21.0]]]}},
        {"type": "Feature", "properties": {"name": "西藏", "cp": [88.9, 31.5]}, "geometry": {"type": "Polygon", "coordinates": [[[78.0, 26.5], [99.0, 26.5], [99.0, 36.0], [78.0, 36.0], [78.0, 26.5]]]}},
        {"type": "Feature", "properties": {"name": "陕西", "cp": [108.9, 34.3]}, "geometry": {"type": "Polygon", "coordinates": [[[105.5, 31.5], [111.5, 31.5], [111.5, 39.5], [105.5, 39.5], [105.5, 31.5]]]}},
        {"type": "Feature", "properties": {"name": "甘肃", "cp": [103.5, 36.0]}, "geometry": {"type": "Polygon", "coordinates": [[[92.5, 32.5], [108.5, 32.5], [108.5, 42.5], [92.5, 42.5], [92.5, 32.5]]]}},
        {"type": "Feature", "properties": {"name": "青海", "cp": [96.1, 35.6]}, "geometry": {"type": "Polygon", "coordinates": [[[89.0, 31.5], [103.0, 31.5], [103.0, 39.5], [89.0, 39.5], [89.0, 31.5]]]}},
        {"type": "Feature", "properties": {"name": "宁夏", "cp": [106.2, 38.5]}, "geometry": {"type": "Polygon", "coordinates": [[[104.0, 36.0], [107.5, 36.0], [107.5, 39.5], [104.0, 39.5], [104.0, 36.0]]]}},
        {"type": "Feature", "properties": {"name": "新疆", "cp": [84.2, 41.5]}, "geometry": {"type": "Polygon", "coordinates": [[[73.0, 34.0], [96.0, 34.0], [96.0, 49.0], [73.0, 49.0], [73.0, 34.0]]]}},
        {"type": "Feature", "properties": {"name": "台湾", "cp": [120.9, 23.5]}, "geometry": {"type": "Polygon", "coordinates": [[[120.0, 21.5], [122.5, 21.5], [122.5, 25.5], [120.0, 25.5], [120.0, 21.5]]]}},
        {"type": "Feature", "properties": {"name": "香港", "cp": [114.2, 22.3]}, "geometry": {"type": "Polygon", "coordinates": [[[113.8, 22.0], [114.5, 22.0], [114.5, 22.5], [113.8, 22.5], [113.8, 22.0]]]}},
        {"type": "Feature", "properties": {"name": "澳门", "cp": [113.5, 22.2]}, "geometry": {"type": "Polygon", "coordinates": [[[113.3, 22.0], [113.6, 22.0], [113.6, 22.3], [113.3, 22.3], [113.3, 22.0]]]}}
    ]
};

// 地图初始化
async function initChinaMap() {
    var svg = document.getElementById('chinaMap');
    if (!svg) {
        console.log('SVG元素未找到');
        return;
    }

    console.log('开始初始化地图...');
    
    try {
        console.log('正在尝试加载china.json...');
        
        // 尝试从china.json加载真实轮廓数据
        var response = await fetch('china.json', {
            cache: 'no-cache'
        });
        
        console.log('fetch响应状态:', response.status, response.statusText);
        
        if (!response.ok) {
            throw new Error('无法加载china.json, 状态码: ' + response.status);
        }
        
        var chinaGeoJSON = await response.json();
        
        console.log('成功解析JSON数据，类型:', chinaGeoJSON.type);
        console.log('features数量:', chinaGeoJSON.features ? chinaGeoJSON.features.length : 0);
        
        if (!chinaGeoJSON.features || chinaGeoJSON.features.length === 0) {
            throw new Error('省份数据为空或格式错误');
        }
        
        console.log('成功加载真实省份轮廓数据，共', chinaGeoJSON.features.length, '个省份');
        console.log('第一个省份:', chinaGeoJSON.features[0].properties.name);
        console.log('第一个省份几何类型:', chinaGeoJSON.features[0].geometry.type);

        var bounds = calculateBounds(chinaGeoJSON);
        console.log('计算的边界:', bounds);
        
        var width = 900;
        var height = 500;
        var scale = Math.min(width / (bounds.maxLng - bounds.minLng), height / (bounds.maxLat - bounds.minLat)) * 0.75;
        var offsetX = (width - scale * (bounds.maxLng + bounds.minLng)) / 2;
        var offsetY = (height + scale * (bounds.maxLat + bounds.minLat)) / 2;
        
        console.log('缩放参数 - scale:', scale, 'offsetX:', offsetX, 'offsetY:', offsetY);

        svg.innerHTML = '';

        var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        var hoverFilter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
        hoverFilter.setAttribute('id', 'hoverGlow');
        hoverFilter.innerHTML = '<feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>';
        defs.appendChild(hoverFilter);
        svg.appendChild(defs);

        var pathCount = 0;
        chinaGeoJSON.features.forEach(function(feature, index) {
            var path = createPath(feature, scale, offsetX, offsetY);
            if (path) {
                svg.appendChild(path);
                pathCount++;
            } else {
                console.warn('无法创建第', index, '个省份的路径:', feature.properties.name);
            }
        });
        
        console.log('成功创建', pathCount, '个路径');

        chinaGeoJSON.features.forEach(function(feature) {
            var cp = feature.properties.cp;
            if (cp && cp.length === 2) {
                var x = cp[0] * scale + offsetX;
                var y = -cp[1] * scale + offsetY;
                
                var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('x', x);
                text.setAttribute('y', y);
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('font-size', '11');
                text.setAttribute('fill', '#333');
                text.setAttribute('class', 'province-label');
                text.setAttribute('font-weight', '500');
                // 从全称中提取简称用于显示
                var fullName = feature.properties.name;
                var shortName = fullName.replace(/省|市|自治区|特别行政区|回族|壮族|维吾尔/g, '');
                text.textContent = shortName;
                
                svg.appendChild(text);
            }
        });
        
        console.log('地图初始化完成，共绘制', pathCount, '个省份');
        
    } catch (error) {
        console.error('加载真实地图数据失败:', error);
        console.error('错误详情:', error.stack);
        
        // 使用简化数据作为备用方案
        try {
            console.log('尝试使用简化数据...');
            var chinaGeoJSON = chinaProvincesData;
            
            if (!chinaGeoJSON.features || chinaGeoJSON.features.length === 0) {
                throw new Error('备用省份数据也为空');
            }

            var bounds = calculateBounds(chinaGeoJSON);
            var width = 900;
            var height = 500;
            var scale = Math.min(width / (bounds.maxLng - bounds.minLng), height / (bounds.maxLat - bounds.minLat)) * 0.75;
            var offsetX = (width - scale * (bounds.maxLng + bounds.minLng)) / 2;
            var offsetY = (height + scale * (bounds.maxLat + bounds.minLat)) / 2;

            svg.innerHTML = '';

            var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            var hoverFilter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
            hoverFilter.setAttribute('id', 'hoverGlow');
            hoverFilter.innerHTML = '<feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>';
            defs.appendChild(hoverFilter);
            svg.appendChild(defs);

            chinaGeoJSON.features.forEach(function(feature) {
                var path = createPath(feature, scale, offsetX, offsetY);
                if (path) {
                    svg.appendChild(path);
                }
            });

            chinaGeoJSON.features.forEach(function(feature) {
                var cp = feature.properties.cp;
                if (cp && cp.length === 2) {
                    var x = cp[0] * scale + offsetX;
                    var y = -cp[1] * scale + offsetY;
                    
                    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    text.setAttribute('x', x);
                    text.setAttribute('y', y);
                    text.setAttribute('text-anchor', 'middle');
                    text.setAttribute('font-size', '11');
                    text.setAttribute('fill', '#333');
                    text.setAttribute('class', 'province-label');
                    text.setAttribute('font-weight', '500');
                    text.textContent = feature.properties.name;
                    
                    svg.appendChild(text);
                }
            });
            
            console.log('使用简化数据绘制地图完成');
        } catch (backupError) {
            console.error('备用方案也失败了:', backupError);
        }
    }
}

// 计算GeoJSON边界
function calculateBounds(geoJSON) {
    var minLng = Infinity, maxLng = -Infinity;
    var minLat = Infinity, maxLat = -Infinity;

    geoJSON.features.forEach(function(feature) {
        processCoordinates(feature.geometry.coordinates, function(coord) {
            minLng = Math.min(minLng, coord[0]);
            maxLng = Math.max(maxLng, coord[0]);
            minLat = Math.min(minLat, coord[1]);
            maxLat = Math.max(maxLat, coord[1]);
        });
    });

    return { minLng: minLng, maxLng: maxLng, minLat: minLat, maxLat: maxLat };
}

// 处理坐标
function processCoordinates(coords, callback) {
    if (Array.isArray(coords)) {
        if (coords.length === 2 && typeof coords[0] === 'number' && typeof coords[1] === 'number') {
            callback(coords);
        } else {
            coords.forEach(function(c) { processCoordinates(c, callback); });
        }
    }
}

// 创建SVG路径
function createPath(feature, scale, offsetX, offsetY) {
    var geom = feature.geometry;
    var d = '';

    if (geom.type === 'Polygon') {
        d = polygonToPath(geom.coordinates, scale, offsetX, offsetY);
    } else if (geom.type === 'MultiPolygon') {
        geom.coordinates.forEach(function(poly) {
            d += polygonToPath(poly, scale, offsetX, offsetY);
        });
    }

    if (!d) return null;

    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('fill', '#a5d6a7');
    path.setAttribute('stroke', '#66bb6a');
    path.setAttribute('stroke-width', '1');
    path.setAttribute('data-name', feature.properties.name);
    path.style.cursor = 'pointer';
    path.style.transition = 'fill 0.3s ease';

    path.addEventListener('mouseenter', function() {
        this.setAttribute('fill', '#81c784');
    });

    path.addEventListener('mouseleave', function() {
        this.setAttribute('fill', '#a5d6a7');
    });

    path.addEventListener('click', function() {
        var provinceMap = {
            '北京': '北京市',
            '天津': '天津市',
            '上海': '上海市',
            '重庆': '重庆市',
            '河北': '河北省',
            '山西': '山西省',
            '辽宁': '辽宁省',
            '吉林': '吉林省',
            '黑龙江': '黑龙江省',
            '江苏': '江苏省',
            '浙江': '浙江省',
            '安徽': '安徽省',
            '福建': '福建省',
            '江西': '江西省',
            '山东': '山东省',
            '河南': '河南省',
            '湖北': '湖北省',
            '湖南': '湖南省',
            '广东': '广东省',
            '广西': '广西壮族自治区',
            '海南': '海南省',
            '四川': '四川省',
            '贵州': '贵州省',
            '云南': '云南省',
            '西藏': '西藏自治区',
            '陕西': '陕西省',
            '甘肃': '甘肃省',
            '青海': '青海省',
            '内蒙古': '内蒙古自治区',
            '宁夏': '宁夏回族自治区',
            '新疆': '新疆维吾尔自治区',
            '台湾': '台湾省',
            '香港': '香港特别行政区',
            '澳门': '澳门特别行政区'
        };
        var fullName = provinceMap[feature.properties.name] || feature.properties.name;
        showProvinceInfo(fullName);
    });

    return path;
}

// 多边形转换为路径
function polygonToPath(coords, scale, offsetX, offsetY) {
    var d = '';
    var pointCount = 0;
    coords.forEach(function(ring, i) {
        ring.forEach(function(coord, j) {
            if (Array.isArray(coord) && coord.length >= 2) {
                var x = coord[0] * scale + offsetX;
                var y = -coord[1] * scale + offsetY;
                if (j === 0) {
                    d += 'M' + x + ',' + y;
                } else {
                    d += 'L' + x + ',' + y;
                }
                pointCount++;
            }
        });
        d += 'Z';
    });
    console.log('生成路径包含', pointCount, '个点');
    return d;
}

// 显示省份信息
function showProvinceInfo(provinceName) {
    var provinceInfo = document.getElementById('provinceInfo');
    provinceInfo.classList.add('active');
    
    // 省份名称映射，解决名称不匹配问题
    var provinceMap = {
        '北京': '北京市',
        '天津': '天津市',
        '上海': '上海市',
        '重庆': '重庆市',
        '河北': '河北省',
        '山西': '山西省',
        '辽宁': '辽宁省',
        '吉林': '吉林省',
        '黑龙江': '黑龙江省',
        '江苏': '江苏省',
        '浙江': '浙江省',
        '安徽': '安徽省',
        '福建': '福建省',
        '江西': '江西省',
        '山东': '山东省',
        '河南': '河南省',
        '湖北': '湖北省',
        '湖南': '湖南省',
        '广东': '广东省',
        '广西': '广西壮族自治区',
        '海南': '海南省',
        '四川': '四川省',
        '贵州': '贵州省',
        '云南': '云南省',
        '西藏': '西藏自治区',
        '陕西': '陕西省',
        '甘肃': '甘肃省',
        '青海': '青海省',
        '内蒙古': '内蒙古自治区',
        '宁夏': '宁夏回族自治区',
        '新疆': '新疆维吾尔自治区',
        '台湾': '台湾省',
        '香港': '香港特别行政区',
        '澳门': '澳门特别行政区'
    };
    
    var fullProvinceName = provinceMap[provinceName] || provinceName;
    var provinceData = provinceFlowers[fullProvinceName];
    document.getElementById('provinceName').textContent = fullProvinceName;
    
    if (provinceData) {
        var html = '<div style="margin-top: 10px;">';
        
        html += '<div style="background: #f8f9fa; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.12);">';
        html += '<h3 style="margin: 0 0 12px 0; color: #2e7d32; font-size: 1.3em;">' + provinceData.flower + '</h3>';
        html += '<p style="font-size: 1em; color: #555; line-height: 1.7; margin: 0;">' + provinceData.description + '</p>';
        html += '</div>';
        
        html += '</div>';
        document.getElementById('provinceFlowers').innerHTML = html;
    } else {
        document.getElementById('provinceFlowers').innerHTML = '<p style="color: #999; text-align: center; padding: 20px;">暂无该省份花卉信息</p>';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Check login status
    checkLoginStatus();
    
    // Initialize theme toggle
    initTheme();

    if (document.getElementById('captchaImg')) {
        generateCaptcha();
    }

    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });
        
        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    });
    
    if (document.getElementById('canvas')) {
        initCanvasCursor();
    }
    
    if (document.getElementById('imagesSlider')) {
        initImagesSlider();
    }
    
    if (document.getElementById('chinaMap')) {
        console.log('DOM loaded, calling initChinaMap...');
        initChinaMap();
    } else {
        console.log('chinaMap element not found');
    }
});