"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import AuthButton from "@/components/AuthButton";
import Schedule from "@/components/Schedule";


export default function Home() {

  return (
    <main className="text-neutral-900">

      {/* Registration / Login Panel */}
      <AuthButton 
        text={"Become a patient"}
        route={"/auth/signup"}
      />

      {/* Appointments Panel */}
      <Schedule />
    </main>
  );
}
