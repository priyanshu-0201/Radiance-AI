import { Product, SkinConcern, SkinResult } from '../types';

export const skinResultsData: Record<SkinConcern, SkinResult> = {
  acne: {
    concern: 'acne',
    description: 'Based on your images and description, you appear to have inflammatory acne. This type of acne occurs when pores become clogged with oil and bacteria, leading to redness and swelling. With the right products and consistent care, you can effectively manage this condition.',
    products: [
      {
        id: 1,
        name: 'Anti-Acne Face Wash',
        brand: 'The Derma Co.',
        price: 194,
        image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: '2% Salicylic Acid face wash that helps unclog pores and reduce inflammation.',
        link: 'https://www.amazon.in/',
        store: 'Amazon'
      },
      {
        id: 2,
        name: 'Niacinamide 10% Serum',
        brand: 'Minimalist',
        price: 599,
        image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Reduces sebum production and minimizes the appearance of pores.',
        link: 'https://www.nykaa.com/',
        store: 'Nykaa'
      },
      {
        id: 3,
        name: 'Oil-Free Moisturizer',
        brand: 'Neutrogena',
        price: 350,
        image: 'https://images.pexels.com/photos/5938576/pexels-photo-5938576.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lightweight hydration that won\'t clog pores or exacerbate acne.',
        link: 'https://sephora.nnnow.com/',
        store: 'Sephora'
      }
    ]
  },
  dryness: {
    concern: 'dryness',
    description: 'You have dry skin characterized by flaking, tightness, and occasional rough patches. This is likely due to a lack of natural oils and moisture in your skin barrier. With proper hydration and moisturizing, your skin can regain its natural balance.',
    products: [
      {
        id: 4,
        name: 'DAM Daily Moisturizing Lotion',
        brand: 'Cetaphil',
        price: 251,
        image: 'https://images.pexels.com/photos/5217926/pexels-photo-5217926.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Gentle, non-greasy formula that provides long-lasting hydration.',
        link: 'https://www.nykaa.com/',
        store: 'Nykaa'
      },
      {
        id: 5,
        name: 'Hyaluronic Acid Serum',
        brand: 'Plum',
        price: 695,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Draws moisture into the skin for deep hydration.',
        link: 'https://www.amazon.in/',
        store: 'Amazon'
      },
      {
        id: 6,
        name: 'Hydrating Cleansing Milk',
        brand: 'Bioderma',
        price: 895,
        image: 'https://images.pexels.com/photos/5938290/pexels-photo-5938290.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Gently cleanses without stripping natural oils.',
        link: 'https://sephora.nnnow.com/',
        store: 'Sephora'
      }
    ]
  },
  rash: {
    concern: 'rash',
    description: 'The images and your description suggest contact dermatitis, a type of skin rash triggered by contact with a particular substance. It usually causes red, itchy skin that may develop small blisters. With proper care and avoiding triggers, this condition can be managed effectively.',
    products: [
      {
        id: 7,
        name: 'Ato Repair Cream',
        brand: 'Dr. Jart+',
        price: 1299,
        image: 'https://images.pexels.com/photos/5938240/pexels-photo-5938240.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Soothes irritated skin and restores the skin barrier.',
        link: 'https://sephora.nnnow.com/',
        store: 'Sephora'
      },
      {
        id: 8,
        name: 'Calming Relief Cream',
        brand: 'Aveeno',
        price: 427,
        image: 'https://images.pexels.com/photos/7290057/pexels-photo-7290057.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Oatmeal-based formula that reduces itching and irritation.',
        link: 'https://www.amazon.in/',
        store: 'Amazon'
      },
      {
        id: 9,
        name: 'Gentle Body Wash',
        brand: 'Sebamed',
        price: 349,
        image: 'https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'pH 5.5 formula that cleanses without irritating sensitive skin.',
        link: 'https://www.nykaa.com/',
        store: 'Nykaa'
      }
    ]
  },
  pigmentation: {
    concern: 'pigmentation',
    description: 'You have post-inflammatory hyperpigmentation, which appears as darkened patches where previous inflammation (like acne) has healed. This occurs when excess melanin is produced in the affected areas. With consistent treatment, these dark spots can fade over time.',
    products: [
      {
        id: 10,
        name: 'Alpha Arbutin 2% + HA',
        brand: 'The Ordinary',
        price: 750,
        image: 'https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Reduces the appearance of dark spots and evens skin tone.',
        link: 'https://www.nykaa.com/',
        store: 'Nykaa'
      },
      {
        id: 11,
        name: 'Vitamin C Serum',
        brand: 'Garnier',
        price: 549,
        image: 'https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Brightens skin and reduces hyperpigmentation over time.',
        link: 'https://www.amazon.in/',
        store: 'Amazon'
      },
      {
        id: 12,
        name: 'Sunscreen SPF 50+',
        brand: 'La Shield',
        price: 675,
        image: 'https://images.pexels.com/photos/5796583/pexels-photo-5796583.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Prevents darkening of pigmented areas due to sun exposure.',
        link: 'https://www.nykaa.com/',
        store: 'Nykaa'
      }
    ]
  },
  eczema: {
    concern: 'eczema',
    description: 'Your skin shows signs of atopic dermatitis (eczema), characterized by red, itchy, and inflamed patches. This chronic condition is related to a compromised skin barrier and immune system reactions. While there is no cure, symptoms can be managed effectively with the right products.',
    products: [
      {
        id: 13,
        name: 'Intensive Moisturizing Cream',
        brand: 'Venusia Max',
        price: 399,
        image: 'https://images.pexels.com/photos/4465125/pexels-photo-4465125.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Restores moisture barrier and provides long-lasting hydration.',
        link: 'https://www.amazon.in/',
        store: 'Amazon'
      },
      {
        id: 14,
        name: 'Lipid Replenishing Cleanser',
        brand: 'Cetaphil',
        price: 650,
        image: 'https://images.pexels.com/photos/6621329/pexels-photo-6621329.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Gently cleanses without disrupting the skin barrier.',
        link: 'https://www.nykaa.com/',
        store: 'Nykaa'
      },
      {
        id: 15,
        name: 'Lipikar Baume AP+',
        brand: 'La Roche-Posay',
        price: 1490,
        image: 'https://images.pexels.com/photos/5938281/pexels-photo-5938281.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Triple-action formula to relieve irritation and restore the skin barrier.',
        link: 'https://sephora.nnnow.com/',
        store: 'Sephora'
      }
    ]
  }
};