import { Card, Image, Text, Button, Group, SimpleGrid } from '@mantine/core';
import { useVoyageStore } from '../store/voyage';

export function VoyageSelector() {
  const { voyages, selectedVoyage, setSelectedVoyage } = useVoyageStore();

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" p="md">
      {voyages.map((voyage) => (
        <Card 
          key={voyage.id} 
          shadow="sm" 
          padding="lg" 
          radius="md" 
          withBorder
          style={{
            cursor: 'pointer',
            transform: selectedVoyage?.id === voyage.id ? 'scale(1.02)' : 'none',
            transition: 'transform 0.2s ease'
          }}
          onClick={() => setSelectedVoyage(voyage)}
        >
          <Card.Section>
            <Image
              src={voyage.coverImage}
              height={160}
              alt={voyage.title}
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{voyage.title}</Text>
            <Text size="sm" c="dimmed">
              {voyage.days.length} jours
            </Text>
          </Group>

          <Text size="sm" c="dimmed" mb="md">
            {voyage.description}
          </Text>

          <Button 
            color={selectedVoyage?.id === voyage.id ? 'blue' : 'gray'}
            fullWidth
          >
            {selectedVoyage?.id === voyage.id ? 'Voyage actuel' : 'Sélectionner'}
          </Button>
        </Card>
      ))}
    </SimpleGrid>
  );
}
