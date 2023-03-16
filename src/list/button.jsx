import React, { useState } from "react";
import Articles from "./articles";
import styled from "styled-components";

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
  const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 1rem 1rem;
    border: none;
    font-weight: 800;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.thirdBg.backgroundColor};
  `;
  return (
    <>
      <div class="d-grid gap-2 col-6 mx-auto pb-3 ">
        <Button onClick={sortData}>Most Upvoted</Button>
        <Button onClick={sortDate}>Most Recent</Button>
      </div>
      <Articles data={votes} />
    </>
  );
}

export default Page;
