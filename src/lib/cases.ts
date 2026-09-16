import { reactive } from "vue";
import api from "./api";

export const cases = reactive<{
  loading: boolean;
  data: Case[];
}>({
  loading: true,
  data: [],
});

export async function fetchCases() {
  cases.loading = true;

  try {
    const data = await api.get<{ entries: Case[] }>("/entries?desc=date_found");
    cases.data = data.entries;
  } catch (error) {
    console.error(error);
  } finally {
    cases.loading = false;
  }
}
