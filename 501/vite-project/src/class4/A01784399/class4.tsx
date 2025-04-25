/**
 * Author: Julia Maria Stephanie Duenkelsbuehler Castillo 
 * 
 * Description: This code is a React component that implements a travel request form.
 */

import React, { useState } from 'react';

//This component (InputField) is used to create input fields for the form.
const InputField = ({ label, name, type = 'text', required = false }: { label: string; name: string; type?: string; required?: boolean }) => (
  <div className="form-group">
    <label className="form-label">
      {label} {required && <span className="required">*</span>}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      className="form-input"
    />
  </div>
);

// This component (Button) is used to create buttons for the form.
const Button = ({ children, variant = 'filled', color = 'primary', type = 'button', className = '', onClick }: { children: React.ReactNode; variant?: string; color?: string; type?: 'button' | 'submit' | 'reset'; className?: string; onClick?: () => void }) => {
  const classNames = `btn ${variant} ${color} ${className}`;
  return (
    <button type={type} onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

// This component (TravelRequestForm) is the main form component that uses the InputField and Button components to create a travel request form.
const TravelRequestForm = () => {
  const [showExtraDestinations, setShowExtraDestinations] = useState(false);
  const [extraDestinations, setExtraDestinations] = useState<string[]>([]);

  const addDestination = () => {
    setExtraDestinations([...extraDestinations, '']);
  };

  const removeDestination = (index: number) => {
    const updated = [...extraDestinations];
    updated.splice(index, 1);
    setExtraDestinations(updated);
  };

  const updateDestination = (index: number, value: string) => {
    const updated = [...extraDestinations];
    updated[index] = value;
    setExtraDestinations(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (Array.from(formData.entries()).some(([_, value]) => value === '')) {
      alert('Por favor complete todos los campos requeridos');
      return;
    }

    data.destinosAdicionales = extraDestinations.filter(Boolean);

    console.log('Form data:', data);
    alert('Solicitud enviada correctamente (demo frontend)');
    window.location.href = '/success';
  };

  return (
    <>
      <main className="form-page">
        <div className="form-container">
          <h1 className="form-title">Solicitud de Viaje</h1>
          <form onSubmit={handleSubmit} className="form-section">
            <section>
              <h2 className="form-subtitle">1. Destinos y Fechas</h2>
              <div className="form-grid-2">
                <InputField label="País de Origen" name="paísOrigen" required />
                <InputField label="Ciudad de Origen" name="ciudadOrigen" required />
                <InputField label="País Destino" name="paísDestino" required />
                <InputField label="Ciudad Destino" name="ciudadDestino" required />
                <InputField label="Fecha Inicio" name="fechaInicio" type="date" required />
                <InputField label="Fecha Fin" name="fechaFin" type="date" required />
              </div>
            </section>

            <section>
              <h2 className="form-subtitle">2. Horario Preferente del Viaje</h2>
              <div className="form-grid-3">
                <InputField label="Hora Inicio" name="horaInicio" type="time" />
                <InputField label="Hora Fin" name="horaFin" type="time" />
                <InputField label="Duracion (horas)" name="duracion" type="number" />
              </div>

              <div className="form-group">
                <label className="form-label">¿Requiere más destinos para el viaje?</label>
                <div className="radio-group">
                  <label>
                    <input type="radio" name="requiereMasDestinos" value="si" onChange={() => setShowExtraDestinations(true)} />
                    Sí
                  </label>
                  <label>
                    <input type="radio" name="requiereMasDestinos" value="no" defaultChecked onChange={() => setShowExtraDestinations(false)} />
                    No
                  </label>
                </div>
              </div>

              {showExtraDestinations && (
                <div className="form-group">
                  <label className="form-label">Destinos Adicionales</label>
                  <div className="extra-destinations">
                    {extraDestinations.map((dest, idx) => (
                      <div key={idx} className="extra-row">
                        <input
                          type="text"
                          value={dest}
                          onChange={(e) => updateDestination(idx, e.target.value)}
                          name="destinosAdicionales"
                          className="form-input"
                          placeholder="Ciudad, País"
                        />
                        <button type="button" onClick={() => removeDestination(idx)} className="remove-btn">✕</button>
                      </div>
                    ))}
                    <button type="button" onClick={addDestination} className="add-btn">
                      + Agregar otro destino
                    </button>
                  </div>
                </div>
              )}
            </section>

            <section>
              <h2 className="form-subtitle">3. Información Adicional</h2>
              <div className="form-group">
                <label htmlFor="motivo" className="form-label">
                  Motivo del Viaje <span className="required">*</span>
                </label>
                <textarea id="motivo" name="motivo" required className="form-textarea" rows={3} />
              </div>
              <div className="form-group">
                <label htmlFor="justificacion" className="form-label">
                  Justificación <span className="required">*</span>
                </label>
                <textarea id="justificacion" name="justificacion" required className="form-textarea" rows={3} />
              </div>
            </section>

            <section>
              <h2 className="form-subtitle">4. Asignación del Costo de Viaje</h2>
              <div className="form-grid-3">
                <InputField label="Área Funcional" name="areaFuncional" required />
                <InputField label="Departamento" name="departamento" required />
                <InputField label="CeCo Obtenido" name="centroCostos" required />
              </div>
            </section>

            <div className="form-actions">
              <Button variant="border" color="secondary" type="reset">
                Limpiar
              </Button>
              <Button variant="filled" color="primary" type="submit">
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </main>

      <style>{`
        .form-page {
          padding: 40px;
          background-color: #f8f9fa;
          font-family: Arial, sans-serif;
        }
        .form-container {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 40px;
          max-width: 1000px;
          margin: auto;
        }
        .form-title {
          font-size: 28px;
          font-weight: bold;
          color: #4a5568;
          margin-bottom: 30px;
        }
        .form-subtitle {
          font-size: 20px;
          border-bottom: 1px solid #ccc;
          padding-bottom: 10px;
          margin-bottom: 20px;
          color: #2b6cb0;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #333;
        }
        .required {
          color: #e53e3e;
        }
        .form-input, .form-textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
        }
        .radio-group {
          display: flex;
          gap: 20px;
          margin-top: 10px;
        }
        .form-grid-2, .form-grid-3 {
          display: grid;
          gap: 20px;
        }
        .form-grid-2 {
          grid-template-columns: repeat(2, 1fr);
        }
        .form-grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        .extra-destinations .extra-row {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }
        .add-btn, .remove-btn {
          background: none;
          border: none;
          color: #2b6cb0;
          font-size: 14px;
          cursor: pointer;
        }
        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }
        .btn {
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          font-size: 14px;
        }
        .filled.primary {
          background-color: #3182ce;
          color: white;
          border: none;
        }
        .filled.secondary {
          background-color: #718096;
          color: white;
          border: none;
        }
        .border.primary {
          border: 2px solid #3182ce;
          color: #3182ce;
          background: none;
        }
        .border.secondary {
          border: 2px solid #718096;
          color: #718096;
          background: none;
        }
      `}</style>
    </>
  );
};

export default TravelRequestForm;
