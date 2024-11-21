import { NextApiRequest, NextApiResponse } from 'next';

interface PriceItem {
  category: string;
  count: number;
}

interface Prices {
  tops: PriceItem[];
  bottoms: PriceItem[];
  bedsheets: PriceItem[];
  underwears: PriceItem[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const prices: Prices = {
    tops: [
      { category: "T-SHIRTS", count: 500 },
      { category: "SHIRTS (SHORT SLEEVED)", count: 500 },
      { category: "SHIRTS (LONG SLEEVED)", count: 600 },
      { category: "BLOUSES", count: 400 },
      { category: "JERSEY TOPS", count: 300 },
      { category: "JACKETS", count: 700 },
      { category: "PULLOVERS", count: 700 },
    ],
    bottoms: [
      { category: "TROUSERS", count: 600 },
      { category: "JEANS", count: 700 },
      { category: "LEGGINGS", count: 400 },
      { category: "SHORT", count: 400 },
      { category: "JERSEY SHORTS", count: 300 },
    ],
    bedsheets: [
      { category: "SINGLE SHEET", count: 600 },
      { category: "PILLOW CASE", count: 200 },
      { category: "BEDSHEET SET (1 SHEET 2 PILLOW CASES)", count: 1000 },
      { category: "BEDSHEET SET (2 SHEET 2 PILLOW CASES)", count: 2000 },
      { category: "DOUVERTS", count: 4500 },
      { category: "BLANKETS", count: 5000 },
    ],
    underwears: [
      { category: "INNERWEARS", count: 300 },
      { category: "CHELEPS", count: 300 },
      { category: "PANTIES", count: 300 },
      { category: "BLOUSES", count: 400 },
      { category: "JERSEY TOPS", count: 300 },
      { category: "JACKETS", count: 700 },
      { category: "PULLOVERS", count: 700 },
    ],
  };

  res.status(200).json(prices);
}
