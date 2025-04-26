/**
 * Author: Nicole Dávila Hernández 
 * 
 * Description: React component implementing a travel request form with Formik validation and Yup schema validation.
 * Features:
 * - Form state management with Formik
 * - Validation schema with Yup
 * - Dynamic fields for additional destinations
 * - Responsive layout with custom styling
 */

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

// Interface defining the shape of our form values
interface TravelRequestFormValues {
  paísOrigen: string;
  ciudadOrigen: string;
  paísDestino: string;
  ciudadDestino: string;
  fechaInicio: string;
  fechaFin: string;
  horaInicio: string;
  horaFin: string;
  duracion: string;
  motivo: string;
  justificacion: string;
  areaFuncional: string;
  departamento: string;
  centroCostos: string;
  requiereMasDestinos: string;
  destinosAdicionales: string[];
}

/**
 * Custom InputField component integrated with Formik
 * Handles:
 * - Regular inputs
 * - Date inputs
 * - Number inputs
 * - Required field indicators
 * - Validation error display
 */
const InputField = ({ label, name, type = 'text', required = false }: { label: string; name: string; type?: string; required?: boolean }) => (
  <div className="form-group">
    <label className="form-label">
      {label} {required && <span className="required">*</span>}
    </label>
    <Field
      name={name}
      type={type}
      required={required}
      className="form-input"
      as={type === 'textarea' ? 'textarea' : 'input'}
    />
    <ErrorMessage name={name} component="div" className="error-message" />
  </div>
);

/**
 * Custom Button component with variants
 */
