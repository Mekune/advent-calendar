import React from "react";
import { days } from "../lib/data";

export default function Content({ id }: { id: number }) {
  const selectedDay = days.find((day) => day.id === id);

  // Vérifier si le jour correspondant à l'ID existe
  if (!selectedDay) {
    return <div>Veuillez sélectionner un jour.</div>;
  }

  return (
    <div className="content">
      <h3 className="text-3xl text-center">Jour {selectedDay.id}</h3>
      <iframe
        title="Vimeo Video"
        src={selectedDay.url}
        width="750"
        height="500"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
      <div dangerouslySetInnerHTML={{ __html: selectedDay.content }} />
    </div>
  );
}
