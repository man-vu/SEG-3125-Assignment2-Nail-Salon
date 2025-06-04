export interface CategoryServiceItem {
  // Static data field
  title?: string;
  // Backend field
  name?: string;
  image: string;
  description: string;
  // Static field
  cost?: number;
  // Backend field
  currency?: string;
  estimatedTimeMinutesRange?: [number, number];
  // Backend fields for estimated time
  estimatedMin?: number;
  estimatedMax?: number;
  services?: ServiceItem[];
}

export interface ServiceItem {
  // Static data field
  title?: string;
  // Backend field
  name?: string;
  description: string;
  shortDescription?: string;
  // Static price
  cost?: number;
  // Backend price
  price?: number;
  currency?: string;
  // Static estimated time
  estimatedTimeMinutesRange?: [number, number];
  // Backend duration
  duration?: number;
  image?: string; // optional when loaded from backend
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
        description: "Spa manicure experience that finishes with normal nail polish.",
        shortDescription: "Classic hand care with polish & massage.",
        cost: 20,
        currency: "CAD",
        estimatedTimeMinutesRange: [20, 30],
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80", // spa, gentle
      },
      {
        title: "Manicure Shellac",
        description: "Manicure experience and adding gel nails polish on natural finger nails, long lasting shine and dry fast.",
        shortDescription: "Gel polish for long-lasting, shiny nails.",
        cost: 35,
        currency: "CAD",
        estimatedTimeMinutesRange: [30, 45],
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // shiny pink shellac
      },
      {
        title: "Shellac Polish Application (on natural nails)",
        description: "Buff, shape and adding shellac on top of natural nails.",
        shortDescription: "Shellac finish on natural nails.",
        cost: 25,
        currency: "CAD",
        estimatedTimeMinutesRange: [20, 30],
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "French Tip (Add On)",
        description: "Adding white (or color) at the tips of the nails for a classic look.",
        shortDescription: "Classic French tip add-on.",
        cost: 10,
        currency: "CAD",
        estimatedTimeMinutesRange: [10, 15],
        image: "https://images.unsplash.com/photo-1505394033641-40c6ad1140ac?auto=format&fit=crop&w=600&q=80", // French tip
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
        description: "Spa pedicure experience that finishes with normal nail polish.",
        shortDescription: "Classic foot care with polish & massage.",
        cost: 35,
        currency: "CAD",
        estimatedTimeMinutesRange: [30, 40],
        image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80", // spa pedi
      },
      {
        title: "Pedicure Shellac",
        description: "Pedicure experience and then adding gel nails polish on natural toe nails, long lasting shine and dry fast.",
        shortDescription: "Gel polish pedicure for shiny, lasting toes.",
        cost: 50,
        currency: "CAD",
        estimatedTimeMinutesRange: [45, 60],
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80", // red toes gel
      },
      {
        title: "Shellac Polish Application (on toes)",
        description: "Buff, shape and adding gel nails polish.",
        shortDescription: "Shellac finish for toes.",
        cost: 25,
        currency: "CAD",
        estimatedTimeMinutesRange: [15, 25],
        image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=600&q=80", // pink toes shellac
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
        description: "Using clear Solar powder then finish with regular nail polish. Expect 15 mins to dry.",
        shortDescription: "Acrylic set with regular polish.",
        cost: 55,
        currency: "CAD",
        estimatedTimeMinutesRange: [60, 75],
        image: "https://images.unsplash.com/photo-1510925758641-6c7d9c51b42a?auto=format&fit=crop&w=600&q=80", // acrylic nails polish
      },
      {
        title: "REFILL (with Regular Nail Polish)",
        description: "Clear Solar powder refill then finish with regular nail polish.",
        shortDescription: "Acrylic fill & polish refresh.",
        cost: 45,
        currency: "CAD",
        estimatedTimeMinutesRange: [45, 60],
        image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80", // refill
      },
      {
        title: "Full Set (with Colour Powder/ Shellac)",
        description: "Durable nail enhancement using colored powder and solar liquid.",
        shortDescription: "Full set with color powder or gel.",
        cost: 60,
        currency: "CAD",
        estimatedTimeMinutesRange: [75, 90],
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80", // color powder
      },
      {
        title: "REFILL (with Colour Powder/shellac)",
        description: "Filling in grown-out parts with powder or shellac.",
        shortDescription: "Fill-in for color powder or gel nails.",
        cost: 50,
        currency: "CAD",
        estimatedTimeMinutesRange: [60, 75],
        image: "https://images.unsplash.com/photo-1512251425826-8b5fd2f50e4b?auto=format&fit=crop&w=600&q=80", // shellac refill
      },
      {
        title: "Ombre Full Set",
        description: "Merging 2 or more colours to create a faded ombre effect.",
        shortDescription: "Ombre nails with blended colors.",
        cost: 65,
        currency: "CAD",
        estimatedTimeMinutesRange: [75, 90],
        image: "https://images.unsplash.com/photo-1522335789203-a2586ec0954a?auto=format&fit=crop&w=600&q=80", // ombre nails
      },
      {
        title: "Ombre Refill",
        description: "Ombre nail refill to update the look.",
        shortDescription: "Update your ombre nails.",
        cost: 55,
        currency: "CAD",
        estimatedTimeMinutesRange: [60, 75],
        image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=600&q=80", // ombre refill
      },
      {
        title: "Artificial Nail/ Dipping Removal",
        description: "Removing Acrylic, Solar or Dipping nails.",
        shortDescription: "Removal of artificial or dip nails.",
        cost: 15,
        currency: "CAD",
        estimatedTimeMinutesRange: [15, 20],
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80", // removal
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
        shortDescription: "Design on one or two nails.",
        cost: 5,
        currency: "CAD",
        estimatedTimeMinutesRange: [5, 10],
        image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=600&q=80", // accent nail
      },
      {
        title: "Full Set Nail Art",
        description: "Custom art on all nails, includes gems or stickers.",
        shortDescription: "Art designs for every nail.",
        cost: 20,
        currency: "CAD",
        estimatedTimeMinutesRange: [20, 30],
        image: "https://images.unsplash.com/photo-1455656678494-4d1c07e0e668?auto=format&fit=crop&w=600&q=80", // full set nail art
      },
      {
        title: "French Tip Nail Art",
        description: "Classic French tip with a creative twist.",
        shortDescription: "French tips with flair.",
        cost: 10,
        currency: "CAD",
        estimatedTimeMinutesRange: [10, 15],
        image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=600&q=80", // French tip nail art
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
      { title: "Eyebrows Wax", description: "Neatly shaped eyebrow wax.", shortDescription: "Cleanly shaped brows.", cost: 15, currency: "CAD", estimatedTimeMinutesRange: [10, 15], image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" },
      { title: "Eyebrows Tinting", description: "Color tinting for brows.", shortDescription: "Color tint for eyebrows.", cost: 25, currency: "CAD", estimatedTimeMinutesRange: [15, 20], image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
      { title: "Eyebrows Tinting And Waxing", description: "Combined waxing and tinting.", shortDescription: "Tint and wax for brows.", cost: 30, currency: "CAD", estimatedTimeMinutesRange: [20, 30], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" },
      { title: "Chin Wax", description: "Quick chin hair removal.", shortDescription: "Smooth chin, fast.", cost: 10, currency: "CAD", estimatedTimeMinutesRange: [10, 15], image: "https://images.unsplash.com/photo-1506224772372-12b3b60a1aeb?auto=format&fit=crop&w=600&q=80" },
      { title: "Upper Lip Wax", description: "Removes hair on upper lip.", shortDescription: "Smooth upper lip.", cost: 8, currency: "CAD", estimatedTimeMinutesRange: [5, 10], image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" },
      { title: "Sideburns Wax", description: "Sideburn hair removal.", shortDescription: "Removes sideburn hair.", cost: 15, currency: "CAD", estimatedTimeMinutesRange: [10, 15], image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" },
      { title: "Forehead Wax", description: "Forehead hair cleanup.", shortDescription: "Smooth forehead finish.", cost: 10, currency: "CAD", estimatedTimeMinutesRange: [5, 10], image: "https://images.unsplash.com/photo-1455656678494-4d1c07e0e668?auto=format&fit=crop&w=600&q=80" },
      { title: "Full Face Wax", description: "Comprehensive facial hair removal.", shortDescription: "Hair-free face.", cost: 40, currency: "CAD", estimatedTimeMinutesRange: [25, 35], image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80" },
      { title: "Under Arms Wax", description: "Underarm hair removal.", shortDescription: "Smooth underarms.", cost: 15, currency: "CAD", estimatedTimeMinutesRange: [10, 15], image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=600&q=80" },
      { title: "Half Arms Wax", description: "From elbow to wrist.", shortDescription: "Half arm wax.", cost: 25, currency: "CAD", estimatedTimeMinutesRange: [15, 20], image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80" },
      { title: "Full Arms Wax", description: "Entire arm hair removal.", shortDescription: "Full arm wax.", cost: 40, currency: "CAD", estimatedTimeMinutesRange: [25, 35], image: "https://images.unsplash.com/photo-1512251425826-8b5fd2f50e4b?auto=format&fit=crop&w=600&q=80" },
      { title: "Half Legs Wax", description: "From knee down.", shortDescription: "Half leg wax.", cost: 30, currency: "CAD", estimatedTimeMinutesRange: [20, 30], image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80" },
      { title: "Full Legs", description: "Complete leg waxing (female only).", shortDescription: "Full leg wax (female).", cost: 50, currency: "CAD", estimatedTimeMinutesRange: [30, 45], image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80" },
      { title: "Back Wax", description: "Hair removal from the back.", shortDescription: "Back waxing service.", cost: 35, currency: "CAD", estimatedTimeMinutesRange: [25, 35], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" },
      { title: "Chest Wax", description: "Removes chest hair.", shortDescription: "Chest hair removal.", cost: 25, currency: "CAD", estimatedTimeMinutesRange: [20, 30], image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
      { title: "Stomach Wax", description: "Hair removal from stomach area.", shortDescription: "Smooth stomach area.", cost: 20, currency: "CAD", estimatedTimeMinutesRange: [15, 20], image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" },
      { title: "Bikini Line Wax", description: "Hair removal along bikini line (female only).", shortDescription: "Bikini line wax (female).", cost: 30, currency: "CAD", estimatedTimeMinutesRange: [20, 30], image: "https://images.unsplash.com/photo-1506224772372-12b3b60a1aeb?auto=format&fit=crop&w=600&q=80" },
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
        shortDescription: "For kids under 12, gentle hand care.",
        cost: 12,
        currency: "CAD",
        estimatedTimeMinutesRange: [10, 15],
        image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=600&q=80", // kids nails
      },
      {
        title: "Kids Pedicure",
        description: "Gentle pedicure for children under 12.",
        shortDescription: "For kids under 12, gentle foot care.",
        cost: 15,
        currency: "CAD",
        estimatedTimeMinutesRange: [15, 20],
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80", // kids toes
      },
      {
        title: "Kids Nail Art",
        description: "Fun and simple nail art for kids.",
        shortDescription: "Kid-friendly creative nail designs.",
        cost: 5,
        currency: "CAD",
        estimatedTimeMinutesRange: [5, 10],
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", // colorful kids nails
      },
    ],
  },
];
