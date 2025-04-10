// src/A01781041/Clase1/common/ComponentLoader.tsx
import React, { Suspense, useState, useEffect } from 'react';
import FallbackComponent from './FallbackComponent';

interface ComponentLoaderProps {
  componentPath: string;
  componentName: string;
}

const ComponentLoader: React.FC<ComponentLoaderProps> = ({ componentPath, componentName }) => {
  const [error, setError] = useState<string | null>(null);
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        // Try to dynamically import the component
        const module = await import(`../${componentPath}`);
        setComponent(() => module.default || module);
        setError(null);
      } catch (err) {
        console.error(`Error loading component ${componentPath}:`, err);
        setError(`Failed to load component: ${err instanceof Error ? err.message : String(err)}`);
        setComponent(null);
      }
    };

    loadComponent();
  }, [componentPath]);

  if (error) {
    return <FallbackComponent componentName={componentName} errorMessage={error} />;
  }

  if (!Component) {
    return <div>Loading {componentName}...</div>;
  }

  return (
    <Suspense fallback={<div>Loading {componentName}...</div>}>
      <Component />
    </Suspense>
  );
};

export default ComponentLoader;