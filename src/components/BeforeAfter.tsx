import { useState } from "react";
import { Card } from "@/components/ui/card";

/**
 * SEO-Optimized Before & After Slider
 * Business: KJS SUPREME PRESSURE WASHING LLC
 * Target Keywords: pressure washing services, supreme pressure washing services
 */

const BeforeAfter = ({ beforeImage, afterImage, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let clientX;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <Card className="overflow-hidden">
      <div
        className="relative aspect-[4/3] cursor-col-resize select-none"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        aria-label={`Before and after comparison for ${title}`}
      >
        {/* After Image */}
        <img
          src={afterImage}
          alt={`${title} after professional pressure washing services`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={`${title} before pressure washing services`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: "none" }}
          />
        </div>

        {/* Slider */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-primary shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-primary-foreground rounded-full" />
              <div className="w-0.5 h-4 bg-primary-foreground rounded-full" />
            </div>
          </div>
        </div>

        <span className="absolute top-4 left-4 bg-foreground/80 text-primary-foreground text-sm px-3 py-1 rounded-full">
          Before
        </span>
        <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
          After
        </span>
      </div>

      <div className="p-4 text-center">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">Drag to compare results</p>
      </div>
    </Card>
  );
};

const BeforeAfterPressureWashing = () => {
  return (
    <section
      className="py-16 lg:py-24 bg-background"
      aria-labelledby="pressure-washing-results"
    >
      <div className="container mx-auto px-4">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h2
            id="pressure-washing-results"
            className="text-3xl lg:text-4xl font-heading font-bold"
          >
            Real Pressure Washing Results You Can See
          </h2>
          <p className="text-muted-foreground mt-4">
            KJS SUPREME PRESSURE WASHING LLC delivers professional pressure
            washing services across Central Florida. Explore real before and
            after transformations from our supreme pressure washing services.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BeforeAfter
            title="Driveway Pressure Washing in Deltona, FL"
            beforeImage="/images/before-after/driveway-before.jpg"
            afterImage="/images/before-after/driveway-after.jpg"
          />

          <BeforeAfter
            title="House Soft Washing Service"
            beforeImage="/images/before-after/house-before.jpg"
            afterImage="/images/before-after/house-after.jpg"
          />

          <BeforeAfter
            title="Roof Soft Wash Cleaning"
            beforeImage="/images/before-after/roof-before.jpg"
            afterImage="/images/before-after/roof-after.jpg"
          />

          <BeforeAfter
            title="Concrete Sidewalk Pressure Cleaning"
            beforeImage="/images/before-after/sidewalk-before.jpg"
            afterImage="/images/before-after/sidewalk-after.jpg"
          />

          <BeforeAfter
            title="Commercial Building Pressure Washing"
            beforeImage="/images/before-after/commercial-before.jpg"
            afterImage="/images/before-after/commercial-after.jpg"
          />

          <BeforeAfter
            title="Pool Deck & Paver Cleaning"
            beforeImage="/images/before-after/pooldeck-before.jpg"
            afterImage="/images/before-after/pooldeck-after.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterPressureWashing;