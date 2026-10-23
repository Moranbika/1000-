// EXPORTS: INutrientDetail, MOCK_NUTRIENTS, BMIGainRange, MOCK_BMI_GAIN_RANGES, MILK_AMOUNT_DATA, COMPLEMENTARY_FOOD_DATA

export interface INutrientDetail {
  id: string;
  name: string;
  alias?: string;
  dailyIntake: {
    pregnancyEarly: string;
    pregnancyMid: string;
    pregnancyLate: string;
    lactation: string;
    baby06: string;
    baby612: string;
    baby1224: string;
  };
  foodSources: string[];
  deficiencyRisk: string;
  excessRisk: string;
  tips: string;
}

export const MOCK_NUTRIENTS: INutrientDetail[] = [
  {
    id: 'folic-acid',
    name: '叶酸',
    alias: '维生素B9',
    dailyIntake: {
      pregnancyEarly: '600μg DFE/天',
      pregnancyMid: '600μg DFE/天',
      pregnancyLate: '600μg DFE/天',
      lactation: '550μg DFE/天',
      baby06: '65μg DFE/天',
      baby612: '100μg DFE/天',
      baby1224: '150μg DFE/天',
    },
    foodSources: ['深绿色蔬菜（菠菜、西兰花、芥蓝）', '豆类（黄豆、绿豆、红豆）', '动物肝脏', '柑橘类水果', '坚果（核桃、花生）', '全谷物'],
    deficiencyRisk: '巨幼红细胞性贫血；孕期缺乏可导致胎儿神经管缺陷（脊柱裂、无脑儿等）',
    excessRisk: '一般不易过量；长期大剂量补充可能掩盖维生素B12缺乏症状',
    tips: '建议备孕期及孕早期每日补充400μg叶酸补充剂，食物中叶酸生物利用率较低，不能完全替代补充剂',
  },
  {
    id: 'iron',
    name: '铁',
    dailyIntake: {
      pregnancyEarly: '20mg/天',
      pregnancyMid: '24mg/天',
      pregnancyLate: '29mg/天',
      lactation: '24mg/天',
      baby06: '0.3mg/天',
      baby612: '10mg/天',
      baby1224: '9mg/天',
    },
    foodSources: ['红肉（牛肉、猪肉、羊肉）', '动物肝脏', '动物血（鸭血、猪血）', '黑木耳', '芝麻酱', '深绿色蔬菜', '全谷物'],
    deficiencyRisk: '缺铁性贫血，表现为疲劳、头晕、面色苍白；孕期贫血增加早产、低出生体重风险',
    excessRisk: '过量铁可导致便秘、恶心；长期过量可能损伤肝脏',
    tips: '动物性食物中的血红素铁吸收率更高（20-30%），植物性铁吸收率较低（2-5%）；搭配维生素C可促进铁吸收',
  },
  {
    id: 'calcium',
    name: '钙',
    dailyIntake: {
      pregnancyEarly: '800mg/天',
      pregnancyMid: '1000mg/天',
      pregnancyLate: '1000mg/天',
      lactation: '1000mg/天',
      baby06: '200mg/天',
      baby612: '250mg/天',
      baby1224: '600mg/天',
    },
    foodSources: ['牛奶及奶制品（最佳来源）', '酸奶、奶酪', '豆制品（豆腐、豆干）', '深绿色蔬菜（小油菜、芥蓝）', '虾皮、芝麻酱', '带骨小鱼'],
    deficiencyRisk: '骨质疏松、抽筋、牙齿松动；孕期钙不足会动用母体骨钙，影响妈妈长期骨健康',
    excessRisk: '每日超过2000mg可能增加肾结石风险；影响铁、锌等矿物质吸收',
    tips: '建议早晚各一杯奶；补钙同时注意维生素D补充，促进钙吸收；钙剂与铁剂应错开服用',
  },
  {
    id: 'dha',
    name: 'DHA',
    alias: '二十二碳六烯酸 / 脑黄金',
    dailyIntake: {
      pregnancyEarly: '200mg/天',
      pregnancyMid: '200mg/天',
      pregnancyLate: '200mg/天',
      lactation: '200mg/天',
      baby06: '100mg/天',
      baby612: '100mg/天',
      baby1224: '100mg/天',
    },
    foodSources: ['深海鱼类（三文鱼、鳕鱼、沙丁鱼）', '海藻及藻类DHA', '亚麻籽、亚麻籽油（转化有限）', '核桃（转化有限）', 'DHA强化食品'],
    deficiencyRisk: '可能影响胎儿/婴儿大脑和视网膜发育',
    excessRisk: '一般饮食不易过量；大剂量补充可能有出血风险',
    tips: '建议孕期和哺乳期每周吃2-3次深海鱼，每次约100g；不吃鱼的妈妈可考虑DHA补充剂（藻油来源更安全）',
  },
  {
    id: 'vitamin-d',
    name: '维生素D',
    dailyIntake: {
      pregnancyEarly: '400IU/天',
      pregnancyMid: '400IU/天',
      pregnancyLate: '400IU/天',
      lactation: '400IU/天',
      baby06: '400IU/天',
      baby612: '400IU/天',
      baby1224: '400IU/天',
    },
    foodSources: ['维生素D补充剂（最可靠）', '适度晒太阳（皮肤合成）', '蛋黄', '深海鱼', '维生素D强化奶'],
    deficiencyRisk: '儿童佝偻病；成人骨软化症；影响钙吸收和免疫功能',
    excessRisk: '长期大剂量（每日>4000IU）可能导致高钙血症',
    tips: '宝宝出生后数天即应补充维生素D400IU/天，一直补到2岁以上；母乳中维生素D含量很低，纯母乳宝宝必须额外补充',
  },
  {
    id: 'zinc',
    name: '锌',
    dailyIntake: {
      pregnancyEarly: '9.5mg/天',
      pregnancyMid: '9.5mg/天',
      pregnancyLate: '9.5mg/天',
      lactation: '12mg/天',
      baby06: '2mg/天',
      baby612: '3.5mg/天',
      baby1224: '4mg/天',
    },
    foodSources: ['贝类（生蚝、扇贝）', '红肉（牛肉、猪肉）', '动物内脏', '坚果', '全谷物', '豆类'],
    deficiencyRisk: '食欲减退、味觉异常、生长发育迟缓、免疫力下降、伤口愈合慢',
    excessRisk: '长期过量可能影响铜吸收，导致贫血',
    tips: '动物性食物锌吸收率高于植物性食物；长期素食者需注意锌的摄入',
  },
];

