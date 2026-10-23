// EXPORTS: IFaq, MOCK_FAQS
export interface IFaq {
  id: string
  question: string
  answer: string
  category: 'pregnancy' | 'breastfeeding' | 'complementary-food' | 'toddler' | 'nutrients'
}

export const MOCK_FAQS: IFaq[] = [
  {
    id: '1',
    question: '孕期可以吃螃蟹吗？',
    answer: '可以适量食用。螃蟹富含优质蛋白，但性寒，孕早期建议少吃，且务必煮熟透，避免寄生虫风险。',
    category: 'pregnancy',
  },
  {
    id: '2',
    question: '宝宝多大可以添加辅食？',
    answer: '建议满6月龄开始添加。最早不早于4月龄，过晚添加也可能增加缺铁和挑食风险。',
    category: 'complementary-food',
  },
  {
    id: '3',
    question: '哺乳期需要补钙吗？',
    answer: '需要。哺乳期妈妈每日推荐摄入钙1000mg，优先从食物中获取，如牛奶、豆制品、深绿色蔬菜等。',
    category: 'breastfeeding',
  },
]
