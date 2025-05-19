
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash, Eye, Plus } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const GalleryManagement: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      alt: "Mariage élégant",
      category: "Mariage"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      alt: "Soirée d'entreprise",
      category: "Entreprise"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      alt: "Concert événementiel",
      category: "Concert"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      alt: "Décoration de mariage",
      category: "Mariage"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      alt: "Événement en plein air",
      category: "Plein air"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      alt: "Fête d'anniversaire",
      category: "Anniversaire"
    },
  ]);

  const [newImage, setNewImage] = useState({
    src: "",
    alt: "",
    category: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewImage({
      ...newImage,
      [name]: value
    });
  };

  const handleAddImage = () => {
    if (newImage.src && newImage.alt) {
      const newId = images.length ? Math.max(...images.map(img => img.id)) + 1 : 1;
      setImages([...images, { id: newId, ...newImage }]);
      setNewImage({ src: "", alt: "", category: "" });
    }
  };

  const handleDeleteImage = (id: number) => {
    setImages(images.filter(image => image.id !== id));
  };

  const categories = Array.from(new Set(images.map(img => img.category)));

  return (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Ajouter une nouvelle image</CardTitle>
          <CardDescription>Ajoutez des images à votre galerie</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="src" className="block text-sm font-medium mb-1">URL de l'image</label>
              <Input
                id="src"
                name="src"
                value={newImage.src}
                onChange={handleInputChange}
                placeholder="https://exemple.com/image.jpg"
              />
            </div>
            <div>
              <label htmlFor="alt" className="block text-sm font-medium mb-1">Description</label>
              <Input
                id="alt"
                name="alt"
                value={newImage.alt}
                onChange={handleInputChange}
                placeholder="Description de l'image"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium mb-1">Catégorie</label>
              <Input
                id="category"
                name="category"
                value={newImage.category}
                onChange={handleInputChange}
                placeholder="Ex: Mariage, Entreprise..."
              />
            </div>
          </div>

          <Button onClick={handleAddImage} className="mb-8">
            <Plus className="mr-2 h-4 w-4" />
            Ajouter l'image
          </Button>

          <div>
            <h3 className="text-lg font-medium mb-4">Filtrer par catégorie</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <Button variant="outline" className="mb-2">Toutes</Button>
              {categories.map(category => (
                <Button key={category} variant="outline" className="mb-2">{category}</Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map(image => (
              <div key={image.id} className="relative group rounded-lg overflow-hidden border border-gray-200">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm truncate">{image.alt}</p>
                      <p className="text-xs text-gray-500">{image.category}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => handleDeleteImage(image.id)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GalleryManagement;
