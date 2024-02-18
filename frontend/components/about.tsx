import React from "react";
import Image from "next/image";
import { TypographyH2 } from "@/components/typography/TypographyH2";
import { TypographyP } from "@/components/typography/TypographyP";
import { getAboutInfo, getEducationInfo } from "@/lib/fetch-data";
import { educationInfoTypes } from "@/Types";
import { imageUrlFor } from "@/lib/sanity";

const About = async () => {
    const aboutInfo = await getAboutInfo();
    const educationInfo: educationInfoTypes[] = await getEducationInfo();

    const { bio, aboutImage } = aboutInfo;
    return (
        <section
            className="flex flex-col md:flex-row items-start justify-center px-4 md:px-40"
            id="about"
        >
            <div className="flex flex-col items-center justify-center md:w-1/2">
                <Image
                    src={imageUrlFor(aboutImage.url).url()}
                    height={500}
                    width={500}
                    alt={aboutImage.alt || "image"}
                    className="object-contain"
                />
            </div>
            <div className="flex flex-col items-start justify-center md:w-1/2">
                <TypographyH2 className="mb-2">About me</TypographyH2>

                <TypographyP>{bio}</TypographyP>
                <h4 className="text-xl font-bold mt-4">Education: </h4>
                <div className="flex flex-col items-center justify-center w-full gap-2">
                    {educationInfo.map((education) => (
                        <div
                            className="flex flex-col w-full my-2"
                            key={education._id}
                        >
                            <div className="flex justify-between w-full">
                                <h5>
                                    {education.course}
                                    <span className="md:hidden text-purple-600">
                                        ({education.startYear} - 2025)
                                    </span>
                                </h5>
                                <h5 className="text-purple-600 font-semibold hidden md:block">
                                    ({new Date(education.endYear).getFullYear()}
                                    <span>-</span>
                                    {new Date(education.endYear).getFullYear()})
                                </h5>
                            </div>
                            <h5 className="text-purple-700 font-semibold">
                                {education.institute}, {education.location}
                            </h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
