import React from "react";
import { TypographyH2 } from "./typography/TypographyH2";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { getProjectsInfo } from "@/lib/fetch-data";
import { projectTypes } from "@/Types";
import { imageUrlFor } from "@/lib/sanity";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LinkIcon } from "lucide-react";

const Projects = async () => {
    const projects = await getProjectsInfo();

    return (
        <section
            className="flex flex-col items-center justify-center px-4 md:px-40 my-10"
            id="projects"
        >
            <TypographyH2 className="mb-2">Projects</TypographyH2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full place-items-center">
                {projects.map((project: projectTypes) => (
                    <Card key={project._id}>
                        <CardContent className=" p-2 py-0">
                            <Image
                                src={imageUrlFor(project.coverImage).url()}
                                height={300}
                                width={300}
                                alt="Online World Logo"
                            />
                        </CardContent>
                        <CardHeader className="px-6 py-2">
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription className="flex items-center justify-center gap-1">
                                {project.technologies.map((technology) => (
                                    <Button
                                        key={technology.name}
                                        variant={"outline"}
                                        size={"sm"}
                                    >
                                        <Link
                                            href={technology.documentation}
                                            className="flex items-center justify-center gap-1"
                                        >
                                            {technology.name}
                                        </Link>
                                    </Button>
                                ))}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="grid grid-cols-2 gap-2">
                            <Button size={"sm"}>
                                <Link
                                    href={project.projectLink || "/"}
                                    className="flex items-center justify-center gap-2"
                                >
                                    <LinkIcon size={14} />
                                    Live Demo
                                </Link>
                            </Button>
                            <Button size={"sm"}>
                                <Link
                                    href={project.githubLink || "/"}
                                    className="flex items-center justify-center gap-2"
                                >
                                    <GitHubLogoIcon />
                                    Github
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Projects;
