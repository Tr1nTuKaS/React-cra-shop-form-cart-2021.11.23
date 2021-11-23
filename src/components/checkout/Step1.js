import UserForm from "../UserForm";

function Step1(props) {
  return (
    <section>
      <h2>Step 1 - user details</h2>
      <h4>Enter you details</h4>
      <UserForm />
      <div className="controlls">
        <button onClick={() => props.setStep(0)}>Back</button>
        <button onClick={() => props.setStep(2)}>Next</button>
      </div>
    </section>
  );
}

export default Step1;
