
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Droplet, AlertTriangle } from "lucide-react";

const inventoryData = [
  { type: "A+", stock: 78, critical: false },
  { type: "A-", stock: 45, critical: false },
  { type: "B+", stock: 62, critical: false },
  { type: "B-", stock: 28, critical: true },
  { type: "AB+", stock: 35, critical: false },
  { type: "AB-", stock: 15, critical: true },
  { type: "O+", stock: 85, critical: false },
  { type: "O-", stock: 22, critical: true }
];

export function BloodInventory() {
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
          {inventoryData.map((item) => (
            <Card 
              key={item.type} 
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
                    <CardTitle>{item.type}</CardTitle>
                  </div>
                  {item.critical && (
                    <div className="bg-red-100 dark:bg-red-900/30 p-1 rounded-full">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                    </div>
                  )}
                </div>
                <CardDescription>
                  {item.stock} units available
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Progress 
                    value={item.stock} 
                    className={`${
                      item.critical 
                        ? "bg-red-100 dark:bg-red-900/30" 
                        : "bg-lifepulse-pink/50 dark:bg-gray-700"
                    }`}
                    indicatorClassName={`${
                      item.critical 
                        ? "bg-red-500" 
                        : "bg-lifepulse-red"
                    }`}
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
