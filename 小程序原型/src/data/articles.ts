// EXPORTS: IArticle, MOCK_ARTICLES
export interface IArticle {
  id: string
  title: string
  category: 'pregnancy' | 'breastfeeding' | 'complementary' | 'toddler' | 'nutrient' | 'faq'
  categoryLabel: string
  summary: string
  imageUrl: string
  content: string[]
  isFaq?: boolean
}

export const MOCK_ARTICLES: IArticle[] = [
  {
    id: '1',
    title: '孕期各阶段营养重点全解析',
    category: 'pregnancy',
    categoryLabel: '孕期营养',
    summary: '孕早中晚期营养需求各不同，一文看懂怎么补',
    imageUrl: '',
    content: [
      '孕早期（1-3月）：重点补充叶酸，缓解孕吐，保证碳水摄入。',
      '孕中期（4-6月）：能量与蛋白质需求增加，注意钙铁锌和DHA的补充。',
      '孕晚期（7-10月）：铁与血红蛋白需求增加，钙需求达到高峰，控制体重合理增长。',
      '整个孕期都应遵循均衡膳食原则，食物多样化，适量运动。'
    ]
  },
  {
    id: '2',
    title: '纯母乳喂养的10个常见疑问',
    category: 'breastfeeding',
    categoryLabel: '母乳喂养',
    summary: '新手妈妈最关心的母乳喂养问题解答',
    imageUrl: '',
    content: [
      '母乳是宝宝最理想的食物，世界卫生组织建议纯母乳喂养至6个月。',
      '判断宝宝吃饱的信号：每天排尿6-8次，体重增长正常，吃奶后满足。',
      '初乳量少但营养密度高，是宝宝的"第一剂疫苗"，一定要让宝宝吃到。',
      '哺乳期妈妈应增加优质蛋白和钙的摄入，保证乳汁质量。'
    ]
  },
  {
    id: '3',
    title: '6-12月龄辅食添加全攻略',
    category: 'complementary',
    categoryLabel: '辅食添加',
    summary: '辅食添加时机、原则、顺序一文讲清',
    imageUrl: '',
    content: [
      '辅食添加最佳时机：满6月龄（矫正龄），宝宝能独坐、挺舌反射消失、对食物感兴趣。',
      '添加原则：从一种到多种、由稀到稠、由细到粗、由少到多。',
      '第一口辅食应选强化铁的婴儿米粉，预防缺铁性贫血。',
      '过敏食物（鸡蛋、花生、鱼类等）应在6-12月龄间积极引入，不要刻意推迟。'
    ]
  },
  {
    id: '4',
    title: '1-2岁幼儿如何过渡到家庭饮食',
    category: 'toddler',
    categoryLabel: '幼儿营养',
    summary: '从辅食到家庭餐桌的平稳过渡指南',
    imageUrl: '',
    content: [
      '12月龄后幼儿饮食逐渐向家庭饮食过渡，一日三餐两点模式。',
      '食物质地接近成人，但仍需注意避免呛咳风险，少盐少糖。',
      '培养良好进食习惯：固定就餐时间，自己动手吃，不追喂。',
      '每天保证300-500ml奶量，搭配均衡的三餐和健康零食。'
    ]
  },
  {
    id: '5',
    title: '孕期叶酸怎么补才正确',
    category: 'nutrient',
    categoryLabel: '营养素百科',
    summary: '叶酸补充的时机、剂量和食物来源',
    imageUrl: '',
    content: [
      '叶酸对预防胎儿神经管缺陷至关重要，建议从孕前3个月开始补充。',
      '推荐剂量：每日0.4mg（400μg），高危人群需遵医嘱增加剂量。',
      '富含叶酸的食物：深绿色蔬菜、豆类、动物肝脏、柑橘类水果。',
      '由于食物中叶酸生物利用率较低，建议同时服用叶酸补充剂。'
    ]
  },
  {
    id: '6',
    title: '孕期不能吃的食物有哪些？',
    category: 'faq',
    categoryLabel: '常见问题',
    summary: '孕期饮食禁忌高频问题解答',
    imageUrl: '',
    content: [
      '避免生食或半生食：生鱼片、溏心蛋、未经巴氏消毒的奶制品等，防止李斯特菌和沙门氏菌感染。',
      '避免含酒精的食物和饮料，酒精会通过胎盘影响胎儿发育。',
      '限制咖啡因摄入，每日不超过200mg（约一杯中杯美式咖啡）。',
      '高汞鱼类应避免：鲨鱼、旗鱼、金枪鱼（大眼/蓝鳍）等。',
      '其余食物均可适量食用，保持均衡多样化最重要。'
    ],
    isFaq: true
  }
]
