import "./App.css";
import CustomInput from "./CustomInput";
import CheckboxTerms from './CheckboxTerms';
import Button from './Button';

function App() {
  const cancelar = () => {
    console.log('Cancelar');
  };

  const aceptar = () => {
    console.log('Aceptar');
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nuevo Usuario</h1>
        <CustomInput label={"Usuario"} disabled={false} type={'text'}/>
        <CustomInput label={"Correo"} disabled={false} type={'text'}/>
        <CustomInput label={"Contraseña"} disabled={false} type={'password'}/>
        <CheckboxTerms />
        <div>
          <Button onClick={cancelar} text="Cancelar" buttonStyle={{ fontSize: '16px', backgroundColor: 'Gray', color: 'White'}} disabled={false}/>
          <Button onClick={aceptar} text="Aceptar" buttonStyle={{ fontSize: '16px', backgroundColor: 'Purple', color: 'White'}} disabled={false}/>
        </div>
      </header>
    </div>
  );
}

export default App;
