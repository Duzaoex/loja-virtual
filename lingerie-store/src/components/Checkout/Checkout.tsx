import React from 'react';

const Checkout: React.FC = () => {
  return (
    <div>
      <h2>Finalizar Compra</h2>
      <form>
        <label>
          Nome:
          <input type="text" />
        </label>
        <label>
          Endereço:
          <input type="text" />
        </label>
        <button type="submit">Finalizar</button>
      </form>
    </div>
  );
};

export default Checkout;
