import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react/";
export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "7176912e2dmsh63acec864a01987p1a0a45jsnbf8d43892ce6"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    getTopChartsByCountry: builder.query({
      query: (countryCode) => `/charts/country?country_code=${countryCode}`,
    }),
    getArtistDetail: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
    // getTopCharts: builder.query({ query: "/charts/world" }),
    // getTopCharts: builder.query({ query: "/charts/world" }),
  }),
});
export const {
  useGetTopChartsQuery,
  useGetTopChartsByCountryQuery,
  useGetArtistDetailQuery,
} = shazamCoreApi;
