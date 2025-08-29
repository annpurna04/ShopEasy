// src/data/products.js
import smartphoneImg from "../assets/smartphone.jpg";
import smartphoneImg1 from "../assets/smartphone1.jpg";
import smartphoneImg2 from "../assets/smartphone2.jpg";
import smartphoneImg3 from "../assets/smartphone3.jpg";

import laptopImg from "../assets/laptop.jpg";
import laptopImg1 from "../assets/laptop1.jpg";
import laptopImg2 from "../assets/laptop2.jpg";
import laptopImg3 from "../assets/laptop3.jpg";

import headphonesImg from "../assets/headphones.jpg";
import headphonesImg1 from "../assets/headphones1.jpg";
import headphonesImg2 from "../assets/headphones2.jpg";
import headphonesImg3 from "../assets/headphones3.jpg";

import shoesImg from "../assets/shoes.jpg";
import shoesImg1 from "../assets/shoes1.jpg";
import shoesImg2 from "../assets/shoes2.jpg";
import shoesImg3 from "../assets/shoes3.jpg";

import tshirtImg from "../assets/tshirt.jpg";
import tshirtImg1 from "../assets/tshirt1.jpg";
import tshirtImg2 from "../assets/tshirt2.jpg";

import watchImg from "../assets/watch.jpg";
import watchImg1 from "../assets/watch1.jpg";
import watchImg2 from "../assets/watch2.jpg";
import watchImg3 from "../assets/watch3.jpg";

import earbudsImg from "../assets/earbuds.jpg";
import earbudsImg1 from "../assets/earbuds1.jpg";
import earbudsImg2 from "../assets/earbuds2.jpg";
import earbudsImg3 from "../assets/earbuds3.jpg";

import macImg from "../assets/mac.jpg";
import macImg1 from "../assets/mac1.jpg";
import macImg2 from "../assets/mac2.jpg";
import macImg3 from "../assets/mac3.jpg";

import tshirt1Img from "../assets/m-tshirt1.jpg";
import tshirt1Img1 from "../assets/m-tshirt2.jpg";
import tshirt1Img2 from "../assets/m-tshirt3.jpg";

import jacketImg from "../assets/jacket.jpg";
import jacketImg1 from "../assets/jacket1.jpg";
import jacketImg2 from "../assets/jacket2.jpg";
import jacketImg3 from "../assets/jacket3.jpg";

import shoes1Img from "../assets/sneaker.jpg";
import shoes1Img1 from "../assets/sneaker1.jpg";
import shoes1Img2 from "../assets/sneaker2.jpg";
import shoes1Img3 from "../assets/sneaker3.jpg";

import cameraImg from "../assets/camera.jpg";
import cameraImg1 from "../assets/camera1.jpg";
import cameraImg2 from "../assets/camera2.jpg";
import cameraImg3 from "../assets/camera3.jpg";

import pendant1Img from "../assets/pendant.jpg";
import pendant1Img1 from "../assets/pendant1.jpg";
import pendant1Img2 from "../assets/pendant2.jpg";
import pendant1Img3 from "../assets/pendant3.jpg";

