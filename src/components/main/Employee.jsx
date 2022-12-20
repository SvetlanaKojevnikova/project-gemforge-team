function Employee(props) {
  const {
    image,
    firstName,
    lastName,
    jobTitle,
    placeOfWork,
    placeOfWork2,
    telephon,
    mail,
  } = props;
  return (
    <div className="section__employee">
      <div>{image}</div>
      <div className="section__employee-name">
        {lastName} {firstName}
      </div>
      <div className="section__employee-job">{jobTitle}</div>
      <div className="section__employee-placeWork">
        {placeOfWork}
        <br />
        {placeOfWork2}
      </div>
      <div className="section__employee-tel">{telephon}</div>
      <div className="section__employee-email">{mail}</div>
    </div>
  );
}
export default Employee;
