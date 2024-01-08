import { FormInput, SubmitBtn } from "../Compoents";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login"></SubmitBtn>{" "}
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          guest user
        </button>
      </Form>
    </section>
  );
};

export default Login;
