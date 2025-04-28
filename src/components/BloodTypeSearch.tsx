
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Droplet } from "lucide-react";
import { Label } from "@/components/ui/label";

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];

export function BloodTypeSearch() {
  const [bloodType, setBloodType] = useState("");
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Mock search function - in a real app, this would connect to a database
  const handleSearch = () => {
    // Simulate API call with mock data
    const mockResults = [
      {
        id: 1,
        bloodBank: "Central Blood Bank",
        address: "123 Main St, " + (location || "New York"),
        bloodType: bloodType || "A+",
        units: Math.floor(Math.random() * 20) + 1,
        distance: (Math.random() * 5).toFixed(1),
      },
      {
        id: 2,
        bloodBank: "City Medical Center",
        address: "456 Park Ave, " + (location || "New York"),
        bloodType: bloodType || "A+",
        units: Math.floor(Math.random() * 20) + 1,
        distance: (Math.random() * 5).toFixed(1),
      },
      {
        id: 3,
        bloodBank: "Community Hospital",
        address: "789 Broadway, " + (location || "New York"),
        bloodType: bloodType || "A+",
        units: Math.floor(Math.random() * 20) + 1,
        distance: (Math.random() * 5).toFixed(1),
      },
    ];
    
    setSearchResults(mockResults);
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
                  <Select value={bloodType} onValueChange={setBloodType}>
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
              <Button className="w-full" onClick={handleSearch}>
                <Search className="mr-2 h-4 w-4" />
                Search
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
                        <h4 className="font-bold">{result.bloodBank}</h4>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {result.address} ({result.distance} miles)
                        </div>
                      </div>
                      <div className="bg-lifepulse-pink dark:bg-gray-800 px-3 py-2 rounded-full flex items-center">
                        <Droplet className="h-4 w-4 text-lifepulse-red mr-1" />
                        <span className="font-bold">{result.bloodType}</span>
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
