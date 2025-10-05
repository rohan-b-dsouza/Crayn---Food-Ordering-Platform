import StaticPage from "./StaticPage";
import heroFood from "@/assets/hero-food.jpg";
import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";

export const About = () => (
  <StaticPage
    title="About Us"
    intro="Cravyn is a food discovery and delivery platform connecting people with their favorite local restaurants—fast, reliable, and delightful."
    sections={[
      { title: "What we do", body: "We help you discover top-rated restaurants, hidden gems, and neighborhood favorites. Order in minutes and track your delivery in real-time.", image: heroFood },
      { title: "How we choose partners", body: "We partner with restaurants that maintain high quality standards, consistent hygiene, and great customer feedback.", image: restaurant1 },
      { title: "Why customers love us", body: "Lightning-fast delivery windows, accurate ETA tracking, and a seamless experience from search to checkout.", image: restaurant2 },
    ]}
  />
);

export const Careers = () => (
  <StaticPage
    title="Careers"
    intro="We’re building the most loved way to get food—join us."
    cta={{ label: "View Open Roles", href: "#open-roles" }}
    sections={[
      { title: "Life at Cravyn", body: "We move fast, stay customer-obsessed, and celebrate outcomes. Expect ownership, autonomy, and high trust." , image: restaurant1},
      { title: "Benefits & perks", body: "Flexible work, wellness benefits, learning stipends, and great food credits." , image: restaurant2},
      { title: "Hiring philosophy", body: "We hire for potential and attitude. If you’re curious, collaborative, and care about impact—you’ll do great here." },
    ]}
  />
);

export const Blog = () => (
  <StaticPage
    title="Blog"
    intro="Stories on food culture, delivery tech, and building Cravyn."
    sections={[
      { title: "Top cuisines in your city", body: "From classic biryanis to trending poke bowls—here’s what people are ordering this month.", image: restaurant1 },
      { title: "Behind the scenes", body: "How we improve ETA accuracy using operational signals and real-time traffic data.", image: restaurant2 },
      { title: "Product updates", body: "New features: saved addresses, faster reorders, and better tracking animations.", image: heroFood },
    ]}
  />
);

export const Press = () => (
  <StaticPage
    title="Press"
    intro="For media inquiries, brand assets, and executive bios."
    sections={[
      { title: "Fast facts", body: "Operating across multiple cities with thousands of partner restaurants and millions of orders delivered." },
      { title: "Media kit", body: "Download logos, product screenshots, and brand guidelines. For interviews, reach press@cravyn.com." },
    ]}
  />
);

export const Help = () => (
  <StaticPage
    title="Help Center"
    intro="Find quick answers about ordering, delivery, payments, and your account."
    sections={[
      { title: "Orders & delivery", body: "Track your order from the Orders page. To modify items, cancel, or report an issue, open the order and choose the relevant action." },
      { title: "Payments & refunds", body: "We support cards, UPI, and wallets. Failed payments auto-reverse within 3–5 business days." },
      { title: "Account & addresses", body: "Update profile info and manage saved addresses from the Dashboard." },
    ]}
  />
);

export const Contact = () => (
  <StaticPage
    title="Contact Us"
    intro="We’d love to hear from you—support and partnerships."
    sections={[
      { title: "Customer support", body: "Use the Help Center for instant solutions or email support@cravyn.com. For live issues, open the order and tap ‘Get Help’." },
      { title: "Partnerships", body: "Restaurant owners and delivery partners: partner@cravyn.com. We’ll get back within 2 business days." },
    ]}
  />
);

export const Terms = () => (
  <StaticPage
    title="Terms of Service"
    sections={[
      { title: "Agreement", body: "By using Cravyn, you agree to these terms. Please read them carefully. We may update terms as our services evolve." },
      { title: "Use of service", body: "You agree not to misuse the platform. We may suspend accounts that violate policies or applicable law." },
      { title: "Orders & payments", body: "Prices, taxes, and fees are shown at checkout. Refunds are processed to the original payment method." },
      { title: "Liability", body: "To the extent permitted by law, Cravyn is not liable for indirect or consequential damages." },
    ]}
  />
);

export const Privacy = () => (
  <StaticPage
    title="Privacy Policy"
    sections={[
      { title: "Data we collect", body: "We collect account info, order history, and device data to deliver and improve our services." },
      { title: "How we use data", body: "To fulfill orders, provide support, personalize recommendations, and prevent fraud." },
      { title: "Your choices", body: "You can access or delete your data and manage notifications from your account settings." },
      { title: "Data sharing", body: "We share data with delivery partners and restaurants to complete orders—never sold to third parties." },
    ]}
  />
);

export const AddRestaurant = () => (
  <StaticPage
    title="Add Restaurant"
    intro="Grow sales with Cravyn: new customers, transparent payouts, and actionable insights."
    cta={{ label: "Apply Now", href: "#apply" }}
    sections={[
      { title: "Why partner with us", body: "Reach new customers, boost off-peak orders, and run targeted promotions.", image: restaurant2 },
      { title: "How it works", body: "Simple onboarding, menu setup, and training. Go live in days, not weeks." },
      { title: "Insights & tools", body: "Track orders, ratings, and revenue in your Partner Portal." },
    ]}
  />
);

export const BecomeRider = () => (
  <StaticPage
    title="Become a Rider"
    intro="Flexible hours, weekly payouts, and performance bonuses."
    cta={{ label: "Start Application", href: "#apply" }}
    sections={[
      { title: "What you’ll need", body: "A valid ID, smartphone, and a bike or scooter. Safety gear provided after onboarding.", image: restaurant1 },
      { title: "Why ride with Cravyn", body: "Transparent earnings, in-app navigation, and responsive support." },
    ]}
  />
);

export const PartnerPortal = () => (
  <StaticPage
    title="Partner Portal"
    sections={[
      { title: "All-in-one toolkit", body: "Accept orders, update menus and pricing, pause items, and manage inventory.", image: heroFood },
      { title: "Performance analytics", body: "Understand customer behavior, top-selling items, and busy hours." },
    ]}
  />
);

export const FAQs = () => (
  <StaticPage
    title="FAQs"
    sections={[
      { title: "How do I track my order?", body: "Go to Orders in your account to see live driver location and ETA." },
      { title: "What payment methods are accepted?", body: "Cards, UPI, and popular wallets are supported." },
      { title: "How do refunds work?", body: "Refunds are processed to the original payment method automatically." },
      { title: "How do I partner with Cravyn?", body: "Visit Add Restaurant or email partner@cravyn.com." },
    ]}
  />
);


