import React, { useState } from "react";
import { Input, Button, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const CategoryForm = () => {
  const [categories, setCategories] = useState([
    {
      id: "",
      value: [
        {
          id: "",
          value: {
            description: "",
            type: "",
          },
        },
      ],
    },
  ]);

  const handleCategoryChange = (e, categoryIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].id = e.target.value;
    setCategories(updatedCategories);
  };

  const handleSubCategoryChange = (e, categoryIndex, subCategoryIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].value[subCategoryIndex].id =
      e.target.value;
    setCategories(updatedCategories);
  };

  const handleDescriptionChange = (e, categoryIndex, subCategoryIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].value[subCategoryIndex].value.description =
      e.target.value;
    setCategories(updatedCategories);
  };

  const handleTypeChange = (e, categoryIndex, subCategoryIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].value[subCategoryIndex].value.type =
      e.target.value;
    setCategories(updatedCategories);
  };

  const handleAddCategory = () => {
    const updatedCategories = [...categories];
    updatedCategories.push({
      id: "",
      value: [
        {
          id: "",
          value: {
            description: "",
            type: "",
          },
        },
      ],
    });
    setCategories(updatedCategories);
  };

  const handleAddSubCategory = (categoryIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].value.push({
      id: "",
      value: {
        description: "",
        type: "",
      },
    });
    setCategories(updatedCategories);
  };

  const handleSubmit = () => {
    console.log(categories);
  };

  return (
    <div>
      {categories.map((category, categoryIndex) => (
        <Card
          title={`Category ${categoryIndex + 1}`}
          style={{ marginBottom: "12px" }}
          key={categoryIndex}
        >
          <div>
            <Input
              value={category.id}
              onChange={(e) => handleCategoryChange(e, categoryIndex)}
              placeholder="Category Name"
              style={{ marginBottom: "8px" }}
            />
            {category.value.map((subCategory, subCategoryIndex) => (
              <div key={subCategoryIndex}>
                <Input
                  value={subCategory.id}
                  onChange={(e) =>
                    handleSubCategoryChange(e, categoryIndex, subCategoryIndex)
                  }
                  placeholder="Subcategory Name"
                  style={{ marginBottom: "8px" }}
                />
                <TextArea
                  value={subCategory.value.description}
                  onChange={(e) =>
                    handleDescriptionChange(e, categoryIndex, subCategoryIndex)
                  }
                  placeholder="Description"
                  autoSize={{ minRows: 2, maxRows: 6 }}
                  style={{ marginBottom: "8px" }}
                />
                <Input
                  value={subCategory.value.type}
                  onChange={(e) =>
                    handleTypeChange(e, categoryIndex, subCategoryIndex)
                  }
                  placeholder="Type"
                  style={{ marginBottom: "8px" }}
                />
              </div>
            ))}
            <Button
              type="dashed"
              onClick={() => handleAddSubCategory(categoryIndex)}
              block
              icon={<PlusOutlined />}
            >
              Add Subcategory
            </Button>
          </div>
        </Card>
      ))}
      <Button
        type="dashed"
        onClick={handleAddCategory}
        block
        icon={<PlusOutlined />}
        className="mb-4"
      >
        Add Category
      </Button>
      <Button
        type="primary"
        onClick={handleSubmit}
        style={{ marginTop: "16px" }}
      >
        Submit
      </Button>
    </div>
  );
};

export default CategoryForm;
