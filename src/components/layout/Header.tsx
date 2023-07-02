import styled from 'styled-components';

const Header = () => {
  return (
    <StHeaderWrap>
      {/* <div className="dropdown">
        <button className="dropbtn">
          View More
        </button>
        <div className="dropdown-content">
          <a href="#">profile</a>
          <a href="#">write a post</a>
          <a href="#">settings</a>
        </div>
      </div> */}
    </StHeaderWrap>
  );
};

export default Header;

const StHeaderWrap = styled.div`
    height : 10vh;
    display: flex;
    flex-direction :column;
    justify-content: center;
    align-items : center;
    background-color : pink;


.dropdown{
  //position : relative;
  //display : inline-block;
  
}

.dropbtn{
  border : 1px solid rgb(37, 37, 37);
  border-radius : 4px;
  background-color: #f5f5f5;
  font-weight: 400;
  color : rgb(37, 37, 37);
  padding : 12px;
  width :200px;
  text-align: left;
  cursor : pointer;
  font-size : 12px;
}
.dropdown-content{
  display : none;
  position : absolute;
  z-index : 1; /*다른 요소들보다 앞에 배치*/
  font-weight: 400;
  background-color: #f9f9f9;
  min-width : 200px;
}

.dropdown-content a{
  display : block;
  text-decoration : none;
  color : rgb(37, 37, 37);
  font-size: 12px;
  padding : 12px 20px;
}

.dropdown-content a:hover{
  background-color : #ececec
}

.dropdown:hover .dropdown-content {
  display: block;
}
`