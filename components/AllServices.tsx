"use client";

import Image from "next/image";

const services = [
  {
    id: "general-consultation",
    title: "General Consultation",
    description:
      "Our general consultation services provide comprehensive primary care for all patients. Our team of expert physicians ensures accurate diagnosis and effective treatment plans tailored to your needs.",
    imageSrc: "/images/general-consultation.jpg",
  },
  {
    id: "pediatric-services",
    title: "Pediatric Services",
    description:
      "We offer specialized pediatric services to ensure the health and wellness of your children. From routine checkups to vaccinations, we provide the best care for your little ones.",
    imageSrc: "/images/pediatric-services.jpg",
  },
  {
    id: "laboratory-services",
    title: "Laboratory Services",
    description:
      "Our state-of-the-art laboratory offers accurate and timely diagnostic services to support effective treatment decisions.",
    imageSrc: "/images/laboratory-services.jpg",
  },
  {
    id: "out-patient",
    title: "Out-Patient Services",
    description:
      "We provide reliable outpatient care with shorter wait times and a patient-focused approach. Visit us for consultations and follow-ups without hospital admission.",
    imageSrc: "/images/out-patient.jpg",
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    description:
      "Our in-house pharmacy is fully stocked with prescription and over-the-counter medications, ensuring convenience and quick access to treatment.",
    imageSrc: "/images/pharmacy.jpg",
  },
  {
    id: "family-medicine",
    title: "Family Medicine",
    description:
      "Our family medicine specialists deliver comprehensive care for patients of all ages, addressing a wide range of health concerns.",
    imageSrc: "/images/family-medicine.jpg",
  },
  {
    id: "sonography-scan",
    title: "Sonography/Scan",
    description:
      "We provide advanced sonography services for accurate imaging and diagnostics to ensure effective medical decisions.",
    imageSrc: "/images/sonography-scan.jpg",
  },
  {
    id: "ecg",
    title: "ECG",
    description:
      "Our ECG services deliver precise heart monitoring and diagnostics, helping patients stay on top of their cardiac health.",
    imageSrc: "/images/ecg.jpg",
  },
  {
    id: "x-ray",
    title: "X-Ray",
    description:
      "Our modern X-ray facilities ensure clear and accurate imaging for a variety of diagnostic needs.",
    imageSrc: "/images/x-ray.jpg",
  },
  {
    id: "in-patient",
    title: "In-Patient Services",
    description:
      "Our in-patient care provides a comfortable and supportive environment for patients requiring extended medical attention.",
    imageSrc: "/images/in-patient.jpg",
  },
  {
    id: "medical-screening",
    title: "Medical Screening",
    description:
      "We offer comprehensive medical screening services to help you monitor your health and catch potential issues early.",
    imageSrc: "/images/medical-screening.jpg",
  },
  {
    id: "home-health-care",
    title: "Home Health Care",
    description:
      "Our home health care services deliver personalized medical support to patients in the comfort of their own homes.",
    imageSrc: "/images/home-health-care.jpg",
  },
  {
    id: "mother-child-care",
    title: "Mother & Child Care",
    description:
      "Our specialized care ensures the health and wellness of both mothers and children, from pregnancy to postnatal care.",
    imageSrc: "/images/mother-child-care.jpg",
  },
  {
    id: "advocacy-counseling",
    title: "Advocacy & Counseling",
    description:
      "We provide professional counseling and advocacy services to support mental and emotional well-being.",
    imageSrc: "/images/advocacy-counseling.jpg",
  },
  {
    id: "eye-clinic-services",
    title: "Eye Clinic Services",
    description:
      "Our eye clinic offers comprehensive vision care and treatments for various eye conditions.",
    imageSrc: "/images/eye-clinic-services.jpg",
  },
  {
    id: "major-minor-surgeries",
    title: "Major & Minor Surgeries",
    description:
      "Our skilled surgeons perform both major and minor procedures with precision and care, ensuring optimal outcomes.",
    imageSrc: "/images/major-minor-surgeries.jpg",
  },
];

const AllServices = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">All Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <Image
              src={service.imageSrc}
              alt={service.title}
              width={400}
              height={250}
              className="rounded-t-lg object-cover w-full"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <a
                href={`#${service.id}`}
                className="text-blue-500 font-medium hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
