import { today } from 'src/utils/format-time';

import { CONFIG } from 'src/config-global';

import { _mock } from './_mock';

// APP
// ----------------------------------------------------------------------

export const _appRelated = [
  'Reservation Management Tool',
  'Table Booking System',
  'Customer Feedback App',
  'Offer Management Platform',
  'Inventory Tracking Tool',
].map((name, index) => ({
  id: _mock.id(index),
  name,
  downloaded: _mock.number.nativeL(index),
  ratingNumber: _mock.number.rating(index),
  size: _mock.number.nativeL(index) * 1024,
  totalReviews: _mock.number.nativeL(index),
  shortcut: `${CONFIG.site.basePath}/assets/icons/app/ic-app-${index + 1}.webp`,
  price: [2, 4].includes(index) ? _mock.number.price(index) : 0,
}));

export const _appInstalled = ['USA', 'UK', 'Germany', 'Australia', 'France'].map(
  (country, index) => ({
    id: _mock.id(index),
    countryName: country,
    android: _mock.number.nativeL(index),
    windows: _mock.number.nativeL(index + 1),
    apple: _mock.number.nativeL(index + 2),
    countryCode: ['us', 'gb', 'de', 'au', 'fr'][index],
  })
);

export const _appAuthors = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
  totalFavorites: _mock.number.nativeL(index),
}));

export const _appInvoices = [...Array(5)].map((_, index) => {
  const category = [
    'Food Orders',
    'Venue Rentals',
    'Customer Deposits',
    'Food Orders',
    'Venue Rentals',
  ][index];

  const status = ['paid', 'outstanding', 'in progress', 'paid', 'paid'][index];

  return {
    id: _mock.id(index),
    invoiceNumber: `INV-REST${index + 100}`,
    price: _mock.number.price(index),
    category,
    status,
  };
});

export const _appFeatured = [...Array(3)].map((_, index) => ({
  id: _mock.id(index + 3),
  title: _mock.postTitle(index + 3),
  description: 'Learn how to streamline your restaurant operations and increase reservations!',
  coverUrl: _mock.image.cover(index + 3),
}));

// ANALYTIC
// ----------------------------------------------------------------------

export const _analyticTasks = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: [
    'Check new reservations',
    'Review customer feedback',
    'Update menus',
    'Manage staff shifts',
    'Process payments',
  ][index],
}));

export const _analyticPosts = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  postedAt: _mock.time(index),
  title: _mock.postTitle(index),
  coverUrl: _mock.image.cover(index),
  description: 'Stay updated on the latest trends and insights in the restaurant industry.',
}));

export const _analyticOrderTimeline = [...Array(5)].map((_, index) => {
  const title = [
    'New reservation for 8 guests on June 5',
    'Invoice #INV-223 has been paid',
    'Order #12345 received on April 10',
    'New booking request #BK-1024',
    'Reservation #RES-4563 confirmed',
  ][index];

  return {
    id: _mock.id(index),
    title,
    type: `order${index + 1}`,
    time: _mock.time(index),
  };
});

export const _analyticTraffic = [
  {
    value: 'facebook',
    label: 'Facebook',
    total: _mock.number.nativeL(1),
  },
  {
    value: 'google',
    label: 'Google',
    total: _mock.number.nativeL(2),
  },
  {
    value: 'instagram',
    label: 'Instagram',
    total: _mock.number.nativeL(3),
  },
  {
    value: 'twitter',
    label: 'Twitter',
    total: _mock.number.nativeL(4),
  },
];

// ECOMMERCE
// ----------------------------------------------------------------------

export const _ecommerceSalesOverview = ['Total Revenue', 'Total Orders', 'Total Expenses'].map(
  (label, index) => ({
    label,
    totalAmount: _mock.number.price(index) * 100,
    value: _mock.number.percent(index),
  })
);

export const _ecommerceBestSalesman = [...Array(5)].map((_, index) => {
  const category = [
    'Branded Utensils',
    'Luxury Dishes',
    'Headsets',
    'Restaurant Equipment',
    'Chef Uniforms',
  ][index];

  return {
    id: _mock.id(index),
    category,
    rank: `Top ${index + 1}`,
    email: _mock.email(index),
    name: _mock.fullName(index),
    totalAmount: _mock.number.price(index),
    avatarUrl: _mock.image.avatar(index + 8),
    countryCode: ['us', 'gb', 'de', 'au', 'fr'][index],
  };
});

