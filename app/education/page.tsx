import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraduationCap, BookOpen, Leaf, Lightbulb, Users } from "lucide-react"

export const metadata = {
  title: "Education | Mau Summit Botanical Institute (MSBI)",
  description: "Mau Summit Botanical Institute (MSBI) - A certified technical and vocational institute offering botanical studies curriculum and practical training in conservation and extraction of medicinal products."
}

const herbsContent = [
  {
    title: "Thyme",
    description: "Thyme is a versatile herb with a subtle earthy and minty flavor that develops beautifully during slow cooking. It blends easily with other seasonings and is particularly effective in stews, braises, and roasted dishes, where it adds a gentle depth without overpowering other ingredients."
  },
  {
    title: "Sage",
    description: "Sage has a rich, savory profile with slightly bitter undertones. It is commonly paired with pork and poultry, especially in stuffing and brown butter sauces, where its bold flavor balances heavier, fatty elements in the dish."
  },
  {
    title: "Oregano",
    description: "Oregano is a robust and pungent herb that plays a central role in Mediterranean cooking. It is widely used in Italian tomato-based sauces, pizzas, and Greek grilled meats, where it provides a strong, slightly peppery earthiness."
  },
  {
    title: "Parsley",
    description: "Parsley offers a clean, fresh, and slightly peppery taste that brightens dishes. It is often used as a garnish but also works well in salads, sauces, and soups, adding a light, grassy freshness that enhances overall flavor."
  },
  {
    title: "Marjoram",
    description: "Marjoram is a milder and slightly sweeter relative of oregano, with soft floral notes. It is commonly used in meat dishes such as sausages and meatloaf, as well as in vinaigrettes and roasted vegetables, where a more delicate herb profile is preferred."
  },
  {
    title: "Mint",
    description: "Mint is a highly aromatic herb known for its cooling and refreshing quality, caused by its natural menthol content. It is used widely in both sweet and savory dishes, pairing well with lamb, yogurt-based sauces, fresh salads, beverages, and desserts. To preserve its flavor, it is best added toward the end of cooking."
  },
  {
    title: "Stinging Nettle",
    description: "Stinging nettle is a nutrient-rich leafy herb often compared to spinach but with a deeper, mineral-like taste. It can be used as a substitute for greens in soups, stews, and sautés, and is traditionally used in dishes such as nettle soup for its earthy richness and health benefits."
  }
]

const vegetableSeasonings = [
  {
    title: "Celery Leaves & Flakes",
    description: "Celery leaves and flakes are highly aromatic and provide a strong, slightly peppery and grassy flavor. They work well in soups, fish dishes, and as a finishing seasoning, offering a concentrated celery taste without the crunch of fresh stalks."
  },
  {
    title: "Onion Flakes",
    description: "Dried onion flakes deliver a robust, sweet, and slightly pungent flavor. They are a pantry staple for building savory depth in soups, stews, sauces, and meat mixtures, absorbing moisture and releasing flavor gradually during cooking."
  },
  {
    title: "Coriander Leaves (Cilantro)",
    description: "Dried coriander leaves have a bright, citrusy, and slightly earthy taste. They are essential in South Asian and Latin American cuisines, often used in curries, salsas, and rice dishes where a hint of herbal freshness is needed."
  },
  {
    title: "Basil",
    description: "Basil has a sweet, aromatic, and mildly peppery flavor with notes of anise. It is a cornerstone of Mediterranean cooking, especially in pesto, tomato dishes, and pasta, where its fragrant character shines."
  }
]

