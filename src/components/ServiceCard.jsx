import {
   FiAward,
   FiCheckCircle,
   FiClipboard,
   FiCreditCard,
   FiFileText,
   FiShield,
} from "react-icons/fi";

const servicesData = [
   {
      title: "PAN Card",
      accent: "From first issue to linked updates",
      icon: FiCreditCard,
      service: ["New PAN card application", "PAN correction", "PAN reprint", "PAN-Aadhaar linking"],
   },
   {
      title: "Voter ID Card",
      accent: "Registration, correction, and download support",
      icon: FiShield,
      service: ["New voter registration", "Voter ID correction", "Voter ID download"],
   },
   {
      title: "Government Schemes",
      accent: "Eligibility-first guidance for essential programs",
      icon: FiClipboard,
      service: ["Ayushman Bharat Card", "PM Kisan Registration", "E-Shram Card"],
   },
   {
      title: "Certificates",
      accent: "Fast help with civil and income documents",
      icon: FiFileText,
      service: [
         "Birth Certificate",
         "Death Certificate",
         "Income Certificate",
         "Caste Certificate",
         "Domicile Certificate",
      ],
   },
   {
      title: "Government Exams",
      accent: "Application support for major recruitment portals",
      icon: FiAward,
      service: ["SSC", "UPSC", "Railways", "State PSCs"],
   },
];

const ServiceCard = () => {
   return (
      <section className="w-full px-4 py-8 sm:px-6 lg:px-10">
         <div className="mx-auto max-w-7xl rounded-4xl bg-[#dfe8f5] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
               <div className="max-w-2xl space-y-3">
                  <span className="inline-flex rounded-full border border-white/10 bg-[#1E3A5F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1E3A5F]">
                     Services we support
                  </span>
                  <h2 className="text-2xl font-semibold leading-tight text-[#102843] sm:text-3xl">
                     Practical help for the forms people struggle with most.
                  </h2>
                  <p className="text-sm leading-7 text-slate-700  sm:text-base">
                     Browse the categories below to see the kinds of applications, corrections, and document requests FormAssist can help you finish with less confusion.
                  </p>
               </div>

               <div className="inline-flex w-fit items-center gap-2 rounded-2xl border border-[#1E3A5F]/10 bg-white px-4 py-3 text-sm text-slate-700 shadow-[0_12px_25px_rgba(16,40,67,0.08)]">
                  <FiCheckCircle className="text-base text-[#306cec]" />
                  <span>{servicesData.length}+ core service groups available</span>
               </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
               {servicesData.map((service) => {
                  const Icon = service.icon;

                  return (
                     <article
                        key={service.title}
                        className="group rounded-[28px] border border-white/60 bg-white p-6 shadow-[0_18px_40px_rgba(16,40,67,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(16,40,67,0.14)]"
                     >
                        <div className=" flex h-full flex-col">
                           <div className=" titleDiv flex items-start justify-between ">
                              <div className="space-y-3">
                                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1E3A5F] text-white shadow-[0_12px_30px_rgba(30,58,95,0.28)]">
                                    <Icon className="text-xl" />
                                 </div>
                                 <div>
                                    <h3 className="text-xl font-semibold text-[#102843]">{service.title}</h3>
                                   
                                 </div>
                              </div>

                              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                                 {service.service.length} services
                              </span>
                           </div>

                           <div className=" service-container mt-6 space-y-3">
                              {service.service.map((item) => (
                                 <div
                                    key={item}
                                    className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 transition-colors duration-200 group-hover:bg-[#f3f7ff]"
                                 >
                                    <FiCheckCircle className="mt-1 shrink-0 text-[#306cec]" />
                                    <span>{item}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </article>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default ServiceCard;