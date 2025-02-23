import { FC } from "react";
export const socialMedia = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/encep-suryana-b60080113/",
    icon: "https://icongr.am/fontawesome/linkedin.svg?size=128&color=c84c05",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/encepsuryana_",
    icon: "https://icongr.am/fontawesome/instagram.svg?size=128&color=c84c05",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/suryanamccarley",
    icon: "https://icongr.am/fontawesome/facebook.svg?size=128&color=c84c05",
  },
  {
    name: "GitHub",
    href: "https://www.github.com/encepsuryana",
    icon: "https://icongr.am/fontawesome/github.svg?size=128&color=c84c05",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6282129714260",
    icon: "https://icongr.am/fontawesome/whatsapp.svg?size=128&color=c84c05",
  },
];
const ContactInfo: FC = () => {
  return (
    <div className="w-full md:max-w-4xl text-left pr-8">
      <h3 className="text-lg font-bold mt-8 mb-2">
        Let&apos;s be friends! Connect with me on{" "}
        <span className="text-primary font-bold">Social Media</span>
      </h3>

      <div className="flex flex-wrap gap-4">
        {socialMedia.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="text-white text-sm md:text-base"
          >
            <img
              src={social.icon}
              alt={social.name}
              className="w-4 h-4 inline-block mr-2 -mt-1"
            />

            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
