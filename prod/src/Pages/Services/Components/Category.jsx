import "./../Styles/category.css";

function Category(props) {
  const data = props.categories;
  const services = data.map((e) => {
    return (
      <Product
        title={e}
        key={e}
        productTitle={props.title}
        selectedService={props.selectedService}
        setselectedService={props.setselectedService}
      />
    );
  });
  return (
    <div className="category">
      <div className="category--title">
        <div className="ct--title">{props.title}</div>
        <div className="apply">
          <CheckBox
            service={props.title}
            isHead={true}
            categories={data}
            selectedService={props.selectedService}
            setselectedService={props.setselectedService}
          />
        </div>
      </div>
      {services}
    </div>
  );
}

function Product({ title, productTitle, selectedService, setselectedService }) {
  return (
    <div className="product ">
      <div className="product--dis ct--title">{title}</div>
      <div className="apply">
        <CheckBox
          service={title}
          isHeasd={false}
          productTitle={productTitle}
          selectedService={selectedService}
          setselectedService={setselectedService}
        />
      </div>
    </div>
  );
}

function CheckBox({
  service,
  isHead,
  productTitle,
  categories,
  setselectedService,
  selectedService,
}) {
  function HandleClick(serviceName, isHead, productTitle) {
    const updatedSelectedService = selectedService.map((category) => {
      if (isHead) {
        if (category.title === serviceName) {
          const newHeadState = !category[serviceName];

          Object.keys(category.services).forEach((subcategory) => {
            category.services[subcategory] = newHeadState;
            const subcategoryElement = document.getElementById(subcategory);
            if (subcategoryElement) {
              subcategoryElement.style.backgroundColor = newHeadState
                ? "white"
                : "black";
            }
          });

          const categoryElement = document.getElementById(serviceName);
          if (categoryElement) {
            categoryElement.style.backgroundColor = newHeadState
              ? "white"
              : "black";
          }

          return {
            ...category,
            [serviceName]: newHeadState,
            services: { ...category.services },
          };
        }
      } else {
        if (category.title === productTitle) {
          const newSubcategoryState = !category.services[serviceName];
          category.services[serviceName] = newSubcategoryState;

          const allSubcategoriesSelected = Object.values(
            category.services
          ).every((subcategory) => subcategory);

          const categoryElement = document.getElementById(productTitle);
          if (categoryElement) {
            categoryElement.style.backgroundColor = allSubcategoriesSelected
              ? "white"
              : "black";
          }

          const subcategoryElement = document.getElementById(serviceName);
          if (subcategoryElement) {
            subcategoryElement.style.backgroundColor = newSubcategoryState
              ? "white"
              : "black";
          }

          return {
            ...category,
            [productTitle]: allSubcategoriesSelected,
          };
        }
      }
      return category;
    });

    setselectedService(updatedSelectedService);
  }

  return (
    <div
      className="checkbox"
      id={`${service}`}
      onClick={(e) => {
        HandleClick(service, isHead, productTitle, categories);
      }}
    >
      <svg
        fill="#000000"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        viewBox="0 0 335.765 335.765"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795 "></polygon>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );
}

export default Category;
