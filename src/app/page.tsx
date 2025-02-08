'use client';

import { Container, Title, Tabs, Group, Button, Stack, Paper } from '@mantine/core';
import dynamic from 'next/dynamic';
import { useVoyageStore } from '../store/voyage';
import { VoyageSelector } from '../components/VoyageSelector';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function HomePage() {
  const { currentDay, setCurrentDay, selectedVoyage } = useVoyageStore();

  if (!selectedVoyage) {
    return (
      <Container size="xl">
        <Title order={1} mb="xl">Sélectionnez un voyage</Title>
        <VoyageSelector />
      </Container>
    );
  }

  return (
    <Container fluid p={0}>
      <Stack gap="md">
        <Paper shadow="sm" p="md" withBorder>
          <Group justify="space-between">
            <Stack gap="xs">
              <Title order={2}>{selectedVoyage.title}</Title>
              <Group>
                <Button 
                  onClick={() => setCurrentDay(0)} 
                  variant={currentDay === 0 ? "filled" : "light"}
                >
                  Premier Jour
                </Button>
                <Button 
                  onClick={() => setCurrentDay(Math.max(0, currentDay - 1))}
                  disabled={currentDay === 0}
                >
                  Jour Précédent
                </Button>
                <Button 
                  onClick={() => setCurrentDay(Math.min(selectedVoyage.days.length - 1, currentDay + 1))}
                  disabled={currentDay === selectedVoyage.days.length - 1}
                >
                  Jour Suivant
                </Button>
                <Button 
                  onClick={() => setCurrentDay(selectedVoyage.days.length - 1)}
                  variant={currentDay === selectedVoyage.days.length - 1 ? "filled" : "light"}
                >
                  Dernier Jour
                </Button>
              </Group>
            </Stack>
            <Button 
              variant="light" 
              color="gray"
              onClick={() => useVoyageStore.setState({ selectedVoyage: null })}
            >
              Changer de Voyage
            </Button>
          </Group>
        </Paper>

        <Map />
      </Stack>
    </Container>
  );
}