const allProducts = [
  {
    id: 1,
    name: "Smartphone",
    description:
      "Vivo V60 5G (Auspicious Gold, 16GB RAM, 512GB Storage) with No Cost EMI/Additional Exchange Offers",
    price: 45999,
    image: [smartphoneImg, smartphoneImg1,  smartphoneImg2, smartphoneImg3],
    category: "Electronics",
    details: {
      materialType: "Glass & Metal",
      closureType: "Touchscreen",
      battery: "5000mAh",
      waterResistance: "IP68",
      style: "Smartphone",
      countryOfOrigin: "India",
      about: [
        "Powerful Snapdragon processor with 5G support",
        "16GB RAM, 512GB Storage",
        "AMOLED display with 120Hz refresh rate",
        "Fast charging supported"
      ],
      additionalInfo: {
        manufacturer: "Vivo India Pvt Ltd",
        packer: "Vivo Retail Ventures",
        itemWeight: "210 g",
        itemDimensions: "16 x 7.5 x 0.8 cm",
        netQuantity: "1.00 Count",
        genericName: "Smartphone"
      }
    }
  },
  {
    id: 2,
    name: "Laptop",
    description:
      'HP 15, 13th Gen Intel Core i5-1334U Laptop (16GB DDR4,512GB SSD) Anti-Glare, Micro-edge,15.6"/39.6cm, FHD, Win11,M365,Office24, Silver',
    price: 55850,
    image: [laptopImg, laptopImg1, laptopImg2, laptopImg3],
    category: "Electronics",
    details: {
      materialType: "Aluminium",
      closureType: "Clamshell",
      battery: "41Wh Li-ion",
      waterResistance: "Not Applicable",
      style: "Laptop",
      countryOfOrigin: "China",
      about: [
        "13th Gen Intel Core i5 processor",
        "16GB DDR4 RAM, 512GB SSD",
        "15.6” FHD anti-glare screen",
        "Pre-installed Windows 11 & Office 365"
      ],
      additionalInfo: {
        manufacturer: "HP Inc.",
        packer: "HP India Sales Pvt Ltd",
        itemWeight: "1.59 kg",
        itemDimensions: "36 x 24 x 2 cm",
        netQuantity: "1.00 Count",
        genericName: "Laptop"
      }
    }
  },
  {
    id: 3,
    name: "Headphones",
    description:
      "boAt Rockerz 512 ANC, 40dB Hybrid ANC, 80Hrs Playback, 40mm Drivers, Wireless Headphone with Mic",
    price: 2799,
    image: [headphonesImg, headphonesImg1, headphonesImg2, headphonesImg3],
    category: "Accessories",
    details: {
      materialType: "Plastic & Foam",
      closureType: "Over-Ear",
      battery: "600mAh (80 hours playback)",
      waterResistance: "IPX4",
      style: "Headphones",
      countryOfOrigin: "India",
      about: [
        "40mm drivers for immersive sound",
        "Active Noise Cancellation",
        "Up to 80 hours playback",
        "Lightweight and comfortable"
      ],
      additionalInfo: {
        manufacturer: "Imagine Marketing Ltd (boAt)",
        packer: "boAt Retail Pvt Ltd",
        itemWeight: "250 g",
        itemDimensions: "18 x 8 x 20 cm",
        netQuantity: "1.00 Count",
        genericName: "Headphone"
      }
    }
  },
  {
    id: 4,
    name: "Shoes",
    description:
      "ASIAN Men's MEXICO-11 Casual Sneaker Shoes with Synthetic Upper - Designed for everyday wear, these sneakers combine modern aesthetics with practical functionality, making them perfect for casual outings, college, or office-casual looks.",
    price: 1999,
    image: [shoesImg, shoesImg1, shoesImg2 , shoesImg2, shoesImg3], 
    category: "Fashion",
    details: {
      materialType: "Synthetic",
      closureType: "Lace-Up",
      heelType: "Platform Heel",
      waterResistance: "Not Water Resistant",
      soleMaterial: "Polyvinyl Chloride",
      style: "Sneaker",
      countryOfOrigin: "India",
      about: [
        "MATERIAL: Upper - Synthetic | Outsole - PVC",
        "FEATURES: Closure - Lace-Up | TOE SHAPE - Round Toe",
        "EVA Sole with dynamic feet and arch support",
        "Slip-resistant features for safety"
      ],
      additionalInfo: {
        manufacturer: "ASIAN, Asian Footwear Pvt Ltd",
        packer: "Asian Retail Ventures",
        itemWeight: "400 g",
        itemDimensions: "26 x 16 x 10 cm",
        netQuantity: "1.00 Count",
        genericName: "Sneaker"
      }
    }
  },
  {
    id: 5,
    name: "T-shirt",
    description:
      "Amazon Brand - Symbol Women's Cotton Stretch Regular Fit Round Neck Half Sleeve T-Shirt (Pack of 3)",
    price: 4799,
    image: [tshirtImg, tshirtImg1, tshirtImg2],
    category: "Fashion",
    details: {
      materialType: "Cotton",
      closureType: "Pull-On",
      waterResistance: "Not Applicable",
      style: "Casual Wear",
      countryOfOrigin: "India",
      about: [
        "Soft cotton fabric for comfort",
        "Pack of 3 basic t-shirts",
        "Regular fit, round neck design",
        "Machine washable"
      ],
      additionalInfo: {
        manufacturer: "Amazon Brand - Symbol",
        packer: "Amazon Retail India",
        itemWeight: "300 g",
        itemDimensions: "25 x 20 x 2 cm",
        netQuantity: "3.00 Count",
        genericName: "T-shirt"
      }
    }
  },
  {
    id: 6,
    name: "Watch",
    description: "Fossil Nate Chronograph Analog Black Dial Grey Band Men's Watch Beige Dial Men's Watch-ME3269",
    price: 15994,
    image: [watchImg, watchImg1,watchImg2,watchImg3],
    category: "Accessories",
    details: {
      materialType: "Stainless Steel",
      closureType: "Buckle",
      waterResistance: "50 meters",
      style: "Chronograph",
      countryOfOrigin: "USA",
      about: [
        "Classic chronograph design",
        "Stainless steel build",
        "Water-resistant up to 50m",
        "Durable grey band"
      ],
      additionalInfo: {
        manufacturer: "Fossil Inc.",
        packer: "Fossil Retail India",
        itemWeight: "180 g",
        itemDimensions: "24 x 4 x 1 cm",
        netQuantity: "1.00 Count",
        genericName: "Wrist Watch"
      }
    }
  },
  {
    id: 7,
    name: "Ear buds",
    description:
      "OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic, 12.4mm Drivers, 38hr Playback",
    price: 1799,
    image: [earbudsImg, earbudsImg1, earbudsImg2, earbudsImg3],
    category: "Accessories",
    details: {
      materialType: "Plastic",
      closureType: "In-Ear",
      battery: "Up to 38 hours playback",
      waterResistance: "IP55",
      style: "Wireless Earbuds",
      countryOfOrigin: "India",
      about: [
        "12.4mm dynamic drivers",
        "Clear microphone quality",
        "Dust and water resistance",
        "Fast charging support"
      ],
      additionalInfo: {
        manufacturer: "OnePlus Technology",
        packer: "OnePlus India",
        itemWeight: "60 g",
        itemDimensions: "6 x 4 x 3 cm",
        netQuantity: "1.00 Count",
        genericName: "Wireless Earbuds"
      }
    }
  },
  {
    id: 8,
    name: "MacBook Air",
    description:
      "Apple 2025 MacBook Air (13-inch, Apple M4 chip, 16GB Unified Memory, 256GB SSD) - Midnight",
    price: 93990,
    image: [macImg,macImg1, macImg2,macImg3],
    category: "Electronics",
    details: {
      materialType: "Aluminium",
      closureType: "Clamshell",
      battery: "52Wh Li-ion",
      waterResistance: "Not Applicable",
      style: "Laptop",
      countryOfOrigin: "China",
      about: [
        "Powered by Apple M4 chip",
        "13-inch Retina display",
        "16GB Unified Memory",
        "Lightweight & portable design"
      ],
      additionalInfo: {
        manufacturer: "Apple Inc.",
        packer: "Apple India Pvt Ltd",
        itemWeight: "1.2 kg",
        itemDimensions: "30 x 21 x 1.1 cm",
        netQuantity: "1.00 Count",
        genericName: "Laptop"
      }
    }
  },
  {
    id: 9,
    name: "T-shirt",
    description:
      "LEOTUDE Men Half Sleeve Round Neck Graphic Printed Cottonblend Oversized Tshirt (Black)",
    price: 2298,
    image: [tshirt1Img, tshirt1Img1, tshirt1Img2],
    category: "Fashion",
    details: {
      materialType: "Cotton Blend",
      closureType: "Pull-On",
      waterResistance: "Not Applicable",
      style: "Oversized Casual Wear",
      countryOfOrigin: "India",
      about: [
        "Trendy oversized design",
        "Comfortable cotton blend fabric",
        "Bold graphic print",
        "Durable stitching"
      ],
      additionalInfo: {
        manufacturer: "LEOTUDE Pvt Ltd",
        packer: "LEOTUDE Retail",
        itemWeight: "250 g",
        itemDimensions: "26 x 20 x 2 cm",
        netQuantity: "1.00 Count",
        genericName: "T-shirt"
      }
    }
  },
  {
    id: 10,
    name: "Jacket",
    description: "eWools Men's Nylon Winter Wear Jacket for Winter (Wind6 Series) Crafted from premium nylon, this jacket offers lightweight yet durable protection against chilly winds and harsh weather.",
    price: 6499,
    image: [jacketImg, jacketImg1, jacketImg2,jacketImg3],
    category: "Fashion",
    details: {
      materialType: "Nylon",
      closureType: "Zipper",
      waterResistance: "Water Resistant",
      style: "Winter Wear",
      countryOfOrigin: "India",
      about: [
        "Warm and comfortable",
        "Durable nylon fabric",
        "Zipper closure for protection",
        "Wind resistant design"
      ],
      additionalInfo: {
        manufacturer: "eWools Pvt Ltd",
        packer: "eWools India",
        itemWeight: "500 g",
        itemDimensions: "30 x 22 x 4 cm",
        netQuantity: "1.00 Count",
        genericName: "Jacket"
      }
    }
  },
  {
    id: 11,
    name: "Shoes",
    description:
      "BRUTON Men's TARZEN-0340 Casual Sneaker Shoes with Synthetic Upper Lightweight Comfortable Mid Top Sneaker Shoes for Men's & Boy's",
    price: 8498,
    image: [shoes1Img, shoes1Img1, shoes1Img2, shoes1Img3],
    category: "Fashion",
    details: {
      materialType: "Synthetic",
      closureType: "Lace-Up",
      heelType: "Flat",
      waterResistance: "Not Water Resistant",
      soleMaterial: "Rubber",
      style: "Sneaker",
      countryOfOrigin: "India",
      about: [
        "Lightweight and stylish",
        "Durable synthetic material",
        "Lace-up closure for snug fit",
        "Everyday casual wear"
      ],
      additionalInfo: {
        manufacturer: "BRUTON Pvt Ltd",
        packer: "Bruton Retail",
        itemWeight: "420 g",
        itemDimensions: "27 x 17 x 11 cm",
        netQuantity: "1.00 Count",
        genericName: "Sneaker"
      }
    }
  },
  {
    id: 12,
    name: "Camera",
    description:
      "Fujifilm GFX100S II 102MP Large Format mirrorless Camera|High Speed Recording FHD 240fps|Advance AF for Lifestyle/Professionals (Body only) -Black",
    price: 54999,
    image: [cameraImg, cameraImg1, cameraImg2, cameraImg3],
    category: "Accessories",
    details: {
      materialType: "Magnesium Alloy",
      closureType: "Lens Mount",
      waterResistance: "Weather Sealed",
      style: "Mirrorless Camera",
      countryOfOrigin: "Japan",
      about: [
        "102MP Large format sensor",
        "4K/240fps recording",
        "Advanced autofocus system",
        "Professional-grade build"
      ],
      additionalInfo: {
        manufacturer: "Fujifilm Corporation",
        packer: "Fujifilm India Pvt Ltd",
        itemWeight: "1 kg",
        itemDimensions: "15 x 10 x 7 cm",
        netQuantity: "1.00 Count",
        genericName: "Camera"
      }
    }
  },
  {
    id: 13,
    name: "Pendant",
    description:
      "ARZONAI Punk Vintage Stainless Steel Layered Portrait Lock Pendant Chunky Thick Cuban Link Chains Choker Necklaces for Women (Gold)",
    price: 1199,
    image: [pendant1Img, pendant1Img1, pendant1Img2, pendant1Img3],
    category: "Accessories",
    details: {
      materialType: "Stainless Steel",
      closureType: "Lobster Clasp",
      waterResistance: "Not Applicable",
      style: "Chunky Choker",
      countryOfOrigin: "India",
      about: [
        "Trendy punk vintage design",
        "Durable stainless steel",
        "Chunky Cuban chain style",
        "Gold finish for elegance"
      ],
      additionalInfo: {
        manufacturer: "ARZONAI Pvt Ltd",
        packer: "ARZONAI India",
        itemWeight: "100 g",
        itemDimensions: "20 x 2 x 1 cm",
        netQuantity: "1.00 Count",
        genericName: "Pendant Necklace"
      }
    }
  }
];

export default allProducts;