const spicesContent = [
  {
    title: "Chili Flakes",
    description: "Chili flakes are made from dried and crushed hot peppers, typically cayenne types. They are valued for their fiery, direct heat and are a versatile addition to countless savory dishes across many cuisines."
  },
  {
    title: "Chili Powder",
    description: "Ground chili peppers offer moderate heat with an earthy undertone. Commonly used in Tex-Mex and Indian cooking, they add warmth and depth without overwhelming other flavors."
  },
  {
    title: "Black Pepper",
    description: "Black pepper delivers a sharp, piney, and mildly spicy bite. It is considered the most universal table spice, used to enhance nearly every type of savory dish."
  },
  {
    title: "Dhania Jeera Powder",
    description: "This blend of coriander and cumin is a non-spicy staple in Indian cuisine. It offers warm, earthy notes from cumin and a subtle citrus character from coriander, commonly used to season curries, vegetables, and meat dishes."
  },
  {
    title: "Ginger Powder",
    description: "Ground ginger has a spicy, zesty, and warming profile. It is commonly used in Asian stir-fries, baked goods, teas, and marinades for a distinctive peppery sweetness."
  },
  {
    title: "Black Seeds (Nigella Sativa)",
    description: "Black seeds have a complex, slightly bitter and onion-like flavor. Often used in bread toppings, curries, and traditional remedies, they are prized for both taste and purported health benefits."
  },
  {
    title: "Cloves (Whole & Powder)",
    description: "Cloves are intensely aromatic with a sweet, woody, and slightly astringent taste. They are used whole to infuse rice, meats, and beverages, while ground cloves are popular in baking and spice blends."
  },
  {
    title: "Tea Masala",
    description: "Tea masala is a fragrant blend of warm spices like ginger, cardamom, cinnamon, and cloves. It is designed for making masala chai, enhancing the tea with aromatic depth and subtle warmth."
  },
  {
    title: "Pilau Masala",
    description: "Pilau masala is a signature spice blend used in East African pilau rice dishes. It features a balanced mix of cumin, cardamom, cinnamon, and other warm spices, creating rich and aromatic rice preparations."
  },
  {
    title: "Chili Seeds",
    description: "Chili seeds are the primary carriers of capsaicin, the compound responsible for heat in chili peppers. They add intense, concentrated spiciness and are used when a potent kick is desired."
  },
  {
    title: "Fennel Seeds",
    description: "Fennel seeds have a distinctive sweet, licorice-like flavor with warm, herbal undertones. They are widely used in Italian sausages, Indian curries, baked goods, and as a digestive aid."
  },
  {
    title: "Cinnamon",
    description: "Cinnamon provides a warm, sweet, and slightly spicy flavor. It is essential in both sweet and savory cooking, including baked goods, desserts, and Middle Eastern meat dishes."
  },
  {
    title: "Coriander Seeds",
    description: "Whole coriander seeds have a citrusy, earthy, and mildly warm taste when ground. They are a key ingredient in curry blends, pickling mixes, and spice rubs for meats."
  },
  {
    title: "Senna Seeds",
    description: "Senna seeds have a mild, slightly bitter flavor and are traditionally used in teas and infusions. They are often brewed with complementary spices like cinnamon and ginger to balance their taste."
  }
]

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-natural-cream">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 bg-olive-leaf/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-olive-leaf mb-4">
                Education & Research
              </h1>
            </div>
          </div>
        </section>

        {/* Herbs Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-display text-olive-leaf mb-2">
              Herbs: Fresh, Aromatic, and Foundational
            </h2>
            <p className="font-body text-deep-charcoal mb-8 max-w-3xl">
              Learn about our collection of culinary and medicinal herbs, each with unique flavor profiles and traditional uses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {herbsContent.map((herb) => (
                <div key={herb.title} className="bg-natural-cream border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display text-olive-leaf mb-2">{herb.title}</h3>
                  <p className="font-body text-deep-charcoal text-sm leading-relaxed">{herb.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vegetable Seasonings Section */}
        <section className="py-12 md:py-16 bg-olive-leaf/5">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-display text-olive-leaf mb-2">
              Vegetable-Based Seasonings and Pantry Staples
            </h2>
            <p className="font-body text-deep-charcoal mb-8 max-w-3xl">
              Essential dried vegetables and herbs that form the foundation of flavorful cooking.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vegetableSeasonings.map((item) => (
                <div key={item.title} className="bg-natural-cream border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display text-olive-leaf mb-2">{item.title}</h3>
                  <p className="font-body text-deep-charcoal text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spices Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-display text-olive-leaf mb-2">
              Spices: Warmth, Heat, and Depth
            </h2>
            <p className="font-body text-deep-charcoal mb-8 max-w-3xl">
              Explore our range of aromatic spices that bring warmth, heat, and complexity to dishes from around the world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spicesContent.map((spice) => (
                <div key={spice.title} className="bg-natural-cream border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display text-olive-leaf mb-2">{spice.title}</h3>
                  <p className="font-body text-deep-charcoal text-sm leading-relaxed">{spice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Mau Summit Section */}
        <section className="py-12 md:py-16 bg-olive-leaf/5">
          <div className="container mx-auto px-4">
            <div className="bg-natural-cream border border-border rounded-2xl p-6 md:p-8">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sunroot-gold/20 mb-4">
                <GraduationCap className="w-5 h-5 text-sunroot-gold" />
              </div>
              <h3 className="text-xl font-display text-olive-leaf mb-1">About Mau Summit</h3>
              <p className="font-accent text-sunroot-gold font-medium text-sm mb-3">Certified Technical and Vocational Institute</p>
              <p className="font-body text-deep-charcoal leading-relaxed">
                Mau Summit Botanical Institute (MSBI) is a repository of East African medicinal plants and practical training space in conservation and extraction of medicinal and nutraceutical products. It&apos;s also a place to connect people with their plant diversity and inspire them to innovate health products by providing inspiration, ingredients and research for them, while also innovating health promoting natural products.
              </p>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="bg-natural-cream border border-border rounded-2xl p-6 md:p-8">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sunroot-gold/20 mb-4">
                <BookOpen className="w-5 h-5 text-sunroot-gold" />
              </div>
              <h3 className="text-xl font-display text-olive-leaf mb-1">Curriculum</h3>
              <p className="font-accent text-sunroot-gold font-medium text-sm mb-3">Government Approved Studies</p>
              <p className="font-body text-deep-charcoal leading-relaxed">
                Mau Summit Botanical Institute offers the government of Kenya approved botanical studies curriculum. Other than TVET curriculum, affiliated courses are offered to instigate creativity in our graduates.
              </p>
            </div>
          </div>
        </section>

        {/* Innovation Hub Section */}
        <section className="py-12 md:py-16 bg-olive-leaf/5">
          <div className="container mx-auto px-4">
            <div className="bg-natural-cream border border-border rounded-2xl p-6 md:p-8">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sunroot-gold/20 mb-4">
                <Lightbulb className="w-5 h-5 text-sunroot-gold" />
              </div>
              <h3 className="text-xl font-display text-olive-leaf mb-1">Innovation Hub</h3>
              <p className="font-accent text-sunroot-gold font-medium text-sm mb-3">Responding to Health Challenges</p>
              <p className="font-body text-deep-charcoal leading-relaxed">
                We respond to customer and community enquiries on health challenges affecting them. In an environment where medicare and medical services can be dysfunctional, we address conditions including Diabetes, Arthritis, Ulcers, H/Pylori, Amoebic infections, and Brucellosis through natural solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Mobilization Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="bg-natural-cream border border-border rounded-2xl p-6 md:p-8">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sunroot-gold/20 mb-4">
                <Users className="w-5 h-5 text-sunroot-gold" />
              </div>
              <h3 className="text-xl font-display text-olive-leaf mb-1">Resource Mobilization</h3>
              <p className="font-accent text-sunroot-gold font-medium text-sm mb-3">Community Support</p>
              <p className="font-body text-deep-charcoal leading-relaxed">
                Mau Summit Botanical Institute and its units need resources to carry out its mandate.
              </p>
            </div>
          </div>
        </section>

        {/* Health Challenges Section */}
        <section className="py-12 md:py-16 bg-olive-leaf/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display text-olive-leaf mb-6">
                Addressing Health Challenges
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["Diabetes", "Arthritis", "Ulcers", "H/Pylori", "Amoebic", "Brucellosis"].map((condition) => (
                  <div 
                    key={condition}
                    className="bg-natural-cream border border-border rounded-xl p-3 text-center"
                  >
                    <span className="font-accent font-medium text-sm text-deep-charcoal">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
