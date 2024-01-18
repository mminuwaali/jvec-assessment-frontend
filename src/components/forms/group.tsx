import { BiRename } from "react-icons/bi";
import { JSXElementConstructor } from "react";

export default (props: InputType & { value: any, onChange?: Function }) => {
    const Icon: JSXElementConstructor<any> = props?.icon || BiRename;

    return <div className="flex flex-col basis-72 grow">
        <label htmlFor="" className="capitalize font-serif text-gray-500">{props.name.replace('_', ' ')}</label>
        <div className="relative items-center w-full flex border p-1 gap-1 pl-2 border-slate-400 rounded">
            <Icon className='text-blue-400 text-lg' />
            <input {...props} onChange={e => props.onChange?.(e.currentTarget.value)} className="p-1 px-2 w-full outline-none bg-transparent text-blue-500" autoComplete="off" />
        </div>
    </div>
};
