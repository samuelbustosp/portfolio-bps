import { Card } from "flowbite-react";
const Project = ({name, img, desc,url}) => {
    return (
        <Card
          className="max-w-sm"
          imgAlt="Imagen del proyecto."
          imgSrc={img}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {desc}
          </p>
        </Card>
      );
}
 
export default Project;