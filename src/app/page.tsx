import Photo from "@/components/photo/Photo";
import Social from "@/components/social/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <main className="flex flex-col xl:flex-row mx-auto xl:px-24 px-4 items-center justify-between">
      {/* text */}
      <div className="text-center xl:text-left ">
        <h2 className="text-lg">Software Developer</h2>
        <h1 className="h1">
          Hello I'm <br /> <span className="text-accent">Gideon Abbey</span>
        </h1>
        <p className=" max-w-[500px] mb-9 text-white/40">
          I specialize in creating elegant, intuitive web applications that deliver seamless and delightful user experiences,
          leveraging expertise in a wide range of programming languages and technologies.</p>
        {/* button and socials */}
        <div className="flex flex-col xl:flex-row gap-2 items-center">
          <Button
          variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2"
          >Download CV
            <FiDownload/>
          </Button>  
          {/* socials */}
          <div>
            <Social
              containerStyle='flex items-center gap-4'
              iconStyle="w-9 h-9 border border-accent rounded-full flex items-center 
              justify-center hover:bg-accent hover:text-white transition-all"
            />
          </div>
      </div>
      </div>
      {/* photo */}
      <div>
        <Photo />
      </div>
    </main>
  );
}
