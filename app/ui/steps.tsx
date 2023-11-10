import { Steps } from "@/app/lib/definitions";

export default function Steps({ listOfSteps, currentStep }: Steps) {
  //const listOfSteps = ["A", "B", "C", "D", "E", "F"];
  const renderSteps = () => {
    return (
      <ol
        className={`grid gri ${
          "grid-cols-" + listOfSteps.length
        } text-sm font-medium text-gray-500`}
      >
        {listOfSteps.map((item: String, index: number) => {
          return (
            <li
              className={`relative flex ${
                index === 0
                  ? "justify-start"
                  : index === listOfSteps.length - 1
                  ? "justify-end"
                  : "justify-center"
              }`}
            >
              <span
                className={`absolute -bottom-[1.75rem] rounded-full text-white ${
                  index + 1 <= currentStep ? "bg-blue-600" : "bg-gray-600"
                }`}
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>

              <span className="hidden sm:block"> {item} </span>
            </li>
          );
        })}
      </ol>
    );
  };
  return (
    <div>
      <h2 className="sr-only">Steps</h2>
      <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200">
        {renderSteps()}
      </div>
    </div>
  );
}
