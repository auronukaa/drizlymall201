"use client";

import Container from "@/components/ui/container";
import Confetti from "./components/confetti";
import { Button } from "@/components/ui/button";
import { ArrowUpLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-col items-center h-screen w-full justify-center gap-y-3">
          <Confetti />
          <h1 className="text-3xl sm:text-5xl font-bold text-orange-600 text-center px-5 sm:px-0">
            Porosia është kryer me sukses!
          </h1>
          <h2 className="text-sm sm:text-lg mb-5 text-gray-500">
            Ju falënderojmë për besimin tuaj!
          </h2>
          <Link href="/produktet">
            <Button>
              <ArrowUpLeft size={20} className="mr-1" /> Shiko produkte të tjera
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ThankYou;
