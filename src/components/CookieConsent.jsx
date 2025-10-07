"use client";
import { useState, useEffect } from "react";
import { Info, X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [cookies, setCookies] = useState({
    personalizacion: false,
    analitica: false,
    publicidad: false,
  });

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setVisible(true);
  }, []);

  const handleAcceptAll = () => {
    const allTrue = {
      personalizacion: true,
      analitica: true,
      publicidad: true,
    };
    localStorage.setItem("cookiesAccepted", JSON.stringify(allTrue));
    setVisible(false);
  };

  const handleRejectAll = () => {
    const allFalse = {
      personalizacion: false,
      analitica: false,
      publicidad: false,
    };
    localStorage.setItem("cookiesAccepted", JSON.stringify(allFalse));
    setVisible(false);
  };

  const handleSave = () => {
    localStorage.setItem("cookiesAccepted", JSON.stringify(cookies));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-[#0D1333] text-white rounded-2xl shadow-xl w-[90%] md:w-[800px] max-h-[90vh] p-6 relative overflow-hidden">
        {/* Botón cerrar */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Encabezado */}
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-lg font-semibold">Acuerdo de privacidad</h2>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-gray-400 hover:text-white"
          >
            <Info size={18} />
          </button>
        </div>

        {/* Política completa */}
        {showDetails && (
          <div className="bg-[#141b47] p-4 rounded-lg mb-5 text-sm text-gray-200 overflow-y-auto max-h-[45vh] space-y-4">
            <h3 className="font-semibold text-white">
              Identidad y Datos del Responsable
            </h3>
            <p>
              1). Al registrarse y proporcionar información en esta plataforma (incluyendo pero no limitado a datos de identificación, contacto, experiencia
              laboral y preferencias profesionales), el usuario otorga a Gráfica 360 el consentimiento libre, informado y voluntario para recopilar, almacenar,
              tratar y compartir dichos datos con el fin de:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Ofrecer servicios relacionados con empleo y política,</li>
              <li>Generar estadísticas y análisis de participación,</li>
              <li>Difundir información relevante a través de medios propios o asociados.</li>
            </ul>
            <p>
              2). Al subir o compartir contenido en esta plataforma (incluyendo pero no limitado a textos, ilustraciones, fotografías, diseños u otros trabajos),
              el usuario concede a Gráfica 360 una licencia gratuita, no exclusiva, transferible y de alcance mundial para utilizar, reproducir,
              distribuir, exhibir públicamente y adaptar dicho contenido en relación con los servicios del portal. El usuario sigue siendo titular de los derechos
              morales sobre su obra, pero autoriza a la plataforma a hacer uso de su contenido para fines de divulgación, promoción o archivo digital.
            </p>

            <h3 className="font-semibold text-white">Cookies y tecnologías similares</h3>
            <p>
              1). El usuario reconoce que esta autorización es de carácter gratuito, no exclusivo y de alcance nacional e internacional, y podrá ser revocada
              en cualquier momento conforme a la Ley 1581 de 2012 (Habeas Data) mediante solicitud escrita.
            </p>
            <p>
              El Sitio usa cookies técnicas (necesarias), de preferencias, analíticas y de terceros (si aplica). Al acceder, el usuario verá un banner/gestor de
              cookies que permitirá: aceptar todo, rechazar no esenciales o configurar preferencias. La aceptación debe registrarse en logs para auditoría.
              En todo caso las cookies que impliquen tratamiento de datos personales o perfiles deberán contar con consentimiento previo y verificable.
              (Mintic)
            </p>

            <h3 className="font-semibold text-white">Exoneración y limitación de responsabilidad</h3>
            <p>
              1). La Plataforma no garantiza resultados concretos de empleabilidad ni la veracidad absoluta de ofertas publicadas por terceros; actúa como
              intermediaria. Se limita la responsabilidad por daños indirectos y, cuando la ley lo permita, la responsabilidad máxima se limitará al importe
              efectivamente pagado por un servicio específico contratado en la plataforma.
            </p>

            <h3 className="font-semibold text-white">Transferencias y terceros</h3>
            <p>
              1). Los datos podrán compartirse con terceros (por ejemplo bolsas de empleo, empresas reclutadoras o proveedores de servicios de hosting/analítica)
              únicamente cuando exista base legal y/o consentimiento. Con cada encargado se establecerán contratos que garanticen el cumplimiento de obligaciones
              de seguridad y confidencialidad. En caso de transferencias internacionales, se adoptarán medidas adecuadas conforme a la normativa aplicable.
            </p>

            <h3 className="font-semibold text-white">Seguridad de la información</h3>
            <p>
              1). La Plataforma aplicará medidas técnicas y organizativas razonables para proteger los datos frente a acceso no autorizado, pérdida, alteración o divulgación. Estas medidas incluirán control de accesos, cifrado cuando sea aplicable, copias de respaldo y protocolos para gestión de
              incidentes. Se mantendrá un registro de los consentimientos otorgados.
            </p>

            <h3 className="font-semibold text-white">Propiedad intelectual del Sitio</h3>
            <p>
              1). Los contenidos originales del Sitio (textos, estructura, códigos, imágenes, logos cuando proceda) son propiedad de la Plataforma o sus
              titulares y están protegidos por la legislación de propiedad intelectual. Queda prohibida la reproducción, distribución o explotación no autorizada.
            </p>

            <h3 className="font-semibold text-white">Uso permitido y conducta de los usuarios</h3>
            <p>
              1). Los Usuarios se comprometen a no publicar contenidos ilícitos, difamatorios, discriminatorios o que vulneren derechos de terceros. El
              incumplimiento dará lugar a la inmediata retirada del contenido y/o bloqueo del usuario; la Plataforma se reserva el derecho a denunciar
              hechos constitutivos de delito a las autoridades competentes.
            </p>

            <h3 className="font-semibold text-white">Cambios en la política</h3>
            <p>
              1). La Plataforma podrá actualizar estas cláusulas; las modificaciones se publicarán con la fecha de entrada en vigor. Cuando las modificaciones afecten a finalidades del tratamiento o derechos del usuario, se solicitará consentimiento si corresponde.
            </p>

            <h3 className="font-semibold text-white">Fecha de entrada en vigor</h3>
            <p>1). Estas cláusulas entran en vigor en la fecha de publicación: <strong>04/10/2025</strong>.</p>
          </div>
        )}

        {/* Controles de cookies */}
        <div className="flex flex-col gap-4 mb-6">
          {[
            { id: "personalizacion", label: "Personalización" },
            { id: "analitica", label: "Analítica" },
            { id: "publicidad", label: "Publicidad dirigida" },
          ].map((cookie) => (
            <div
              key={cookie.id}
              className="flex items-center justify-between border-b border-gray-600 pb-2"
            >
              <span className="font-medium">{cookie.label}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={cookies[cookie.id]}
                  onChange={() =>
                    setCookies((prev) => ({
                      ...prev,
                      [cookie.id]: !prev[cookie.id],
                    }))
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-400 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-5"></div>
              </label>
            </div>
          ))}
        </div>

        {/* Botones */}
        <div className="flex justify-end gap-3">
          <button
            onClick={handleRejectAll}
            className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Rechazar
          </button>
          <button
            onClick={handleSave}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Guardar
          </button>
          <button
            onClick={handleAcceptAll}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  );
}
