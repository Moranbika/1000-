import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  CheckCircle2,
  Sparkles,
  RefreshCw,
  Calendar,
  Flame,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { MOCK_TIPS } from '@/data/tips';
import { toast } from 'sonner';

const TIP_IMAGE = '/spark/app/app_17ggktzkgvn/runtime/api/v1/storage/object/bucket_aadk3dn25xonu_static/static%2Faadk3daf7v2fu_ve_miaoda';

export default function DailyTipPage() {
  // 演示版：用日期取模选当日小贴士
  const getTodayIndex = () => {
    const today = new Date();
    return today.getDate() % MOCK_TIPS.length;
  };

  const [tipIndex, setTipIndex] = useState(getTodayIndex());
  const [checkedIn, setCheckedIn] = useState(false);
  const [streak, setStreak] = useState(5); // 演示数据：连续打卡5天
  const [showSuccess, setShowSuccess] = useState(false);

  const currentTip = MOCK_TIPS[tipIndex];

  const handleCheckIn = () => {
    if (checkedIn) return;
    setCheckedIn(true);
    setStreak((s) => s + 1);
    setShowSuccess(true);
    toast.success('打卡成功！今天也要好好吃饭哦~');
    setTimeout(() => setShowSuccess(false), 2500);
  };

  const handleRefresh = () => {
    setTipIndex((i) => (i + 1) % MOCK_TIPS.length);
  };

  const categoryLabels: Record<string, string> = {
    pregnancy: '孕期营养',
    lactation: '哺乳营养',
    baby: '宝宝喂养',
    general: '通用营养',
  };

  // 最近7天小贴士
  const recentTips = Array.from({ length: 7 }, (_, i) => {
    const idx = (tipIndex - 1 - i + MOCK_TIPS.length) % MOCK_TIPS.length;
    return { ...MOCK_TIPS[idx], dayOffset: i + 1 };
  });

  const today = new Date();
  const dateStr = `${today.getMonth() + 1}月${today.getDate()}日`;

  return (
    <div className="space-y-4 pb-6 pt-4">
      {/* 页面标题 */}
      <div className="px-4">
        <h1 className="text-xl font-bold text-foreground">每日营养小贴士</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          每天学习一点营养小知识，守护您和宝宝的健康
        </p>
      </div>

      {/* 连续打卡展示 */}
      <div className="px-4">
        <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-card border-primary/20">
          <CardContent className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/20">
                <Flame className="size-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">连续打卡</p>
                <p className="text-2xl font-bold text-foreground">
                  {streak} <span className="text-sm font-normal text-muted-foreground">天</span>
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">今日</p>
              <p className="text-sm font-medium text-foreground">{dateStr}</p>
              <p className="mt-0.5 text-xs">
                {checkedIn ? (
                  <span className="text-success">✓ 已打卡</span>
                ) : (
                  <span className="text-muted-foreground">未打卡</span>
                )}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 当日小贴士卡片 */}
      <div className="px-4">
        <motion.div
          key={tipIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden">
            <div className="relative h-36">
              <Image
                src={currentTip.imageUrl || TIP_IMAGE}
                alt="营养小贴士"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white">
                  {categoryLabels[currentTip.category] || '营养知识'}
                </span>
              </div>
              <div className="absolute bottom-3 right-4 flex items-center gap-1 text-xs text-foreground/80">
                <Calendar className="size-3" />
                {dateStr}
              </div>
            </div>
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-base font-medium leading-relaxed text-foreground">
                  {currentTip.content}
                </p>
              </div>
              <div className="mt-4 flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleRefresh}
                  className="flex-1"
                >
                  <RefreshCw className="mr-1.5 size-3.5" />
                  换一条
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* 打卡大按钮 */}
      <div className="px-4">
        <motion.div
          whileTap={{ scale: 0.97 }}
          className="relative"
        >
          <Button
            onClick={handleCheckIn}
            disabled={checkedIn}
            size="lg"
            className="h-14 w-full text-base font-semibold shadow-lg"
          >
            {checkedIn ? (
              <>
                <CheckCircle2 className="mr-2 size-5" />
                今日已打卡
              </>
            ) : (
              <>
                <Heart className="mr-2 size-5" />
                今日健康打卡
              </>
            )}
          </Button>

          {/* 打卡成功动效 */}
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  animate={{ scale: [0, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle2 className="size-12 text-success" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm font-medium text-success"
                >
                  打卡成功！
                </motion.p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* 近期小贴士 */}
      <div className="px-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">近期小贴士</CardTitle>
          </CardHeader>
          <CardContent className="space-y-0">
            {recentTips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 border-b border-border/30 py-3 last:border-b-0"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                  {tip.dayOffset}天前
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground/85 line-clamp-2">
                    {tip.content}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {categoryLabels[tip.category] || '营养知识'}
                  </p>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
