import React from "react";

const CardWithImage = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm mt-8 p-4">
      <figure className="md:w-1/2 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <img
          src="https://img.freepik.com/free-photo/smiley-man-holding-clothes-front-view_23-2150082965.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New Products are here!</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          natus, cupiditate nemo veritatis laboriosam ducimus illo. Aspernatur
          maiores doloribus officiis delectus reprehenderit accusantium,
          aperiam, cumque ipsa accusamus saepe, natus numquam.
        </p>{" "}
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          natus, cupiditate nemo veritatis laboriosam ducimus illo. Aspernatur
          maiores doloribus officiis delectus reprehenderit accusantium,
          aperiam, cumque ipsa accusamus saepe, natus numquam.
        </p>{" "}
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          natus, cupiditate nemo veritatis laboriosam ducimus illo. Aspernatur
          maiores doloribus officiis delectus reprehenderit accusantium,
          aperiam, cumque ipsa accusamus saepe, natus numquam.
        </p>{" "}
        <div className="card-actions justify-end">
          <a href="#products">
            <button className="btn btn-primary">Shop</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardWithImage;
