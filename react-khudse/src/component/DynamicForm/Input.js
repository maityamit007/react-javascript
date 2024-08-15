export const TextField = ({ name, type = 'text', isRequired, placeholder, onChange, id, minVal, maxVal }) => {
    return (
        <div className="">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">{placeholder}{isRequired && <span className="text-red-500 pr-4"> *</span>}</label>
            <input
                placeholder={placeholder}
                key={id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name={name}
                type={type}
                max={maxVal}
                onChange={(e) => onChange(e, name)}
                label={placeholder}
                id={name}
            />
        </div>
    )
}

export const RadioField = ({ name, type = 'text', isRequired, placeholder, options, onChange, id }) => {
    return (
        <div className="" key={id}>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">{placeholder}{isRequired && <span className="text-red-500 pr-4"> *</span>}</label>
            <div className="flex flex-col gap-2">
            {options.map((ele, index) =>
                <div className="flex flex-row items-center gap-2">
                    <input
                        placeholder={placeholder}
                        onChange={(e) => onChange(e, name)}
                        name={name}
                        className="mr-3 cursor-pointer"
                        type={type}
                        label={placeholder}
                        value={ele.value}
                        />
                    <label key={index} className="flex flex-col text-lg text-center font-medium text-gray-900 dark:text-white">
                        {ele.displayValue}
                    </label>
                </div>
            )}
            </div>
        </div>
    )
}