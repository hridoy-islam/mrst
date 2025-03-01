import { Icon } from "@iconify/react/dist/iconify.js";

export default function HeaderTop() {
  return (
    <div className="bg-headertop text-white p-4 md:block sm:hidden xs:hidden">
      <div className="container mx-auto flex justify-between">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Icon icon="solar:phone-linear" />
            <span>+971 50 363 0578</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="clarity:envelope-solid" />
            <span>data@example.com</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Icon icon="tabler:clock" />
          <p className="md:text-sm">
            Mon - Fri - 09:00AM - 06:00PM | Saturday - 09:00AM - 05:00PM
          </p>
        </div>
      </div>
    </div>
  );
}
