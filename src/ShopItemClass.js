import { Component } from 'react';


export class ShopItemClass extends Component {
    data = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£'
    };
render() {
     return (
  <div className="main-content">
  <h2>{this.data.brand}</h2>
  <h1>{this.data.title}</h1>
  <h3>{this.data.description}</h3>
  <div className="description">
    {this.data.descriptionFull}
  </div>
  <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
  <div className="divider"></div> 
  <div className="purchase-info">
  <div className="price">{this.data.currency}{this.data.price}.00</div>
  <button>Добавить в корзину</button>
</div>
</div>
        );
    }
}