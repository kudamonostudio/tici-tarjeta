"use client";

import { useState, useEffect } from "react";
import { Play, Pause, ChevronDown, Gift, Clapperboard, CalendarHeart } from "lucide-react";
import { Button } from "@/components/ui/button"
import { PhotoGallery } from "@/components/photo-gallery"
import { DressCodeIcon } from "@/components/dress-code-icon"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function WeddingPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2026-01-17T19:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#e3f2fd]">
      {/* Music Control Button */}
     {/*  <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-[#1976d2]" />
        ) : (
          <Play className="w-5 h-5 text-[#1976d2] ml-0.5" />
        )}
      </button> */}

      {/* DALE PLAY Badge */}
      {/* <div className="fixed top-4 right-20 z-50 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
        <span className="text-xs font-medium text-[#1976d2] tracking-wider">
          DALE PLAY
        </span>
      </div> */}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#e3f2fd]">
          <img
            src="/00.jpg"
            alt="Ticiana - 15 hermosas Primaveras"
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif mb-2 tracking-wide">
            TICIANA
          </h1>
          <p className="text-3xl md:text-4xl font-script italic mt-4">
            15 hermosas Primaveras
          </p>
        </div>

        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-10 h-10" />
        </button>
      </section>

      {/* Welcome Section */}
      <section className="bg-white relative before:absolute before:inset-0 before:bg-[url('/opalina-bg.png')] before:opacity-30 before:pointer-events-none">
        <div className="flex sm:flex-col md:flex-row flex-col-reverse">
          <div className="md:w-1/2">
            <img
              src="/01.jpg"
              alt="Ticiana"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 py-20 px-8 md:px-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-script text-[#1976d2] mb-6">
              15 hermosas Primaveras
            </h2>
            <p className="text-base md:text-lg text-[#1565c0] leading-relaxed">
              En mi corazón siempre hubo un sueño... Me soñaba vestida de
              princesa, como en un cuento de hadas, hoy me levanto a contar
              mis 15 y hermosas primaveras, dejo atrás mi adorada infancia,
              que junto a los míos muy feliz pasé. Hoy mi sueño se hace
              realidad y con tu presencia quiero contar.
            </p>
          </div>
        </div>
      </section>

      {/* Ceremony Section */}
      <section className="py-20 bg-[#bbdefb]">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <CalendarHeart className="w-16 h-16 mx-auto mb-8 text-[#1976d2]" />

          <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-8 text-[#1976d2]">
            FIESTA
          </h2>

          <div className="space-y-2 text-[#1565c0]">
            <p className="text-lg">Sábado 17 de Enero 2026</p>
            <p className="text-lg">21:00 hs</p>
            <p className="text-lg font-medium">
              Club Revoltosos, Santa Bernardina. Calle Giordano al final.
            </p>
            <p className="text-base mt-4">
              Recibí debajo las indicaciones para llegar.
            </p>
            <p className="text-base">¡Te esperamos!</p>
          </div>

          <a
            href="https://www.google.com/maps/place/Club+Revoltosos/@-33.3623248,-56.5165982,948m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95a6ebc7246fc59d:0xd0c2a584a9dfea6d!8m2!3d-33.3623248!4d-56.5140233!16s%2Fg%2F11rp6cs2fs?entry=ttu&g_ep=EgoyMDI1MTEzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-8 bg-[#1976d2] hover:bg-[#1565c0] text-white px-8 py-6 text-base rounded-full">
              CÓMO LLEGAR
            </Button>
          </a>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-[#1976d2] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-light mb-2 tracking-wider">
            Bienvenidos a mi fiesta de 15!
          </h2>
          <h2 className="mb-8">Ya falta poco:</h2>

          <div className="flex justify-center items-center gap-4 md:gap-8 text-center">
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-light">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-sm mt-2 tracking-wider">días</span>
            </div>
            <span className="text-4xl md:text-5xl font-light">:</span>
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-light">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-sm mt-2 tracking-wider">hs</span>
            </div>
            <span className="text-4xl md:text-5xl font-light">:</span>
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-light">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-sm mt-2 tracking-wider">min</span>
            </div>
            <span className="text-4xl md:text-5xl font-light">:</span>
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-light">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-sm mt-2 tracking-wider">seg</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-20 bg-white relative before:absolute before:inset-0 before:bg-[url('/opalina-bg.png')] before:opacity-30 before:pointer-events-none">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <DressCodeIcon className="w-16 h-16 mx-auto mb-8 text-[#1976d2]" />

          <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-6 text-[#1976d2]">
            VESTIMENTA
          </h2>

          <p className="text-lg text-[#1565c0]">Vestimenta formal</p>
        </div>
      </section>

      {/* Gift/CBU Section */}
      <section className="py-20 bg-[#e3f2fd]">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <Gift className="w-16 h-16 mx-auto mb-8 text-[#1976d2]" />

          <p className="text-2xl md:text-3xl font-light tracking-widest mb-6 text-[#1976d2]">
            Si deseas hacerme un regalo...
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-transparent border-2 border-[#1976d2] text-[#1976d2] hover:bg-[#1976d2] hover:text-white px-8 py-6 text-base rounded-full transition-colors">
                Ver Datos Bancarios
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl text-center font-light text-[#1976d2] mb-4">
                  Datos Bancarios
                </DialogTitle>
              </DialogHeader>
              <ul className="space-y-3 text-[#1565c0] text-center">
                <li>
                  Cuenta <span className="font-medium text-lg">PREX</span>
                </li>
                <li className="text-xl tracking-widest">1678297</li>
                <li className="font-medium pt-2">Titular: Ticiana Pelaez</li>
              </ul>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Confirmation Section */}
      <section className="py-20 bg-[#1976d2]">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <CalendarHeart className="w-16 h-16 mx-auto mb-12 text-white" />
          <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-6 text-white">
            CONFIRMACIÓN DE ASISTENCIA
          </h2>

          <p className="text-lg text-white/90 mb-8">
            Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!
          </p>

          <a
            href="https://wa.me/59891339566?text=Hola%20Tici!%20Quiero%20confirmarte%20que%20voy%20a%20ser%20parte%20de%20tu%20fiesta%20de%2015!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white hover:bg-white/90 text-[#1976d2] px-8 py-6 text-base rounded-full">
              CONFIRMAR ASISTENCIA
            </Button>
          </a>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-white relative before:absolute before:inset-0 before:bg-[url('/opalina-bg.png')] before:opacity-30 before:pointer-events-none">
        <div className="container mx-auto px-4 max-w-2xl text-center mb-16">
          <Clapperboard className="w-16 h-16 mx-auto mb-8 text-[#1976d2]" />
          <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-6 text-[#1976d2]">
            EXTERIORES
          </h2>
          <p className="text-[#1976d2]">Da click en una imagen para abrir la galería!</p>
        </div>
        <PhotoGallery />
      </section>

      {/* Footer */}
      <footer className="bg-[#1976d2] py-8 text-center text-white">
        <p className="text-sm tracking-wider">TICIANA</p>
        <p className="text-xs mt-2">Sábado 17 de Enero 2026 - 21:00 hs</p>
      </footer>
    </div>
  );
}
