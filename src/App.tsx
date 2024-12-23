import borrar from './assets/borrar.png';
import { useState } from 'react';

export const App = () => {

    const [pantalla, setPantalla] = useState<string[]>(['0']);
    const [operacion, setOperacion] = useState<string | null>(null);
    const [terminoUno, setTerminoUno] = useState<number>(0);

   

    const onButtonPress = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.textContent);
        const input = e.currentTarget.textContent;

        switch(input) {
            case '.':
                if (!pantalla.includes('.')) {
                    setPantalla([...pantalla, input]);
                }
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if(pantalla[0] == '0') setPantalla([input]);
                else setPantalla([...pantalla, input]);
                break;
            case 'd':
                setPantalla(['0']);
                setOperacion(null);
                break;
            case '+':
                setTerminoUno(parseFloat(pantalla.join('')));
                setOperacion('+');
                setPantalla(['0']);
                break;
            case '-':
                setTerminoUno(parseFloat(pantalla.join('')));
                setOperacion('-');
                setPantalla(['0']);
                break;
            case 'x':
                setTerminoUno(parseFloat(pantalla.join('')));
                setOperacion('x');
                setPantalla(['0']);
                break;
            case '/':
                setTerminoUno(parseFloat(pantalla.join('')));
                setOperacion('/');
                setPantalla(['0']);
                break;
            case '=':
                const terminoDos = (parseFloat(pantalla.join('')));
                let resultado = 0
                if(operacion == '+') resultado = terminoUno + terminoDos;
                else if(operacion == '-') resultado = terminoUno - terminoDos;
                else if(operacion == 'x') resultado = terminoUno * terminoDos;
                else if(operacion == '/') resultado = terminoUno / terminoDos;
                
                const resultadoFormateado = Number.isInteger(resultado) ? resultado : parseFloat(resultado.toFixed(2));
                setPantalla([resultadoFormateado.toString()]);
                setOperacion(null);
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col place-items-center place-content-center">
            <div className="relative w-[500px] h-[550px] border-8 border-x-slate-400 border-y-slate-300 shadow-mix flex flex-col gap-24 place-items-center py-5">
                <div className="relative w-[450px] h-[100px] border-4 border-x-slate-300 flex place-items-center px-2 text-6xl overflow-x-auto overflow-y-hidden">
                    <p className="text-slate-700 font-tech">{pantalla}</p>
                    <p className="absolute right-4">{operacion}</p>
                </div>
                <div className="absolute right-[20px] top-[120px]">
                    <button onClick={onButtonPress} className="numberButton bg-slate-950 flex place-items-center place-content-center pl-4 text-transparent hover:bg-gray-800"><img src={borrar} alt="borrar" className="w-[40px] invert-[100%]" />d</button>
                </div>
                <div className="flex gap-5 font-bold">
                    <div className="gap-5 grid grid-cols-3 grid-rows-4 grid-areas-[siete_ocho_nueve,cuatro_cinco_seis,uno_dos_tres,cero_punto_igual]">
                        <button onClick={onButtonPress} className="area-[cero] numberButton">0</button>
                        <button onClick={onButtonPress} className="area-[uno] numberButton">1</button>
                        <button onClick={onButtonPress} className="area-[dos] numberButton">2</button>
                        <button onClick={onButtonPress} className="area-[tres] numberButton">3</button>
                        <button onClick={onButtonPress} className="area-[cuatro] numberButton">4</button>
                        <button onClick={onButtonPress} className="area-[cinco] numberButton">5</button>
                        <button onClick={onButtonPress} className="area-[seis] numberButton">6</button>
                        <button onClick={onButtonPress} className="area-[siete] numberButton">7</button>
                        <button onClick={onButtonPress} className="area-[ocho] numberButton">8</button>
                        <button onClick={onButtonPress} className="area-[nueve] numberButton">9</button>
                        <button onClick={onButtonPress} className="area-[punto] numberButton">.</button>
                        <button onClick={onButtonPress} className="area-[igual] numberButton">=</button>
                    </div>
                    <div className="gap-5 grid grid-cols-1 grid-rows-4 grid-areas-[mas,menos,por,dividido]">
                        <button onClick={onButtonPress} className="area-[mas] text-3xl operationButton">+</button>
                        <button onClick={onButtonPress} className="area-[menos] text-3xl operationButton">-</button>
                        <button onClick={onButtonPress} className="area-[por] text-3xl operationButton">x</button>
                        <button onClick={onButtonPress} className="area-[dividido] text-3xl operationButton">/</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
