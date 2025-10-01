import { addDays, setHours, setMinutes, startOfToday } from 'date-fns';

const today = startOfToday();

export const servicesData = [
  // --- Hoje ---
  { id: 3, dateTime: setMinutes(setHours(today, 8), 30), name: 'Funcional', instructor: 'Ana Julia Gomes', duration: 60, status: 'available' },
  { id: 4, dateTime: setMinutes(setHours(today, 9), 0), name: 'Spinning Indoor', instructor: 'Ana Julia Gomes', duration: 60, status: 'available' },
  { id: 5, dateTime: setMinutes(setHours(today, 10), 30), name: 'Hot Yoga', instructor: 'Ana Julia Gomes', duration: 45, status: 'full' },

  // --- Próximos Dias ---
  { id: 6, dateTime: setMinutes(setHours(addDays(today, 1), 9), 0), name: 'Spinning Indoor', instructor: 'Ana Julia Gomes', duration: 60, status: 'available' },
  { id: 7, dateTime: setMinutes(setHours(addDays(today, 1), 10), 0), name: 'Spinning Indoor', instructor: 'Ana Julia Gomes', duration: 60, status: 'available' },
  { id: 8, dateTime: setMinutes(setHours(addDays(today, 2), 8), 0), name: 'HIIT Spinning', instructor: 'Carlos Lins', duration: 45, status: 'available' }
]; // Garantido que não há vírgula extra aqui.