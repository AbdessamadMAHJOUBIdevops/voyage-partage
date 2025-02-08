export async function searchLocation(query: string): Promise<[number, number] | null> {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data && data.length > 0) {
      const firstResult = data[0];
      return [parseFloat(firstResult.lat), parseFloat(firstResult.lon)];
    }
  } catch (error) {
    console.error("Erreur lors de la recherche :", error);
  }
  return null;
}

export async function reverseGeocode(lat: number, lng: number): Promise<string | null> {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data && data.display_name) {
      return data.display_name;
    }
  } catch (error) {
    console.error("Erreur lors du reverse geocoding :", error);
  }
  return null;
}
