"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^\d+$/, { message: "Phone number must contain only numbers" }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
        {/* Form Section */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-10 flex flex-col justify-center border-2 border-emerald-700/30">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-400 text-center mb-4">
            Patient Registration
          </h1>
          <p className="text-emerald-200 text-center mb-8">
            Precision Healthcare, Personal Care
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Username Field */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-emerald-300">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        className="border-emerald-700 focus:ring-emerald-500 focus:border-emerald-500 
                        text-white bg-gray-900/50 hover:bg-emerald-900/30 transition-colors"
                      />
                    </FormControl>
                    <FormDescription className="text-emerald-200">
                      As it appears on your medical records
                    </FormDescription>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-emerald-300">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@domain.com"
                        type="email"
                        {...field}
                        className="border-emerald-700 focus:ring-emerald-500 focus:border-emerald-500 
                        text-white bg-gray-900/50 hover:bg-emerald-900/30 transition-colors"
                      />
                    </FormControl>
                    <FormDescription className="text-emerald-200">
                      For medical communication and updates
                    </FormDescription>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              {/* Phone Number Field */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-emerald-300">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="1234567890"
                        type="tel"
                        {...field}
                        className="border-emerald-700 focus:ring-emerald-500 focus:border-emerald-500 
                        text-white bg-gray-900/50 hover:bg-emerald-900/30 transition-colors"
                      />
                    </FormControl>
                    <FormDescription className="text-emerald-200">
                      For emergency contact and scheduling
                    </FormDescription>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <div className="text-center">
                <Button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 text-white rounded-xl 
                  font-semibold hover:bg-emerald-700 transition-colors 
                  transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Register Patient
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* About Us Section */}
        <div className="bg-gradient-to-br from-gray-800 to-emerald-900 text-white rounded-2xl 
        p-8 md:p-10 flex flex-col justify-center items-center space-y-6 
        lg:flex-row lg:space-y-0 lg:space-x-8">
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-300 mb-4">Our Commitment</h2>
            <p className="text-emerald-100">
              Delivering advanced medical solutions with unparalleled precision 
              and compassionate care. Our expert team combines cutting-edge 
              technology with personalized patient support.
            </p>
          </div>
          <div className="w-full lg:w-1/2 max-w-sm">
            <Image
              width={1000}
              height={1000}
              src="/home.jpg"
              alt="Hospital Interior"
              className="rounded-xl shadow-2xl object-cover aspect-square brightness-75 contrast-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const Page = () => {
  return <ProfileForm />;
};

export default Page;