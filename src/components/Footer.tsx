import { execSync } from "child_process";

const getLastUpdatedLabel = () => {
  try {
    const commitDate = execSync("git log -1 --format=%cs", {
      cwd: process.cwd(),
      encoding: "utf8",
    }).trim();

    const [year, month] = commitDate.split("-").map(Number);

    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(new Date(year, month - 1, 1));
  } catch {
    return "Unavailable";
  }
};

const Footer = () => {
  const lastUpdated = getLastUpdatedLabel();

  return (
    <div className="bg-stanley-white-100 flex flex-col items-center pb-2">
      <p>© 2025 Stanley Lew</p>
      <p>Last Updated: {lastUpdated}</p>
    </div>
  );
};

export default Footer;
