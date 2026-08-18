function FormularioPorcoes({ porcoes, aoAlterarPorcoes }) {
  return (
    <div className="formulario">
      <label>
        Quantas porções você deseja preparar?
        <input
          type="number" value={porcoes} onChange={aoAlterarPorcoes} placeholder="Ex: 8"
        />
      </label>
    </div>
  );
}

export default FormularioPorcoes;
