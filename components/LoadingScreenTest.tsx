"use client";

import { useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function LoadingScreenTest() {
  return (
    <LoadingScreen>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-3xl font-bold">Main App Loaded</div>
      </div>
    </LoadingScreen>
  );
}