import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react/";
export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://shazam-core.p.rapidapi.com/v1`,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "77d43bc1d1msh7cfccdaeeac0d75p1245bejsn16d5ea6904fd"
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
    getSongDetail: builder.query({
      query: (songId) => `/tracks/details?track_id=${songId}`,
    }),
    // getTopCharts: builder.query({ query: "/charts/world" }),
  }),
});
export const {
  useGetTopChartsQuery,
  useGetTopChartsByCountryQuery,
  useGetArtistDetailQuery,
  useGetSongDetailQuery,
} = shazamCoreApi;
