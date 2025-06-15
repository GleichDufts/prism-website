
import { useState } from 'react'

const modules = [
  { title: "Texte analysieren", description: "Texte schreiben, prüfen, verbessern" },
  { title: "Bilder auswerten", description: "Visuelle Analyse und Wirkung" },
  { title: "Daten analysieren", description: "Tabellen, PDFs, Zahlen verstehen" },
  { title: "Strategisch denken", description: "Probleme erfassen und strukturieren" },
]

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen bg-black text-white flex flex-col items-center p-8 space-y-6">
        <h1 className="text-4xl font-bold">PRISM AI</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {modules.map((mod, idx) => (
            <div key={idx} className="p-4 bg-neutral-900 rounded-2xl shadow-md hover:shadow-xl transition">
              <h2 className="text-xl font-semibold">{mod.title}</h2>
              <p className="text-sm mt-2 text-gray-300">{mod.description}</p>
              <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg">Starten</button>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <label className="block mb-2 text-sm">Dokument hochladen:</label>
          <input type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-gray-100" />
        </div>
      </main>
    </div>
  )
}
