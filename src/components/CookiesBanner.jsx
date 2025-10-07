"use client";
import React, { useState, useEffect } from "react";
import "./cookies-banner.component.css";

export default function CookiesBanner() {
  const [showCookies, setShowCookies] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    personalizacion: false,
    analitica: false,
    publicidad: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("cookiesPreferences");
    if (!saved) {
      setShowCookies(true);
    }
  }, []);

  const savePreferences = (prefs) => {
    localStorage.setItem("cookiesPreferences", JSON.stringify(prefs));
    setShowCookies(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      personalizacion: true,
      analitica: true,
      publicidad: true,
    };
    savePreferences(allAccepted);
  };

  const rejectAll = () => {
    const allRejected = {
      personalizacion: false,
      analitica: false,
      publicidad: false,
    };
    savePreferences(allRejected);
  };

  return (
    showCookies && (
      <div className="cookies-overlay">
        <div className="cookies-container">
          <h3>Acuerdo de privacidad</h3>

          <div className="cookies-options">
            <label>
              <input
                type="checkbox"
                checked={preferences.personalizacion}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    personalizacion: e.target.checked,
                  })
                }
              />
              Personalización
            </label>
            <label>
              <input
                type="checkbox"
                checked={preferences.analitica}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    analitica: e.target.checked,
                  })
                }
              />
              Analítica
            </label>
            <label>
              <input
                type="checkbox"
                checked={preferences.publicidad}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    publicidad: e.target.checked,
                  })
                }
              />
              Publicidad dirigida
            </label>
          </div>

          <div className="cookies-footer">
            {/* Texto principal con botón para ver más */}
            <div className="cookies-info">
              <small>
                1). Al registrarse y proporcionar información en esta plataforma
                (incluyendo pero no limitado a datos de identificación, contacto,
                experiencia laboral y preferencias profesionales), el usuario
                otorga a <strong>Gráfica 360</strong> el consentimiento libre,
                informado y voluntario para recopilar, almacenar, tratar y
                compartir dichos datos con el fin de ofrecer servicios
                relacionados con empleo y política, generar estadísticas y
                análisis de participación, y difundir información relevante a
                través de medios propios o asociados.
              </small>
              <button
                className="btn-link"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? "Ocultar detalles" : "Ver más"}
              </button>
            </div>

            {/* Botones */}
            <div className="cookies-buttons">
              <button className="btn reject" onClick={rejectAll}>
                Rechazar
              </button>
              <button
                className="btn save"
                onClick={() => savePreferences(preferences)}
              >
                Guardar
              </button>
              <button className="btn accept" onClick={acceptAll}>
                Aceptar todo
              </button>
            </div>
          </div>

          {/* Sección expandible con toda la política */}
          {showDetails && (
            <div className="cookies-details">
              <p>
                2). Al subir o compartir contenido en esta plataforma (incluyendo
                pero no limitado a textos, ilustraciones, fotografías, diseños u
                otros trabajos), el usuario concede a Gráfica 360 una licencia
                gratuita, no exclusiva, transferible y de alcance mundial para
                utilizar, reproducir, distribuir, exhibir públicamente y adaptar
                dicho contenido en relación con los servicios del portal.
              </p>
              <p>
                3). El Sitio usa cookies técnicas (necesarias), de preferencias,
                analíticas y de terceros. Al acceder, el usuario verá un banner
                que permitirá aceptar todo, rechazar o configurar preferencias.
              </p>
              <p>
                4). Los datos podrán compartirse con terceros (bolsas de empleo,
                empresas reclutadoras, proveedores de servicios) únicamente
                cuando exista base legal y/o consentimiento.
              </p>
              <p>
                5). La Plataforma aplicará medidas de seguridad técnicas y
                organizativas para proteger los datos frente a accesos no
                autorizados o pérdida.
              </p>
              <p>
                6). Estas cláusulas entran en vigor el <strong>04/10/2025</strong>.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  );
}