// 孕期体重增长范围（按孕前BMI）
export interface BMIGainRange {
  category: string;
  bmiRange: string;
  totalGain: string;
  firstTrimester: string;
  secondTrimester: string;
  thirdTrimester: string;
  weeklyGainMidLate: string;
  description: string;
}

export const MOCK_BMI_GAIN_RANGES: BMIGainRange[] = [
  {
    category: '偏瘦',
    bmiRange: 'BMI < 18.5',
    totalGain: '12.5 - 18.0 kg',
    firstTrimester: '0.5 - 2.0 kg',
    secondTrimester: '约 5.0 - 7.0 kg',
    thirdTrimester: '约 5.0 - 6.0 kg',
    weeklyGainMidLate: '0.44 - 0.58 kg/周',
    description: '孕前偏瘦的妈妈需要增重更多，以满足胎儿生长需求，但仍需循序渐进，避免短期暴增。',
  },
  {
    category: '正常',
    bmiRange: '18.5 ≤ BMI < 24.0',
    totalGain: '11.5 - 16.0 kg',
    firstTrimester: '0.5 - 2.0 kg',
    secondTrimester: '约 4.5 - 6.0 kg',
    thirdTrimester: '约 5.0 - 6.0 kg',
    weeklyGainMidLate: '0.35 - 0.50 kg/周',
    description: '体重在正常范围的妈妈按标准增重即可，注意均衡饮食和适量运动。',
  },
  {
    category: '超重',
    bmiRange: '24.0 ≤ BMI < 28.0',
    totalGain: '7.5 - 11.5 kg',
    firstTrimester: '0.5 - 1.5 kg',
    secondTrimester: '约 3.0 - 4.5 kg',
    thirdTrimester: '约 3.0 - 4.0 kg',
    weeklyGainMidLate: '0.23 - 0.33 kg/周',
    description: '超重的妈妈应控制体重增长速度，更注重饮食质量而非数量，同时保持适量运动。',
  },
  {
    category: '肥胖',
    bmiRange: 'BMI ≥ 28.0',
    totalGain: '5.0 - 9.0 kg',
    firstTrimester: '0.5 - 1.0 kg',
    secondTrimester: '约 2.0 - 3.5 kg',
    thirdTrimester: '约 2.5 - 3.5 kg',
    weeklyGainMidLate: '0.17 - 0.27 kg/周',
    description: '肥胖的妈妈增重应控制在较低范围，建议在营养科医生指导下管理体重，预防妊娠糖尿病和高血压。',
  },
];

