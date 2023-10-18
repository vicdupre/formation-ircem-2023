import { useEffect, useState } from "react";

import Welcome from "../components/Welcome";
import useLocalStorage from "../hooks/useLocalStorage";
import Input from "../components/Input";
import Clock from "../components/Clock";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addPerson, removePerson } from "../redux/actions/peopleActions";

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

const Home = () => {
  const [count, setCount] = useLocalStorage("count", 0);
  const [color, setColor] = useState(
    `rgb(${random()},${random()},${random()})`
  );
  const [shouldShowClock, setShouldShowClock] = useState(true);

  const people = useSelector((state) => state.people);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    age: "",
  });

  const handleSubmit = (values) => {
    dispatch(addPerson(values.name, values.firstName, values.age));
  };

  const handleDelete = (id) => {
    dispatch(removePerson(id));
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
        {people.map((element, index) => {
          return (
            <li key={index}>
              {element.firstName} {element.name}{" "}
              <button onClick={() => handleDelete(element.id)}>
                Supprimer
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
