import Input from "../components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addPerson, removePerson } from "../redux/actions/peopleActions";
import { addPost, removePost } from "../redux/actions/postsActions";

const validationSchema = Yup.object({
  title: Yup.string().required("Le titre est requis"),
  content: Yup.string().required("Le contenu est requis"),
});

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(addPost(values.title, values.content));
  };

  const handleDelete = (id) => {
    dispatch(removePost(id));
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validateOnChange: false,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="Titre"
          onChange={formik.handleChange}
          value={formik.values.title}
          name="title"
          id="title"
          error={formik.errors.title}
        />
        <Input
          label="Contenu"
          onChange={formik.handleChange}
          value={formik.values.content}
          name="content"
          id="content"
          error={formik.errors.content}
        />

        <button type="submit">Envoyer</button>
      </form>
      <ul style={{ listStyle: "none" }}>
        {posts.map((element, index) => {
          return (
            <li key={index}>
              <div>
                <h3>{element.title}</h3>
                <p>{element.content}</p>
                <button onClick={() => handleDelete(element.id)}>
                  Supprimer
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Posts;
