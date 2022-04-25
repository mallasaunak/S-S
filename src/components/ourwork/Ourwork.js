import React,{useState} from 'react'
// import 'Ourwork.css'
import "../ourwork/Ourwork.css"
import Ourworkmenu from './Ourworkmenu'

function Ourwork() {
  const [items, setItems] = useState(Ourworkmenu);
 
  const filterItem =(categItem) => {
    const updateItem = Ourworkmenu.filter((curElem)=>{
      return curElem.category === categItem;
    }) ;
    setItems(updateItem);
  }
  return (
  <>
    <div class="container ">
    <div class="container workTitle ">

    <h1 class="heading heading_space darkcolor wow fadeIn">
    Our Work</h1>
    </div>
    <div className="menu-tab d-flex">
      <button className="btn btn-menu" onClick={() => setItems(Ourworkmenu)}>All Works</button>
      <button className="btn btn-menu" onClick={() => filterItem('web')}>Web</button>
      <button className="btn btn-menu"onClick={() => filterItem('design')}>Design</button>
      <button className="btn btn-menu" onClick={() => filterItem('brand')}>Brand</button>
      {/* <button className="btn btn-warning" onClick={() => filterItem('print')}>Print</button> */}
    </div>
  </div>
  <div className="menu-item container mt-5">
    <div className="row">
      <div className="col-11 mx-auto">
        <div className="row my-5">
        {
          items.map((elem) =>{
            const{img} = elem;

            return(
              <div className="item1 col-12 col-md col-md-6 col-lg-6 col-xl-3 ">
            <div className="row Item-inside">
            {/* for img */}
            <div className="container">

              <div className="col-12 col-md-12 col-lg-12 ">
              <img src={img} alt="menuPic" className="img-fluid"/>
              </div>
              
            </div>
            </div>
          </div>

            )
        })
        }
          
        </div>
      </div>
    </div>
</div>
  </>
  )
}

export default Ourwork