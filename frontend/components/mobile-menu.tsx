"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import ModeToggle from "@/components/theme/mode-toggle";
import { Linkedin, Menu } from "lucide-react";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

import { socialLinksTypes } from "@/Types";

const MobileMenu = ({ socialLinks }: { socialLinks: socialLinksTypes }) => {
    const { github, twitter, linkedin } = socialLinks;

    return (
        <nav className="flex md:hidden items-center justify-between bg-secondary px-4 py-5 w-full fixed top-0 z-[10000]">
            <Sheet>
                <div className="flex items-center justify-between w-full  ">
                    <Link
                        href={"/"}
                        className="text-3xl font-bold tracking-wide primary_gradient_text"
                    >
                        Dhananjoy
                    </Link>
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                </div>
                <SheetContent className="flex justify-center">
                    <SheetHeader>
                        <div className="flex flex-col justify-between h-screen">
                            <ul className={` flex flex-col mt-24 gap-2`}>
                                {[
                                    "home",
                                    "about",
                                    "skills",
                                    "projects",
                                    "contact",
                                ].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={
                                                item == "home"
                                                    ? "/"
                                                    : `#${item}`
                                            }
                                        >
                                            <Button
                                                className=""
                                                variant={"link"}
                                            >
                                                {item.toUpperCase()}
                                            </Button>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div
                                className={`flex items-center justify-center gap-3 py-3`}
                            >
                                <Link href={new URL(github)}>
                                    <Button
                                        size={"icon"}
                                        variant="ghost"
                                        className="hover:bg-primary-foreground"
                                    >
                                        <GitHubLogoIcon className="h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href={new URL(twitter)}>
                                    <Button
                                        size={"icon"}
                                        variant="ghost"
                                        className="hover:bg-primary-foreground"
                                    >
                                        <TwitterLogoIcon className="h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href={new URL(linkedin)}>
                                    <Button
                                        size={"icon"}
                                        variant="ghost"
                                        className="hover:bg-primary-foreground"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </Button>
                                </Link>
                                <ModeToggle />
                            </div>
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
};

export default MobileMenu;
