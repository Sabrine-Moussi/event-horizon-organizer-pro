
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ChartBar, ChartLine, Settings, Users } from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

const eventsByMonthData = [
  { name: "Jan", completed: 3, upcoming: 1 },
  { name: "Fév", completed: 5, upcoming: 2 },
  { name: "Mar", completed: 2, upcoming: 4 },
  { name: "Avr", completed: 6, upcoming: 3 },
  { name: "Mai", completed: 4, upcoming: 7 },
  { name: "Jun", completed: 7, upcoming: 5 },
  { name: "Jul", completed: 8, upcoming: 3 },
  { name: "Aoû", completed: 5, upcoming: 5 },
  { name: "Sep", completed: 3, upcoming: 6 },
  { name: "Oct", completed: 4, upcoming: 4 },
  { name: "Nov", completed: 7, upcoming: 2 },
  { name: "Déc", completed: 9, upcoming: 4 },
];

const revenueData = [
  { name: "Jan", montant: 45000 },
  { name: "Fév", montant: 52000 },
  { name: "Mar", montant: 38000 },
  { name: "Avr", montant: 61000 },
  { name: "Mai", montant: 55000 },
  { name: "Jun", montant: 68000 },
];

const eventsByTypeData = [
  { name: "Mariage", valeur: 35 },
  { name: "Entreprise", valeur: 25 },
  { name: "Anniversaire", valeur: 15 },
  { name: "Gala", valeur: 12 },
  { name: "Autre", valeur: 13 },
];

const DashboardStats: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Événements à venir</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 depuis le mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Événements terminés</CardTitle>
            <ChartBar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+8 depuis le mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Clients actifs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+4 nouveaux clients</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Chiffre d'affaires</CardTitle>
            <ChartLine className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">319 000€</div>
            <p className="text-xs text-muted-foreground">+14% par rapport à l'an dernier</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Événements mensuels</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px]">
              <ChartContainer 
                config={{ completed: { label: "Terminés", color: "#8B5CF6" }, upcoming: { label: "À venir", color: "#60A5FA" } }}
              >
                <BarChart data={eventsByMonthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="completed" fill="var(--color-completed)" name="Terminés" />
                  <Bar dataKey="upcoming" fill="var(--color-upcoming)" name="À venir" />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Chiffre d'affaires</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px]">
              <ChartContainer 
                config={{ montant: { label: "Revenus", color: "#10B981" } }}
              >
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="montant" stroke="var(--color-montant)" name="Revenus" />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Répartition par type d'événements</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px]">
              <ChartContainer 
                config={{ 
                  valeur: { 
                    label: "Pourcentage", 
                    theme: { 
                      light: "#8B5CF6", 
                      dark: "#8B5CF6" 
                    } 
                  } 
                }}
              >
                <BarChart data={eventsByTypeData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="valeur" fill="var(--color-valeur)" name="Pourcentage" />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Tendances des demandes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer 
                config={{ 
                  demandes: { label: "Demandes", color: "#F59E0B" },
                  confirmations: { label: "Confirmations", color: "#10B981" }
                }}
              >
                <LineChart 
                  data={[
                    { mois: "Jan", demandes: 15, confirmations: 10 },
                    { mois: "Fév", demandes: 18, confirmations: 12 },
                    { mois: "Mar", demandes: 12, confirmations: 8 },
                    { mois: "Avr", demandes: 22, confirmations: 15 },
                    { mois: "Mai", demandes: 20, confirmations: 16 },
                    { mois: "Jun", demandes: 25, confirmations: 19 }
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mois" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="demandes" stroke="var(--color-demandes)" name="Demandes" />
                  <Line type="monotone" dataKey="confirmations" stroke="var(--color-confirmations)" name="Confirmations" />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardStats;
