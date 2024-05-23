import React from "react";

import Bounded from "./Bounded";
import Button from "./Button";
import Avatar from "./Avatar";

const Biography = () => {
    const data = {
        name: "About Lipu",
        des: `Hey there! I'm Lipu, a MERN stack developer with a passion for crafting delightful web experiences. My journey into coding began with a curiosity for how technology shapes our world, and since then, I've been hooked on the thrill of turning ideas into reality through lines of code. 
        I specialize in MongoDB, Express.js, React.js, and Node.js, collectively known as the MERN stack. With these tools, I build sleek, responsive web applications that not only look great but also perform flawlessly. From designing intuitive user interfaces to architecting robust backend systems, I'm here to bring your vision to life. I believe in the power of simplicity and elegance in design and code. By staying up-to-date with the latest technologies and following best practices, I ensure that my solutions are not just functional but also maintainable and scalable in the long run.`,
        avatar: "/IMG2.1.jpg"
    }

  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr_1fr]">
        <h1 className="text-7xl md:text-9xl font-bold col-start-1">
          {data.name}
        </h1>
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          Hey there! I'm Lipu, a MERN stack developer with a passion for
          crafting delightful web experiences. My journey into coding began with
          a curiosity for how technology shapes our world, and since then, I've
          been hooked on the thrill of turning ideas into reality through lines
          of code. <br />
          <br />
          I specialize in MongoDB, Express.js, React.js, and Node.js,
          collectively known as the MERN stack. With these tools, I build sleek,
          responsive web applications that not only look great but also perform
          flawlessly. From designing intuitive user interfaces to architecting
          robust backend systems, I'm here to bring your vision to life. <br />
          <br />I believe in the power of simplicity and elegance in design and
          code. By staying up-to-date with the latest technologies and following
          best practices, I ensure that my solutions are not just functional but
          also maintainable and scalable in the long run.
        </div>
        <Button
          label={"Resume"}
          showIcon={true}
          target={"_blank"}
          url={
            "https://drive.google.com/file/d/1dZDzF02jqzY9fTXagBPNX063AEf5FKdY/view?usp=sharing"
          }
          
        />

        <div className="row-start-1 max-w-sm md:col-start-2 md:row-end-3">
          <Avatar img={data.avatar} />
        </div>
      </div>
    </Bounded>
  );
};

export default Biography;
