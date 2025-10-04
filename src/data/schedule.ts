export interface ScheduleItem {
  time: string;
  show: string;
  host: string;
}

export const scheduleData: ScheduleItem[] = [
  { time: '06:00 - 09:00', show: 'Manhã Aliança', host: 'Com você desde cedo!' },
  { time: '09:00 - 12:00', show: 'Programação Musical', host: 'Os melhores sucessos' },
  { time: '12:00 - 14:00', show: 'Almoço com Música', host: 'Música boa na hora do almoço' },
  { time: '14:00 - 18:00', show: 'Tarde Animada', host: 'Sucessos nacionais e internacionais' },
  { time: '18:00 - 22:00', show: 'Noite Aliança', host: 'As melhores músicas para sua noite' },
  { time: '22:00 - 06:00', show: 'Madrugada Musical', host: 'Música 24 horas' }
];