export const _ecommerceLatestProducts = [...Array(5)].map((_, index) => {
  const colors = (index === 0 && ['#2EC4B6', '#E71D36', '#FF9F1C', '#011627']) ||
    (index === 1 && ['#92140C', '#FFCF99']) ||
    (index === 2 && ['#0CECDD', '#FFF338', '#FF67E7', '#C400FF', '#52006A', '#046582']) ||
    (index === 3 && ['#845EC2', '#E4007C', '#2A1A5E']) || ['#090088'];

  return {
    id: _mock.id(index),
    colors,
    name: [
      'Gourmet Dish Set',
      'Kitchen Knives Set',
      'Dining Table Cloth',
      'Chef’s Apron',
      'Luxury Wine Glasses',
    ][index],
    price: _mock.number.price(index),
    coverUrl: _mock.image.product(index),
    priceSale: [1, 3].includes(index) ? _mock.number.price(index) : 0,
  };
});

export const _ecommerceNewProducts = [...Array(4)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.productName(index),
  coverUrl: _mock.image.product(index),
}));

// BANKING
// ----------------------------------------------------------------------

export const _bankingContacts = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  email: _mock.email(index),
  avatarUrl: _mock.image.avatar(index),
}));

export const _bankingCreditCard = [
  {
    id: _mock.id(2),
    balance: 23432.03,
    cardType: 'mastercard',
    cardHolder: _mock.fullName(2),
    cardNumber: '**** **** **** 3640',
    cardValid: '11/22',
  },
  {
    id: _mock.id(3),
    balance: 18000.23,
    cardType: 'visa',
    cardHolder: _mock.fullName(3),
    cardNumber: '**** **** **** 8864',
    cardValid: '11/25',
  },
  {
    id: _mock.id(4),
    balance: 2000.89,
    cardType: 'mastercard',
    cardHolder: _mock.fullName(4),
    cardNumber: '**** **** **** 7755',
    cardValid: '11/22',
  },
];

export const _bankingRecentTransitions = [
  {
    id: _mock.id(2),
    name: _mock.fullName(2),
    avatarUrl: _mock.image.avatar(2),
    type: 'Income',
    message: 'Received payment from',
    category: 'Food Delivery',
    date: _mock.time(2),
    status: 'progress',
    amount: _mock.number.price(2),
  },
  {
    id: _mock.id(3),
    name: _mock.fullName(3),
    avatarUrl: _mock.image.avatar(3),
    type: 'Expense',
    message: 'Payment for',
    category: 'Restaurant Supplies',
    date: _mock.time(3),
    status: 'completed',
    amount: _mock.number.price(3),
  },
  {
    id: _mock.id(4),
    name: _mock.fullName(4),
    avatarUrl: _mock.image.avatar(4),
    type: 'Refund',
    message: 'Refunded to customer for',
    category: 'Reservation Cancellation',
    date: _mock.time(4),
    status: 'failed',
    amount: _mock.number.price(4),
  },
];

// BOOKINGS
// ----------------------------------------------------------------------

export const _bookings = [...Array(5)].map((_, index) => {
  const status = ['Paid', 'Confirmed', 'Pending', 'Cancelled', 'Paid'][index];

  const customer = {
    avatarUrl: _mock.image.avatar(index),
    name: _mock.fullName(index),
    phoneNumber: _mock.phoneNumber(index),
  };

  const destination = [...Array(5)].map(
    (__, _index) =>
      ['Private Dining Room', 'Rooftop Terrace', 'Main Hall', 'Outdoor Seating', 'Chef’s Table'][
        _index
      ]
  )[index];

  return {
    id: _mock.id(index),
    destination,
    status,
    customer,
    checkIn: _mock.time(index),
    checkOut: _mock.time(index),
  };
});

export const _bookingsOverview = [...Array(3)].map((_, index) => ({
  status: ['Pending', 'Cancelled', 'Confirmed'][index],
  quantity: _mock.number.nativeL(index),
  value: _mock.number.percent(index + 5),
}));

export const _bookingReview = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  postedAt: _mock.time(index),
  rating: _mock.number.rating(index),
  avatarUrl: _mock.image.avatar(index),
  description: _mock.description(index),
  tags: ['Great service', 'Delicious food', 'Highly recommended'],
}));

export const _bookingNew = [...Array(8)].map((_, index) => ({
  guests: '2-4',
  id: _mock.id(index),
  bookedAt: _mock.time(index),
  duration: '2 hours',
  isHot: _mock.boolean(index),
  name: _mock.fullName(index),
  price: _mock.number.price(index),
  avatarUrl: _mock.image.avatar(index),
  coverUrl: _mock.image.travel(index),
}));
