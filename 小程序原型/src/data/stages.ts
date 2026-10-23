// EXPORTS: IStageNutrition, IKeyNutrient, IDailyMeal, MOCK_STAGES

export interface IKeyNutrient {
  name: string;
  dailyIntake: string;
  foodSources: string[];
}

export interface IDailyMeal {
  breakfast: string;
  morningSnack: string;
  lunch: string;
  afternoonSnack: string;
  dinner: string;
  eveningSnack?: string;
}

export interface IStageNutrition {
  id: string;
  name: string;
  shortName: string;
  period: string;
  description: string;
  icon: string;
  color: string;
  corePrinciples: string[];
  keyNutrients: IKeyNutrient[];
  dietaryAdvice: string[];
  cautions: string[];
  sampleRecipe: IDailyMeal;
  warningSigns: string[];
}

export const MOCK_STAGES: IStageNutrition[] = [
  {
    id: 'pre-pregnancy',
    name: '备孕期',
    shortName: '备孕',
    period: '孕前3-6个月',
    description: '为迎接新生命做好身体储备，调整至最佳营养状态',
    icon: 'sprout',
    color: '#F59E0B',
    corePrinciples: [
      '均衡膳食，食物多样化，保证各类营养素充足摄入',
      '维持健康体重，BMI控制在18.5-23.9之间',
      '提前3个月开始补充叶酸，预防神经管缺陷',
      '养成良好生活习惯，戒烟限酒，规律作息',
    ],
    keyNutrients: [
      {
        name: '叶酸',
        dailyIntake: '400μg/天',
        foodSources: ['深绿色蔬菜', '豆类', '动物肝脏', '柑橘类水果'],
      },
      {
        name: '铁',
        dailyIntake: '20mg/天',
        foodSources: ['红肉', '动物肝脏', '动物血', '深绿色蔬菜'],
      },
      {
        name: '碘',
        dailyIntake: '120μg/天',
        foodSources: ['加碘食盐', '海带', '紫菜', '海鱼'],
      },
    ],
    dietaryAdvice: [
      '每天谷薯类250-400g，粗细搭配',
      '蔬菜水果每天各不少于500g和200g',
      '优质蛋白质：鱼禽蛋瘦肉合计120-200g/天',
      '每天喝奶300-500ml，补充钙质',
      '每周吃1-2次动物肝脏或动物血，补铁',
    ],
    cautions: [
      '避免接触有毒有害物质和放射线',
      '谨慎用药，服药前咨询医生',
      '减少咖啡因摄入，每日不超过200mg',
      '完全戒酒，包括含酒精的食物',
      '避免高汞鱼类：鲨鱼、旗鱼、大眼金枪鱼',
    ],
    sampleRecipe: {
      breakfast: '全麦面包2片 + 煮鸡蛋1个 + 牛奶250ml + 小番茄5颗',
      morningSnack: '苹果1个 + 原味坚果15g',
      lunch: '糙米饭1碗 + 清蒸鲈鱼100g + 蒜蓉西兰花200g + 番茄蛋花汤',
      afternoonSnack: '无糖酸奶150g + 蓝莓50g',
      dinner: '小米粥1碗 + 香菇滑鸡100g + 清炒菠菜200g + 凉拌豆腐',
      eveningSnack: '温牛奶200ml',
    },
    warningSigns: [
      '月经不调或闭经，需及时就医检查',
      '体重过轻(BMI<18.5)或过重(BMI>24)',
      '有慢性疾病需在医生指导下备孕',
      '长期服药需咨询医生是否需要调整',
    ],
  },
  {
    id: 'pregnancy-1',
    name: '孕早期',
    shortName: '孕1-3月',
    period: '妊娠第1-12周',
    description: '胚胎器官分化关键期，营养重点是叶酸与缓解孕吐',
    icon: 'baby',
    color: '#F97316',
    corePrinciples: [
      '继续补充叶酸至孕12周，预防神经管缺陷',
      '少量多餐，缓解孕吐反应',
      '保证碳水化合物摄入，避免酮症酸中毒',
      '饮食清淡适口，选择自己能接受的食物',
    ],
    keyNutrients: [
      {
        name: '叶酸',
        dailyIntake: '600μg DFE/天',
        foodSources: ['深绿色蔬菜', '叶酸补充剂', '动物肝脏', '豆类'],
      },
      {
        name: '碳水化合物',
        dailyIntake: '≥130g/天',
        foodSources: ['米饭', '面条', '馒头', '薯类'],
      },
      {
        name: '维生素B6',
        dailyIntake: '2.2mg/天',
        foodSources: ['全谷物', '坚果', '瘦肉', '香蕉'],
      },
    ],
    dietaryAdvice: [
      '不必强求"营养均衡"，能吃进去最重要',
      '少量多餐，避免空腹，晨起可吃几片饼干',
      '选择清淡、易消化的食物',
      '多喝水，预防脱水',
      '孕吐严重时寻求医生帮助，不要硬扛',
    ],
    cautions: [
      '绝对禁酒，酒精会导致胎儿酒精综合征',
      '避免生食：生鱼片、溏心蛋、未熟肉类',
      '避免未经巴氏消毒的奶制品和奶酪',
      '限制咖啡因，每日不超过200mg',
      '谨慎用药，任何药物需遵医嘱',
    ],
    sampleRecipe: {
      breakfast: '小米粥1碗 + 馒头1个 + 蒸蛋羹1碗 + 拌黄瓜',
      morningSnack: '苏打饼干3片 + 苹果半个',
      lunch: '软米饭1碗 + 清蒸鳕鱼80g + 炒时蔬200g + 紫菜蛋花汤',
      afternoonSnack: '酸奶150g + 香蕉半根',
      dinner: '南瓜粥1碗 + 鸡肉蔬菜小馄饨10个 + 凉拌土豆丝',
      eveningSnack: '牛奶200ml（不吐的话）',
    },
    warningSigns: [
      '严重呕吐，完全不能进食进水',
      '呕吐物带血或呈咖啡色',
      '体重明显下降（超过孕前5%）',
      '出现脱水症状：口干、尿少、头晕',
      '阴道出血或剧烈腹痛，立即就医',
    ],
  },
  {
    id: 'pregnancy-2',
    name: '孕中期',
    shortName: '孕4-6月',
    period: '妊娠第13-27周',
    description: '胎儿快速生长期，能量与营养素需求显著增加',
    icon: 'heart',
    color: '#EF4444',
    corePrinciples: [
      '适当增加能量摄入，每天多300千卡',
      '增加优质蛋白质，促进胎儿生长发育',
      '重点补充钙、铁、DHA等关键营养素',
      '关注体重合理增长，每周约0.3-0.5kg',
    ],
    keyNutrients: [
      {
        name: '钙',
        dailyIntake: '1000mg/天',
        foodSources: ['牛奶及奶制品', '豆制品', '深绿色蔬菜', '虾皮'],
      },
      {
        name: '铁',
        dailyIntake: '24mg/天',
        foodSources: ['红肉', '动物肝脏', '动物血', '黑木耳'],
      },
      {
        name: 'DHA',
        dailyIntake: '200mg/天',
        foodSources: ['深海鱼', '亚麻籽', '核桃', 'DHA补充剂'],
      },
      {
        name: '蛋白质',
        dailyIntake: '70-85g/天',
        foodSources: ['鱼禽蛋瘦肉', '奶类', '豆制品', '坚果'],
      },
    ],
    dietaryAdvice: [
      '每天谷薯类300-450g，其中全谷物和杂豆不少于1/3',
      '蔬菜300-500g，其中深绿色蔬菜占2/3以上',
      '水果200-350g，注意不要过量',
      '鱼禽蛋瘦肉总量150-200g/天',
      '每天喝奶300-500ml，必要时补充钙剂',
      '每周吃2-3次深海鱼，补充DHA',
    ],
    cautions: [
      '避免高糖高油食物，预防妊娠期糖尿病',
      '控制盐分摄入，预防水肿和妊娠高血压',
      '避免过度进补，体重增长过快不利健康',
      '继续避免生食和未巴氏消毒奶制品',
      '不自行服用补剂，遵医嘱补充',
    ],
    sampleRecipe: {
      breakfast: '燕麦粥1碗 + 全麦面包1片 + 水煮蛋1个 + 蓝莓50g',
      morningSnack: '牛奶250ml + 核桃2个',
      lunch: '杂粮饭1碗 + 红烧牛肉100g + 蒜蓉油麦菜200g + 番茄豆腐汤',
      afternoonSnack: '苹果1个 + 原味酸奶100g',
      dinner: '糙米饭1碗 + 清蒸三文鱼100g + 虾仁西兰花200g + 紫菜蛋汤',
      eveningSnack: '温牛奶200ml + 小饼干2片',
    },
    warningSigns: [
      '体重增长过快（每周>0.5kg）或过慢',
      '下肢水肿明显，休息后不消退',
      '头痛、头晕、视物模糊（警惕妊高症）',
      '胎动异常（过多或过少）',
      '阴道出血或异常分泌物',
    ],
  },
  {
    id: 'pregnancy-3',
    name: '孕晚期',
    shortName: '孕7-10月',
    period: '妊娠第28-40周',
    description: '胎儿生长最快期，钙铁需求达高峰，为分娩哺乳储备营养',
    icon: 'baby',
    color: '#DC2626',
    corePrinciples: [
      '增加优质蛋白和钙的摄入',
      '铁补充达到高峰，预防缺铁性贫血',
      '控制体重合理增长，避免巨大儿',
      '少食多餐，减轻胃部不适',
      '为分娩和哺乳做好营养储备',
    ],
    keyNutrients: [
      {
        name: '钙',
        dailyIntake: '1000-1200mg/天',
        foodSources: ['牛奶及奶制品', '豆制品', '深绿色蔬菜', '芝麻酱'],
      },
      {
        name: '铁',
        dailyIntake: '29mg/天',
        foodSources: ['红肉', '动物肝脏', '动物血', '配合维生素C促进吸收'],
      },
      {
        name: 'DHA',
        dailyIntake: '200mg/天',
        foodSources: ['深海鱼', '亚麻籽', '核桃', 'DHA补充剂'],
      },
      {
        name: '蛋白质',
        dailyIntake: '85g/天',
        foodSources: ['鱼禽蛋瘦肉', '奶类', '豆制品'],
      },
    ],
    dietaryAdvice: [
      '少食多餐，每天5-6餐，减轻胃部压迫感',
      '适当控制能量，避免胎儿过大',
      '保证优质蛋白质摄入，促进胎儿发育',
      '多吃富含膳食纤维的食物，预防便秘',
      '控制盐分和水分摄入，减轻水肿',
      '适量运动，为分娩储备体力',
    ],
    cautions: [
      '避免暴饮暴食，控制体重增长',
      '孕晚期不宜大量进补，避免巨大儿',
      '少吃高糖高脂食物',
      '继续避免生食、酒精、过量咖啡因',
      '不自行服用任何药物和补剂',
      '出现临产征兆及时就医',
    ],
    sampleRecipe: {
      breakfast: '杂粮粥1碗 + 鸡蛋1个 + 全麦面包1片 + 小番茄',
      morningSnack: '牛奶250ml + 杏仁5颗',
      lunch: '米饭1碗 + 清蒸鲈鱼100g + 菠菜炒猪肝50g+150g + 冬瓜汤',
      afternoonSnack: '酸奶150g + 猕猴桃1个',
      dinner: '小米饭1碗 + 香菇滑鸡100g + 蒜蓉西兰花200g + 豆腐海带汤',
      eveningSnack: '温牛奶200ml',
    },
    warningSigns: [
      '胎动明显减少或异常频繁',
      '阴道出血或流水（破膜）',
      '规律宫缩（5-6分钟一次）',
      '严重头痛、视物模糊、上腹痛',
      '下肢严重水肿伴血压升高',
    ],
  },
  {
    id: 'lactation',
    name: '哺乳期',
    shortName: '产后哺乳',
    period: '产后0-24个月',
    description: '母乳是宝宝最好的食物，妈妈营养直接影响乳汁质量',
    icon: 'heart',
    color: '#EC4899',
    corePrinciples: [
      '增加优质蛋白质摄入，比孕前多25g/天',
      '钙需求量与孕晚期相当，每天1000mg',
      '汤水充足，促进乳汁分泌',
      '食物多样化，保证营养均衡',
      '合理安排餐次，少量多餐',
    ],
    keyNutrients: [
      {
        name: '蛋白质',
        dailyIntake: '80g/天（比孕前多25g）',
        foodSources: ['鱼禽蛋瘦肉', '奶类', '豆制品', '坚果'],
      },
      {
        name: '钙',
        dailyIntake: '1000mg/天',
        foodSources: ['牛奶及奶制品', '豆制品', '深绿色蔬菜', '虾皮'],
      },
      {
        name: 'DHA',
        dailyIntake: '200mg/天',
        foodSources: ['深海鱼', '亚麻籽', '核桃', 'DHA补充剂'],
      },
      {
        name: '铁',
        dailyIntake: '24mg/天',
        foodSources: ['红肉', '动物肝脏', '动物血'],
      },
    ],
    dietaryAdvice: [
      '每天比孕前多500千卡能量',
      '多吃汤水类食物：鱼汤、鸡汤、排骨汤、粥类',
      '每天喝奶300-500ml，必要时补钙',
      '多吃优质蛋白：鱼、禽、蛋、瘦肉',
      '蔬菜水果充足，预防便秘',
      '适量吃全谷物和杂豆',
    ],
    cautions: [
      '完全戒酒，酒精会通过乳汁影响宝宝',
      '限制咖啡因，每日不超过200mg',
      '避免吃可能引起宝宝过敏的食物（注意观察）',
      '少吃辛辣刺激和油腻食物',
      '谨慎用药，服药前咨询医生是否影响哺乳',
      '不节食减肥，产后减重需循序渐进',
    ],
    sampleRecipe: {
      breakfast: '小米粥1碗 + 鸡蛋2个 + 全麦面包2片 + 牛奶250ml',
      morningSnack: '红枣银耳汤1碗 + 苹果1个',
      lunch: '米饭1.5碗 + 花生炖猪蹄 + 清蒸鲈鱼100g + 炒时蔬200g + 丝瓜蛋汤',
      afternoonSnack: '酒酿蛋花汤1碗 + 香蕉1根',
      dinner: '杂粮饭1碗 + 香菇炖鸡 + 虾仁西兰花200g + 豆腐鲫鱼汤',
      eveningSnack: '牛奶250ml + 小面包1个',
    },
    warningSigns: [
      '乳房红肿热痛，可能是乳腺炎',
      '乳汁突然明显减少',
      '宝宝体重增长不良',
      '产后抑郁情绪持续两周以上',
      '产后42天仍有大量出血',
    ],
  },
  {
    id: 'baby-0-6',
    name: '0-6月龄婴儿',
    shortName: '0-6月龄',
    period: '出生至满6月龄',
    description: '纯母乳喂养是宝宝最理想的喂养方式',
    icon: 'baby',
    color: '#A855F7',
    corePrinciples: [
      '纯母乳喂养至6月龄，不需额外喂水和辅食',
      '按需喂养，宝宝饿了就喂',
      '出生后数天开始补充维生素D 400IU/天',
      '正确的含乳姿势是成功母乳喂养的关键',
    ],
    keyNutrients: [
      {
        name: '维生素D',
        dailyIntake: '400IU/天（10μg）',
        foodSources: ['维生素D补充剂', '适度晒太阳（注意保护）'],
      },
      {
        name: 'DHA',
        dailyIntake: '100mg/天',
        foodSources: ['母乳（妈妈摄入充足）', '配方奶（强化DHA）'],
      },
      {
        name: '铁',
        dailyIntake: '0.3mg/天（0-6月）',
        foodSources: ['母乳（含量低但吸收率高）', '配方奶（强化铁）'],
      },
    ],
    dietaryAdvice: [
      '出生后1小时内开始母乳喂养',
      '按需喂养，每天8-12次甚至更多',
      '每次喂奶15-30分钟，两侧乳房轮流喂',
      '纯母乳喂养宝宝6月龄内不需要额外喂水',
      '配方奶喂养需按说明冲调，不要过浓或过稀',
      '6月龄时及时添加辅食，不要晚于8月龄',
    ],
    cautions: [
      '避免给宝宝喂蜂蜜（肉毒杆菌风险）',
      '不要过早添加辅食，最早不早于4月龄',
      '配方奶冲调水温按说明，一般40-60℃',
      '不要用微波炉加热奶，避免烫伤',
      '奶瓶奶嘴每次使用后清洗消毒',
      '宝宝生病时继续喂养，不要轻易停母乳',
    ],
    sampleRecipe: {
      breakfast: '母乳或配方奶 150-200ml',
      morningSnack: '母乳或配方奶 120-180ml',
      lunch: '母乳或配方奶 150-200ml',
      afternoonSnack: '母乳或配方奶 120-180ml',
      dinner: '母乳或配方奶 150-200ml',
      eveningSnack: '母乳或配方奶 150-200ml（夜奶）',
    },
    warningSigns: [
      '每天排尿少于6次（尿不湿重<6个）',
      '宝宝吃奶后仍哭闹不安',
      '体重增长不良（每月<500g）',
      '大便异常（水样便、带血、白色）',
      '黄疸持续不退（足月儿>2周，早产儿>4周）',
      '发热（体温≥37.5℃）立即就医',
    ],
  },
  {
    id: 'baby-6-12',
    name: '6-12月龄婴儿',
    shortName: '6-12月龄',
    period: '满6月龄至12月龄',
    description: '辅食添加关键期，从奶为主过渡到奶+辅食',
    icon: 'sprout',
    color: '#10B981',
    corePrinciples: [
      '满6月龄开始添加辅食，第一口吃强化铁米粉',
      '添加原则：从一种到多种、由稀到稠、由细到粗',
      '继续母乳喂养至2岁及以上',
      '积极引入各种食物，包括易过敏食物',
      '培养良好进食习惯，鼓励自己吃',
    ],
    keyNutrients: [
      {
        name: '铁',
        dailyIntake: '10mg/天',
        foodSources: ['强化铁米粉', '红肉泥', '动物肝脏泥', '动物血'],
      },
      {
        name: '锌',
        dailyIntake: '6-8mg/天',
        foodSources: ['瘦肉泥', '蛋黄', '鱼泥', '肝泥'],
      },
      {
        name: '维生素D',
        dailyIntake: '400IU/天',
        foodSources: ['维生素D补充剂', '适度户外活动'],
      },
      {
        name: '钙',
        dailyIntake: '250-600mg/天',
        foodSources: ['母乳/配方奶', '酸奶', '豆腐', '深绿色菜泥'],
      },
    ],
    dietaryAdvice: [
      '6月龄：每天1-2顿辅食，泥糊状，以铁米粉和菜泥果泥为主',
      '7-9月龄：每天2-3顿辅食，碎末状，加入肉泥、蛋黄、软烂粥面',
      '10-12月龄：每天3顿辅食，小颗粒/手指食物，接近家庭饮食质地',
      '每种新食物观察3-5天，无过敏再加新的',
      '辅食应单独制作，不加盐、糖和调味品',
      '用勺子喂，鼓励宝宝自己拿食物吃',
    ],
    cautions: [
      '1岁内不加盐、糖、蜂蜜',
      '避免整粒坚果、葡萄、果冻等窒息风险食物',
      '过敏食物（鸡蛋、花生、鱼）6-12月龄间积极引入，不要推迟',
      '不要用奶瓶喂辅食，培养用勺和杯子的习惯',
      '注意饮食卫生，辅食现做现吃',
      '继续保证奶量，每天600-800ml',
    ],
    sampleRecipe: {
      breakfast: '母乳/配方奶 200ml',
      morningSnack: '香蕉泥 30g + 母乳/配方奶 100ml',
      lunch: '强化铁米粉10g + 南瓜泥20g + 牛肉泥15g + 蔬菜泥20g',
      afternoonSnack: '母乳/配方奶 200ml + 苹果泥30g',
      dinner: '软烂蔬菜粥（大米15g+胡萝卜+西兰花）+ 鱼肉泥15g',
      eveningSnack: '母乳/配方奶 200ml',
    },
    warningSigns: [
      '添加辅食后出现严重皮疹、呕吐、腹泻',
      '宝宝对进食完全没有兴趣',
      '体重增长明显放缓或下降',
      '9月龄仍不会吞咽糊状食物',
      '12月龄仍只有1-2颗牙或完全没有牙',
    ],
  },
  {
    id: 'baby-12-24',
    name: '12-24月龄幼儿',
    shortName: '12-24月龄',
    period: '满1岁至2岁',
    description: '向家庭饮食过渡，培养良好进食习惯的关键期',
    icon: 'heart',
    color: '#0EA5E9',
    corePrinciples: [
      '从辅食逐步过渡到家庭饮食',
      '一日三餐两点模式，规律进食',
      '继续母乳喂养，配方奶可作为补充',
      '培养自主进食，不追喂、不强迫',
      '食物多样化，避免挑食偏食',
    ],
    keyNutrients: [
      {
        name: '钙',
        dailyIntake: '600mg/天',
        foodSources: ['牛奶', '酸奶', '奶酪', '豆制品', '深绿色蔬菜'],
      },
      {
        name: '铁',
        dailyIntake: '9mg/天',
        foodSources: ['红肉', '动物肝脏', '动物血', '全谷物'],
      },
      {
        name: '维生素D',
        dailyIntake: '400-600IU/天',
        foodSources: ['维生素D补充剂', '户外活动', '蛋黄'],
      },
      {
        name: '蛋白质',
        dailyIntake: '25-30g/天',
        foodSources: ['鱼禽蛋瘦肉', '奶类', '豆制品'],
      },
    ],
    dietaryAdvice: [
      '一日三餐+2次加餐，规律进食',
      '食物质地接近成人，但稍软、少盐、少辣',
      '每天奶量300-500ml',
      '谷薯类100-150g/天，粗细搭配',
      '蔬菜100-200g，水果100-200g/天',
      '鱼禽蛋肉总量50-75g/天',
      '让宝宝自己吃，鼓励用勺子',
      '每餐吃饭时间控制在20-30分钟',
    ],
    cautions: [
      '少盐少糖，饮食清淡',
      '避免整粒坚果、果冻，防止呛咳',
      '吃饭时不看电视、不玩玩具',
      '不要追喂、强迫进食',
      '少喝含糖饮料，多喝白开水',
      '零食选择健康的：水果、酸奶、原味坚果（碾碎）',
    ],
    sampleRecipe: {
      breakfast: '牛奶200ml + 鸡蛋1个 + 小馒头2个 + 小番茄几颗',
      morningSnack: '苹果半个 + 原味酸奶100ml',
      lunch: '软米饭半碗 + 番茄牛肉末 + 清炒碎蔬菜 + 冬瓜丸子汤',
      afternoonSnack: '香蕉半根 + 小饼干2块 + 牛奶100ml',
      dinner: '小米粥半碗 + 清蒸鱼50g + 蔬菜豆腐羹 + 小包子1个',
      eveningSnack: '牛奶150ml（睡前）',
    },
    warningSigns: [
      '长期拒食某类食物（如所有蔬菜）',
      '体重增长缓慢或不增',
      '身高增长明显落后于同龄人',
      '经常出现便秘或腹泻',
      '2岁仍只会吃泥糊状食物，不会咀嚼',
    ],
  },
];

export function getStageById(id: string): IStageNutrition | undefined {
  return MOCK_STAGES.find((s) => s.id === id);
}
