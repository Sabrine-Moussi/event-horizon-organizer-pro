
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Edit, Trash, Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// Type pour les événements
interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  status: "À venir" | "Terminé" | "Annulé";
  type: string;
  capacity: number;
}

const EventManagement: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Mariage de Julie et Thomas",
      date: "2025-08-15",
      location: "Château de Versailles",
      description: "Mariage élégant pour 150 invités avec dîner gastronomique et animations musicales.",
      status: "À venir",
      type: "Mariage",
      capacity: 150,
    },
    {
      id: 2,
      title: "Conférence Tech Innovations",
      date: "2025-06-23",
      location: "Palais des Congrès",
      description: "Conférence annuelle sur les innovations technologiques avec 10 intervenants experts.",
      status: "À venir",
      type: "Entreprise",
      capacity: 300,
    },
    {
      id: 3,
      title: "Gala de Charité - Fondation Espoir",
      date: "2025-04-05",
      location: "Hôtel Ritz",
      description: "Soirée de gala avec vente aux enchères et dîner 5 services.",
      status: "Terminé",
      type: "Gala",
      capacity: 200,
    },
  ]);
  
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState<Omit<Event, 'id'>>({
    title: "",
    date: "",
    location: "",
    description: "",
    status: "À venir",
    type: "",
    capacity: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "capacity" ? parseInt(value) : value,
    });
  };

  const handleAddEvent = () => {
    const newEvent = {
      id: events.length ? Math.max(...events.map(event => event.id)) + 1 : 1,
      ...formData,
    };
    
    setEvents([...events, newEvent]);
    setFormData({
      title: "",
      date: "",
      location: "",
      description: "",
      status: "À venir",
      type: "",
      capacity: 0,
    });
    setIsAdding(false);
  };

  const handleEditEvent = () => {
    if (!selectedEvent) return;
    
    const updatedEvents = events.map(event => 
      event.id === selectedEvent.id ? {...event, ...formData} : event
    );
    
    setEvents(updatedEvents);
    setIsEditing(false);
    setSelectedEvent(null);
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const openEditForm = (event: Event) => {
    setSelectedEvent(event);
    setFormData({
      title: event.title,
      date: event.date,
      location: event.location,
      description: event.description,
      status: event.status,
      type: event.type,
      capacity: event.capacity,
    });
    setIsEditing(true);
  };

  return (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Ajouter un nouvel événement</CardTitle>
          <CardDescription>
            Remplissez le formulaire pour créer un nouvel événement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setIsAdding(true)} className="mb-4">
            Créer un nouvel événement
          </Button>

          <div className="mt-6">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Titre</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Lieu</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell className="font-medium">{event.title}</TableCell>
                      <TableCell>{new Date(event.date).toLocaleDateString('fr-FR')}</TableCell>
                      <TableCell>{event.location}</TableCell>
                      <TableCell>{event.type}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs ${
                          event.status === "À venir" 
                            ? "bg-blue-100 text-blue-800" 
                            : event.status === "Terminé" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-red-100 text-red-800"
                        }`}>
                          {event.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => openEditForm(event)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="destructive" size="sm" onClick={() => handleDeleteEvent(event.id)}>
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sheet for adding a new event */}
      <Sheet open={isAdding} onOpenChange={setIsAdding}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Ajouter un événement</SheetTitle>
            <SheetDescription>
              Remplissez ce formulaire pour ajouter un nouvel événement.
            </SheetDescription>
          </SheetHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">Titre de l'événement</label>
              <Input 
                id="title" 
                name="title" 
                value={formData.title} 
                onChange={handleInputChange} 
                placeholder="Nom de l'événement"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">Date</label>
                <Input 
                  id="date" 
                  name="date" 
                  type="date" 
                  value={formData.date} 
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="capacity" className="text-sm font-medium">Capacité</label>
                <Input 
                  id="capacity" 
                  name="capacity" 
                  type="number" 
                  value={formData.capacity.toString()} 
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-medium">Lieu</label>
              <Input 
                id="location" 
                name="location" 
                value={formData.location} 
                onChange={handleInputChange} 
                placeholder="Lieu de l'événement"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium">Type d'événement</label>
                <Input 
                  id="type" 
                  name="type" 
                  value={formData.type} 
                  onChange={handleInputChange} 
                  placeholder="Ex: Mariage, Conférence..."
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="status" className="text-sm font-medium">Statut</label>
                <select 
                  id="status" 
                  name="status" 
                  className="w-full border border-gray-300 rounded-md h-9 px-3"
                  value={formData.status} 
                  onChange={handleInputChange}
                >
                  <option value="À venir">À venir</option>
                  <option value="Terminé">Terminé</option>
                  <option value="Annulé">Annulé</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">Description</label>
              <Textarea 
                id="description" 
                name="description" 
                value={formData.description} 
                onChange={handleInputChange} 
                placeholder="Description de l'événement"
                rows={4}
              />
            </div>
            <Button className="w-full" onClick={handleAddEvent}>
              Ajouter l'événement
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Sheet for editing an event */}
      <Sheet open={isEditing} onOpenChange={setIsEditing}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Modifier l'événement</SheetTitle>
            <SheetDescription>
              Modifiez les détails de l'événement.
            </SheetDescription>
          </SheetHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="edit-title" className="text-sm font-medium">Titre de l'événement</label>
              <Input 
                id="edit-title" 
                name="title" 
                value={formData.title} 
                onChange={handleInputChange} 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="edit-date" className="text-sm font-medium">Date</label>
                <Input 
                  id="edit-date" 
                  name="date" 
                  type="date" 
                  value={formData.date} 
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="edit-capacity" className="text-sm font-medium">Capacité</label>
                <Input 
                  id="edit-capacity" 
                  name="capacity" 
                  type="number" 
                  value={formData.capacity.toString()} 
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-location" className="text-sm font-medium">Lieu</label>
              <Input 
                id="edit-location" 
                name="location" 
                value={formData.location} 
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="edit-type" className="text-sm font-medium">Type d'événement</label>
                <Input 
                  id="edit-type" 
                  name="type" 
                  value={formData.type} 
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="edit-status" className="text-sm font-medium">Statut</label>
                <select 
                  id="edit-status" 
                  name="status" 
                  className="w-full border border-gray-300 rounded-md h-9 px-3"
                  value={formData.status} 
                  onChange={handleInputChange}
                >
                  <option value="À venir">À venir</option>
                  <option value="Terminé">Terminé</option>
                  <option value="Annulé">Annulé</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-description" className="text-sm font-medium">Description</label>
              <Textarea 
                id="edit-description" 
                name="description" 
                value={formData.description} 
                onChange={handleInputChange}
                rows={4}
              />
            </div>
            <Button className="w-full" onClick={handleEditEvent}>
              Enregistrer les modifications
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default EventManagement;
