import React from "react";
function Articles({ data }) {
  return (
<>
    
    <table class="table table-striped table-inverse">
  <thead>
  <tr   className = 'table-warning'>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
   
  </thead>
  <tbody>
  {data.map((data) => {
            return (
              <tr data-testid="article"key={data.id}>
                <td data-testid="article-title"  className = 'table-warning'>{data.title}</td>
                <td data-testid="article-upvotes"  className = 'table-warning'>{data.upvotes}</td>
                <td data-testid="article-date" className = 'table-warning'>{data.date}</td>
              </tr>
            );
          })}
    
    
  </tbody>
</table>
    </>
  );
}

export default Articles;
