import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, BookOpen, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Image } from '@/components/ui/image';
import { MOCK_ARTICLES } from '@/data/articles';
import { MOCK_FAQS } from '@/data/faq';

const CATEGORIES = [
  { id: 'all', label: '全部' },
  { id: 'pregnancy', label: '孕期营养' },
  { id: 'breastfeeding', label: '母乳喂养' },
  { id: 'complementary', label: '辅食添加' },
  { id: 'toddler', label: '幼儿营养' },
  { id: 'nutrient', label: '营养素百科' },
  { id: 'faq', label: '常见问题' },
];

const COVER_IMAGE_1 = '/spark/app/app_17ggktzkgvn/runtime/api/v1/storage/object/bucket_aadk3dn25xonu_static/static%2Faadk3difxowfw_ve_miaoda';
const COVER_IMAGE_2 = '/spark/app/app_17ggktzkgvn/runtime/api/v1/storage/object/bucket_aadk3dn25xonu_static/static%2Faadk3daf7v2fu_ve_miaoda';

export default function KnowledgePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const filteredArticles = useMemo(() => {
    let result = MOCK_ARTICLES;

    // 分类过滤
    if (activeCategory !== 'all') {
      result = result.filter((a) => a.category === activeCategory);
      // FAQ 分类从 faq.ts 取
      if (activeCategory === 'faq') {
        // 把 faq 转换为 article 格式展示
        const faqAsArticles = MOCK_FAQS.map((f) => ({
          id: `faq-${f.id}`,
          title: f.question,
          category: 'faq' as const,
          categoryLabel: '常见问题',
          summary: f.answer.slice(0, 40) + '...',
          imageUrl: '',
          content: [f.answer],
          isFaq: true,
        }));
        result = faqAsArticles as typeof MOCK_ARTICLES;
      }
    }

    // 关键词过滤
    if (keyword.trim()) {
      const kw = keyword.trim().toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(kw) ||
          a.summary.toLowerCase().includes(kw),
      );
    }

    return result;
  }, [activeCategory, keyword]);

  const getCoverImage = (index: number) => {
    return index % 2 === 0 ? COVER_IMAGE_1 : COVER_IMAGE_2;
  };

  return (
    <div className="space-y-4 pb-6 pt-4">
      {/* 页面标题 */}
      <div className="px-4">
        <h1 className="text-xl font-bold text-foreground">营养知识库</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          专业循证的妇幼营养知识宝库
        </p>
      </div>

      {/* 搜索框 */}
      <div className="px-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="搜索营养知识..."
            className="pl-9 pr-9"
          />
          {keyword && (
            <button
              onClick={() => setKeyword('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>

      {/* 分类 Tab */}
      <div className="px-4">
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="w-full justify-start overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="shrink-0 text-xs"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* 文章列表 */}
      <div className="space-y-3 px-4">
        {filteredArticles.length === 0 ? (
          <div className="py-12 text-center">
            <BookOpen className="mx-auto size-10 text-muted-foreground/40" />
            <p className="mt-3 text-sm text-muted-foreground">
              暂无相关内容
            </p>
          </div>
        ) : (
          filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card
                onClick={() => navigate(`/knowledge/${article.id}`)}
                className="cursor-pointer overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex">
                  <div className="flex-1 p-4">
                    <Badge variant="secondary" className="text-xs mb-2">
                      {article.categoryLabel}
                    </Badge>
                    <h3 className="text-sm font-semibold text-foreground line-clamp-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                  <div className="w-28 shrink-0 overflow-hidden">
                    <Image
                      src={article.imageUrl || getCoverImage(index)}
                      alt={article.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
