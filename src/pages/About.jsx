import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-24 w-11/12 md:w-5/6 mx-auto ">
      <div className="flex justify-between items-center">
        <div className="min-w-96">
          <img
            src="https://drishtifoundation.org/wp-content/uploads/2021/02/about.png"
            alt="about us"
          />
        </div>
        <p className="text-justify capitalize text-slate-500">
          we're not your average company. We're a band of creative misfits,
          dreamers, and doers on a mission to inject a little whimsy into the
          world. Born out of a shared love for all things quirky, we've made it
          our mission to celebrate individuality, creativity, and the joy of
          embracing the unexpected. Whether it's through our offbeat products,
          eccentric services, or out-of-the-box thinking, we're here to spread
          smiles and spark imaginations. From our headquarters nestled in the
          heart of [imaginary town], we're constantly dreaming up new ways to
          delight and surprise our customers. Our team is a colorful tapestry of
          talents, united by a passion for pushing boundaries and challenging
          the status quo. At QuirkyCo, we believe that life's too short to be
          boring. That's why we're dedicated to infusing every interaction,
          every product, and every moment with a healthy dose of quirkiness. So,
          whether you're a fellow eccentric soul or just someone looking to add
          a little whimsy to your day, we invite you to join us on this
          wonderfully weird journey.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-justify capitalize text-slate-500">
          Certainly! Here's a condensed paragraph version: --- **Support at
          NEET:** At NEET, we're committed to providing exceptional support to
          our customers. Whether you have questions, need assistance, or want to
          provide feedback, our dedicated support team is ready to help. You can
          reach us via phone, email, or live chat during our business hours, and
          expect a prompt response. Our team consists of knowledgeable experts
          who are here to assist you with any issues or inquiries you may have.
          Additionally, we offer self-service resources such as a comprehensive
          knowledge base and FAQs to help you find answers quickly. Your
          feedback is important to us, as it helps us continuously improve our
          products and services. At NEET, we're dedicated to ensuring your
          satisfaction and providing the support you need every step of the way.
        </p>
        <div className="min-w-96">
          <img
            src="https://astrotalk.com/astrology-blog/wp-content/uploads/2023/07/illustration-people-on-bar-charts-9.png"
            alt="support image"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="min-w-96">
          <img
            src="https://png.pngtree.com/png-clipart/20230525/original/pngtree-friendly-text-png-image_9169849.png"
            alt=" image"
          />
        </div>

        <p className="text-justify capitalize text-slate-500">
          At Friendly Tutors, we believe that learning should be an enjoyable
          journey filled with encouragement, support, and camaraderie. Our team
          of dedicated tutors is here to guide you through your academic
          challenges with a smile and a helping hand.
        </p>
      </div>
    </div>
  );
};

export default About;
