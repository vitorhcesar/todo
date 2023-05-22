'use client'

import Todo from '@/components/todo';
import { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io'

class todo {
    feito: boolean;
    desc: string;

    constructor(feito: boolean, desc: string){
        this.feito = feito;
        this.desc = desc;
    }
}

export default function Home() {
    const [ todos, setTodos ] = useState([new todo(false, 'Exemplo de todo não feito'), new todo(true, 'Exemplo de todo feito')]);
    const [ input, setInput ] = useState('Nova tarefa');

    const addNewTodo = () => {
        if(input == ''){
            return;
        }

        let newTodo = new todo(false, input);

        setTodos([...todos, newTodo]);
        setInput('');
        console.log(todos);
	}

    function showMessage(){
        if(todos.length == 0){
            console.log('Ola');
            return (<p>Não existem todos, crie o seu <b>primeiro</b>!</p>)
        }
    }

    return (
        <div className="flex min-h-screen flex-col items-center gap-20 p-10">
            <header>
                <h1 className='text-2xl sm:text-4xl lg:text-8xl'>🐨 Lista de tarefas 🐼</h1>
            </header>
            <main className='flex flex-col items-center justify-center w-screen'>
                <div className='flex items-center gap-2'>
                    <input 
                        className='border-2 border-purple-600 outline-purple-800 p-2 rounded-lg
                        text-sm lg:text-2xl'
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        value={input} />
                    <button onClick={() => addNewTodo()}><IoMdAddCircle className='text-4xl lg:text-5xl text-purple-700 hover:text-purple-900 transition-all duration-500' /></button>
                </div>
                <div className='w-screen pt-5'>
                    <ul id='map' className='flex flex-col items-center justify-center gap-3'>
                        {todos.map((e, index: number) => {
                            return (<Todo key={index} index={index} desc={e.desc} feito={e.feito} todos={todos} setTodos={setTodos} />);
                        })}
                        {showMessage()}
                    </ul>
                </div>
            </main>
        </div>
    );
}
