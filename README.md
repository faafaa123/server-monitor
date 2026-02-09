# React + Fluent UI – Enterprise UI Exploration

## Überblick
Dieses Repository dokumentiert meine praktische Auseinandersetzung mit **React** in Kombination mit **Fluent UI** für unternehmensnahe Webanwendungen.

Ziel ist es, typische Anforderungen aus dem Enterprise-Umfeld sauber umzusetzen und Best Practices zu evaluieren.

---

## Tech Stack
- React (Functional Components, Hooks)
- Fluent UI (v9)
- TypeScript
- Vite

---

## Zielsetzung
- Aufbau einer konsistenten UI basierend auf Fluent UI Design Tokens
- Saubere Komponentenstruktur für skalierbare Anwendungen
- Fokus auf Accessibility (ARIA, Keyboard Navigation)
- Wartbarkeit und Erweiterbarkeit

---

## Umgesetzte Features
- Layout mit Fluent UI Components (Navigation, Content Areas)
- Wiederverwendbare UI-Bausteine (Buttons, Forms, Panels)
- Theming (Light/Dark, Custom Tokens)
- Controlled Forms mit Fluent UI Inputs
- State Handling mit React Hooks
- Beispielhafte Unternehmens-Views (Dashboard / Settings / Forms)

---

## Lern- & Erkenntnispunkte
- Unterschiede zwischen Fluent UI v8 und v9
- Effektiver Einsatz von `makeStyles` und Design Tokens
- Typisierung von Fluent UI Komponenten mit TypeScript
- Strukturierung von UI-Code für größere Teams
- Typische Stolperfallen im Enterprise-Kontext

---

## Projektstruktur
- src/
  - App.tsx -> Einstiegsdatei
  - components/
    - Application/
      - Application.tsx
      - Application.css
      - utils/
        - ChunkCard.tsx
        - ChunkCard.css
    - MongoDB/
      - MongoDb.tsx
      - MongoDb.css
      - utils/
        - CollectionItem.tsx
        - CollectionItem.css
    - PlayerList/
      - PlayerList.tsx
      - PlayerList.css
