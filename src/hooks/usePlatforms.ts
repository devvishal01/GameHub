import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";
import Platform from "../entities/Platform";
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["plateforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: platforms,
  });
export default usePlatforms;
