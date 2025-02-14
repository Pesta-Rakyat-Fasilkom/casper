"use client";

import * as React from "react";
import { DropdownComponent } from "./DropdownComponents";

export const RegistrationDropdowns = () => {
  const [elementValue, setElementValue] = React.useState("Mahasiswa");
  const [angkatanValue, setAngkatanValue] = React.useState("Cosmic - 2024");
  const [elementOpen, setElementOpen] = React.useState(false);
  const [angkatanOpen, setAngkatanOpen] = React.useState(false);

  const elementItems = ["Mahasiswa", "Kantin", "Dosen", "Alumni", "Staff"];

  const angkatanItems = [
    "Cosmic - 2024",
    "Gaung - 2023",
    "Apollo - 2022",
    "Bakung - 2021",
  ];

  return (
    <div className="w-full grid grid-cols-2 gap-2 mb-4">
      <div className="w-full">
        <p className="font-extrabold text-sm md:text-base mb-1">Elemen</p>
        <DropdownComponent
          value={elementValue}
          onChange={setElementValue}
          isOpen={elementOpen}
          onOpenChange={setElementOpen}
          items={elementItems}
        />
      </div>
      <div className="w-full">
        <p className="font-extrabold text-sm md:text-base mb-1">Angkatan</p>
        <DropdownComponent
          value={angkatanValue}
          onChange={setAngkatanValue}
          isOpen={angkatanOpen}
          onOpenChange={setAngkatanOpen}
          items={angkatanItems}
          disabled={elementValue != "Mahasiswa"}
        />
      </div>
    </div>
  );
};