const Button = ({ children, variant = 'filled', color = 'primary', type = 'button', className = '', onClick }: { children: React.ReactNode; variant?: string; color?: string; type?: 'button' | 'submit' | 'reset'; className?: string; onClick?: () => void }) => {
  const classNames = `btn ${variant} ${color} ${className}`;
  return (
    <button type={type} onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

/**
 * Yup Validation Schema - Defines all validation rules
 */
const travelRequestSchema = Yup.object().shape({
  paísOrigen: Yup.string().required('País de origen es requerido'),
  ciudadOrigen: Yup.string().required('Ciudad de origen es requerida'),
  paísDestino: Yup.string().required('País destino es requerido'),
  ciudadDestino: Yup.string().required('Ciudad destino es requerida'),
  fechaInicio: Yup.date().required('Fecha de inicio es requerida'),
  fechaFin: Yup.date()
    .required('Fecha de fin es requerida')
    .min(Yup.ref('fechaInicio'), 'La fecha de fin debe ser después de la fecha de inicio'),
  motivo: Yup.string().required('Motivo del viaje es requerido'),
  justificacion: Yup.string().required('Justificación es requerida'),
  areaFuncional: Yup.string().required('Área funcional es requerida'),
  departamento: Yup.string().required('Departamento es requerido'),
  centroCostos: Yup.string().required('Centro de costos es requerido'),
});

const TravelRequestForm = () => {
  // State for managing dynamic destinations (kept separate from Formik)
  const [showExtraDestinations, setShowExtraDestinations] = useState(false);
  const [extraDestinations, setExtraDestinations] = useState<string[]>([]);

  // Handler for adding new destination fields
  const addDestination = () => {
    setExtraDestinations([...extraDestinations, '']);
  };

  // Handler for removing destination fields
  const removeDestination = (index: number) => {
    const updated = [...extraDestinations];
    updated.splice(index, 1);
    setExtraDestinations(updated);
  };

  // Handler for updating destination values
  const updateDestination = (index: number, value: string) => {
    const updated = [...extraDestinations];
    updated[index] = value;
    setExtraDestinations(updated);
  };

  /**
   * Form submission handler
   * Only called when all validations pass
   */
  const handleSubmit = (
    values: TravelRequestFormValues,
    { resetForm }: FormikHelpers<TravelRequestFormValues>
  ) => {
    // Combine Formik values with dynamic destinations
    const formData = {
      ...values,
      destinosAdicionales: extraDestinations.filter(Boolean)
    };

    console.log('Form data:', formData);
    alert('Solicitud enviada correctamente (demo frontend)');
    resetForm();
    setExtraDestinations([]);
    setShowExtraDestinations(false);
    window.location.href = '/success';
  };

  // Initial values for all Formik-managed fields
  const initialValues: TravelRequestFormValues = {
    paísOrigen: '',
    ciudadOrigen: '',
    paísDestino: '',
    ciudadDestino: '',
    fechaInicio: '',
    fechaFin: '',
    horaInicio: '',
    horaFin: '',
    duracion: '',
    motivo: '',
    justificacion: '',
    areaFuncional: '',
    departamento: '',
    centroCostos: '',
    requiereMasDestinos: 'no',
    destinosAdicionales: []
  };

  return (
    <>
      <main className="form-page">
      <div>
        <a href="/">
          <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', margin: '5px' }}>Página Inicial</button>
        </a>
        <a href="/public/A01028517/Milestone2/Milestone2_Menu.html">
          <button style={{ backgroundColor: '#2196F3', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', margin: '5px' }}>Menú Milestone 2</button>
        </a>
      </div>
        <div className="form-container">
            <p>
                <strong>Nota:</strong> Esta implementación ocupa el formato de la clase 4.1, pero aplica la implementación de Formik + Yup de la clase 5. Para comprobar la funcionalidad, por ejemplo, se puede ingresar una fecha de inicio posterior a la fecha de fin, y se mostrará un mensaje de error.
                <br />
            </p>
          <h1 className="form-title">Solicitud de Viaje</h1>
          
          {/* Formik Provider Component */}
          <Formik
            initialValues={initialValues}
            validationSchema={travelRequestSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="form-section">
                {/* Section 1: Destinations and Dates */}
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

                {/* Section 2: Travel Schedule */}
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
                        <Field type="radio" name="requiereMasDestinos" value="si" onChange={() => setShowExtraDestinations(true)} />
                        Sí
                      </label>
                      <label>
                        <Field type="radio" name="requiereMasDestinos" value="no" onChange={() => setShowExtraDestinations(false)} />
                        No
                      </label>
                    </div>
                  </div>

                  {/* Dynamic Destinations Section */}
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

                {/* Section 3: Additional Information */}
                <section>
                  <h2 className="form-subtitle">3. Información Adicional</h2>
                  <div className="form-group">
                    <label htmlFor="motivo" className="form-label">
                      Motivo del Viaje <span className="required">*</span>
                    </label>
                    <Field as="textarea" id="motivo" name="motivo" required className="form-textarea" rows={3} />
                    <ErrorMessage name="motivo" component="div" className="error-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="justificacion" className="form-label">
                      Justificación <span className="required">*</span>
                    </label>
                    <Field as="textarea" id="justificacion" name="justificacion" required className="form-textarea" rows={3} />
                    <ErrorMessage name="justificacion" component="div" className="error-message" />
                  </div>
                </section>

                {/* Section 4: Cost Assignment */}
                <section>
                  <h2 className="form-subtitle">4. Asignación del Costo de Viaje</h2>
                  <div className="form-grid-3">
                    <InputField label="Área Funcional" name="areaFuncional" required />
                    <InputField label="Departamento" name="departamento" required />
                    <InputField label="CeCo Obtenido" name="centroCostos" required />
                  </div>
                </section>

                {/* Form Actions */}
                <div className="form-actions">
                  <Button variant="border" color="secondary" type="reset">
                    Limpiar
                  </Button>
                  <Button variant="filled" color="primary" type="submit">
                    Enviar
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </main>

      {/* Styles - Preserved from original with error message addition */}
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
        .form-textarea {
          min-height: 80px;
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
        .remove-btn {
          color: #e53e3e;
        }
        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 30px;
        }
        .btn {
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.2s;
        }
        .btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
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
        .error-message {
          color: #e53e3e;
          font-size: 12px;
          margin-top: 5px;
        }
      `}</style>
    </>
  );
};

export default TravelRequestForm;