
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Droplet, AlertTriangle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface InventoryItem {
  blood_type: string;
  quantity_ml: number;
  critical: boolean;
}

export function BloodInventory() {
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const { data, error } = await supabase
          .from('blood_inventory')
          .select('*');

        if (error) {
          console.error('Error fetching blood inventory:', error);
          return;
        }

        // Transform the data and determine critical status
        const transformedData = data.map(item => ({
          blood_type: item.blood_type,
          quantity_ml: item.quantity_ml,
          critical: item.quantity_ml < 500
        }));

        setInventoryData(transformedData);
      } catch (error) {
        console.error('Error in fetching inventory:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);

  // If data is loading, use the default static data
  const displayData = loading || inventoryData.length === 0 ? [
    { blood_type: "A+", quantity_ml: 78, critical: false },
    { blood_type: "A-", quantity_ml: 45, critical: false },
    { blood_type: "B+", quantity_ml: 62, critical: false },
    { blood_type: "B-", quantity_ml: 28, critical: true },
    { blood_type: "AB+", quantity_ml: 35, critical: false },
    { blood_type: "AB-", quantity_ml: 15, critical: true },
    { blood_type: "O+", quantity_ml: 85, critical: false },
    { blood_type: "O-", quantity_ml: 22, critical: true }
  ] : inventoryData;

  return (
    <section className="py-12 bg-lifepulse-softGray dark:bg-gray-800/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Blood Inventory</h2>
            <p className="max-w-[85%] mx-auto text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Current blood stock levels across all blood types
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayData.map((item) => (
            <Card 
              key={item.blood_type} 
              className={`${
                item.critical 
                  ? "border border-red-200 dark:border-red-900" 
                  : "border-none"
              } shadow-sm`}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Droplet 
                      className={`h-5 w-5 mr-2 ${
                        item.critical 
                          ? "text-red-500" 
                          : "text-lifepulse-red"
                      }`} 
                      fill={item.critical ? "#ef4444" : "#ea384c"} 
                    />
                    <CardTitle>{item.blood_type}</CardTitle>
                  </div>
                  {item.critical && (
                    <div className="bg-red-100 dark:bg-red-900/30 p-1 rounded-full">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                    </div>
                  )}
                </div>
                <CardDescription>
                  {item.quantity_ml} units available
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Progress 
                    value={item.quantity_ml} 
                    className={item.critical 
                      ? "bg-red-100 dark:bg-red-900/30" 
                      : "bg-lifepulse-pink/50 dark:bg-gray-700"
                    }
                  />
                  <div className="text-xs text-right text-muted-foreground">
                    {item.critical ? "Critical level" : "Adequate stock"}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BloodInventory;
