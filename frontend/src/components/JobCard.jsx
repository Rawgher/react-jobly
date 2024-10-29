import "./JobCard.css";

function JobCard({ data }) {
  return (
    <div className="JobCard">
      <div className="JobCard-body" key={data.id}>
        <h3>{data.title}</h3>
        <p>{data.salary}</p>
        <p>{data.equity}</p>
      </div>
    </div>
  );
}

export default JobCard;
