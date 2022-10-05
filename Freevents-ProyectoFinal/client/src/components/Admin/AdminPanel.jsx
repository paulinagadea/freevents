import React from "react";
import Button from "@material-ui/core/Button"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviders, getAllClients, getPacks, getOrder, } from "../actions";
import { Box, Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const AdminPanel = (props) => {
    const dispatch = useDispatch();
    const [info, setInfo] = useState({
      setHome: true,
      setProviders: false,
      setClients: false,
      setPacks: false,
      setOrder: false
    });
    const handleInfo = (e) => {
      if (e.target.value === "home") {
        setInfo({
          ...info,
            setHome: true,
            setProviders: false,
            setClients: false,
            setPacks: false,
            setOrder: false
        });
      }
      if (e.target.value === "provider") {
        setInfo({
          ...info,
          setHome: false,
          setProvider: true,
          setClient: false,
          setPacks: false,
          setOrder: false
        });
      }
      if (e.target.value === "client") {
        setInfo({
          ...info,
          setHome: false,
          setProvider: false,
          setClient: true,
          setPacks: false,
          setOrder: false
        });
      }
      if (e.target.value === "packs") {
        setInfo({
          ...info,
          setHome: false,
          setProvider: false,
          setClient: false,
          setPacks: true,
          setOrder: false
        });
      }
      if (e.target.value === "order") {
        setInfo({
          ...info,
          setHome: false,
          setProvider: false,
          setClient: false,
          setPacks: false,
          setOrder: true
        });
      }
    };
    useEffect(() => {
      dispatch(getProviders());
      dispatch(getAllClients());
      dispatch(getPacks());
      dispatch(getOrder());
    }, [dispatch]);

    const totalPacks = useSelector((state) => state.getPacks);

    const totalProvider = useSelector((state) => state.getProviders);

    const totalClients= useSelector((state) => state.getAllClients);

    const totalOrder = useSelector((state) => state.getOrder);
  
    return (
      <Container>
        <InfoContainer>
          <Panel /*info={info}*/ handleInfo={handleInfo} />
        </InfoContainer>
        <MainContainer> {/*tiene que ir un panel*/}
          {info.setHome ? (
            <AdminHome totalProvider={totalProvider} totalClients={totalClients} totalPacks={totalPacks} totalOrder={totalOrder} />
          ) : info.setProvider ? (
            <ProductContent totalProvider={totalProvider} />
          ) : info.setClients ? (
            <SalesContent totalClients={totalClients} />
          ) : info.setUsers ? (
            <UserContent totalOrder={totalOrder} />
          ) : (
            "Oops Something Went Wrong..."
          )}
        </MainContainer>
      </Container>
    );
  };
  export default AdminPanel;
  