import htmlIcon from "../../../assets/html.svg";
import cssIcon from "../../../assets/css.svg";
import javaScriptIcon from "../../../assets/javascript.svg";
import reactJsIcon from "../../../assets/react.svg";
import tailwindIcon from "../../../assets/tailwind.svg";

import csharpIcon from "../../../assets/c-sharp.svg";
import pythonIcon from "../../../assets/python.svg";
import javaIcon from "../../../assets/java.svg";
import dotnetIcon from "../../../assets/dotnet.svg";

import sqlServerIcon from "../../../assets/sql-server.svg";
import sqliteIcon from "../../../assets/sqlite.svg";

export interface Skill {
    name: string,
    icon: string,
}
export interface SkillSection {
    title: string,
    skills: Skill[]
}

const SkillSections: SkillSection[] = [
    {
        title: "FrontEnd",
        skills: [
            {
                name: "HTML",
                icon: htmlIcon
            },
            {
                name: "CSS",
                icon: cssIcon
            },
            {
                name: "JavaScript",
                icon: javaScriptIcon
            },
            {
                name: "ReactJS",
                icon: reactJsIcon
            },
            {
                name: "TailwindCSS",
                icon: tailwindIcon
            }
        ]
    },
    {
        title: "BackEnd",
        skills: [
            {
                name: "C#",
                icon: csharpIcon
            },
            {
                name: ".Net Core",
                icon: dotnetIcon
            },
            {
                name: "Python",
                icon: pythonIcon
            },
            {
                name: "Java",
                icon: javaIcon
            }
        ]
    },
    {
        title: "Databases",
        skills: [
            {
                name: "SQL Server",
                icon: sqlServerIcon
            },
            {
                name: "SQLite",
                icon: sqliteIcon
            }
        ]
    }
]

export default SkillSections;