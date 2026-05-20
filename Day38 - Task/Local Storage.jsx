const STORAGE_KEY = "counter_state";

export function saveCounterState(state) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state)
  );
}