import CategoryForm from "./CategoryForm";
import "./styles.css";
import { Card } from "antd";

export default function App() {
  return (
    <Card>
      <CategoryForm></CategoryForm>
    </Card>
  );
}

// Goal: create a beautiful UI to allow users to input data. Data format is as follows:
// [
//   {
//     id: categoryName,
//     value: [
//       {
//         id: subCategoryName,
//         value: {
//           description: "Description of this!",
//           type: "Type of this! string / int / boolean "
//         }
//       },
//     ]
//   },
// ]

// Allow users to add unlimited categories and subcategories.
// Once user is satisfied, they can click "Submit" to console.log()

// Resources:
// https://ant.design/
// https://mui.com/material-ui/all-components/
