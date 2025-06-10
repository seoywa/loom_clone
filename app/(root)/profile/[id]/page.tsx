import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";
import React from "react";

const ProfileIDPage = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="adrian@jsmastery.pro"
        title="Adrian | JSM"
        userImg="/assets/images/dummy.jpg"
      />

      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard {...card} key={card.id} />
        ))}
      </section>
    </div>
  );
};

export default ProfileIDPage;
