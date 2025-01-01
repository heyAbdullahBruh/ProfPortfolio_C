import About from "@/Components/About/About";

export const metadata = {
  title: "About Abdullah",
  description: "Hello! I’m Abdullah Shayed. I am a passionate web developer with 4 years of experience in building modern, scalable, and user-friendly web applications. My expertise lies in MEARNN technologies—MongoDB, Express, React, Node.js, and Next.js—allowing me to deliver efficient and cutting-edge solutions for businesses across various industries.",
};

const page = () => {
    return (
        <>
          <About/>
        </>
    );
};

export default page;