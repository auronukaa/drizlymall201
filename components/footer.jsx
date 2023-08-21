import { Instagram } from "lucide-react";
import Container from "./ui/container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 my-5">
          <div className="mx-8 p-5 gap-y-3 flex items-start flex-col">
            <p className={`font-bold text-2xl tracking-tight`}>
              drizly<span className="text-orange-500">mall</span>
            </p>
            <p className="text-left text-xs text-black">
              &copy; 2023 Drizlymall, Inc. Të gjitha të drejtat të rezervuara
            </p>
            <div className="flex gap-x-2 items-center">
              <Link
                href="https://www.instagram.com/drizlymall/"
                target="_blank"
                className="bg-neutral-200 rounded-full p-2"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100088688234176&mibextid=LQQJ4d
"
                target="_blank"
                className="bg-neutral-200 text-[20px] rounded-full p-2"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="mx-14 sm:mx-8 py-5 gap-y-3 flex-col sm:flex-row flex justify-end items-start gap-x-20">
            <div className="mb-4 sm:mb-0">
              <h1 className="font-semibold text-left">Për ju</h1>
              <div className="text-sm flex flex-col text-gray-500 py-2">
                <Link href="/produktet" className="hover:underline">
                  Produktet
                </Link>
                <Link href="/shporta" className="hover:underline py-1">
                  Shporta ime
                </Link>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-left">Kontakti</h1>
              <ul className="text-gray-500 py-2 text-sm">
                <li className="py-1">
                  <a
                    href="mailto:drizlymall@gmail.com"
                    className="hover:underline"
                  >
                    drizlymall@gmail.com
                  </a>
                </li>
                <li className="font-semibold text-gray-600">
                  Instagram :
                  <a
                    href="https://www.instagram.com/drizlymall/"
                    className="font-normal text-gray-500 hover:underline"
                  >
                    drizlymall
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
