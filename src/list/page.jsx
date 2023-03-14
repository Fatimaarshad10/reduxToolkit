import React, { useState } from "react";
import Articles from "./list";

function Page({ data }) {
  console.log(data);
  const [votes, setVotes] = useState(data);
  const sortData = () => {
    const sortedData = [...votes].sort((a, b) => b.upvotes - a.upvotes);
    setVotes(sortedData);
  };
  const sortDate = () => {
    const sortedData = [...votes].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setVotes(sortedData);
  };
  return (
    <>
      <div class="d-grid gap-2 col-6 mx-auto pb-3 pt-3">
        <button class="btn btn-primary" type="button" onClick={sortData}>
          Most Upvoted
        </button>
        <button class="btn btn-primary" type="button" onClick={sortDate}>
          {" "}
          Most Recent
        </button>
      </div>
      <Articles data={votes} />
    </>
  );
}

export default Page;
