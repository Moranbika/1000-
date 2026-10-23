import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  Scale,
  Baby,
  UtensilsCrossed,
  Pill,
  ChevronDown,
  ChevronUp,
  Info,
} from 'lucide-react';
import {
  MOCK_BMI_GAIN_RANGES,
  MILK_AMOUNT_DATA,
  COMPLEMENTARY_FOOD_DATA,
  MOCK_NUTRIENTS,
  type BMIGainRange,
  type MilkAmountData,
  type ComplementaryFoodStage,
  type INutrientDetail,
} from '@/data/nutrients';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TOOLS = [
  { id: 'weight', label: '孕期体重', icon: Scale },
  { id: 'milk', label: '奶量估算', icon: Baby },
  { id: 'food', label: '辅食对照', icon: UtensilsCrossed },
  { id: 'nutrient', label: '营养素查询', icon: Pill },
];

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState('weight');

  return (
    <div className="space-y-4 pb-6 pt-4">
      {/* 页面标题 */}
      <div className="px-4">
        <h1 className="text-xl font-bold text-foreground">营养工具</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          实用小工具，帮您科学管理营养
        </p>
      </div>

      {/* 工具切换 Tab */}
      <div className="px-4">
        <Tabs
          value={activeTool}
          onValueChange={setActiveTool}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-4">
            {TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <TabsTrigger key={tool.id} value={tool.id} className="gap-1.5">
                  <Icon className="size-3.5" />
                  <span className="text-xs">{tool.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>

      {/* 工具内容 */}
      <div className="px-4">
        {activeTool === 'weight' && <WeightGainTool />}
        {activeTool === 'milk' && <MilkAmountTool />}
        {activeTool === 'food' && <ComplementaryFoodTool />}
        {activeTool === 'nutrient' && <NutrientQueryTool />}
      </div>
    </div>
  );
}

// ===== 1. 孕期体重增长建议工具 =====
function WeightGainTool() {
  const [height, setHeight] = useState('165');
  const [weight, setWeight] = useState('55');
  const [result, setResult] = useState<BMIGainRange | null>(() => {
    // 默认结果（BMI 20.2 → 正常）
    return MOCK_BMI_GAIN_RANGES[1];
  });

  const calculate = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w || h <= 0 || w <= 0) return;

    const bmi = w / (h * h);
    let range: BMIGainRange;
    if (bmi < 18.5) {
      range = MOCK_BMI_GAIN_RANGES[0];
    } else if (bmi < 24) {
      range = MOCK_BMI_GAIN_RANGES[1];
    } else if (bmi < 28) {
      range = MOCK_BMI_GAIN_RANGES[2];
    } else {
      range = MOCK_BMI_GAIN_RANGES[3];
    }
    setResult(range);
  };

  const bmi = height && weight ? (parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2)).toFixed(1) : '--';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">孕期体重增长建议</CardTitle>
          <CardDescription>输入孕前身高体重，计算BMI并给出建议增重范围</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">
                孕前身高 (cm)
              </label>
              <Input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="165"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">
                孕前体重 (kg)
              </label>
              <Input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="55"
              />
            </div>
          </div>
          <Button onClick={calculate} className="w-full">
            <Calculator className="mr-2 size-4" />
            计算建议增重范围
          </Button>
        </CardContent>
      </Card>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="pt-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">您的 BMI</span>
                <Badge variant="default">{bmi}</Badge>
              </div>
              <div className="mt-3">
                <p className="text-lg font-bold text-foreground">
                  {result.category}
                </p>
                <p className="text-xs text-muted-foreground">{result.bmiRange}</p>
              </div>
              <div className="mt-4 border-t border-border/40 pt-3">
                <p className="text-xs font-medium text-foreground">推荐总增重</p>
                <p className="mt-1 text-2xl font-bold text-primary">
                  {result.totalGain}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">分阶段增重建议</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">孕早期（0-3月）</span>
                <span className="font-medium text-foreground">{result.firstTrimester}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">孕中期（4-6月）</span>
                <span className="font-medium text-foreground">{result.secondTrimester}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">孕晚期（7-10月）</span>
                <span className="font-medium text-foreground">{result.thirdTrimester}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">孕中晚期每周</span>
                <span className="font-medium text-primary">{result.weeklyGainMidLate}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <p className="text-sm leading-relaxed text-foreground/80">
                <Info className="mr-1 inline size-3.5 text-primary" />
                {result.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
}

