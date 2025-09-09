import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface HoneyProduct {
  id: string;
  name: string;
  region: string;
  flowers: string[];
  description: string;
  price: string;
  image: string;
  benefits: string[];
}

interface HoneyCardProps {
  product: HoneyProduct;
}

export const HoneyCard = ({ product }: HoneyCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card
          className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-2"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#D4AF37" }}
        >
          <CardHeader className="pb-2">
            <div
              className="w-full h-48 rounded-lg mb-4 flex items-center justify-center"
              style={{ backgroundColor: "#FFF8E1" }}
            >
              <div className="text-6xl">{product.image}</div>
            </div>
            <CardTitle
              className="text-lg font-semibold"
              style={{ color: "#5D4037" }}
            >
              {product.name}
            </CardTitle>
            <Badge
              variant="secondary"
              className="w-fit"
              style={{ backgroundColor: "#D4AF37", color: "#5D4037" }}
            >
              {product.region}
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2" style={{ color: "#8D6E63" }}>
              {product.description}
            </p>
            <p className="text-lg font-bold" style={{ color: "#D4AF37" }}>
              {product.price}
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-md mx-auto bg-card">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="text-center">
            <div className="text-6xl mb-4">{product.image}</div>
            <Badge variant="secondary" className="text-sm">
              {product.region} Yöresi
            </Badge>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Çiçek Kaynakları:
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.flowers.map((flower, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {flower}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Özellikler:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">🍯</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center pt-4 border-t border-border">
            <p className="text-lg font-bold text-primary">{product.price}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Doğal ve katkısız
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
