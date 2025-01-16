import React, { useState } from "react";
import ContentWrapper from "../../components/ContentWrapper";
import useFetch from "../../hooks/useFetch";
import Carousel from "../../components/carousel/Carousel";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

  return (
    <div className="relative mb-16 ">
      <ContentWrapper className="flex items-center justify-between mb-5">
        <span className="text-lg text-white font-normal">Trending </span>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