// 宝宝奶量参考
export interface MilkAmountData {
  ageRange: string;
  dailyAmount: string;
  perFeedAmount: string;
  feedFrequency: string;
  notes: string;
}

export const MILK_AMOUNT_DATA: MilkAmountData[] = [
  {
    ageRange: '0-1周',
    dailyAmount: '150-200ml/天',
    perFeedAmount: '10-30ml/次',
    feedFrequency: '8-12次/天',
    notes: '刚出生的宝宝胃很小，初乳量少但营养密度高，按需喂养即可。',
  },
  {
    ageRange: '1-4周',
    dailyAmount: '400-600ml/天',
    perFeedAmount: '60-90ml/次',
    feedFrequency: '7-8次/天',
    notes: '宝宝体重快速增长，奶量增加明显，按需喂养，注意观察吃饱信号。',
  },
  {
    ageRange: '1-3月',
    dailyAmount: '600-900ml/天',
    perFeedAmount: '120-150ml/次',
    feedFrequency: '6-7次/天',
    notes: '进入快速生长期，宝宝吃奶可能更频繁，属于正常现象。',
  },
  {
    ageRange: '3-6月',
    dailyAmount: '800-1000ml/天',
    perFeedAmount: '150-200ml/次',
    feedFrequency: '5-6次/天',
    notes: '宝宝胃容量增大，单次奶量增加，喂养间隔拉长。6月龄时准备添加辅食。',
  },
  {
    ageRange: '6-9月',
    dailyAmount: '600-800ml/天',
    perFeedAmount: '180-240ml/次',
    feedFrequency: '4-5次/天 + 2-3顿辅食',
    notes: '添加辅食后奶量有所减少，但仍需保证600ml以上的奶量以满足钙和蛋白质需求。',
  },
  {
    ageRange: '9-12月',
    dailyAmount: '500-700ml/天',
    perFeedAmount: '200-240ml/次',
    feedFrequency: '3-4次/天 + 3顿辅食',
    notes: '辅食逐渐成为主要营养来源，但奶仍是重要的钙和蛋白质来源。',
  },
  {
    ageRange: '12-24月',
    dailyAmount: '300-500ml/天',
    perFeedAmount: '200-250ml/次',
    feedFrequency: '2-3次/天 + 三餐两点',
    notes: '可以喝纯牛奶或继续母乳/配方奶，配合多样化的家庭饮食。',
  },
];

// 辅食月龄对照表
export interface ComplementaryFoodItem {
  foodType: string;
  texture: string;
  frequency: string;
  notes: string;
}

export interface ComplementaryFoodStage {
  ageRange: string;
  stageName: string;
  description: string;
  foods: ComplementaryFoodItem[];
  keyPoints: string[];
}

