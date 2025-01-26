import PatientRegistrationForm from "@/components/forms/PatientRegistrationForm";

const Page = () => {
  const config = {
    title: "Register as a Patient",
    subtitle: "Your health, our priority",
    commitmentTitle: "Why Choose Us",
    commitmentDescription: " We offer personalized care combined with cutting-edge technology and expert physicians dedicated to your well-being. We create tailored treatment plans for the most effective and advanced care, ensuring you're a partner in your health journey.",
    imageSrc: "/home.jpg",
  };

  return <PatientRegistrationForm config={config} />;
};

export default Page;