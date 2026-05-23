// 各省份特色可售卖花卉数据库
const flowerDatabase = {
    '北京市': [
        { name: '月季', latinName: 'Rosa chinensis', description: '北京市花，花期长（5-11月），色彩丰富，是常见园林绿化和家庭盆栽的畅销品种。' },
        { name: '菊花', latinName: 'Chrysanthemum morifolium', description: '秋季名花，品种繁多，花期从9月至次年1月，是节日用花和家居装饰的热门选择。' },
        { name: '牡丹', latinName: 'Paeonia suffruticosa', description: '雍容华贵，被誉为"花中之王"，花期4-5月，常用于园林景观和高档花艺。' }
    ],
    '天津市': [
        { name: '月季', latinName: 'Rosa chinensis', description: '天津市花，天津各大公园广泛种植，花型优美，四季开花，是畅销的园林绿化花卉。' },
        { name: '海棠', latinName: 'Malus spectabilis', description: '春季盛开，花姿潇洒，品种繁多，常用于庭院绿化和盆栽观赏。' },
        { name: '迎春花', latinName: 'Jasminum nudiflorum', description: '早春开放，金黄灿烂，是早春庭院和公园常见花卉，价格实惠。' }
    ],
    '河北省': [
        { name: '桃花', latinName: 'Prunus persica', description: '春天盛开，粉红娇艳，花期3-4月，常用于庭院种植和切花装饰。' },
        { name: '牡丹', latinName: 'Paeonia suffruticosa', description: '河北省花，柏乡县有千年牡丹园，雍容华贵，是传统名花，市场销量高。' },
        { name: '丁香', latinName: 'Syringa oblata', description: '春季开花，香气浓郁，河北园林常见花卉，适合庭院种植和切花。' },
        { name: '玫瑰', latinName: 'Rosa rugosa', description: '河北平山县玫瑰种植基地，芳香四溢，是花卉市场的热门品种。' }
    ],
    '山西省': [
        { name: '山楂花', latinName: 'Crataegus pinnatifida', description: '山西特产山楂树的花，春季白花如雪，可用于庭院种植和切花装饰。' },
        { name: '牡丹', latinName: 'Paeonia suffruticosa', description: '古时有"洛阳牡丹甲天下"说法，山西也有种植，雍容华贵，市场销量好。' },
        { name: '菊花', latinName: 'Chrysanthemum morifolium', description: '秋季节庆常用花卉，山西各地广泛栽培，品种繁多，价格亲民。' },
        { name: '郁金香', latinName: 'Tulipa gesneriana', description: '现代园林常用花卉，色彩艳丽，春季开花，是节日用花的热门选择。' }
    ],
    '内蒙古自治区': [
        { name: '马兰花', latinName: 'Iris lactea', description: '内蒙古草原常见野花，生命力顽强，蓝紫色优雅，适合庭院种植和盆栽。' },
        { name: '芍药', latinName: 'Paeonia lactiflora', description: '草原花卉代表，花大色艳，花期5-6月，是畅销的观赏花卉和切花。' },
        { name: '金莲花', latinName: 'Trollius chinensis', description: '草原湿地常见，夏季金黄色点缀草原，可用于盆栽和切花。' },
        { name: '百合', latinName: 'Lilium brownii', description: '内蒙古野百合，洁白芬芳，花期5-6月，是切花市场的热门品种。' }
    ],
    '辽宁省': [
        { name: '杜鹃', latinName: 'Rhododendron simsii', description: '辽宁省花，春季漫山遍野，花色繁多，是畅销的盆栽和切花品种。' },
        { name: '君子兰', latinName: 'Clivia miniata', description: '大连特产，叶片优美，花色橙红，花期冬春，是高档盆栽花卉。' },
        { name: '樱花', latinName: 'Prunus serrulata', description: '旅顺樱花节著名，粉白色花海如霞，花期3-4月，常用于园林和切花。' },
        { name: '玉兰', latinName: 'Magnolia denudata', description: '早春开放，沈阳街头常见，白色优雅，常用于庭院和园林绿化。' }
    ],
    '吉林省': [
        { name: '金达莱', latinName: 'Rhododendron mucronulatum', description: '吉林省花，延边地区著名野花，春天最早开放，花期3-4月，适合庭院种植。' },
        { name: '芍药', latinName: 'Paeonia lactiflora', description: '吉林广泛种植，花大色艳，花期5-6月，是畅销的观赏花卉。' },
        { name: '丁香', latinName: 'Syringa oblata', description: '长春市花，春季香气袭人，适合庭院种植和园林绿化。' },
        { name: '梅花', latinName: 'Prunus mume', description: '冬季开放，傲雪凌霜，花期2-3月，是传统名花，市场受欢迎。' }
    ],
    '黑龙江省': [
        { name: '丁香', latinName: 'Syringa oblata', description: '哈尔滨街头常见，春季芳香满城，花期4-5月，适合庭院和园林绿化。' },
        { name: '野菊', latinName: 'Chrysanthemum indicum', description: '黑龙江深山野菊，秋季金黄一片，花期9-11月，适合盆栽和切花。' },
        { name: '荷包牡丹', latinName: 'Lamprocapnos spectabilis', description: '奇特花型，形似荷包，北方园林偶见，花期4-5月，适合庭院种植。' },
        { name: '百合', latinName: 'Lilium brownii', description: '大兴安岭野百合，洁白芬芳，花期6-7月，是切花市场的热门品种。' }
    ],
    '上海市': [
        { name: '白玉兰', latinName: 'Magnolia denudata', description: '上海市花，早春开放，洁白无瑕，花期3-4月，常用于庭院和园林绿化。' },
        { name: '桂花', latinName: 'Osmanthus fragrans', description: '上海秋季代表花卉，芳香四溢，花期9-10月，是畅销的盆栽和切花。' },
        { name: '荷花', latinName: 'Nelumbo nucifera', description: '夏日赏荷佳期，公园池塘常见，花期6-8月，常用于水景和切花。' },
        { name: '郁金香', latinName: 'Tulipa gesneriana', description: '世纪公园郁金香展，色彩斑斓，花期3-4月，是节日用花的热门选择。' }
    ],
    '江苏省': [
        { name: '茉莉', latinName: 'Jasminum sambac', description: '苏州茉莉花茶名扬四海，夏季飘香，花期5-9月，是畅销的盆栽花卉。' },
        { name: '琼花', latinName: 'Viburnum macrocephalum', description: '扬州琼花天下奇，特有珍稀花卉，花期4-5月，适合庭院种植。' },
        { name: '菊花', latinName: 'Chrysanthemum morifolium', description: '南京菊花会历史悠久，品种繁多，花期9-12月，是节日用花的热门品种。' },
        { name: '梅花', latinName: 'Prunus mume', description: '无锡梅园著名，冬季春初傲雪开放，花期2-3月，是传统名花。' }
    ],
    '浙江省': [
        { name: '桂花', latinName: 'Osmanthus fragrans', description: '杭州满觉陇桂花最负盛名，金秋飘香，花期9-10月，是畅销的盆栽和切花。' },
        { name: '荷花', latinName: 'Nelumbo nucifera', description: '西湖荷花甲天下，夏日美景，花期6-8月，常用于水景和切花。' },
        { name: '梅花', latinName: 'Prunus mume', description: '超山梅花名闻遐迩，暗香浮动，花期2-3月，是传统名花。' },
        { name: '杜鹃', latinName: 'Rhododendron simsii', description: '奉化杜鹃花海，四季绽放，花色繁多，是畅销的盆栽花卉。' }
    ],
    '安徽省': [
        { name: '杜鹃', latinName: 'Rhododendron simsii', description: '黄山杜鹃，生长于高山云雾之中，花色繁多，花期4-5月，适合盆栽和切花。' },
        { name: '牡丹', latinName: 'Paeonia suffruticosa', description: '铜陵凤凰山牡丹，古老品种，雍容华贵，花期4-5月，市场受欢迎。' },
        { name: '菊花', latinName: 'Chrysanthemum morifolium', description: '黄山贡菊，著名特产花卉，花期9-11月，是畅销的切花品种。' },
        { name: '兰花', latinName: 'Cymbidium goeringii', description: '安徽产兰名品，幽香清远，花期2-3月，是高档盆栽花卉。' }
    ],
    '福建省': [
        { name: '水仙', latinName: 'Narcissus tazetta', description: '漳州水仙闻名全国，春节年花，花期1-2月，是畅销的球根花卉。' },
        { name: '三角梅', latinName: 'Bougainvillea spectabilis', description: '厦门常见花卉，四季花开不断，花色丰富，是畅销的盆栽和园林绿化花卉。' },
        { name: '桂花', latinName: 'Osmanthus fragrans', description: '浦城桂花，芳香浓郁，花期9-10月，是畅销的盆栽和切花。' },
        { name: '茶花', latinName: 'Camellia japonica', description: '霞浦茶花，红色娇艳，花期1-3月，是传统名花，市场受欢迎。' }
    ],
    '江西省': [
        { name: '杜鹃', latinName: 'Rhododendron simsii', description: '井冈山杜鹃花海，革命圣地上的花海奇观，花期4-5月，是畅销的盆栽花卉。' },
        { name: '荷花', latinName: 'Nelumbo nucifera', description: '广昌白莲之乡，夏日荷塘美景，花期6-8月，常用于水景和切花。' },
        { name: '桂花', latinName: 'Osmanthus fragrans', description: '九江桂花传统种植，秋季飘香，花期9-10月，是畅销的盆栽和切花。' },
        { name: '山茶', latinName: 'Camellia oleifera', description: '江西油茶花，冬季开放，花期11-1月，适合庭院种植和切花。' }
    ],
    '山东省': [
        { name: '牡丹', latinName: 'Paeonia suffruticosa', description: '菏泽牡丹甲天下，种植面积世界最大，花期4-5月，是传统名花。' },
        { name: '玫瑰', latinName: 'Rosa rugosa', description: '平阴玫瑰之乡，玫瑰制品丰富，花期5-6月，是切花市场的热门品种。' },
        { name: '荷花', latinName: 'Nelumbo nucifera', description: '微山湖荷花，夏日一望无际，花期6-8月，常用于水景和切花。' },
        { name: '腊梅', latinName: 'Chimonanthus praecox', description: '寒冬开放，暗香浮动，花期11-2月，是传统名花，市场受欢迎。' }
    ],
    '河南省': [
        { name: '牡丹', latinName: 'Paeonia suffruticosa', description: '洛阳牡丹甲天下，千年传承名扬四海，花期4-5月，是传统名花。' },
        { name: '菊花', latinName: 'Chrysanthemum morifolium', description: '开封菊花会历史悠久，规模宏大，花期9-12月，是节日用花的热门品种。' },
        { name: '月季', latinName: 'Rosa chinensis', description: '南阳月季，品种繁多，四季常开，是畅销的园林绿化和盆栽花卉。' },
        { name: '桃花', latinName: 'Prunus persica', description: '郑州郊区桃园，春游佳地，花期3-4月，适合庭院种植和切花。' }
    ],
    '湖北省': [
        { name: '梅花', latinName: 'Prunus mume', description: '武汉东湖梅园，冬季赏梅胜地，花期2-3月，是传统名花。' },
        { name: '荷花', latinName: 'Nelumbo nucifera', description: '武汉沙湖荷花，夏日清香，花期6-8月，常用于水景和切花。' },
        { name: '樱花', latinName: 'Prunus serrulata', description: '武汉大学樱花，闻名全国，花期3-4月，是节日用花的热门选择。' },
        { name: '紫藤', latinName: 'Wisteria sinensis', description: '春末盛开，花穗垂落如瀑，花期4-5月，适合庭院种植和园林绿化。' }
    ],
    '湖南省': [
        { name: '杜鹃', latinName: 'Rhododendron simsii', description: '浏阳大围山杜鹃花海，春季盛景，花期4-5月，是畅销的盆栽花卉。' },
        { name: '荷花', latinName: 'Nelumbo nucifera', description: '湘莲闻名全国，洞庭湖荷塘，花期6-8月，常用于水景和切花。' },
        { name: '桂花', latinName: 'Osmanthus fragrans', description: '岳阳楼畔桂花香，古城韵味，花期9-10月，是畅销的盆栽和切花。' },
        { name: '山茶', latinName: 'Camellia japonica', description: '湖南山茶花，冬季绽放，花期1-3月，是传统名花。' }
    ],
    '广东省': [
        { name: '木棉', latinName: 'Bombax ceiba', description: '广州市花，英雄树花，春季火红，花期3-4月，常用于园林绿化。' },
        { name: '紫荆', latinName: 'Bauhinia purpurea', description: '香港紫荆花，香港区花，广东也常见，花期3-4月，适合庭院种植。' },
        { name: '兰花', latinName: 'Cymbidium spp.', description: '广东兰花园艺发达，品种丰富，花期冬春，是高档盆栽花卉。' },
        { name: '鸡蛋花', latinName: 'Plumeria rubra', description: '南方特有花卉，夏日飘香，花期5-10月，适合庭院种植和盆栽。' }
    ],
    '广西壮族自治区': [
        { name: '桂花', latinName: 'Osmanthus fragrans', description: '桂林桂花，桂花糕、桂花茶特产，花期9-10月，是畅销的盆栽和切花。' },
        { name: '朱槿', latinName: 'Hibiscus rosa-sinensis', description: '南宁市花，常年开花，红艳夺目，花期全年，是畅销的盆栽花卉。' },
        { name: '茉莉', latinName: 'Jasminum sambac', description: '横县茉莉花，茉莉花茶产地，花期5-9月，是畅销的盆栽花卉。' },
        { name: '三角梅', latinName: 'Bougainvillea spectabilis', description: '广西常见花卉，四季花开不断，花色丰富，是畅销的盆栽和园林绿化花卉。' }
    ],
    '海南省': [
        { name: '三角梅', latinName: 'Bougainvillea spectabilis', description: '海口常见花卉，四季花开不断，花色丰富，是畅销的盆栽和园林绿化花卉。' },
        { name: '鸡蛋花', latinName: 'Plumeria rubra', description: '热带花卉代表，香气袭人，花期5-10月，适合庭院种植和盆栽。' },
        { name: '木棉', latinName: 'Bombax ceiba', description: '春季盛开，红花满树，花期3-4月，常用于园林绿化。' },
        { name: '兰花', latinName: 'Cymbidium spp.', description: '热带兰花园艺发达，品种多样，花期冬春，是高档盆栽花卉。' }
    ],
    '重庆市': [
        { name: '山茶', latinName: 'Camellia japonica', description: '重庆山茶花，冬季开放，红色娇艳，花期1-3月，是传统名花。' },
        { name: '杜鹃', latinName: 'Rhododendron simsii', description: '金佛山杜鹃，品种珍稀，花期4-5月，是畅销的盆栽花卉。' },
        { name: '桂花', latinName: 'Osmanthus fragrans', description: '秋季开放，香满山城，花期9-10月，是畅销的盆栽和切花。' },
        { name: '桃花', latinName: 'Prunus persica', description: '春季桃花，郊区桃花园林，花期3-4月，适合庭院种植和切花。' }
    ],
    '四川省': [
        { name: '杜鹃', latinName: 'Rhododendron simsii', description: '四川杜鹃花资源丰富，康定情歌之地，花期4-5月，是畅销的盆栽花卉。' },
        { name: '牡丹', latinName: 'Paeonia suffruticosa', description: '彭州牡丹，天府之国名花，花期4-5月，是传统名花。' },
        { name: '兰花', latinName: 'Cymbidium goeringii', description: '四川兰花园艺历史悠久，花期2-3月，是高档盆栽花卉。' },
        { name: '桃花', latinName: 'Prunus persica', description: '成都郊区桃园，花期3-4月，适合庭院种植和切花。' }
    ],
    '贵州省': [
        { name: '杜鹃', latinName: 'Rhododendron simsii', description: '毕节杜鹃花海，中国最大野生杜鹃花区，花期4-5月，是畅销的盆栽花卉。' },
        { name: '山茶', latinName: 'Camellia oleifera', description: '贵州油茶花，冬季绽放，花期11-1月，适合庭院种植和切花。' },
        { name: '百合', latinName: 'Lilium brownii', description: '高原百合，花姿优雅，花期6-7月，是切花市场的热门品种。' },
        { name: '樱花', latinName: 'Prunus serrulata', description: '贵州樱花种植，花期3-4月，是节日用花的热门选择。' }
    ],
    '云南省': [
        { name: '山茶', latinName: 'Camellia reticulata', description: '云南省花，云南山茶甲天下，花期1-3月，是传统名花。' },
        { name: '杜鹃', latinName: 'Rhododendron simsii', description: '大理苍山杜鹃，高山花海，花期4-5月，是畅销的盆栽花卉。' },
        { name: '兰花', latinName: 'Cymbidium spp.', description: '云南兰科植物王国，品种繁多，花期冬春，是高档盆栽花卉。' },
        { name: '樱花', latinName: 'Prunus serrulata', description: '昆明圆通山樱花，粉红花海，花期3-4月，是节日用花的热门选择。' }
    ],
    '西藏自治区': [
        { name: '格桑花', latinName: 'Gaillardia pulchella', description: '西藏幸福之花，草原上最常见，花期6-9月，适合庭院种植和盆栽。' },
        { name: '报春花', latinName: 'Primula vulgaris', description: '高原报春花，早春绽放，花期2-4月，适合盆栽和切花。' },
        { name: '百合', latinName: 'Lilium brownii', description: '高原百合，洁白芬芳，花期6-7月，是切花市场的热门品种。' },
        { name: '杜鹃', latinName: 'Rhododendron simsii', description: '西藏杜鹃，花色繁多，花期5-6月，适合盆栽和切花。' }
    ],
    '陕西省': [
        { name: '牡丹', latinName: 'Paeonia suffruticosa', description: '延安牡丹园，陕北名花，花期4-5月，是传统名花。' },
        { name: '石榴', latinName: 'Punica granatum', description: '西安石榴花，火红灿烂，花期5-6月，适合庭院种植和盆栽。' },
        { name: '荷花', latinName: 'Nelumbo nucifera', description: '华清池荷花，历史名园，花期6-8月，常用于水景和切花。' },
        { name: '菊花', latinName: 'Chrysanthemum morifolium', description: '大唐芙蓉园菊花展，花期9-12月，是节日用花的热门品种。' }
    ],
    '甘肃省': [
        { name: '郁金香', latinName: 'Tulipa gesneriana', description: '兰州植物园郁金香，春季花展，花期3-4月，是节日用花的热门选择。' },
        { name: '牡丹', latinName: 'Paeonia suffruticosa', description: '紫斑牡丹，甘肃特有品种，花期4-5月，市场受欢迎。' },
        { name: '芍药', latinName: 'Paeonia lactiflora', description: '甘肃芍药，花大色艳，花期5-6月，是畅销的观赏花卉。' },
        { name: '丁香', latinName: 'Syringa oblata', description: '兰州街头丁香，春夏飘香，花期4-5月，适合庭院种植。' }
    ],
    '青海省': [
        { name: '油菜花', latinName: 'Brassica napus', description: '门源油菜花海，中国最美花海之一，花期7-8月，可用于切花和装饰。' },
        { name: '格桑花', latinName: 'Gaillardia pulchella', description: '青海湖畔格桑花，幸福之花，花期6-9月，适合庭院种植。' },
        { name: '报春花', latinName: 'Primula vulgaris', description: '高原报春花，早春绽放，花期2-4月，适合盆栽。' },
        { name: '杜鹃', latinName: 'Rhododendron simsii', description: '阿尼玛卿山杜鹃，花期5-6月，适合盆栽和切花。' }
    ],
    '宁夏回族自治区': [
        { name: '马兰花', latinName: 'Iris lactea', description: '宁夏草原马兰花，蓝色优雅，花期5-6月，适合庭院种植。' },
        { name: '芍药', latinName: 'Paeonia lactiflora', description: '宁夏芍药，夏季盛开，花期5-6月，是畅销的观赏花卉。' },
        { name: '丁香', latinName: 'Syringa oblata', description: '银川街头丁香，春季芳香，花期4-5月，适合庭院种植。' },
        { name: '枸杞花', latinName: 'Lycium barbarum', description: '宁夏枸杞，小紫花很特别，花期5-6月，适合庭院种植。' }
    ],
    '新疆维吾尔自治区': [
        { name: '郁金香', latinName: 'Tulipa gesneriana', description: '新疆野生郁金香，春季绽放，花期4-5月，是节日用花的热门选择。' },
        { name: '红景天', latinName: 'Rhodiola rosea', description: '高原植物，花色艳丽，花期6-8月，适合盆栽和切花。' },
        { name: '薰衣草', latinName: 'Lavandula angustifolia', description: '伊犁薰衣草，六月花海紫色，花期6-8月，是畅销的香料和观赏花卉。' },
        { name: '玫瑰', latinName: 'Rosa rugosa', description: '新疆玫瑰，芳香四溢，花期5-6月，是切花市场的热门品种。' }
    ],
    '台湾省': [
        { name: '樱花', latinName: 'Prunus serrulata', description: '阿里山樱花，春季粉色花海，花期2-3月，是节日用花的热门选择。' },
        { name: '梅花', latinName: 'Prunus mume', description: '南投县梅林，冬季暗香，花期12-2月，是传统名花。' },
        { name: '兰花', latinName: 'Cymbidium spp.', description: '台湾蝴蝶兰，世界闻名，花期冬春，是高档盆栽花卉。' },
        { name: '海芋', latinName: 'Zantedeschia aethiopica', description: '阳明山海芋，白色优雅，花期3-5月，适合切花和盆栽。' }
    ],
    '香港特别行政区': [
        { name: '紫荆', latinName: 'Bauhinia blakeana', description: '香港区花，终年开花，粉紫色花，花期全年，适合庭院种植。' },
        { name: '洋紫荆', latinName: 'Bauhinia variegata', description: '香港常见行道树，春季盛开，花期3-4月，适合庭院种植。' },
        { name: '木棉', latinName: 'Bombax ceiba', description: '英雄树花，春季火红，花期3-4月，常用于园林绿化。' },
        { name: '茶花', latinName: 'Camellia japonica', description: '港岛山茶花，冬季绽放，花期1-3月，是传统名花。' }
    ],
    '澳门特别行政区': [
        { name: '荷花', latinName: 'Nelumbo nucifera', description: '澳门区花，象征纯洁，花期6-8月，常用于水景和切花。' },
        { name: '三角梅', latinName: 'Bougainvillea spectabilis', description: '澳门常见花卉，色彩鲜艳，花期全年，是畅销的盆栽和园林绿化花卉。' },
        { name: '龙船花', latinName: 'Ixora chinensis', description: '澳门街头常见，四季开花，花期全年，适合盆栽和园林绿化。' },
        { name: '紫薇', latinName: 'Lagerstroemia indica', description: '夏季开花，花期长，花期6-9月，适合庭院种植和园林绿化。' }
    ]
};
