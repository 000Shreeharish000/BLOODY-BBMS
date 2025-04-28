
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";

export function DonorForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    bloodType: "",
    dateOfBirth: undefined as Date | undefined,
    agreeToDonate: false,
    previousDonor: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.fullName) errors.fullName = "Full name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required";
    if (!formData.bloodType) errors.bloodType = "Blood type is required";
    if (!formData.dateOfBirth) errors.dateOfBirth = "Date of birth is required";
    if (!formData.agreeToDonate) errors.agreeToDonate = "You must agree to donate";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form Validation Failed",
        description: "Please check the form and fix any errors.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Format the date for PostgreSQL (YYYY-MM-DD)
      const formattedDate = formData.dateOfBirth ? format(formData.dateOfBirth, 'yyyy-MM-dd') : null;
      
      const { data, error } = await supabase
        .from('donors')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone_number: formData.phoneNumber,
            blood_type: formData.bloodType,
            date_of_birth: formattedDate,
            previous_donor: formData.previousDonor,
          }
        ]);
    
      if (error) {
        console.error("Error submitting donor form:", error);
        toast({
          title: "Registration Failed",
          description: error.message || "There was a problem with your registration. Please try again.",
          variant: "destructive",
        });
        return;
      }
      
      // Successful submission
      setIsSuccess(true);
      toast({
        title: "Registration successful!",
        description: "Thank you for registering as a blood donor! 🩸",
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          bloodType: "",
          dateOfBirth: undefined,
          agreeToDonate: false,
          previousDonor: false
        });
      }, 2000);
    } catch (error) {
      console.error("Exception in donor registration:", error);
      toast({
        title: "Something went wrong",
        description: "There was a problem with your registration. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ""
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 animate-pulse">
          <CheckCircle2 className="h-6 w-6 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Registration Successful!</h3>
        <p className="text-gray-500 dark:text-gray-400 text-center max-w-md mb-6">
          Thank you for registering as a blood donor. Your contribution can save lives!
        </p>
        <Button onClick={() => setIsSuccess(false)}>Register Another Donor</Button>
      </div>
    );
  }

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Become a Donor</h2>
            <p className="max-w-[85%] mx-auto text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Register to donate blood and help save lives in your community
            </p>
          </div>
        </div>
        
        <div className="mx-auto max-w-2xl">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Donor Registration</CardTitle>
              <CardDescription>
                Fill out the form below to register as a blood donor
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className={formErrors.fullName ? "text-destructive" : ""}>
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={formErrors.fullName ? "border-destructive" : ""}
                  />
                  {formErrors.fullName && (
                    <p className="text-sm text-destructive">{formErrors.fullName}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className={formErrors.email ? "text-destructive" : ""}>
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={formErrors.email ? "border-destructive" : ""}
                    />
                    {formErrors.email && (
                      <p className="text-sm text-destructive">{formErrors.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className={formErrors.phoneNumber ? "text-destructive" : ""}>
                      Phone Number
                    </Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Enter your phone number"
                      required
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className={formErrors.phoneNumber ? "border-destructive" : ""}
                    />
                    {formErrors.phoneNumber && (
                      <p className="text-sm text-destructive">{formErrors.phoneNumber}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bloodType" className={formErrors.bloodType ? "text-destructive" : ""}>
                      Blood Type
                    </Label>
                    <Select 
                      value={formData.bloodType}
                      onValueChange={(value) => {
                        setFormData({...formData, bloodType: value});
                        if (formErrors.bloodType) {
                          setFormErrors({...formErrors, bloodType: ""});
                        }
                      }}
                    >
                      <SelectTrigger id="bloodType" className={formErrors.bloodType ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                        <SelectItem value="Unknown">I don't know</SelectItem>
                      </SelectContent>
                    </Select>
                    {formErrors.bloodType && (
                      <p className="text-sm text-destructive">{formErrors.bloodType}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className={formErrors.dateOfBirth ? "text-destructive" : ""}>
                      Date of Birth
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.dateOfBirth && "text-muted-foreground",
                            formErrors.dateOfBirth && "border-destructive"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.dateOfBirth ? (
                            format(formData.dateOfBirth, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.dateOfBirth}
                          onSelect={(date) => {
                            setFormData({...formData, dateOfBirth: date});
                            if (formErrors.dateOfBirth) {
                              setFormErrors({...formErrors, dateOfBirth: ""});
                            }
                          }}
                          initialFocus
                          disabled={(date) => 
                            date > new Date() || 
                            date < new Date(new Date().setFullYear(new Date().getFullYear() - 100))
                          }
                        />
                      </PopoverContent>
                    </Popover>
                    {formErrors.dateOfBirth && (
                      <p className="text-sm text-destructive">{formErrors.dateOfBirth}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="previousDonor"
                    checked={formData.previousDonor}
                    onCheckedChange={(checked) => 
                      setFormData({...formData, previousDonor: checked as boolean})
                    }
                  />
                  <label
                    htmlFor="previousDonor"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I have donated blood before
                  </label>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="agreeToDonate"
                    checked={formData.agreeToDonate}
                    onCheckedChange={(checked) => {
                      setFormData({...formData, agreeToDonate: checked as boolean});
                      if (formErrors.agreeToDonate) {
                        setFormErrors({...formErrors, agreeToDonate: ""});
                      }
                    }}
                    className={formErrors.agreeToDonate ? "border-destructive" : ""}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="agreeToDonate"
                      className={cn(
                        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                        formErrors.agreeToDonate && "text-destructive"
                      )}
                    >
                      Consent to Donate
                    </label>
                    <p className="text-xs text-muted-foreground">
                      I agree to donate blood and confirm that I am at least 18 years old and in good health.
                    </p>
                    {formErrors.agreeToDonate && (
                      <p className="text-sm text-destructive">{formErrors.agreeToDonate}</p>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Registering..." : "Register as Donor"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default DonorForm;
