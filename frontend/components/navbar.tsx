import React from "react";
import Menu from "@/components/menu";
import MobileMenu from "@/components/mobile-menu";

import { getSocialLinks } from "@/lib/fetch-data";
import { socialLinksTypes } from "@/Types";

const Navbar = async () => {
    const socialLinks: socialLinksTypes = await getSocialLinks();

    return (
        <header>
            <Menu socialLinks={socialLinks} />
            <MobileMenu socialLinks={socialLinks} />
        </header>
    );
};

export default Navbar;
