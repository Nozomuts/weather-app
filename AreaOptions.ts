export const AreaOptions = [
  { label: '旭川', value: '012010' },
  { label: '釧路', value: '014020' },
  { label: '札幌', value: '016010' },
  { label: '青森', value: '020010' },
  { label: '仙台', value: '040010' },
  { label: '秋田', value: '050010' },
  { label: '宇都宮', value: '090010' },
  { label: '東京', value: '130010' },
  { label: '長野', value: '200010' },
  { label: '名古屋', value: '230010' },
  { label: '大阪', value: '270000' },
  { label: '松江', value: '320010' },
  { label: '広島', value: '340010' },
  { label: '高松', value: '370000' },
  { label: '高知', value: '390010' },
  { label: '福岡', value: '400010' },
  { label: '鹿児島', value: '460010' },
  { label: '那覇', value: '471010' },
  { label: '石垣島', value: '474010' },
];

export const checkName = (num: string) => {
  switch (num) {
    case '012010':
      return '旭川'
    case '014020':
      return '釧路'
    case '016010':
      return '札幌'
    case '020010':
      return '青森'
    case '040010':
      return '仙台'
    case '050010':
      return '秋田'
    case '090010':
      return '宇都宮'
    case '130010':
      return '東京'
    case '200010':
      return '長野'
    case '230010':
      return '名古屋'
    case'270000':
      return '大阪'
    case '320010':
      return '松江'
    case '340010':
      return '広島'
    case '370000':
      return '高松'
    case '390010':
      return '高知'
    case '400010':
      return '福岡'
    case '460010':
      return '鹿児島'
    case '471010':
      return '那覇'
    case '474010':
      return '石垣島'
    default:
      break;
  }
};
