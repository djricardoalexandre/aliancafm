export interface Hit {
  id: string;
  title: string;
  artist: string;
  category: 'nacional' | 'internacional';
  play_count: number;
}

export const topHitsData: Hit[] = [
  { id: '1', title: 'SE EU TE PERDOAR', artist: 'CLAYTON & ROMARIO Part.ZE FELIPE', category: 'nacional', play_count: 1250 },
  { id: '2', title: 'MUDOU O TEXTO', artist: 'DANILO & DAVI', category: 'nacional', play_count: 980 },
  { id: '3', title: 'OH VIDA', artist: 'JOAO NETO & FREDERICO', category: 'nacional', play_count: 875 },
  { id: '4', title: 'RETROVISOR', artist: 'GUSTTAVO LIMA', category: 'nacional', play_count: 820 },
  { id: '5', title: 'GRAMA DO VIZINHO', artist: 'BRUNO ROSA Part.JORGE & MATEUS', category: 'nacional', play_count: 795 },
  { id: '6', title: 'RESUMINDO', artist: 'ZE NETO & CRISTIANO', category: 'nacional', play_count: 750 },
  { id: '7', title: 'OLHA ONDE EU TO', artist: 'ANA CASTELA', category: 'nacional', play_count: 680 },
  { id: '8', title: 'OBRA DE ARTE', artist: 'JOAO PEDRO & CRISTIANO', category: 'nacional', play_count: 645 },
  { id: '9', title: 'FOI MAL DEUS', artist: 'HUGO & GUILHERME', category: 'nacional', play_count: 610 },
  { id: '10', title: 'GRAU DE MALUCA', artist: 'GUILHERME & BENUTO', category: 'nacional', play_count: 590 },

  { id: '11', title: 'Flowers', artist: 'Miley Cyrus', category: 'internacional', play_count: 1420 },
  { id: '12', title: 'Calm Down', artist: 'Rema & Selena Gomez', category: 'internacional', play_count: 1180 },
  { id: '13', title: 'As It Was', artist: 'Harry Styles', category: 'internacional', play_count: 1050 },
  { id: '14', title: 'Unholy', artist: 'Sam Smith & Kim Petras', category: 'internacional', play_count: 920 },
  { id: '15', title: 'Anti-Hero', artist: 'Taylor Swift', category: 'internacional', play_count: 890 },
  { id: '16', title: 'Vampire', artist: 'Olivia Rodrigo', category: 'internacional', play_count: 840 },
  { id: '17', title: 'Cruel Summer', artist: 'Taylor Swift', category: 'internacional', play_count: 780 },
  { id: '18', title: 'Dance The Night', artist: 'Dua Lipa', category: 'internacional', play_count: 725 },
  { id: '19', title: 'Stranger Things', artist: 'Kygo & OneRepublic', category: 'internacional', play_count: 670 },
  { id: '20', title: 'Die For You', artist: 'The Weeknd', category: 'internacional', play_count: 620 }
];
