// Mock data for Swiggy clone
export interface Restaurant {
  id: string;
  name: string;
  cuisine: string[];
  rating: number;
  deliveryTime: string;
  priceForTwo: number;
  image: string;
  offer?: string;
  distance: string;
  area: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  rating?: number;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  { id: '1', name: 'North Indian', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=150&h=150&fit=crop&crop=center' },
  { id: '2', name: 'Chinese', image: 'https://images.unsplash.com/photo-1526318896980-cf6ba7d2d6b1?w=150&h=150&fit=crop&crop=center' },
  { id: '3', name: 'South Indian', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=150&h=150&fit=crop&crop=center' },
  { id: '4', name: 'Pizza', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop&crop=center' },
  { id: '5', name: 'Desserts', image: 'https://images.unsplash.com/photo-1488474339733-75b623d2bf4e?w=150&h=150&fit=crop&crop=center' },
  { id: '6', name: 'Fast Food', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=150&h=150&fit=crop&crop=center' },
];

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'The Spice Route',
    cuisine: ['North Indian', 'Mughlai'],
    rating: 4.3,
    deliveryTime: '30-35 mins',
    priceForTwo: 400,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center',
    offer: '60% OFF UPTO ₹120',
    distance: '2.5 km',
    area: 'Koramangala'
  },
  {
    id: '2',
    name: 'Dragon Palace',
    cuisine: ['Chinese', 'Asian'],
    rating: 4.1,
    deliveryTime: '25-30 mins',
    priceForTwo: 350,
    image: 'https://images.unsplash.com/photo-1526318896980-cf6ba7d2d6b1?w=300&h=200&fit=crop&crop=center',
    offer: 'FREE DELIVERY',
    distance: '1.8 km',
    area: 'BTM Layout'
  },
  {
    id: '3',
    name: 'South Express',
    cuisine: ['South Indian', 'Kerala'],
    rating: 4.5,
    deliveryTime: '20-25 mins',
    priceForTwo: 250,
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop&crop=center',
    distance: '1.2 km',
    area: 'Jayanagar'
  },
  {
    id: '4',
    name: 'Pizza Corner',
    cuisine: ['Italian', 'Fast Food'],
    rating: 4.2,
    deliveryTime: '35-40 mins',
    priceForTwo: 500,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&crop=center',
    offer: 'BUY 1 GET 1 FREE',
    distance: '3.1 km',
    area: 'Indiranagar'
  },
  {
    id: '5',
    name: 'Sweet Dreams',
    cuisine: ['Desserts', 'Ice Cream'],
    rating: 4.4,
    deliveryTime: '15-20 mins',
    priceForTwo: 300,
    image: 'https://images.unsplash.com/photo-1488474339733-75b623d2bf4e?w=300&h=200&fit=crop&crop=center',
    distance: '0.8 km',
    area: 'MG Road'
  },
  {
    id: '6',
    name: 'Burger Junction',
    cuisine: ['Fast Food', 'American'],
    rating: 3.9,
    deliveryTime: '25-30 mins',
    priceForTwo: 350,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop&crop=center',
    offer: '50% OFF',
    distance: '2.2 km',
    area: 'Whitefield'
  }
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Butter Chicken',
    description: 'Tender chicken in rich tomato and butter gravy',
    price: 320,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&h=200&fit=crop',
    category: 'Main Course',
    isVeg: false,
    rating: 4.5,
    isPopular: true
  },
  {
    id: '2',
    name: 'Paneer Tikka Masala',
    description: 'Cottage cheese cubes in spiced tomato gravy',
    price: 280,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop',
    category: 'Main Course',
    isVeg: true,
    rating: 4.3
  },
  {
    id: '3',
    name: 'Biryani',
    description: 'Aromatic basmati rice with marinated meat',
    price: 350,
    image: 'https://images.unsplash.com/photo-1563379091339-03246a98cd15?w=300&h=200&fit=crop',
    category: 'Rice & Biryani',
    isVeg: false,
    rating: 4.6,
    isPopular: true
  },
  {
    id: '4',
    name: 'Masala Dosa',
    description: 'Crispy crepe with spiced potato filling',
    price: 120,
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop',
    category: 'South Indian',
    isVeg: true,
    rating: 4.4
  },
  {
    id: '5',
    name: 'Garlic Naan',
    description: 'Soft bread topped with garlic and herbs',
    price: 80,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop',
    category: 'Breads',
    isVeg: true,
    rating: 4.2
  }
];

export const offers = [
  {
    id: '1',
    title: 'WELCOME60',
    description: '60% OFF up to ₹120',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=200&fit=crop'
  },
  {
    id: '2',
    title: 'FREE DELIVERY',
    description: 'On orders above ₹199',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=200&fit=crop'
  }
];

export const userProfile = {
  name: 'John Doe',
  email: 'john.doe@email.com',
  phone: '+91 9876543210',
  addresses: [
    {
      id: '1',
      type: 'Home',
      address: '123 MG Road, Bangalore, Karnataka 560001',
      isDefault: true
    },
    {
      id: '2',
      type: 'Work',
      address: '456 Koramangala, Bangalore, Karnataka 560095',
      isDefault: false
    }
  ],
  orders: [
    {
      id: 'ORD001',
      restaurant: 'The Spice Route',
      items: ['Butter Chicken', 'Garlic Naan'],
      total: 400,
      date: '2024-01-15',
      status: 'Delivered'
    },
    {
      id: 'ORD002',
      restaurant: 'Pizza Corner',
      items: ['Margherita Pizza'],
      total: 350,
      date: '2024-01-10',
      status: 'Delivered'
    }
  ]
};