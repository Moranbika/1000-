// EXPORTS: IHomePage, MOCK_HOME_PAGE
export interface IHomePage {
  id: string
  title: string
  subtitle: string
  heroDescription: string
  timelineTitle: string
  timelineTotalDays: number
  timelineDescription: string
  currentStageId: string
  stageHighlights: {
    stageId: string
    stageName: string
    keyPoints: string[]
  }
}

export const MOCK_HOME_PAGE: IHomePage = {
  id: '1',
  title: '1000天营养起航',
  subtitle: '生命早期1000天营养指导',
  heroDescription: '从备孕期到宝宝2岁，为您提供专业、贴心的分阶段营养支持',
  timelineTitle: '1000天关键窗口期',
  timelineTotalDays: 1000,
  timelineDescription: '孕期280天 + 0-2岁婴幼儿期，影响一生健康的黄金营养期',
  currentStageId: 'pregnancy-2',
  stageHighlights: {
    stageId: 'pregnancy-2',
    stageName: '孕中期',
    keyPoints: [
      '适当增加能量与优质蛋白摄入',
      '重点补充钙、铁、DHA等营养素',
      '关注体重合理增长，每周约0.4kg'
    ]
  }
}
