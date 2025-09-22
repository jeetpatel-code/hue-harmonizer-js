import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Settings, Hammer, Zap, Container, Package, CheckCircle } from "lucide-react";
import precisionImage from "@/assets/precision-machining.jpg";
import fabricationImage from "@/assets/steel-fabrication.jpg";
import weldmentsImage from "@/assets/custom-weldments.jpg";
import storageImage from "@/assets/storage-tanks.jpg";
import assembliesImage from "@/assets/heavy-assemblies.jpg";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Precision Machined Components",
      description: "From precision small components to large shafts and housings, we provide comprehensive machining services.",
      image: precisionImage,
      features: [
        "CNC lathe jobs up to Ø600 mm × 4000 mm length",
        "Vertical turning (VTL) up to 4500 × 5000 mm",
        "Floor-type boring machines up to 3 m travel",
        "Conventional lathe machining (bed length up to 30 ft)",
        "Radial drilling up to Ø70 mm",
        "Full QA with verniers, micrometers, and bore gauges"
      ]
    },
    {
      icon: Hammer,
      title: "Steel Fabrication & Welding",
      description: "We build reliable, cost-effective fabricated structures and assemblies that include structural steel work.",
      image: fabricationImage,
      features: [
        "Structural steel platforms, skids, and mezzanines",
        "Welded frames, guards, hoppers, and ducts",
        "Custom assemblies per drawing with packaging and kitting",
        "Heavy-duty weldments with machining integration"
      ]
    },
    {
      icon: Zap,
      title: "Custom Weldments & Assemblies",
      description: "Custom steel fabrication including structural frames, platforms, and heavy-duty assemblies built to your exact specifications.",
      image: weldmentsImage,
      features: [
        "Structural steel fabrication",
        "Custom weldments",
        "Heavy-duty assemblies",
        "Code compliance (AWS, CWB)"
      ]
    },
    {
      icon: Container,
      title: "Storage Tanks (Non-Pressure)",
      description: "Cost-effective tanks engineered to Canadian expectations.",
      image: storageImage,
      features: [
        "Water, fertilizer, and chemical tanks (1–100 m³)",
        "Options for manways, ladders, coatings, and internals",
        "QA and dimensional checks are included with each batch"
      ]
    },
    {
      icon: Package,
      title: "Heavy-Duty Assemblies",
      description: "Ready to install Industrial-scale assemblies.",
      image: assembliesImage,
      features: [
        "Large machine bases and housings",
        "Combined fabrication + machining assemblies",
        "Shipped with full inspection reports and dimensional QA"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Quote & Planning",
      description: "Submit your requirements for a detailed quote and project timeline assessment."
    },
    {
      step: "02", 
      title: "Design & Engineering",
      description: "Our engineering team reviews specifications and provides technical recommendations."
    },
    {
      step: "03",
      title: "Manufacturing & QA",
      description: "Production begins with continuous quality monitoring and progress reporting."
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Complete logistics management and post-delivery support for your project."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            At MapleFab Solutions, we deliver a complete range of fabricated and machined products designed to meet the needs of Ontario’s industrial,
            agricultural and manufacturing sectors. Every product is backed by Canadian-level quality assurance, documentation, and local warranty.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-success" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-lg shadow-hero w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach that ensures quality results and transparent communication 
              throughout your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center shadow-card relative">
                <CardHeader>
                  <div className="text-4xl font-bold text-accent mb-2">{step.step}</div>
                  <CardTitle className="text-xl font-bold text-primary">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a detailed quote and discover how we can help reduce your 
            fabrication costs while maintaining exceptional quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request Your Quote
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/global-network">
                View Our Capabilities
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;