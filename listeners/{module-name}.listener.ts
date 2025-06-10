import { enduranceListener, enduranceEventTypes } from 'endurance-core'

// 1. Define the payload types for the events
type RaceStartedPayload = {
  participant: string;
  time: string;
};

type RaceEndedPayload = {
  winner: string;
  duration: number;
};

// 2. Callback compatible with EventCallback
const onRaceStarted = (raw: unknown) => {
  const payload = raw as RaceStartedPayload;
  console.log('🟢 Race started!', payload);
};

const onRaceEnded = (raw: unknown) => {
  const payload = raw as RaceEndedPayload;
  console.log(`🏁 Race finished! Winner: ${payload.winner} – Duration: ${payload.duration} min`);
};

// 3. Explicit listener registration
export function registerTestListeners() {
  enduranceListener.createListener(enduranceEventTypes.RACE_STARTED, onRaceStarted);
  enduranceListener.createListener(enduranceEventTypes.RACE_ENDED, onRaceEnded);
}

// 4. Listener removal (useful for tests or hot reload)
export function unregisterTestListeners() {
  enduranceListener.removeListener(enduranceEventTypes.RACE_STARTED, onRaceStarted);
  enduranceListener.removeListener(enduranceEventTypes.RACE_ENDED, onRaceEnded);
}

// 5. Auto-save
registerTestListeners();