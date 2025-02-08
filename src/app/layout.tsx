import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export const metadata = {
  title: 'Voyage Partage',
  description: 'Carnet de voyage interactif avec points d\'intérêt et itinéraires',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link href='https://unpkg.com/maplibre-gl@3.6.2/dist/maplibre-gl.css' rel='stylesheet' />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
