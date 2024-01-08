import { reactive } from "vue";
import airtable from "./airtable";

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
    const { data } = await airtable.get("/tblmtYdL4F8fyK8Ug", {
      params: {
        view: "Grid view",
      },
    });

    cases.data = data.records;
  } catch (error) {
    console.error(error);
  } finally {
    cases.loading = false;
  }
}
