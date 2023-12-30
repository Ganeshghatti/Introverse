import React from "react";

export default function Team() {
  return (
    <section id="team" className="mt-20 flex flex-col gap-20">
      <p className="text-7xl md:text-4xl text-left team-title text-white md:text-center">
        Our Team
      </p>
      <div className="flex items-center md:flex-col w-3/4 md:w-full justify-around m-auto md:gap-12">
        <div className="team-div">
          <img src="Nilesh.png" />
          <p className="team-name">Nilesh Kumar Gupta</p>
          <p className="team-role">Founder & CEO</p>
        </div>{" "}
        <div className="team-div">
          <img src="Kanak.png" />
          <p className="team-name">Kanak Raj Tomar</p>
          <p className="team-role">Co-Founder & CMO</p>
        </div>{" "}
        <div className="team-div">
          <img src="Navjot.png" />
          <p className="team-name">Navjot Singh</p>
          <p className="team-role">Co-Founder & CTO</p>
        </div>
      </div>
    </section>
  );
}
