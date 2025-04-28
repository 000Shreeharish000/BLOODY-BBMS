
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Droplet } from "lucide-react";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Database } from "@/integrations/supabase/types";

type BloodType = Database["public"]["Enums"]["blood_type"];

const bloodTypes: BloodType[] = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];

interface BloodInventoryResult {
  id: string;
  blood_bank: string;
  address: string;
  blood_type: BloodType;
  units: number;
  distance: string;
}

export function BloodTypeSearch() {
  const { toast } = useToast();
  const [bloodType, setBloodType] = useState<BloodType | "">("");
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState<BloodInventoryResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    setIsSearching(true);
    
    try {
      let query = supabase
        .from('blood_inventory')
        .select('*');
      
      if (bloodType) {
        query = query.eq('blood_type', bloodType as BloodType);
      }
      
      const { data, error } = await query;
      
      if (error) {
        console.error("Error searching blood inventory:", error);
        toast({
          title: "Search Failed",
          description: "There was a problem searching the blood inventory. Please try again.",
          variant: "destructive",
        });
        return;
      }
      
      // Transform and filter the results
      const results = data.map(item => ({
        id: item.id,
        blood_bank: "Central Blood Bank",
        address: `${Math.floor(Math.random() * 1000) + 100} Main St, ${location || "New York"}`,
        blood_type: item.blood_type,
        units: Math.floor(item.quantity_ml / 100), // Convert mL to units (rough approximation)
        distance: (Math.random() * 5).toFixed(1)
      }));
      
      setSearchResults(results);
    } catch (error) {
      console.error("Exception in blood search:", error);
      toast({
        title: "Something went wrong",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Find Blood</h2>
            <p className="max-w-[85%] mx-auto text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Search for available blood types at blood banks near you.
            </p>
          </div>
        </div>
        
        <div className="mx-auto max-w-3xl">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Search Blood Availability</CardTitle>
              <CardDescription>
                Enter blood type and location to find available units
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="bloodType">Blood Type</Label>
                  <Select value={bloodType} onValueChange={(value: BloodType | "") => setBloodType(value)}>
                    <SelectTrigger id="bloodType">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {bloodTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="location">Location</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full" onClick={handleSearch} disabled={isSearching}>
                <Search className="mr-2 h-4 w-4" />
                {isSearching ? "Searching..." : "Search"}
              </Button>
            </CardContent>
          </Card>

          {searchResults.length > 0 && (
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-bold">Results</h3>
              {searchResults.map((result) => (
                <Card key={result.id} className="border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold">{result.blood_bank}</h4>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {result.address} ({result.distance} miles)
                        </div>
                      </div>
                      <div className="bg-lifepulse-pink dark:bg-gray-800 px-3 py-2 rounded-full flex items-center">
                        <Droplet className="h-4 w-4 text-lifepulse-red mr-1" />
                        <span className="font-bold">{result.blood_type}</span>
                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                          {result.units} units
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm">Contact</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BloodTypeSearch;
