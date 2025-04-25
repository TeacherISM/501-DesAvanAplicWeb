
/**
 * Author: Julia Maria Stephanie Duenkelsbuehler Castillo 
 * 
 * Description: This code is a React component that implements a travel request form.
 */

import React, { useState } from 'react';

//This component (InputField) is used to create input fields for the form.
const InputField = ({ label, name, type = 'text', required = false }: { label: string; name: string; type?: string; required?: boolean }) => (
  <div>
    <label className="block text-sm font-medium mb-2 text-black">
      {label} {required && <span className="text-warning-400">*</span>}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      className="block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm text-sm"
    />
  </div>
);
// This component (Button) is used to create buttons for the form.
const Button = ({ children, variant = 'filled', color = 'primary', type = 'button', className = '', onClick }: { children: React.ReactNode; variant?: string; color?: string; type?: 'button' | 'submit' | 'reset'; className?: string; onClick?: () => void }) => {
  const base = 'px-4 py-2 rounded-lg font-medium';
  const variants: any = {
    filled: {
      primary: 'bg-primary-400 text-white',
      secondary: 'bg-secondary-400 text-white',
    },
    border: {
      primary: 'border border-primary-400 text-primary-400',
      secondary: 'border border-secondary-400 text-secondary-400',
    },
  };
  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant][color]} ${className}`}>
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
    <main className="p-12 bg-neutral-50">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-primary-500">Solicitud de Viaje</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <section>
           
            <h2 className="text-lg font-bold text-primary-400 border-b border-secondary-300 pb-4 mb-6">1. Destinos y Fechas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="País de Origen" name="paísOrigen" required />
              <InputField label="Ciudad de Origen" name="ciudadOrigen" required />
              <InputField label="País Destino" name="paísDestino" required />
              <InputField label="Ciudad Destino" name="ciudadDestino" required />
              <InputField label="Fecha Inicio" name="fechaInicio" type="date" required />
              <InputField label="Fecha Fin" name="fechaFin" type="date" required />
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary-400 border-b border-secondary-300 pb-4 mb-6">2. Horario Preferente del Viaje</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InputField label="Hora Inicio" name="horaInicio" type="time" />
              <InputField label="Hora Fin" name="horaFin" type="time" />
              <InputField label="Duracion (horas)" name="duracion" type="number" />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-2 text-secondary-200">
                ¿Requiere más destinos para el viaje?
              </label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="requiereMasDestinos"
                    value="si"
                    onChange={() => setShowExtraDestinations(true)}
                    className="h-4 w-4 text-primary-400"
                  />
                  <span className="ml-2">Sí</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="requiereMasDestinos"
                    value="no"
                    defaultChecked
                    onChange={() => setShowExtraDestinations(false)}
                    className="h-4 w-4 text-primary-400"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            {showExtraDestinations && (
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2 text-secondary-200">
                  Destinos Adicionales
                </label>
                <div className="space-y-2">
                  {extraDestinations.map((dest, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input
                        type="text"
                        value={dest}
                        onChange={(e) => updateDestination(idx, e.target.value)}
                        name="destinosAdicionales"
                        className="flex-1 px-3 py-2 border border-secondary-300 rounded-md shadow-sm text-sm"
                        placeholder="Ciudad, País"
                      />
                      <button type="button" onClick={() => removeDestination(idx)} className="text-warning-400 px-2">
                        ✕
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={addDestination} className="mt-2 text-sm text-primary-400 hover:underline">
                    + Agregar otro destino
                  </button>
                </div>
              </div>
            )}
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary-400 border-b border-secondary-300 pb-4 mb-6">3. Información Adicional</h2>
            <div className="mb-4">
              <label htmlFor="motivo" className="block text-sm font-medium mb-2 text-black">
                Motivo del Viaje <span className="text-warning-400">*</span>
              </label>
              <textarea
                id="motivo"
                name="motivo"
                required
                rows={3}
                className="block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="justificacion" className="block text-sm font-medium mb-2 text-black">
                Justificación <span className="text-warning-400">*</span>
              </label>
              <textarea
                id="justificacion"
                name="justificacion"
                required
                rows={3}
                className="block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm text-sm"
              />
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary-400 border-b border-secondary-300 pb-4 mb-6">4. Asignación del Costo de Viaje</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InputField label="Área Funcional" name="areaFuncional" required />
              <InputField label="Departamento" name="departamento" required />
              <InputField label="CeCo Obtenido" name="centroCostos" required />
            </div>
          </section>

          <div className="flex justify-end gap-4 pt-4">
            <Button variant="border" color="secondary" type="reset" className="px-6">
              Limpiar
            </Button>
            <Button variant="filled" color="primary" type="submit" className="px-6">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default TravelRequestForm;
