import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../store/actions/singleAction";
import { getUser } from "../store/actions/userAction";
import { fetchSingle } from "../store/apis";
import "./Home.css";
import { Loader } from "./loader/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const data = useSelector((state) => state?.userreducer?.user);
  const single = useSelector((state) => state?.singleuserreducer?.single);
  console.log(single);
  const redirectSingle = (id) => {
    console.log(id);
    dispatch(getSingleUser(id, setLoading));
  };
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div className=" mt-4">
      <Container className="d-flex align-items-center  justify-content-center flex-column containerDiv">
        {single.first_name ? (
          <>
            {!loading ? (
              <>
                {" "}
                <div className="imgDiv">
                  <img src={single?.avatar} alt="" />
                </div>
                <h1 className="heading">user Info</h1>
                <h3 className="title">
                  {single?.first_name} {single?.last_name}
                </h3>
                <h4 className="title mb-2">Email:{single?.email}</h4>
              </>
            ) : (
              <h2 className="title">Loading....</h2>
            )}
          </>
        ) : (
          <h2 className="title"> Please Select Card</h2>
        )}
      </Container>

      <Container className="d-flex justify-content-center ">
        {data &&
          data[0]?.map((item, index) => {
            return (
              <div className="d-flex mt-4 mb-4 me-4 ">
                <Button onClick={() => redirectSingle(item?.id)}>
                  {item?.first_name}
                </Button>
              </div>
            );
          })}
      </Container>
    </div>
  );
};

export default Home;
