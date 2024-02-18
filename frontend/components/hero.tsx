import Image from "next/image";
import React from "react";
import { TypographyH2 } from "@/components/typography/TypographyH2";
import { TypographyH1 } from "@/components/typography/TypographyH1";
import { TypographyP } from "@/components/typography/TypographyP";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { getHeroData } from "@/lib/fetch-data";
import { imageUrlFor, getFileUrl } from "@/lib/sanity";

const Hero = async () => {
    const data = await getHeroData();
    const { name, intro, profession, resume, heroImage } = data;

    return (
        <main className="h-screen w-full flex flex-col-reverse md:flex-row justify-center items-center gap-16 px-4 md:px-40">
            <div className="flex flex-col md:w-1/2 items-start">
                <h2 className="text-2xl">Hi, I am </h2>
                <TypographyH2 className="secondary_gradient_text text-4xl">
                    {name}
                </TypographyH2>
                <TypographyH1 className="text-5xl font-bold primary_gradient_text">
                    {profession}
                </TypographyH1>
                <TypographyP className="mt-0">{intro}</TypographyP>
                <a
                    href={`${getFileUrl(resume)}?dl=`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button className="bg-purple-600 hover:bg-purple-700 mt-5 gap-2">
                        <Download />
                        Download Resume
                    </Button>
                </a>
            </div>
            <div className="">
                <Image
                    src={imageUrlFor(heroImage.url).url()}
                    height={500}
                    width={500}
                    className="object-contain"
                    alt={heroImage.alt || "Hero Image"}
                />
            </div>
        </main>
    );
};

export default Hero;
