import {
  siPython,
  siNumpy,
  siPandas,
  siScikitlearn,
  siTensorflow,
} from "simple-icons";

const brands = {
  python: siPython,
  numpy: siNumpy,
  pandas: siPandas,
  scikitlearn: siScikitlearn,
  tensorflow: siTensorflow,
};

// Brand paths come from Simple Icons. The other SVGs represent scientific tools.
export default function TechIcon({ name }) {
  const brand = brands[name];
  if (brand)
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d={brand.path} />
      </svg>
    );
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      aria-hidden="true"
    >
      {name === "plot" && (
        <>
          <circle cx="24" cy="24" r="17" />
          <path d="M24 7v34M7 24h34M12 12l24 24M12 36l24-24" />
          <path d="m10 29 8-12 9 14 10-12" strokeWidth="3" />
        </>
      )}
      {name === "waves" && (
        <>
          <path d="M5 16c8-14 12 14 20 0s12 14 18 0M5 25c8-14 12 14 20 0s12 14 18 0M5 34c8-14 12 14 20 0s12 14 18 0" />
        </>
      )}
      {name === "tableau" && (
        <>
          <path d="M24 7v16m-8-8h16M24 28v13m-7-6h14M7 19v13M1 25h13M41 19v13m-7-7h13" />
        </>
      )}
      {name === "stats" && (
        <>
          <path d="M7 6v35h35M12 33l9-12 9 5L42 9" />
          <circle cx="21" cy="21" r="2" />
          <circle cx="30" cy="26" r="2" />
        </>
      )}
    </svg>
  );
}
