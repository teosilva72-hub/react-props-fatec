import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import Pedido from './pedido';
import Card from './card';

const App = () => {
  const date = new Date();

  return (
    <div className='container border rounded mt-2'>

      <div className='row'>

        <div className='display-5 text-center'>Seus Pedidos</div>

      </div>

      <div className='row'>

        <div className='col-sm-12 col-md-6 col-lg-3 m-2'>

          <Card header="12/01/2023">
            <Pedido
              icon="bi bi-hdd-fill sizeIcon"
              title="SSD"
              description="SSD Kingston"
            />
          </Card>

        </div>

        <div className='col-sm-12 col-md-6 col-lg-3 m-2'>

          <Card header="01/02/2023">
            <Pedido
              icon="bi bi-laptop sizeIcon"
              title="Notebook"
              description="Notebook Lenovo E-14"
            />
          </Card>

        </div>

        <div className='col-sm-12 col-md-6 col-lg-3 m-2'>

          <Card header="15/02/2023">
            <Pedido
              icon="bi bi-controller sizeIcon"
              title="Video Game"
              description="X-BOX One"
            />
          </Card>

        </div>

      </div>

    </div>
  )
}

ReactDOM.render(

  <App />,
  document.getElementById('root')
);