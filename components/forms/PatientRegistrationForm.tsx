"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { formSchema } from "@/lib/schemas/patientRegistration";
import SubmitButton from "@/components/ui/SubmitButton";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Victor",
    description: "Quality services💯",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Maggie",
    description: "High hygiene😄",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Mitchelle",
    description: "Compassionate doctors❤️",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Dave",
    description: "Great facilities😍",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-slate-100 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-xs font-medium text-black">
            <span className="text-sm">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-xs font-normal text-black">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg bg-background p-6 md:shadow-xl", // Removed the 'border' class here
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

interface PatientRegistrationProps {
  config?: {
    title?: string;
    subtitle?: string;
    commitmentTitle?: string;
    commitmentDescription?: string;
    imageSrc?: string;
  };
}

const DefaultConfig = {
  title: "Patient Registration",
  subtitle: "Precision Healthcare, Personal Care",
  commitmentTitle: "Our Commitment",
  commitmentDescription:
    "Delivering advanced medical solutions with unparalleled precision and compassionate care. Our expert team combines cutting-edge technology with personalized patient support.",
};

export function PatientRegistrationForm({
  config = {},
}: PatientRegistrationProps) {
  const { title, subtitle, commitmentTitle, commitmentDescription } = {
    ...DefaultConfig,
    ...config,
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", email: "", phone: "" },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: any) => {
    setIsSubmitting(true); // Set loading to true

    try {
      // Simulate form submission (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Replace with actual submission code
      console.log(values); // You would replace this with actual submission logic
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      setIsSubmitting(false); // Set loading to false after submission
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 bg-gray-900 text-white">
      {/* Navbar Section */}
      <nav className="w-full">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white lg:text-2xl text-lg font-bold">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                width={100}
                height={100}
                className="rounded-full object-cover"
                alt="logo"
                style={{
                  display: "block",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                }}
              />
              <p>Health-Care</p>
            </div>
          </Link>
          <div className="space-x-4">
            <Link href="#register" className="text-white">
              <p className="text-black">Admin</p>
            </Link>
          </div>
        </div>
      </nav>

      {/* Form Section */}
      <div
        className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8"
        id="register"
      >
        <div className="rounded-2xl shadow-2xl p-8 border-2 border-gray-700 min-h-[400px]">
          <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
          <p className="text-center mb-8">{subtitle}</p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {[
                {
                  name: "username",
                  label: "Full Name",
                  placeholder: "Enter your full name",
                },
                {
                  name: "email",
                  label: "Email Address",
                  placeholder: "example@gmail.com",
                  type: "email",
                },
              ].map(({ name, label, placeholder, type }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">{label}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={placeholder}
                          type={type || "text"}
                          className="border rounded-2xl border-gray-400 text-black bg-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              ))}

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Phone Number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        {...field}
                        placeholder="Enter phone number"
                        defaultCountry="KE"
                        international
                        maxLength={16} // Restricting to 10 digits
                        className="w-full border text-black bg-gray-900/50 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <div className="text-center">
                <SubmitButton disabled={isSubmitting} />
                {isSubmitting && (
                  <div className="mt-4 text-center text-blue-500">
                    Submitting...
                  </div>
                )}
              </div>
            </form>
          </Form>
        </div>

        {/* About Us Section */}
        <div
          className="bg-gray-800 text-white rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 min-h-[300px] sm:min-h-[400px] border-2 border-gray-700 shadow-2xl"
          id="about"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              {commitmentTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              {commitmentDescription}
            </p>
          </div>

          {/* Insert Animated List here */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <AnimatedListDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientRegistrationForm;
