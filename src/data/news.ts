export interface NewsItem {
  title: string;
  link: string;
  source: string;
  pubDate?: string;
}

export const newsData: NewsItem[] = [
  {
    title: "Últimas notícias do Brasil e do mundo",
    link: "https://g1.globo.com/",
    source: "G1",
    pubDate: new Date().toISOString()
  },
  {
    title: "Notícias em tempo real",
    link: "https://www.r7.com/",
    source: "R7",
    pubDate: new Date().toISOString()
  },
  {
    title: "Acompanhe as principais notícias",
    link: "https://www.uol.com.br/",
    source: "UOL",
    pubDate: new Date().toISOString()
  }
];
