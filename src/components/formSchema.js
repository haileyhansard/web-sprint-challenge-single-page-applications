// formSchema validation goes here
// need to INSTALL YUP IN THE COMMAND LINE STILL

import * as Yup from "yup";

const formSchema = Yup.object().shape({
name: Yup
.string()
.min(2, "Name must be at least 2 characters long.")
.required("Name is required"),

size: Yup
.string()
.oneOf(['Small', 'Medium', 'Large', 'X-Large'], "Please select a size"),

instructions: Yup
.string()
.min(2, "Please include special instructions"),

toppings: Yup
.boolean()
.oneOf([true], "Please select at least 1 topping"),

})

export default formSchema;