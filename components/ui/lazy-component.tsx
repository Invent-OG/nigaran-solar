"use client";

import React, { Suspense, lazy, ComponentType } from 'react';

interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  props?: Record<string, any>;
}

export function LazyComponent({ 
  component, 
  fallback = <div className="min-h-[100px] flex items-center justify-center">Loading...</div>, 
  props = {} 
}: LazyComponentProps) {
  const LazyComp = lazy(component);
  
  return (
    <Suspense fallback={fallback}>
      <LazyComp {...props} />
    </Suspense>
  );
}