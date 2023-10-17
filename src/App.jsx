import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import useLocalStorage from "./hooks/useLocalStorage";
import Input from "./components/Input";
import Clock from "./components/Clock";
import { useFormik } from "formik";
import * as Yup from "yup";

const random = () => Math.floor(Math.random() * 255);

const validationSchema = Yup.object({
  name: Yup.string().required("Le nom est requis"),
  firstName: Yup.string()
    .required("Le prénom est requis")
    .max(20, "Votre prénom est trop long"),
  age: Yup.number()
    .required("L'âge est requis")
    .min(18, "Vous devez avoir plus de 18 ans"),
});

function App() {
  const [count, setCount] = useLocalStorage("count", 0);
  const [color, setColor] = useState(
    `rgb(${random()},${random()},${random()})`
  );
  const [shouldShowClock, setShouldShowClock] = useState(true);

  const [list, setList] = useState([]);

  /*   const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }; */

  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    age: "",
  });

  const handleChange = (e, property) => {
    setFormData((prev) => ({
      ...prev,
      [property]: e.target.value,
    }));
  };

  const handleSubmit = (values) => {
    const newList = list.slice();
    newList.push(values);
    setList(newList);

    //setList(list => [...list, formData]);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      firstName: "",
      age: "",
    },
    validateOnChange: false,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  useEffect(() => {
    setColor(`rgb(${random()},${random()},${random()})`);
  }, [count]);

  const handleClick = (e) => {
    console.log(e);
    setCount((count) => count + 1);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Welcome name={formData.name}></Welcome>

      {shouldShowClock && <Clock />}

      <button onClick={() => setShouldShowClock((prev) => !prev)}>
        {shouldShowClock ? "Cacher" : "Afficher"} l&apos;horloge
      </button>
      <div className="card">
        <button
          style={{
            backgroundColor: color,
          }}
          onClick={(e) => handleClick(e, "params")}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="Nom"
          onChange={formik.handleChange}
          value={formik.values.name}
          name="name"
          id="name"
          error={formik.errors.name}
        />
        <Input
          label="Prénom"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          name="firstName"
          id="firstName"
          error={formik.errors.firstName}
        />
        <Input
          label="Âge"
          onChange={formik.handleChange}
          value={formik.values.age}
          name="age"
          id="age"
          error={formik.errors.age}
        />
        <button type="submit">Envoyer</button>
      </form>
      <ul>
        {list.map((element, index) => {
          return (
            <li key={index}>
              {element.firstName} {element.name}
            </li>
          );
        })}
      </ul>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
