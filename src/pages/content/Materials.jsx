import { useNavigate, useSearchParams } from "react-router-dom";
import Modalka from "../modal/Modalka";
import styled from "styled-components";

const materials = [
  {
    title: "Material 1",
    id: 1,
  },
  {
    title: "Material 2",
    id: 2,
  },
];

const Materials = () => {
  // const [openModal, setOpenModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const openModalHandler = () => {
    searchParams.set("modal", "addNewMaterial");
    setSearchParams(searchParams);
    console.log(searchParams);
  };
  const deleteHandler = () => {
    searchParams.delete("modal");
    setSearchParams(searchParams);
  };
  return (
    <>
      {materials.map((item) => (
        <Container key={item.id}>
          {item.title}
          <button onClick={() => navigate(`${item.id}/detail`)}>Details</button>
        </Container>
      ))}
      <Content>
        <button onClick={openModalHandler}>Add New Material</button>
      </Content>
      {searchParams.has("modal") ? <Modalka onClose={deleteHandler} /> : null}
    </>
  );
};

export default Materials;

const Container = styled.div`
  position: relative;
  top: 74px;
  left: 340px;
  margin: 30px;
  display: flex;
  justify-content: space-around;
  gap: 120px;
  width: 530px;
  height: 60px;
  background-color: white;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 10px;
  & button {
    width: 130px;
    height: 35px;
    border-radius: 30px;
    border: none;
    background-color: rgb(25, 174, 159);
    margin-left: 50px;
  }
`;
const Content = styled.div`
  & button {
    width: 260px;
    height: 40px;
    background-color: rgb(231, 125, 59);
    border: none;
    position: relative;
    top: -170px;
    left: 100px;
    border-radius: 20px;
    font-size: 1.3rem;
    font-weight: 500;
    color: white;
  }
`;
