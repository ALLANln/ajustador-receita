function IngredientesAjustados({ farinha, acucar, ovos, leite }) {
  return (
    <div className="resultado">
      <h2>Ingredientes Ajustados</h2>
      <p>Farinha de trigo: <strong>{farinha.toFixed(1)} xícara(s)</strong></p>
      <p>Açúcar: <strong>{acucar.toFixed(1)} xícara(s)</strong></p>
      <p>Ovos: <strong>{ovos.toFixed(1)} unidade(s)</strong></p>
      <p>Leite: <strong>{leite.toFixed(1)} xícara(s)</strong></p>
    </div>
  );
}

export default IngredientesAjustados;
