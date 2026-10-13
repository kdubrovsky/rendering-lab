import type { Review } from '@rendering-lab/contracts';

// Product '2' intentionally has no reviews — exercises the empty-list case.
export const reviews: Review[] = [
  {
    id: 'r-0-1',
    productId: '0',
    author: 'Alex P.',
    rating: 5,
    text: 'Spreads easily, great on bagels.',
    createdAt: '2026-09-02T08:14:00.000Z',
  },
  {
    id: 'r-0-2',
    productId: '0',
    author: 'Mira S.',
    rating: 3,
    text: 'Tasty, but the tub is smaller than expected.',
    createdAt: '2026-09-18T19:42:00.000Z',
  },
  {
    id: 'r-0-3',
    productId: '0',
    author: 'Jon K.',
    rating: 4,
    text: 'Good value for everyday breakfasts.',
    createdAt: '2026-10-05T07:03:00.000Z',
  },
  {
    id: 'r-1-1',
    productId: '1',
    author: 'Dana R.',
    rating: 4,
    text: 'Dense and filling, keeps me full until lunch.',
    createdAt: '2026-08-27T12:30:00.000Z',
  },
  {
    id: 'r-1-2',
    productId: '1',
    author: 'Lev T.',
    rating: 2,
    text: 'Too dry for my taste, better toasted.',
    createdAt: '2026-10-01T16:55:00.000Z',
  },
];
