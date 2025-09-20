import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-platinum mb-6">
            Maple Forge Hub
          </h1>
          <p className="text-xl md:text-2xl text-silver-lake-blue mb-8 max-w-2xl mx-auto">
            Crafting digital experiences with precision and artistry. 
            Your vision, forged into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-yinmn-blue hover:bg-silver-lake-blue text-platinum border-2 border-silver-lake-blue transition-all duration-300"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-platinum text-platinum hover:bg-platinum hover:text-rich-black transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-platinum">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-rich-black mb-16">
            Color Palette Showcase
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rich Black Card */}
            <Card className="bg-rich-black border-oxford-blue">
              <CardHeader>
                <CardTitle className="text-platinum">Rich Black</CardTitle>
                <CardDescription className="text-silver-lake-blue">
                  Deep, sophisticated foundation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-20 bg-rich-black rounded-lg border-2 border-oxford-blue mb-4"></div>
                <p className="text-silver-lake-blue text-sm">HSL: 211, 53%, 11%</p>
              </CardContent>
            </Card>

            {/* Oxford Blue Card */}
            <Card className="bg-oxford-blue border-yinmn-blue">
              <CardHeader>
                <CardTitle className="text-platinum">Oxford Blue</CardTitle>
                <CardDescription className="text-silver-lake-blue">
                  Professional depth and trust
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-20 bg-oxford-blue rounded-lg border-2 border-yinmn-blue mb-4"></div>
                <p className="text-silver-lake-blue text-sm">HSL: 219, 37%, 17%</p>
              </CardContent>
            </Card>

            {/* Yinmn Blue Card */}
            <Card className="bg-yinmn-blue border-silver-lake-blue">
              <CardHeader>
                <CardTitle className="text-platinum">Yinmn Blue</CardTitle>
                <CardDescription className="text-platinum">
                  Perfect balance and harmony
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-20 bg-yinmn-blue rounded-lg border-2 border-silver-lake-blue mb-4"></div>
                <p className="text-platinum text-sm">HSL: 212, 29%, 36%</p>
              </CardContent>
            </Card>

            {/* Silver Lake Blue Card */}
            <Card className="bg-silver-lake-blue border-platinum">
              <CardHeader>
                <CardTitle className="text-rich-black">Silver Lake Blue</CardTitle>
                <CardDescription className="text-oxford-blue">
                  Calming and accessible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-20 bg-silver-lake-blue rounded-lg border-2 border-platinum mb-4"></div>
                <p className="text-oxford-blue text-sm">HSL: 214, 23%, 56%</p>
              </CardContent>
            </Card>

            {/* Platinum Card */}
            <Card className="bg-platinum border-silver-lake-blue">
              <CardHeader>
                <CardTitle className="text-rich-black">Platinum</CardTitle>
                <CardDescription className="text-oxford-blue">
                  Clean and sophisticated light
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-20 bg-platinum rounded-lg border-2 border-silver-lake-blue mb-4"></div>
                <p className="text-oxford-blue text-sm">HSL: 75, 6%, 87%</p>
              </CardContent>
            </Card>

            {/* Gradient Card */}
            <Card className="bg-gradient-secondary border-yinmn-blue">
              <CardHeader>
                <CardTitle className="text-rich-black">Gradient Magic</CardTitle>
                <CardDescription className="text-oxford-blue">
                  Beautiful transitions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-20 bg-gradient-primary rounded-lg mb-4"></div>
                <p className="text-oxford-blue text-sm">Multiple gradient variations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-rich-black mb-6">
            Ready to Forge Something Amazing?
          </h2>
          <p className="text-xl text-oxford-blue mb-8">
            Your new color palette is ready to transform your project into something extraordinary.
          </p>
          <Button 
            size="lg"
            className="bg-yinmn-blue hover:bg-oxford-blue text-platinum transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Building
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;