import axios, { AxiosResponse } from "axios";
import { PersonDetailsType } from "../types/PersonDetailsType";

const fetchPersonDetails = async (
  personId: number
): Promise<PersonDetailsType | null> => {
  try {
    const response: AxiosResponse<PersonDetailsType> = await axios.get(
      `/api/person/${personId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching person details:", error);
    return null;
  }
};

export default fetchPersonDetails;
