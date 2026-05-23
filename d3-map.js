// D3.js 中国地图实现

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

var provinceNameMap = {
    '北京': '北京市', '天津': '天津市', '上海': '上海市', '重庆': '重庆市',
    '河北': '河北省', '山西': '山西省', '辽宁': '辽宁省', '吉林': '吉林省',
    '黑龙江': '黑龙江省', '江苏': '江苏省', '浙江': '浙江省', '安徽': '安徽省',
    '福建': '福建省', '江西': '江西省', '山东': '山东省', '河南': '河南省',
    '湖北': '湖北省', '湖南': '湖南省', '广东': '广东省', '广西': '广西壮族自治区',
    '海南': '海南省', '四川': '四川省', '贵州': '贵州省', '云南': '云南省',
    '西藏': '西藏自治区', '陕西': '陕西省', '甘肃': '甘肃省', '青海': '青海省',
    '内蒙古': '内蒙古自治区', '宁夏': '宁夏回族自治区', '新疆': '新疆维吾尔自治区',
    '台湾': '台湾省', '香港': '香港特别行政区', '澳门': '澳门特别行政区'
};

function initChinaMap() {
    var width = 900;
    var height = 500;
    
    var svg = d3.select('#chinaMap')
        .attr('width', width)
        .attr('height', height);
    
    var projection = d3.geoMercator()
        .center([105, 38])
        .scale(850)
        .translate([width / 2, height / 2]);
    
    var pathGenerator = d3.geoPath().projection(projection);
    
    d3.json('china.json').then(function(data) {
        svg.selectAll('path')
            .data(data.features)
            .enter()
            .append('path')
            .attr('d', pathGenerator)
            .attr('fill', '#a5d6a7')
            .attr('stroke', '#66bb6a')
            .attr('stroke-width', 1)
            .attr('cursor', 'pointer')
            .style('transition', 'fill 0.3s ease')
            .on('mouseenter', function(event, d) {
                d3.select(this).attr('fill', '#81c784');
            })
            .on('mouseleave', function(event, d) {
                d3.select(this).attr('fill', '#a5d6a7');
            })
            .on('click', function(event, d) {
                showProvinceInfo(d.properties.name);
            });
        
        svg.selectAll('text')
            .data(data.features)
            .enter()
            .append('text')
            .attr('x', function(d) { return projection(d.properties.cp)[0]; })
            .attr('y', function(d) { return projection(d.properties.cp)[1]; })
            .attr('text-anchor', 'middle')
            .attr('font-size', '11px')
            .attr('fill', '#333')
            .attr('font-weight', '500')
            .text(function(d) {
                return d.properties.name.replace(/省|市|自治区|特别行政区|回族|壮族|维吾尔/g, '');
            });
    }).catch(function(error) {
        console.error('地图加载失败:', error);
        svg.append('text')
            .attr('x', width / 2)
            .attr('y', height / 2)
            .attr('text-anchor', 'middle')
            .attr('font-size', '16px')
            .attr('fill', '#666')
            .text('地图加载失败');
    });
}

function showProvinceInfo(provinceName) {
    var provinceInfo = document.getElementById('provinceInfo');
    provinceInfo.classList.add('active');
    
    var fullName = provinceNameMap[provinceName] || provinceName;
    var data = provinceFlowers[fullName];
    
    document.getElementById('provinceName').textContent = fullName;
    
    if (data) {
        document.getElementById('provinceFlowers').innerHTML = 
            '<div style="margin-top:10px;"><div style="background:#f8f9fa;padding:20px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.12);">' +
            '<h3 style="margin:0 0 12px 0;color:#2e7d32;font-size:1.3em;">' + data.flower + '</h3>' +
            '<p style="font-size:1em;color:#555;line-height:1.7;margin:0;">' + data.description + '</p></div></div>';
    } else {
        document.getElementById('provinceFlowers').innerHTML = 
            '<p style="color:#999;text-align:center;padding:20px;">暂无该省份花卉信息</p>';
    }
}