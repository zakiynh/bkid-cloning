import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenus } from "../store/actions/actionCreator";
import { useNavigate } from "react-router-dom";

export default function ItemCard() {
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.menus.menus);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMenus());
  }, [dispatch]);

  const handleNavigate = (id) => {
    const selectedMenu = menus.find(menu => menu.id === id)
    navigate(`/detail/${id}`, { state: { menuData: selectedMenu } });
  }

  return (
    <div className="row">
      {menus &&
        menus.map((menu, index) => (
          <div key={index} className="col-md-4 custom-margin-card">
            <div
              className="card mb-3 custom-height d-flex flex-column"
              style={{ cursor: "pointer" }}
              onClick={() => handleNavigate(menu.id)}
            >
              <img
                src={menu.imageUrl}
                className="card-img-top"
                alt={menu.name}
              />
              <div className="card-body">
                <h5 className="card-title mb-2">{menu.name}</h5>
                <button className="btn-primary-custom">Order</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
