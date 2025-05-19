
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SettingsManagement: React.FC = () => {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "EventPro",
    tagline: "Organisation d'événements professionnels",
    contactEmail: "contact@eventpro.fr",
    contactPhone: "+33 1 23 45 67 89",
    address: "123 Avenue des Champs-Élysées, 75008 Paris",
  });

  const [seoSettings, setSeoSettings] = useState({
    metaTitle: "EventPro | Organisation d'événements professionnels",
    metaDescription: "EventPro vous aide à organiser des événements mémorables - mariages, galas, conférences d'entreprise et plus encore.",
    keywords: "événements, organisation, mariage, gala, conférence, entreprise",
  });

  const [socialSettings, setSocialSettings] = useState({
    facebook: "https://facebook.com/eventpro",
    instagram: "https://instagram.com/eventpro",
    twitter: "https://twitter.com/eventpro",
    linkedin: "https://linkedin.com/company/eventpro",
  });

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setGeneralSettings({
      ...generalSettings,
      [name]: value,
    });
  };

  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSeoSettings({
      ...seoSettings,
      [name]: value,
    });
  };

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSocialSettings({
      ...socialSettings,
      [name]: value,
    });
  };

  return (
    <div>
      <Tabs defaultValue="general">
        <TabsList className="mb-6 w-full grid grid-cols-3">
          <TabsTrigger value="general">Paramètres généraux</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="social">Réseaux sociaux</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres généraux</CardTitle>
              <CardDescription>Configurez les informations de base de votre site</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="siteName" className="block text-sm font-medium mb-1">Nom du site</label>
                  <Input 
                    id="siteName" 
                    name="siteName" 
                    value={generalSettings.siteName} 
                    onChange={handleGeneralChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="tagline" className="block text-sm font-medium mb-1">Slogan</label>
                  <Input 
                    id="tagline" 
                    name="tagline" 
                    value={generalSettings.tagline} 
                    onChange={handleGeneralChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium mb-1">Email de contact</label>
                  <Input 
                    id="contactEmail" 
                    name="contactEmail" 
                    type="email"
                    value={generalSettings.contactEmail} 
                    onChange={handleGeneralChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium mb-1">Téléphone</label>
                  <Input 
                    id="contactPhone" 
                    name="contactPhone" 
                    value={generalSettings.contactPhone} 
                    onChange={handleGeneralChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-1">Adresse</label>
                  <Textarea 
                    id="address" 
                    name="address" 
                    value={generalSettings.address} 
                    onChange={handleGeneralChange}
                    rows={3}
                  />
                </div>
                
                <Button className="w-full">Enregistrer les paramètres</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres SEO</CardTitle>
              <CardDescription>Optimisez votre présence sur les moteurs de recherche</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="metaTitle" className="block text-sm font-medium mb-1">Meta Titre</label>
                  <Input 
                    id="metaTitle" 
                    name="metaTitle" 
                    value={seoSettings.metaTitle} 
                    onChange={handleSeoChange}
                  />
                  <p className="text-xs text-gray-500 mt-1">Recommandé: 50-60 caractères</p>
                </div>
                
                <div>
                  <label htmlFor="metaDescription" className="block text-sm font-medium mb-1">Meta Description</label>
                  <Textarea 
                    id="metaDescription" 
                    name="metaDescription" 
                    value={seoSettings.metaDescription} 
                    onChange={handleSeoChange}
                    rows={3}
                  />
                  <p className="text-xs text-gray-500 mt-1">Recommandé: 150-160 caractères</p>
                </div>
                
                <div>
                  <label htmlFor="keywords" className="block text-sm font-medium mb-1">Mots-clés</label>
                  <Input 
                    id="keywords" 
                    name="keywords" 
                    value={seoSettings.keywords} 
                    onChange={handleSeoChange}
                  />
                  <p className="text-xs text-gray-500 mt-1">Séparez les mots-clés par des virgules</p>
                </div>
                
                <Button className="w-full">Enregistrer les paramètres SEO</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Réseaux sociaux</CardTitle>
              <CardDescription>Connectez votre site à vos profils de réseaux sociaux</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="facebook" className="block text-sm font-medium mb-1">Facebook</label>
                  <Input 
                    id="facebook" 
                    name="facebook" 
                    value={socialSettings.facebook} 
                    onChange={handleSocialChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="instagram" className="block text-sm font-medium mb-1">Instagram</label>
                  <Input 
                    id="instagram" 
                    name="instagram" 
                    value={socialSettings.instagram} 
                    onChange={handleSocialChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="twitter" className="block text-sm font-medium mb-1">Twitter</label>
                  <Input 
                    id="twitter" 
                    name="twitter" 
                    value={socialSettings.twitter} 
                    onChange={handleSocialChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium mb-1">LinkedIn</label>
                  <Input 
                    id="linkedin" 
                    name="linkedin" 
                    value={socialSettings.linkedin} 
                    onChange={handleSocialChange}
                  />
                </div>
                
                <Button className="w-full">Enregistrer les réseaux sociaux</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsManagement;
