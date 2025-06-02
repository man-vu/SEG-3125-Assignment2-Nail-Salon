export interface CategoryServiceItem {
  title: string;
  image: string;
  description: string;
  cost: number;
  currency: string;
  estimatedTimeMinutesRange: [number, number];
  services?: ServiceItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  cost: number;
  currency: string;
  estimatedTimeMinutesRange: [number, number];
}

export const categoryServices: CategoryServiceItem[] = [
  {
    title: "Manicure",
    image: "https://phoenixnailsandbeautyottawa.com/photos/services/manicure.jpg",
    description:
      "Treat your hands to the care they deserve with our professional manicure service. We shape, buff, and polish your nails to perfection, complete with cuticle care and a relaxing hand massage.",
    cost: 35,
    currency: "CAD",
    estimatedTimeMinutesRange: [30, 45],
    services: [
      {
        title: "Spa Manicure",
        description:
          "Spa manicure experience that finishes with normal nail polish.",
        cost: 20,
        currency: "CAD",
        estimatedTimeMinutesRange: [20, 30],
      },
      {
        title: "Manicure Shellac",
        description:
          "Manicure experience and adding gel nails polish on natural finger nails, long lasting shine and dry fast.",
        cost: 35,
        currency: "CAD",
        estimatedTimeMinutesRange: [30, 45],
      },
      {
        title: "Shellac Polish Application (on natural nails)",
        description:
          "Buff, shape and adding shellac on top of natural nails.",
        cost: 25,
        currency: "CAD",
        estimatedTimeMinutesRange: [20, 30],
      },
      {
        title: "French Tip (Add On)",
        description:
          "Adding white (or color) at the tips of the nails for a classic look.",
        cost: 10,
        currency: "CAD",
        estimatedTimeMinutesRange: [10, 15],
      },
    ],
  },
  {
    title: "Pedicure",
    image: "https://phoenixnailsandbeautyottawa.com/photos/services/pedicure.jpg",
    description:
      "Rejuvenate your feet with a deep-cleaning pedicure that includes nail trimming, exfoliation, cuticle treatment, and a soothing massage to leave your feet soft, smooth, and refreshed.",
    cost: 45,
    currency: "CAD",
    estimatedTimeMinutesRange: [40, 60],
    services: [
      {
        title: "Spa Pedicure",
        description:
          "Spa pedicure experience that finishes with normal nail polish.",
        cost: 35,
        currency: "CAD",
        estimatedTimeMinutesRange: [30, 40],
      },
      {
        title: "Pedicure Shellac",
        description:
          "Pedicure experience and then adding gel nails polish on natural toe nails, long lasting shine and dry fast.",
        cost: 50,
        currency: "CAD",
        estimatedTimeMinutesRange: [45, 60],
      },
      {
        title: "Shellac Polish Application (on toes)",
        description:
          "Buff, shape and adding gel nails polish.",
        cost: 25,
        currency: "CAD",
        estimatedTimeMinutesRange: [15, 25],
      },
    ],
  },
  {
    title: "Artificial Nails",
    image: "https://phoenixnailsandbeautyottawa.com/photos/services/artificial-nail.jpg",
    description:
      "Enhance your natural nails with durable and stylish acrylic, gel, or dip powder enhancements. Ideal for lengthening nails or achieving that flawless, chip-free finish.",
    cost: 60,
    currency: "CAD",
    estimatedTimeMinutesRange: [60, 90],
    services: [
      {
        title: "Full Set (with Regular Nail Polish)",
        description:
          "Using clear Solar powder then finish with regular nail polish. Expect 15 mins to dry.",
        cost: 55,
        currency: "CAD",
        estimatedTimeMinutesRange: [60, 75],
      },
      {
        title: "REFILL (with Regular Nail Polish)",
        description:
          "Clear Solar powder refill then finish with regular nail polish.",
        cost: 45,
        currency: "CAD",
        estimatedTimeMinutesRange: [45, 60],
      },
      {
        title: "Full Set (with Colour Powder/ Shellac)",
        description:
          "Durable nail enhancement using colored powder and solar liquid.",
        cost: 60,
        currency: "CAD",
        estimatedTimeMinutesRange: [75, 90],
      },
      {
        title: "REFILL (with Colour Powder/shellac)",
        description:
          "Filling in grown-out parts with powder or shellac.",
        cost: 50,
        currency: "CAD",
        estimatedTimeMinutesRange: [60, 75],
      },
      {
        title: "Ombre Full Set",
        description:
          "Merging 2 or more colours to create a faded ombre effect.",
        cost: 65,
        currency: "CAD",
        estimatedTimeMinutesRange: [75, 90],
      },
      {
        title: "Ombre Refill",
        description:
          "Ombre nail refill to update the look.",
        cost: 55,
        currency: "CAD",
        estimatedTimeMinutesRange: [60, 75],
      },
      {
        title: "Artificial Nail/ Dipping Removal",
        description:
          "Removing Acrylic, Solar or Dipping nails.",
        cost: 15,
        currency: "CAD",
        estimatedTimeMinutesRange: [15, 20],
      },
    ],
  },
  {
    title: "Nail Art",
    image: "https://phoenixnailsandbeautyottawa.com/photos/services/nail-art.jpg",
    description:
      "Express your style with custom nail art. From minimalist patterns to bold, intricate designs, our artists will bring your creative vision to life on your fingertips.",
    cost: 25,
    currency: "CAD",
    estimatedTimeMinutesRange: [20, 40],
    services: [
      {
        title: "Accent Nail Art",
        description: "Unique design on one or two nails per hand.",
        cost: 5,
        currency: "CAD",
        estimatedTimeMinutesRange: [5, 10],
      },
      {
        title: "Full Set Nail Art",
        description: "Custom art on all nails, includes gems or stickers.",
        cost: 20,
        currency: "CAD",
        estimatedTimeMinutesRange: [20, 30],
      },
      {
        title: "French Tip Nail Art",
        description: "Classic French tip with a creative twist.",
        cost: 10,
        currency: "CAD",
        estimatedTimeMinutesRange: [10, 15],
      },
    ],
  },
  {
    title: "Waxing",
    image: "https://phoenixnailsandbeautyottawa.com/photos/services/waxing.jpg",
    description:
      "Smooth skin is just a session away. We offer facial and body waxing for quick, effective, and long-lasting hair removal using skin-friendly products and hygienic practices.",
    cost: 30,
    currency: "CAD",
    estimatedTimeMinutesRange: [15, 30],
    services: [
      { title: "Eyebrows Wax", description: "Neatly shaped eyebrow wax.", cost: 15, currency: "CAD", estimatedTimeMinutesRange: [10, 15] },
      { title: "Eyebrows Tinting", description: "Color tinting for brows.", cost: 25, currency: "CAD", estimatedTimeMinutesRange: [15, 20] },
      { title: "Eyebrows Tinting And Waxing", description: "Combined waxing and tinting.", cost: 30, currency: "CAD", estimatedTimeMinutesRange: [20, 30] },
      { title: "Chin Wax", description: "Quick chin hair removal.", cost: 10, currency: "CAD", estimatedTimeMinutesRange: [10, 15] },
      { title: "Upper Lip Wax", description: "Removes hair on upper lip.", cost: 8, currency: "CAD", estimatedTimeMinutesRange: [5, 10] },
      { title: "Sideburns Wax", description: "Sideburn hair removal.", cost: 15, currency: "CAD", estimatedTimeMinutesRange: [10, 15] },
      { title: "Forehead Wax", description: "Forehead hair cleanup.", cost: 10, currency: "CAD", estimatedTimeMinutesRange: [5, 10] },
      { title: "Full Face Wax", description: "Comprehensive facial hair removal.", cost: 40, currency: "CAD", estimatedTimeMinutesRange: [25, 35] },
      { title: "Under Arms Wax", description: "Underarm hair removal.", cost: 15, currency: "CAD", estimatedTimeMinutesRange: [10, 15] },
      { title: "Half Arms Wax", description: "From elbow to wrist.", cost: 25, currency: "CAD", estimatedTimeMinutesRange: [15, 20] },
      { title: "Full Arms Wax", description: "Entire arm hair removal.", cost: 40, currency: "CAD", estimatedTimeMinutesRange: [25, 35] },
      { title: "Half Legs Wax", description: "From knee down.", cost: 30, currency: "CAD", estimatedTimeMinutesRange: [20, 30] },
      { title: "Full Legs", description: "Complete leg waxing (female only).", cost: 50, currency: "CAD", estimatedTimeMinutesRange: [30, 45] },
      { title: "Back Wax", description: "Hair removal from the back.", cost: 35, currency: "CAD", estimatedTimeMinutesRange: [25, 35] },
      { title: "Chest Wax", description: "Removes chest hair.", cost: 25, currency: "CAD", estimatedTimeMinutesRange: [20, 30] },
      { title: "Stomach Wax", description: "Hair removal from stomach area.", cost: 20, currency: "CAD", estimatedTimeMinutesRange: [15, 20] },
      { title: "Bikini Line Wax", description: "Hair removal along bikini line (female only).", cost: 30, currency: "CAD", estimatedTimeMinutesRange: [20, 30] },
    ],
  },
  {
    title: "Kids Services",
    image: "https://phoenixnailsandbeautyottawa.com/photos/services/kid.jpg",
    description:
      "Designed especially for our young guests, this gentle service includes light nail shaping, polishing, and optional nail art — a fun and safe pampering session for children.",
    cost: 20,
    currency: "CAD",
    estimatedTimeMinutesRange: [20, 30],
    services: [
      {
        title: "Kids Manicure",
        description: "Gentle manicure for children under 12.",
        cost: 12,
        currency: "CAD",
        estimatedTimeMinutesRange: [10, 15],
      },
      {
        title: "Kids Pedicure",
        description: "Gentle pedicure for children under 12.",
        cost: 15,
        currency: "CAD",
        estimatedTimeMinutesRange: [15, 20],
      },
      {
        title: "Kids Nail Art",
        description: "Fun and simple nail art for kids.",
        cost: 5,
        currency: "CAD",
        estimatedTimeMinutesRange: [5, 10],
      },
    ],
  },
];
