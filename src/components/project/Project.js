import { Card } from "flowbite-react";
const Project = ({name, img, desc,url}) => {
    return (
        <Card
          className="max-w-sm p-2 bg-gray-900 border-gray-700"
          imgAlt="Imagen del proyecto."
          imgSrc={img}
        >
          <div className="py-2">
            <h5 className="text-2xl font-bold font-spotify tracking-tight text-white">
              {name}
            </h5>
            <p className="font-normal text-gray-500 leading-4">
              {desc}
            </p>
          </div>
          
        </Card>
      );
}
 
export default Project;