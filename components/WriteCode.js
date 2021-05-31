/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";
import Image from "next/image";

const languages = [
  {
    img: "Invite team members",
    alt:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    img: "List view",
    alt:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    img: "Keyboard shortcuts",
    alt:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    img: "Calendars",
    alt:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="lg:col-span-1">
          <Image
            src="/images/kevin-mask.png" // Route of the image file
            height={310} // Desired size with correct aspect ratio
            width={270} // Desired size with correct aspect ratio
            alt="Kevin W"
            style="m-4"
          />
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-1">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {languages.map((feature) => (
              <div key={feature.alt} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                    {feature.img}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">
                  {feature.alt}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