// ===== 2. 宝宝奶量估算工具 =====
function MilkAmountTool() {
  const [ageMonth, setAgeMonth] = useState('3');

  const allAgeOptions = [
    { value: '0', label: '0-1月（新生儿）' },
    { value: '1', label: '1-3月' },
    { value: '4', label: '4-6月' },
    { value: '6', label: '6-9月' },
    { value: '9', label: '9-12月' },
    { value: '12', label: '12-24月' },
  ];

  const getDisplayData = (): MilkAmountData => {
    const age = parseInt(ageMonth);
    if (age === 0) return MILK_AMOUNT_DATA[1]; // 1-4周
    if (age <= 3) return MILK_AMOUNT_DATA[2]; // 1-3月
    if (age <= 6) return MILK_AMOUNT_DATA[3]; // 3-6月
    if (age <= 9) return MILK_AMOUNT_DATA[4]; // 6-9月
    if (age <= 12) return MILK_AMOUNT_DATA[5]; // 9-12月
    return MILK_AMOUNT_DATA[6]; // 12-24月
  };

  const displayData = getDisplayData();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">宝宝奶量估算</CardTitle>
          <CardDescription>选择宝宝月龄，查看每日建议奶量范围</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              宝宝月龄
            </label>
            <Select value={ageMonth} onValueChange={setAgeMonth}>
              <SelectTrigger>
                <SelectValue placeholder="选择月龄" />
              </SelectTrigger>
              <SelectContent>
                {allAgeOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="pt-5">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">每日建议奶量</p>
            <p className="mt-2 text-3xl font-bold text-primary">
              {displayData.dailyAmount}
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border/40 pt-4">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">单次奶量</p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {displayData.perFeedAmount}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">喂养频次</p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {displayData.feedFrequency}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-4">
          <p className="text-sm leading-relaxed text-foreground/80">
            <Info className="mr-1 inline size-3.5 text-primary" />
            {displayData.notes}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            * 以上数据仅供参考，每个宝宝食量有差异，按需喂养最重要。母乳喂养宝宝应按需喂养，不刻意限量。
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ===== 3. 辅食月龄对照工具 =====
function ComplementaryFoodTool() {
  const [ageRange, setAgeRange] = useState('6月龄');

  const stage =
    COMPLEMENTARY_FOOD_DATA.find((s) => s.ageRange === ageRange) ||
    COMPLEMENTARY_FOOD_DATA[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">辅食月龄对照</CardTitle>
          <CardDescription>按月龄查看可引入的食物种类与喂养建议</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              宝宝月龄段
            </label>
            <Select value={ageRange} onValueChange={setAgeRange}>
              <SelectTrigger>
                <SelectValue placeholder="选择月龄段" />
              </SelectTrigger>
              <SelectContent>
                {COMPLEMENTARY_FOOD_DATA.map((s) => (
                  <SelectItem key={s.ageRange} value={s.ageRange}>
                    {s.ageRange} · {s.stageName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">{stage.stageName}</CardTitle>
          <CardDescription>{stage.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {stage.foods.map((food, i) => (
            <div key={i} className="rounded-xl bg-muted/30 p-3">
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">{food.foodType}</span>
                <Badge variant="outline" className="text-xs">
                  {food.texture}
                </Badge>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">
                频率：{food.frequency}
              </p>
              <p className="mt-1 text-xs text-foreground/70">{food.notes}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">本阶段要点</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {stage.keyPoints.map((point, i) => (
              <li key={i} className="flex gap-2.5 text-sm">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground/85">{point}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ===== 4. 关键营养素一键查询 =====
function NutrientQueryTool() {
  const [nutrientId, setNutrientId] = useState('folic-acid');
  const nutrient =
    MOCK_NUTRIENTS.find((n) => n.id === nutrientId) || MOCK_NUTRIENTS[0];

  const [population, setPopulation] = useState<'pregnancyEarly' | 'pregnancyMid' | 'pregnancyLate' | 'lactation' | 'baby06' | 'baby612' | 'baby1224'>('pregnancyMid');

  const populationOptions: { value: typeof population; label: string }[] = [
    { value: 'pregnancyEarly', label: '孕早期' },
    { value: 'pregnancyMid', label: '孕中期' },
    { value: 'pregnancyLate', label: '孕晚期' },
    { value: 'lactation', label: '哺乳期' },
    { value: 'baby06', label: '0-6月龄宝宝' },
    { value: 'baby612', label: '6-12月龄宝宝' },
    { value: 'baby1224', label: '12-24月龄幼儿' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">关键营养素查询</CardTitle>
          <CardDescription>查询推荐摄入量、食物来源与缺乏风险</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              选择营养素
            </label>
            <Select value={nutrientId} onValueChange={setNutrientId}>
              <SelectTrigger>
                <SelectValue placeholder="选择营养素" />
              </SelectTrigger>
              <SelectContent>
                {MOCK_NUTRIENTS.map((n) => (
                  <SelectItem key={n.id} value={n.id}>
                    {n.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              选择人群阶段
            </label>
            <Select value={population} onValueChange={(v) => setPopulation(v as typeof population)}>
              <SelectTrigger>
                <SelectValue placeholder="选择人群" />
              </SelectTrigger>
              <SelectContent>
                {populationOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="pt-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-foreground">{nutrient.name}</h3>
              {nutrient.alias && (
                <p className="text-xs text-muted-foreground">{nutrient.alias}</p>
              )}
            </div>
            <Badge variant="default" className="text-sm px-3 py-1">
              {nutrient.dailyIntake[population]}
            </Badge>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            每日推荐摄入量（{populationOptions.find((o) => o.value === population)?.label}）
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">主要食物来源</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {nutrient.foodSources.map((src, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-muted/80 text-foreground/80"
              >
                {src}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">缺乏风险</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground/85 leading-relaxed">
            {nutrient.deficiencyRisk}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">过量风险</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground/85 leading-relaxed">
            {nutrient.excessRisk}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-4">
          <p className="text-sm leading-relaxed text-foreground/80">
            <Info className="mr-1 inline size-3.5 text-primary" />
            {nutrient.tips}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