export const COMPLEMENTARY_FOOD_DATA: ComplementaryFoodStage[] = [
  {
    ageRange: '6月龄',
    stageName: '辅食初期（吞咽期）',
    description: '第一口辅食，以泥糊状为主，重点补铁',
    foods: [
      { foodType: '强化铁婴儿米粉', texture: '细腻糊状', frequency: '1次/天，逐渐增加', notes: '首选辅食，预防缺铁性贫血' },
      { foodType: '蔬菜泥', texture: '细腻泥状', frequency: '1-2种，少量尝试', notes: '如南瓜泥、胡萝卜泥、土豆泥' },
      { foodType: '水果泥', texture: '细腻泥状', frequency: '1种，少量尝试', notes: '如苹果泥、香蕉泥' },
    ],
    keyPoints: [
      '第一口辅食必须是强化铁的婴儿米粉',
      '每种新食物观察3-5天，无过敏再加新的',
      '用勺子喂，不要用奶瓶',
      '辅食量从1小勺开始，逐渐增加',
      '6月龄奶量仍需800-1000ml',
    ],
  },
  {
    ageRange: '7-8月龄',
    stageName: '辅食中期（嚼碎期）',
    description: '食物质地稍稠，加入蛋白质类食物',
    foods: [
      { foodType: '谷物类', texture: '稠粥/烂面', frequency: '2次/天', notes: '大米粥、小米粥、烂面条' },
      { foodType: '蔬菜', texture: '细碎泥/小碎末', frequency: '2-3种，每天都有', notes: '如菠菜、西兰花、南瓜、胡萝卜' },
      { foodType: '水果', texture: '泥/刮泥', frequency: '1-2次/天', notes: '如苹果、香蕉、梨、牛油果' },
      { foodType: '动物性食物', texture: '细腻肉泥', frequency: '1次/天，逐渐增加', notes: '红肉泥、肝泥、鱼泥、蛋黄（从1/8个开始）' },
      { foodType: '豆制品', texture: '豆腐泥', frequency: '可尝试', notes: '嫩豆腐、豆腐脑' },
    ],
    keyPoints: [
      '积极引入动物性食物，保证铁和锌的摄入',
      '食物质地从泥状过渡到小颗粒',
      '每天2顿辅食，1次水果',
      '引入蛋黄，从少量开始',
      '可以喝水，用学饮杯练习',
    ],
  },
  {
    ageRange: '9-10月龄',
    stageName: '辅食后期（咀嚼期）',
    description: '食物小颗粒状，引入手指食物',
    foods: [
      { foodType: '谷物类', texture: '软饭/软烂面条/小馒头', frequency: '2-3次/天', notes: '软米饭、小面片、小包子' },
      { foodType: '蔬菜', texture: '小丁/小条（软烂）', frequency: '每天2-3种', notes: '胡萝卜丁、西兰花小朵、土豆条' },
      { foodType: '水果', texture: '小块/条', frequency: '1-2次/天', notes: '苹果条、香蕉块、木瓜块' },
      { foodType: '动物性食物', texture: '小碎丁/肉末', frequency: '每天都有', notes: '肉末、碎鸡肉、鱼肉丁、全蛋' },
      { foodType: '豆制品', texture: '豆腐丁/豆干末', frequency: '每天可选', notes: '嫩豆腐、豆腐干' },
      { foodType: '手指食物', texture: '条状/块状（软烂）', frequency: '可尝试', notes: '磨牙饼干、蒸南瓜条、香蕉条' },
    ],
    keyPoints: [
      '每天2-3顿辅食，奶量600-800ml',
      '食物要有一定颗粒度，锻炼咀嚼',
      '引入手指食物，鼓励宝宝自己吃',
      '可以引入全蛋（之前只吃蛋黄的话）',
      '食物种类尽量多样化',
    ],
  },
  {
    ageRange: '11-12月龄',
    stageName: '辅食末期（咀嚼期）',
    description: '食物质地接近成人，向三餐过渡',
    foods: [
      { foodType: '谷物类', texture: '软饭/面条/小馒头/包子', frequency: '3次/天', notes: '与主食时间同步' },
      { foodType: '蔬菜', texture: '小块/条（软烂）', frequency: '每天都有', notes: '各种蔬菜，切成适合宝宝抓握的大小' },
      { foodType: '水果', texture: '小块/片', frequency: '1-2次/天', notes: '各种应季水果' },
      { foodType: '动物性食物', texture: '小丁/小块', frequency: '每天50-75g', notes: '畜禽肉、鱼虾、蛋类' },
      { foodType: '豆制品', texture: '豆腐/豆干', frequency: '经常食用', notes: '各种豆制品' },
      { foodType: '坚果', texture: '磨碎/酱', frequency: '可少量尝试', notes: '花生酱、核桃碎（注意过敏）' },
    ],
    keyPoints: [
      '每天3顿正餐+2次加餐，基本接近家庭饮食节奏',
      '食物质地软烂但有形状，锻炼咀嚼能力',
      '鼓励宝宝自己用勺子吃饭',
      '奶量每天500-700ml',
      '尝试家庭食物（但要少盐少糖）',
    ],
  },
  {
    ageRange: '12-18月龄',
    stageName: '幼儿期（过渡到家庭饮食）',
    description: '逐渐过渡到家庭饮食，培养良好进食习惯',
    foods: [
      { foodType: '主食', texture: '软饭/面条/馒头等', frequency: '3餐/天', notes: '与家人同餐，食物稍软稍淡' },
      { foodType: '蔬菜', texture: '小块/条', frequency: '每天100-200g', notes: '各种蔬菜，注意多样化' },
      { foodType: '水果', texture: '小块/片', frequency: '每天100-150g', notes: '新鲜应季水果' },
      { foodType: '鱼禽蛋肉', texture: '小丁/小块', frequency: '每天50-75g', notes: '优先选择鱼虾和瘦肉' },
      { foodType: '奶类', texture: '液体', frequency: '每天300-500ml', notes: '母乳/配方奶/纯牛奶' },
      { foodType: '豆制品', texture: '多样', frequency: '经常食用', notes: '豆腐、豆浆、豆干等' },
    ],
    keyPoints: [
      '一日三餐两点，规律进食',
      '食物种类丰富，避免挑食',
      '培养自主进食，允许用手抓和用勺子',
      '每餐控制在20-30分钟',
      '少盐少糖，清淡饮食',
    ],
  },
];
