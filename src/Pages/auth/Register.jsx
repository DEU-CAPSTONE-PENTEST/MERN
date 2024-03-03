import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../app/features/auth/authActions";
import Spinner from "../../Components/Spinner";
import Error from "../../Components/Error";
import { useEffect } from "react";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.auth);

  // success durumu true olduğunda yönlendirme
  useEffect(() => {
    if (success) {
      navigate("/auth/login"); // Yönlendirilecek sayfanın URL'sini buraya ekleyin
    }
  }, [success]);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Password mismatch");
    } else {
      // transform email string to lowercase to avoid case sensitivity issues in login
      formData.email = formData.email.toLowerCase();

      // Oluşturulan formData'dan confirmPassword'u çıkar
      const { confirmPassword, ...formDataWithoutConfirmPassword } = formData;

      dispatch(registerUser(formDataWithoutConfirmPassword));
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-10">
      <div className="flex flex-col items-center justify-center  py-8 mx-auto  lg:py-0 ">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          AlazSec
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-4 " onSubmit={handleSubmit}>
              {error && <Error>{error}</Error>}
              <div>
                <label htmlFor="firstName" className="register-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  className="register-input"
                  onChange={handleChange}
                  value={formData.firstname}
                  required
                />
              </div>
              <div>
                <label htmlFor="firstName" className="register-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  className="register-input"
                  onChange={handleChange}
                  value={formData.lastname}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="register-label">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="register-input"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="register-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="register-input"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="register-label">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="register-input"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="register-button"
                disabled={loading}
              >
                {loading ? <Spinner /> : "Create an account"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
