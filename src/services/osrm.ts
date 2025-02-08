export async function fetchRoute(coordinates: [number, number][], profile: 'foot' | 'driving') {
  if (!coordinates || coordinates.length < 2) return [];

  const coordString = coordinates.map(([lat, lng]) => `${lng},${lat}`).join(';');
  const url = `https://router.project-osrm.org/route/v1/${profile}/${coordString}?overview=full&geometries=geojson&annotations=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.code !== 'Ok') {
      console.error('OSRM error:', data);
      return [];
    }

    // Extract route geometry and duration
    const route = data.routes[0];
    const coordinates = route.geometry.coordinates.map(([lng, lat]: number[]) => [lat, lng]);
    const duration = route.duration; // in seconds
    const distance = route.distance; // in meters

    return {
      coordinates,
      duration,
      distance
    };
  } catch (error) {
    console.error('Error fetching route:', error);
    return [];
  }
}
