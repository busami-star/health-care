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
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

const avatars = [
  {
    imageUrl: "/avatars/avatar1.jpg",
    profileUrl: "https://github.com/busami-star",
  },
  {
    imageUrl: "/avatars/avatar2.jpg",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "/avatars/avatar3.jpg",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "/avatars/avatar4.jpg",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "/avatars/avatar5.jpg",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "/avatars/avatar6.jpg",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

export function AvatarCirclesDemo() {
  return <AvatarCircles numPeople={99} avatarUrls={avatars} />;
}

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
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-3", // Reduced padding
        "transition-all duration-200 ease-in-out hover:scale-[102%]", // Slightly reduced scale
        "bg-slate-100 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-2"> {/* Reduced gap */}
        <div
          className="flex size-8 items-center justify-center rounded-2xl" // Reduced size
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-base">{icon}</span> {/* Reduced text size */}
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-xs font-medium text-black">
            <span className="text-xs">{name}</span> {/* Reduced text size */}
            <span className="mx-1">·</span>
            <span className="text-[10px] text-gray-500">{time}</span>
          </figcaption>
          <p className="text-[10px] font-normal text-black">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[400px] w-full flex-col overflow-hidden rounded-lg bg-background p-4 md:shadow-xl", // Increased height, reduced padding
        "max-h-[50vh] min-h-[250px]", // Added responsive height constraints
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
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(values);
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-1 bg-gray-900 text-slate-100">
      <nav className="w-full max-w-6xl mb-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-slate-100 lg:text-2xl text-lg font-bold">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                width={150}
                height={150}
                className="rounded-full object-cover"
                alt="logo"
                style={{
                  display: "block",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              />
              <p>Health-Care</p>
            </div>
          </Link>
          <div className="space-x-4"></div>
        </div>
      </nav>

      <div
        className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6"
        id="register"
      >
        <div className="rounded-2xl shadow-2xl p-6 border-2 border-gray-700">
          <h1 className="text-2xl font-bold text-center mb-2">{title}</h1>
          <p className="text-center mb-4">{subtitle}</p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                        maxLength={16}
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
                  <div className="mt-2 text-center text-blue-500">
                    Submitting...
                  </div>
                )}
              </div>
            </form>
          </Form>
         
          <div className="text-xs flex justify-center mt-2">
            <p>© copyright Health-Care 2025</p>
          </div>
          <Link href="#register" className="flex justify-end mt-1">
            <p className="text-slate-100">Admin</p>
          </Link>
        </div>

        <div
          className="bg-gray-800 text-white rounded-2xl p-4 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 border-2 border-gray-700 shadow-2xl"
          id="about"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">
              {commitmentTitle}
            </h2>
            <p className="text-sm text-gray-400 mb-2">
              {commitmentDescription}
            </p>
            
            <div className="flex justify-center md:justify-start mb-2">
              <AvatarCirclesDemo />
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <AnimatedListDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientRegistrationForm;