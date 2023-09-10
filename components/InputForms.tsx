"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const formSchema = z.object({
  propertyName: z.string().min(1, {
    message: "Property Name and Address must be at least 2 characters.",
  }),
  yearOfConstruction: z.string().min(1, {
    message: "Year of Construction must be at least 2 characters.",
  }),
  sizeOfTheProperty: z.string().min(1, {
    message: "Size of the Property (in acres) must be at least 2 characters.",
  }),
  sizeOfTheHome: z.string().min(1, {
    message:
      "Size of the Home (in square meters) must be at least 2 characters.",
  }),
  numberOfRooms: z.string().min(1, {
    message: "Number of Rooms must be at least 2 characters.",
  }),
  architecturalStyle: z.string().optional(),
  outbuildings: z.string().optional(),
  nearbyAmenities: z.string().min(1, {
    message: "Nearby Amenities must be at least 2 characters.",
  }),
  localAttractions: z.string().optional(),
  geographicalFeatures: z.string().min(1, {
    message: "Geographical Features must be at least 2 characters.",
  }),
  interiorDetails: z.string().optional(),
  uniqueSellingPoints: z.string().optional(),
});

export default function InputForms({ handleSubmit, isLoading }: any) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyName: "",
      yearOfConstruction: "",
      sizeOfTheProperty: "",
      sizeOfTheHome: "",
      numberOfRooms: "",
      architecturalStyle: "",
      outbuildings: "",
      nearbyAmenities: "",
      localAttractions: "",
      geographicalFeatures: "",
      interiorDetails: "",
      uniqueSellingPoints: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    handleSubmit(JSON.stringify(values));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          form.handleSubmit(onSubmit)(e);
        }}
        className="space-y-8"
      >
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="propertyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span style={{ color: "red" }}>*</span> Property Name and
                  Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the name of the property and address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="yearOfConstruction"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span style={{ color: "red" }}>*</span> Year of Construction
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the year of construction"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="sizeOfTheProperty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span style={{ color: "red" }}>*</span> Size of the Property
                  (in acres)
                </FormLabel>{" "}
                <FormControl>
                  <Input
                    placeholder="Enter the size of the property"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sizeOfTheHome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span style={{ color: "red" }}>*</span> Size of the Home (in
                  square meters)
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter the size of the home" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="numberOfRooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span style={{ color: "red" }}>*</span> Number of Rooms
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter the number of rooms" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="architecturalStyle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Architectural Style</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the architectural style"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="outbuildings"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Outbuildings</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter details or standard/none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nearbyAmenities"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span style={{ color: "red" }}>*</span> Nearby Amenities
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter services like schools, hospitals, shops, etc."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="localAttractions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Local Attractions</FormLabel>
                <FormControl>
                  <Input placeholder="Enter attractions or none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="geographicalFeatures"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span style={{ color: "red" }}>*</span> Geographical Features
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter features, e.g., "Near a lake, surrounded by hills"'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="interiorDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interior Details</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter type of flooring, brand of appliances, design of fixtures, etc."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="uniqueSellingPoints"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unique Selling Points</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter any aspect of the property that stands out"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={isLoading} type="submit">
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  );
}
