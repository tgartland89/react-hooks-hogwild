import PigFilter from "./PigFilter";
import PigTile from "./PigTile";
import { useState } from "react";

function Pigs({ hogs }) {


  const [selectedCategory, setSelectedCategory] = useState("All");

  const onOptionSelect = (option) => {
    setSelectedCategory(option);
  };

  const greasedPigsFilter = hogs.filter((hog) => {
    if (selectedCategory === "All") {
      return true;
    }
    else if (selectedCategory === "Greased") {
      return hog.greased;
    }
    else {
      return !hog.greased;
    }
  });

  const pigsToDisplay = greasedPigsFilter.map((hog) => {
    return (
      <PigTile
        key={hog.name}
        name={hog.name}
        image={hog.image}
        weight={hog.weight}
        greased={hog.greased}
        specialty={hog.specialty}
        highestMedal={hog["highest medal achieved"]}
      />
    );
  });
  return (
    <div>
      <PigFilter onOptionSelect={onOptionSelect} />
      <div className="porkers">{pigsToDisplay}</div>
    </div>
  );
}

export default Pigs;