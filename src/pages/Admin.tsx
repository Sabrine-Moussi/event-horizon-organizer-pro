
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Settings, Users, Calendar, MessageSquare, Image, FileText, Star } from "lucide-react";
import DashboardStats from "@/components/admin/DashboardStats";
import EventManagement from "@/components/admin/EventManagement";
import GalleryManagement from "@/components/admin/GalleryManagement";
import SettingsManagement from "@/components/admin/SettingsManagement";

const AdminSidebar = () => {
  return (
    <div className="w-64 h-screen bg-sidebar-background border-r border-gray-200 fixed left-0 top-0 p-4">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-xl font-bold text-event-blue">Event<span className="text-event-pink">Pro</span></span>
        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Admin</span>
      </div>
      
      <nav className="space-y-1">
        <a href="#dashboard" className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-100 rounded">
          <Settings className="h-5 w-5" />
          <span>Tableau de bord</span>
        </a>
        <a href="#events" className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-100 rounded">
          <Calendar className="h-5 w-5" />
          <span>Événements</span>
        </a>
        <a href="#users" className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-100 rounded">
          <Users className="h-5 w-5" />
          <span>Utilisateurs</span>
        </a>
        <a href="#testimonials" className="flex items-center gap-3 p-2 bg-gray-100 text-event-blue rounded">
          <MessageSquare className="h-5 w-5" />
          <span>Témoignages</span>
        </a>
        <a href="#gallery" className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-100 rounded">
          <Image className="h-5 w-5" />
          <span>Galerie</span>
        </a>
        <a href="#content" className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-100 rounded">
          <FileText className="h-5 w-5" />
          <span>Contenu</span>
        </a>
      </nav>
    </div>
  );
};

const Admin = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      author: "Sophie & Thomas",
      role: "Mariage à Paris",
      quote: "EventPro a transformé notre mariage en un événement magique. Chaque détail était parfait, et nos invités en parlent encore !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
    },
    {
      id: 2,
      author: "Marc Dupont",
      role: "Directeur Marketing, TechCorp",
      quote: "L'organisation de notre conférence annuelle n'a jamais été aussi fluide. L'équipe d'EventPro est professionnelle et extrêmement compétente.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      id: 3,
      author: "Claire Martin",
      role: "Anniversaire VIP",
      quote: "Je remercie toute l'équipe pour avoir rendu mon 40e anniversaire si spécial. Tout était exactement comme je l'avais imaginé.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    }
  ]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Administration</h1>
          <p className="text-gray-600">Gérez votre site et son contenu</p>
        </div>
        
        <Tabs defaultValue="dashboard">
          <TabsList className="mb-6">
            <TabsTrigger value="dashboard">Tableau de bord</TabsTrigger>
            <TabsTrigger value="events">Événements</TabsTrigger>
            <TabsTrigger value="testimonials">Témoignages</TabsTrigger>
            <TabsTrigger value="gallery">Galerie</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard">
            <DashboardStats />
          </TabsContent>
          
          <TabsContent value="events">
            <EventManagement />
          </TabsContent>
          
          <TabsContent value="testimonials">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Ajouter un témoignage</CardTitle>
                <CardDescription>Ajoutez un nouveau témoignage client à afficher sur le site</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Nom</label>
                      <Input placeholder="Nom du client" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Rôle / Événement</label>
                      <Input placeholder="Ex: Mariage à Paris" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Témoignage</label>
                    <Textarea placeholder="Témoignage du client" rows={4} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Note (1-5)</label>
                      <Input type="number" min="1" max="5" placeholder="5" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Image</label>
                      <Input type="file" />
                    </div>
                  </div>
                  <Button className="event-btn event-btn-primary">Ajouter le témoignage</Button>
                </form>
              </CardContent>
            </Card>
            
            <h3 className="text-xl font-semibold mb-4">Témoignages existants</h3>
            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <img src={`${testimonial.image}?w=48&h=48`} alt={testimonial.author} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{testimonial.author}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                          <div className="flex gap-1 my-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${star <= testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <p className="text-sm mt-1">{`"${testimonial.quote.substring(0, 100)}${testimonial.quote.length > 100 ? '...' : ''}"`}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 md:self-start">
                        <Button variant="outline" size="sm">Modifier</Button>
                        <Button variant="destructive" size="sm">Supprimer</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="gallery">
            <GalleryManagement />
          </TabsContent>
          
          <TabsContent value="settings">
            <SettingsManagement />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
