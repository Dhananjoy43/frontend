import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypographyH2 } from "./typography/TypographyH2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { getSkilllsInfo } from "@/lib/fetch-data";
import { imageUrlFor } from "@/lib/sanity";
import { technologyTypes } from "@/Types";

const Skills = async () => {
    const skillsData = await getSkilllsInfo();
    return (
        <section
            className="flex flex-col items-center justify-center px-4 md:px-40 my-10"
            id="skills"
        >
            <TypographyH2 className="mb-2">Skills</TypographyH2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {skillsData.map((skill: any) => (
                    <Card className="" key={skill._id}>
                        <CardHeader>
                            <CardTitle>{skill.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {skill.technologies.map(
                                (technology: technologyTypes) => (
                                    <Link
                                        href={technology.documentation}
                                        key={technology.name}
                                    >
                                        <Button
                                            variant={"outline"}
                                            size={"sm"}
                                            className="flex items-center justify-center gap-1"
                                        >
                                            <Image
                                                src={imageUrlFor(
                                                    technology.icon
                                                ).url()}
                                                width={14}
                                                height={14}
                                                alt={technology.name}
                                            />
                                            {technology.name}
                                        </Button>
                                    </Link>
                                )
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Skills;
