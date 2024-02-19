import React from "react";
import Link from "next/link";
import ModeToggle from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Linkedin } from "lucide-react";
import { socialLinksTypes } from "@/Types";
import Image from "next/image";

const Menu = ({ socialLinks }: { socialLinks: socialLinksTypes }) => {
    const { github, twitter, linkedin } = socialLinks;

    return (
        <nav className="fixed top-0 w-full hidden md:flex items-center justify-between border-b shadow-md leading-10 py-3 px-6 lg:px-40 z-50 bg-muted">
            <div>
                <Link
                    href={"/"}
                    className="text-3xl font-bold tracking-wide primary_gradient_text"
                >
                    <Image
                        src={"/logo-no-background.svg"}
                        width={60}
                        height={60}
                        alt="logo"
                    />
                </Link>
            </div>
            <ul className={` hidden lg:flex`}>
                {["home", "about", "skills", "projects", "contact"].map(
                    (item) => (
                        <li key={item}>
                            {/* <Link href={item == "home" ? "/" : `#${item}`}> */}
                            <Button className="" variant={"link"}>
                                {item.toUpperCase()}
                            </Button>
                            {/* </Link> */}
                        </li>
                    )
                )}
            </ul>
            <div className={`hidden lg:flex items-center justify-center gap-3`}>
                <Link
                    href={github}
                    className="flex items-center justify-center"
                >
                    <Button size={"icon"} variant="outline">
                        <GitHubLogoIcon height={20} width={20} />
                    </Button>
                </Link>
                <Link
                    href={twitter}
                    className="flex items-center justify-center"
                >
                    <Button size={"icon"} variant="outline">
                        <TwitterLogoIcon height={20} width={20} />
                    </Button>
                </Link>
                <Link
                    href={linkedin}
                    className="flex items-center justify-center"
                >
                    <Button size={"icon"} variant="outline">
                        <Linkedin height={20} width={20} />
                    </Button>
                </Link>

                <ModeToggle />
            </div>
        </nav>
    );
};
export default Menu;
