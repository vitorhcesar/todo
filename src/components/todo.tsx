'use client'
import React, { Dispatch, SetStateAction } from 'react'
import { BsTrash3Fill } from 'react-icons/bs'

interface todo {
    index: number,
    desc: string,
    feito: boolean,
    todos: Array<todoItem>,
    setTodos: Dispatch<SetStateAction<Array<todoItem>>>
}

interface todoItem {
    desc: string,
    feito: boolean
}

export default function Todo( {index, desc, feito, todos, setTodos}:  todo) {
    function changeCheck(){
        let newTodos:Array<todoItem> = todos.filter((e) => {
            if(todos[index] == e){
                e.feito = !e.feito;
                feito = !feito;

                return e;
            } else {
                return e;
            }
        });

        console.log(newTodos);

        setTodos(newTodos);
    }

    function eraseTodo(){
        let newTodos:Array<todoItem> = todos.filter((e) => {
            if(todos[index] == e){
            } else {
                return e;
            }
        });

        console.log(newTodos);
        setTodos(newTodos);
    }

    if(feito){
        return (
            <li className='flex gap-3 w-3/4 md:w-1/2 items-center justify-between p-4 bg-purple-200 rounded-lg transition-all'>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" name={desc} checked={feito} onChange={changeCheck} />
                    <p className='text-sm lg:text-3xl text-slate-600 line-through'>{desc}</p>
                </div>
                <button onClick={() => eraseTodo()}><BsTrash3Fill className='text-md lg:text-3xl self-end text-slate-600 hover:text-slate-800 transition-all' /></button>
            </li>
        );
    } else {
        return (
            <li className='flex gap-3 w-3/4 md:w-1/2 items-center justify-between p-4 bg-purple-400 rounded-lg transition-all'>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" name={desc} checked={feito} onChange={changeCheck} />
                    <p className='text-sm lg:text-3xl text-slate-50'>{desc}</p>
                </div>
                <button onClick={() => eraseTodo()}><BsTrash3Fill className='text-md lg:text-3xl self-end text-slate-100 hover:text-slate-400 transition-all' /></button>
            </li>
        );
    }
    
}
