import {
    Code2,
    CodeIcon,
    Folder,
    LightbulbIcon,
    Mail,
    PenTool,
    SmilePlus,
    User,
} from "lucide-react";

/**
 * Constant array defining navigation items.
 * Each item represents a link in the site's navigation.
 */
export const navItems = [
    {
        id: "about",
        Icon: User,
        label: "About",
        path: "/about",
    },
    {
        id: "projects",
        Icon: Folder,
        label: "Projects",
        path: "/projects",
    },
    {
        id: "redesigns",
        Icon: PenTool,
        label: "Redesigns",
        path: "/redesigns",
    },
    {
        id: "skills",
        Icon: Code2,
        label: "Skills",
        path: "/skills",
    },
    {
        id: "contact",
        Icon: Mail,
        label: "Contact",
        path: "/contact",
    },
];

/**
 * Constant array defining items for an accordion component.
 * Each item represents a section with a command and rich content.
 */
export const accordionItems = [
    {
        id: "acc-1",
        icon: CodeIcon,
        command: "cat /etc/coding-manifesto.conf",
        content: (
            <>
                <span className="text-accent font-bold">[CONFIG]</span>{" "}
                CODE_POLICY = CLEAN_CODE_FIRST
                <br />
                <br />I treat every project like a mission: Write code that
                scales and leaves no technical debt. My goal is to build digital
                architecture so clean, optimized, and invisible that the user
                only notices the fluid, intentional experience—not the
                complexity beneath. Code should be an elegant engine, not a
                bulky framework.
            </>
        ),
    },
    {
        id: "acc-2",
        icon: LightbulbIcon,
        command: "history | grep 'initial_commit'",
        content: (
            <>
                <span className="text-accent font-bold">[LOG]</span> 2023-10-01:
                initial_commit_found
                <br />
                <br />
                My journey wasn't a planned career path. It was pure curiosity:
                one random day, I woke up and decided to learn coding. That
                simple decision to understand "how the web works" quickly turned
                into a love for building, refactoring, and optimizing digital
                solutions from the ground up.
            </>
        ),
    },
    {
        id: "acc-3",
        icon: SmilePlus,
        command: "echo 'Get-Motivation | Format-List'",
        content: (
            <>
                <span className="text-accent font-bold">[INFO]</span>{" "}
                Motivation_Source: HIGH-STAKES
                <br />
                <br />
                Fun fact: I am just a 25-year-old developer who collects{" "}
                <span className="text-accent">RC Toys</span> and obsesses over
                custom audio, especially high-fidelity{" "}
                <span className="text-accent">Acoustic Engineering</span>. I
                need funds to support these habits, so I code. It’s the perfect,
                high-stakes motivation loop.
            </>
        ),
    },
];
