// formSchema validation goes here
// need to INSTALL YUP IN THE COMMAND LINE STILL

import * as Yup from "yup";

const formSchema = Yup.object().shape({
name: Yup
.string()
.min(2, "Name must be at least 2 characters long.")
.required("Name is required"),

})

export default formSchema;