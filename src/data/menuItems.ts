import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: '1',
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls with wild mushrooms, truffle oil, and parmesan',
    price: 18,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/357743/pexels-photo-357743.jpeg',
    dietary: ['vegetarian']
  },
  {
    id: '2',
    name: 'Seared Scallops',
    description: 'Pan-seared scallops with cauliflower purée and pancetta crisps',
    price: 24,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg',
    isSpecial: true
  },
  {
    id: '3',
    name: 'Burrata Caprese',
    description: 'Fresh burrata with heirloom tomatoes, basil oil, and aged balsamic',
    price: 16,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg',
    dietary: ['vegetarian']
  },
  {
    id: '4',
    name: 'Tuna Tartare',
    description: 'Yellowfin tuna with avocado, citrus, and sesame wafers',
    price: 22,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg'
  },

  // Mains
  {
    id: '5',
    name: 'Wagyu Beef Tenderloin',
    description: 'Grilled wagyu with roasted vegetables and red wine reduction',
    price: 58,
    category: 'mains',
    image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg',
    isSpecial: true
  },
  {
    id: '6',
    name: 'Lobster Risotto',
    description: 'Creamy saffron risotto with fresh lobster and micro herbs',
    price: 42,
    category: 'mains',
    image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg'
  },
  {
    id: '7',
    name: 'Duck Confit',
    description: 'Slow-cooked duck leg with cherry gastrique and roasted potatoes',
    price: 36,
    category: 'mains',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg'
  },
  {
    id: '8',
    name: 'Herb-Crusted Salmon',
    description: 'Atlantic salmon with lemon herb crust and seasonal vegetables',
    price: 32,
    category: 'mains',
    image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg'
  },

  // Desserts
  {
    id: '9',
    name: 'Chocolate Soufflé',
    description: 'Warm dark chocolate soufflé with vanilla bean ice cream',
    price: 14,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg'
  },
  {
    id: '10',
    name: 'Crème Brûlée',
    description: 'Classic vanilla custard with caramelized sugar and berries',
    price: 12,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg'
  },
  {
    id: '11',
    name: 'Tiramisu',
    description: 'Traditional Italian dessert with espresso and mascarpone',
    price: 13,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg'
  },

  // Drinks
  {
    id: '12',
    name: 'Signature Cocktail',
    description: 'House special with premium spirits and fresh ingredients',
    price: 16,
    category: 'drinks',
    image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
  },
  {
    id: '13',
    name: 'Wine Selection',
    description: 'Curated selection of premium wines by the glass',
    price: 12,
    category: 'drinks',
    image: 'https://images.pexels.com/photos/1407843/pexels-photo-1407843.jpeg'
  },
  {
    id: '14',
    name: 'Craft Beer',
    description: 'Local and imported craft beers on tap',
    price: 8,
    category: 'drinks',
    image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg'
  }
];