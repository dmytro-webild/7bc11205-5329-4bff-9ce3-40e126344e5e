"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Clock, Feather, Heart, Mail, Shield, Sparkles, Star, ThumbsUp, Truck, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="large"
        background="fluid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Sweet Artisan"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Sweet Artisan Bakery"
      description="Handcrafted breads, pastries, and desserts made fresh daily with premium ingredients. Experience the warmth and quality of authentic artisan baking."
      buttons={[
        {
          text: "Order Now",
          href: "#products",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      slides={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=tgxxem",
          imageAlt: "Fresh artisan bread display",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=b373rw",
          imageAlt: "Colorful pastry assortment",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=q9p1t0",
          imageAlt: "Glazed donuts and treats",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6hb9vr",
          imageAlt: "Cinnamon rolls fresh baked",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=92d0ip",
          imageAlt: "Elegant berry tarts",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4i567r",
          imageAlt: "Rustic bread basket",
        },
      ]}
      autoplayDelay={4000}
      showDimOverlay={false}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "Daily Fresh",
          name: "Butter Croissants",
          price: "$3.99",
          rating: 5,
          reviewCount: "284",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=7oi4wo",
          imageAlt: "Butter Croissants",
        },
        {
          id: "2",
          brand: "Artisan Line",
          name: "Sourdough Loaf",
          price: "$5.99",
          rating: 5,
          reviewCount: "156",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=nodpbm",
          imageAlt: "Sourdough Loaf",
        },
        {
          id: "3",
          brand: "Premium Collection",
          name: "Custom Celebration Cake",
          price: "$34.99",
          rating: 5,
          reviewCount: "89",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=0kx61m",
          imageAlt: "Custom Celebration Cake",
        },
      ]}
      title="Our Signature Collections"
      description="Explore our range of carefully crafted bakery items, from classic French pastries to modern artisan breads."
      tag="Bestsellers"
      tagIcon={Sparkles}
      buttons={[
        {
          text: "View All Products",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Crafted with Passion Since 1995"
      description="For nearly three decades, Sweet Artisan Bakery has been dedicated to perfecting the art of traditional baking. We source only the finest ingredients, use time-honored techniques, and bake everything fresh daily. Our mission is to bring the authentic taste of European baking to your table."
      tag="Our Story"
      tagIcon={Heart}
      buttons={[
        {
          text: "Visit Us Today",
          href: "#contact",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=z8ff41"
      imageAlt="Our bakery kitchen"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Feather,
          title: "Premium Ingredients",
          description: "We use organic, locally-sourced ingredients whenever possible. No artificial preservatives or additives—just pure, natural goodness.",
        },
        {
          icon: Clock,
          title: "Baked Fresh Daily",
          description: "Every item is baked fresh each morning. Our ovens start before dawn to ensure you get the warmest, freshest products.",
        },
        {
          icon: Users,
          title: "Family Tradition",
          description: "Recipes passed down through generations. We honor time-tested methods while embracing modern innovation.",
        },
        {
          icon: Truck,
          title: "Fast Local Delivery",
          description: "Same-day delivery available for orders placed before 2 PM. Supporting your neighborhood, one basket at a time.",
        },
        {
          icon: Shield,
          title: "100% Satisfaction",
          description: "Not completely satisfied? We'll remake your order or provide a full refund. Your happiness is our guarantee.",
        },
        {
          icon: Star,
          title: "Award-Winning Quality",
          description: "Recognized by regional baking associations for excellence. Our commitment to quality speaks for itself.",
        },
      ]}
      title="Why Choose Sweet Artisan"
      description="Experience the difference quality and craftsmanship make in every bite."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          imageSrc: "asset://testimonial-1",
        },
        {
          id: "2",
          name: "Michael Chen",
          imageSrc: "asset://testimonial-2",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          imageSrc: "asset://testimonial-3",
        },
        {
          id: "4",
          name: "David Kim",
          imageSrc: "asset://testimonial-4",
        },
      ]}
      cardTitle="Loved by Our Community"
      cardTag="Customer Reviews"
      cardTagIcon={ThumbsUp}
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get In Touch"
      title="Ready to Order?"
      description="Subscribe to our newsletter for exclusive recipes, special offers, and early access to new seasonal items."
      tagIcon={Mail}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=uboq6i"
      imageAlt="Our welcoming bakery"
      mediaAnimation="slide-up"
      mediaPosition="right"
      inputPlaceholder="Enter your email"
      buttonText="Subscribe"
      termsText="By subscribing, you agree to receive updates and special offers from Sweet Artisan Bakery."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Sweet Artisan"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Contact Us",
        href: "#contact",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
