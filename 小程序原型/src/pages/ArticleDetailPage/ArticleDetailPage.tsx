import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Image } from '@/components/ui/image';
import { MOCK_ARTICLES } from '@/data/articles';
import { MOCK_FAQS } from '@/data/faq';

const COVER_IMAGE = '/spark/app/app_17ggktzkgvn/runtime/api/v1/storage/object/bucket_aadk3dn25xonu_static/static%2Faadk3dgso56pu_ve_miaoda';

export default function ArticleDetailPage() {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();

  // 支持 faq- 前缀的 id
  const isFaq = articleId?.startsWith('faq-');
  let article: any = null;

  if (isFaq) {
    const faqId = articleId?.replace('faq-', '');
    const faq = MOCK_FAQS.find((f) => f.id === faqId);
    if (faq) {
      article = {
        id: faq.id,
        title: faq.question,
        categoryLabel: '常见问题',
        summary: faq.answer.slice(0, 40),
        imageUrl: '',
        content: [faq.answer],
        isFaq: true,
      };
    }
  } else {
    article = MOCK_ARTICLES.find((a) => a.id === articleId);
  }

  // 相关推荐（同分类其他文章）
  const relatedArticles = MOCK_ARTICLES.filter(
    (a) => a.id !== articleId && article && !article.isFaq && a.category === article.category,
  ).slice(0, 3);

  // 如果相关文章太少，从全部里补
  const displayRelated = relatedArticles.length > 0
    ? relatedArticles
    : MOCK_ARTICLES.filter((a) => a.id !== articleId).slice(0, 3);

  if (!article) {
    return (
      <div className="px-4 py-8 text-center text-muted-foreground">
        文章不存在
      </div>
    );
  }

  return (
    <div className="pb-8">
      {/* 顶部返回栏 */}
      <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-border/40 bg-background/90 px-4 py-3 backdrop-blur-md">
        <button
          onClick={() => navigate(-1)}
          className="flex size-8 items-center justify-center rounded-full bg-muted/60 hover:bg-muted"
        >
          <ChevronLeft className="size-5 text-foreground" />
        </button>
        <h1 className="flex-1 truncate text-base font-semibold text-foreground">
          知识详情
        </h1>
      </div>

      {/* 文章头图 */}
      <div className="relative">
        <Image
          src={article.imageUrl || COVER_IMAGE}
          alt={article.title}
          className="h-48 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* 文章内容 */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-4 -mt-8 relative z-10"
      >
        <Badge variant="default" className="mb-3">
          {article.categoryLabel}
        </Badge>
        <h1 className="text-xl font-bold leading-snug text-foreground">
          {article.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{article.summary}</p>

        {/* 正文段落 */}
        <div className="mt-6 space-y-4">
          {article.content.map((para: string, i: number) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="text-sm leading-relaxed text-foreground/90"
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* 免责声明 */}
        <div className="mt-8 rounded-xl bg-muted/30 p-4">
          <p className="text-xs leading-relaxed text-muted-foreground">
            💡 本文内容仅供参考，不能替代专业医疗建议。如有任何健康问题，请及时咨询医生或营养师。
          </p>
        </div>
      </motion.article>

      {/* 相关推荐 */}
      {displayRelated.length > 0 && (
        <div className="mt-8 px-4">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-semibold text-foreground">相关推荐</h2>
            <button
              onClick={() => navigate('/knowledge')}
              className="flex items-center gap-0.5 text-xs text-primary"
            >
              查看更多
              <ArrowRight className="size-3.5" />
            </button>
          </div>
          <div className="space-y-3">
            {displayRelated.map((related, i) => (
              <motion.div
                key={related.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                <Card
                  onClick={() => navigate(`/knowledge/${related.id}`)}
                  className="cursor-pointer hover:shadow-sm transition-shadow"
                >
                  <CardContent className="flex items-center gap-3 p-3">
                    <BookOpen className="size-5 shrink-0 text-primary/70" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-snug">
                        {related.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                        {related.summary}
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
