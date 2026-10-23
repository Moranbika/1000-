// EXPORTS: ITip, MOCK_TIPS
export interface ITip {
  id: string
  content: string
  category: 'pregnancy' | 'lactation' | 'baby' | 'general'
  imageUrl: string
}

export const MOCK_TIPS: ITip[] = [
  {
    id: '1',
    content: '孕期每天补充400μg叶酸，可有效降低神经管缺陷风险',
    category: 'pregnancy',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    content: '6月龄内宝宝纯母乳喂养，无需额外喂水，母乳含88%水分',
    category: 'baby',
    imageUrl: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    content: '哺乳期妈妈每天需额外增加500千卡能量，多喝汤水助泌乳',
    category: 'lactation',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
  },
]
