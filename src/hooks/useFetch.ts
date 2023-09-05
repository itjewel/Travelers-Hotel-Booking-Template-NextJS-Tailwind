import { QueryKey, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface FetchConfig {
  headers?: Record<string, string>;
}

interface FetchParams {
  url: string;
  queryKey: QueryKey;
  config?: FetchConfig;
  data?: any;
  enabled?: boolean;
}

export const useFetch = ({
  url,
  config,
  data,
  queryKey,
  enabled,
}: FetchParams) => {
    const fetchData = async () => {
    try {
        const response = await axios.get(url, config);
        return response.data;
    } catch (error: any) {
        console.log(error.response.data.data.error);
    }
    };

  const {
    data: responseData,
    isLoading,
    error,
    isSuccess,
    isError,
  } = useQuery({
    queryKey,
    queryFn: fetchData,
    enabled,
  });
  return { fetchData, isLoading, error, isSuccess, isError };
};
